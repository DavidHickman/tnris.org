'use strict';
/* global FileAPI:false */

angular.module('ContactFormApp', ['ConfigApp', 'ngAnimate', 'vcRecaptcha', 'angularFileUpload'])
  .controller('FormController',
    ['$scope', '$http', '$log', '$window', 'UploadService', 'CONTACT_SUBMIT_URL',
    function($scope, $http, $log, $window, UploadService, CONTACT_SUBMIT_URL) {
  
      $scope.master = {};
      $scope.errors = {};
      $scope.status = 'not submitted';
      $scope.widgetId = null;
      $scope.recaptchaModel = {
        key: '6Lf8GP8SAAAAAFx2H53RtfDO18x7S1q_0pGNdmbd'
      };

      $scope.recaptchaSetResponse = function (response) {
        $log.info('Response available');

        $scope.recaptcharesponse = response;
      };

      $scope.recaptchaSetWidgetId = function (widgetId) {
        $log.info('Created widget ID: %s', widgetId);
        $scope.recaptchawidgetId = widgetId;
      };

      $scope.isUploadUnsupported = !$window.FormData && $window.FileAPI && !FileAPI.hasFlash;

      function resetUpload() {
        $scope.uploadError = false;
        $scope.uploadErrorMessage = null;
        $scope.uploadSuccess = false;
        $scope.isUploading = false;
        $scope.uploadProgress = 0;
        $scope.progressBarType = "info";
      }

      function setUploadError(errMessage) {
        $scope.uploadError = true;
        $scope.uploadErrorMessage = errMessage;
        $scope.files = null;
      }

      $scope.uploadZipFile = function ($files, $event) {
        resetUpload();
        
        if (!$files || !$files.length) {
          return;
        }

        var file = $files[0];
        var formFieldName = angular.element($event.target).attr('name');

        if (file.type !== "application/zip") {
          setUploadError("Only zipped Shapefiles are accepted. Please check your file type.");
          return;
        }

        if (file.size > 20971520) {
          setUploadError("Please ensure the selected file's size is less than 20 MB.");
          return;
        }

        $scope.isUploading = true;

        UploadService.uploadZip(file, $scope.form_model.form_id)
          .then(function onSuccess(response) {
            var data = response.data;
            var fileUrl = angular.element(data).find('location').text();
            $scope.uploadSuccess = true;
            $scope.progressBarType = "success";
            $scope.form_model[formFieldName] = fileUrl;
          }, function onError(err) {
            setUploadError("There was an error uploading. Please check your file and try again.");
            $log.error(err);
          }, function onProgress(evt) {
            $scope.uploadProgress = Math.round(100.0 * evt.loaded / evt.total);
          })
          ['finally'](function onFinally() {
            $scope.isUploading = false;
          });      
      };

      $scope.submit = function(form) {
        //Don't submit while uploading
        if ($scope.isUploading) {
          return;
        }

        $scope.master = angular.copy(form) || {};

        _($scope.form)
          .filter(function(value, key) {return key[0] !== '$';})
          .each(function(item) {
            $scope.errors[item.$name] = item.$invalid;
          });

        $scope.master.recaptcha = $scope.recaptcha;
        $scope.errors.recaptcha = !$scope.recaptcha;

        if (_.any($scope.errors)) {
          $scope.status = 'invalid';
        } else {
          $scope.status = 'submitting';

          $http.post(CONTACT_SUBMIT_URL, $scope.master)
            .error(function(data) {
              $scope.status = 'error';
              if (data && data.message) {
                $scope.serverError = data.message;
              } else {
                $scope.serverError = 'There was a server error. Please wait a moment and try again.';
              }
            })
            .success(function() {
              $scope.status = 'success';
            });
        }
      };

      $scope.updateItem = function (item) {
        $scope.errors[item.$name] = item.$invalid;
      };

      $scope.$watch('form.$invalid', function (value) {
        if (!value && $scope.status === 'invalid') {
          $scope.status = 'not submitted';
        }
      });

      $scope.recaptchaSuccess = function (response) {
        $scope.recaptcha = response;
      };

      $scope.$watch('recaptcha', function (value) {
        if (value && $scope.status === 'invalid') {
          $scope.status = 'not submitted';
          $scope.errors.recaptcha = !$scope.recaptcha;
        }
      });
    }
  ]);
