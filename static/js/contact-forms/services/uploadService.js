'use strict';

angular.module('ContactFormApp')
  .service('UploadService', 
    ['$http', '$upload', 'ZIP_UPLOAD_POLICY_URL', 'CONTACT_UPLOAD_BUCKET',
    function ($http, $upload, ZIP_UPLOAD_POLICY_URL, CONTACT_UPLOAD_BUCKET) {
    
      var service = {};

      service.uploadZip = function uploadZip(file, form_id) {
        return $http.get(ZIP_UPLOAD_POLICY_URL)
          .then(function (response) {
            return response.data;
          })
          .then(function (s3policy) {
            var fileName = form_id + '/' + Date.now() + '_' + file.name;
            return $upload.upload({
              url: 'https://' + CONTACT_UPLOAD_BUCKET + '.s3.amazonaws.com/',
              method: 'POST',
              fields: {
                key: fileName,
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
            });
          });
      };

      return service;
    }]
  );
