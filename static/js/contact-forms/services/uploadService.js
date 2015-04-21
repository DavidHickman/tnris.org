'use strict';

angular.module('ContactFormApp')
  .service('UploadService', 
    ['$http', '$upload', 'ZIP_UPLOAD_POLICY_URL', 'IMAGE_UPLOAD_POLICY_URL', 'CONTACT_UPLOAD_BUCKET',
    function ($http, $upload, ZIP_UPLOAD_POLICY_URL, IMAGE_UPLOAD_POLICY_URL, CONTACT_UPLOAD_BUCKET) {
    
      function getPolicy(policyUrl) {
        return $http.get(policyUrl)
          .then(function (response) {
            return response.data;
          });
      }

      function uploadParams(file, form_id, s3policy) {
        var fileKey = form_id + '/' + Date.now() + '_' + file.name;
        return {
          url: 'https://' + CONTACT_UPLOAD_BUCKET + '.s3.amazonaws.com/',
          method: 'POST',
          fields: {
            key: fileKey,
            acl: 'private',
            AWSAccessKeyId: s3policy.key,
            Policy: s3policy.policy,
            Signature: s3policy.signature,
            'Content-Type': file.type,
            'Content-Length': file.size,
            'success_action_status': '201',
            'success_action_redirect': ''
          },
          file: file  
        };
      }

      var service = {};

      service.uploadZip = function uploadZip(file, form_id) {
        return getPolicy(ZIP_UPLOAD_POLICY_URL)
          .then(function (s3policy) {
            return $upload.upload(uploadParams(file, form_id, s3policy));
          });
      };

      service.uploadImage = function uploadImage(file, form_id) {
        return getPolicy(IMAGE_UPLOAD_POLICY_URL)
          .then(function (s3policy) {
            return $upload.upload(uploadParams(file, form_id, s3policy));
          });
      };

      return service;
    }]
  );
