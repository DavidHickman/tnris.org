'use strict';

//DEVELOPMENT front-end app config

angular.module('ConfigApp', [])
  .constant('CONTACT_SUBMIT_URL', 'http://localhost:8001/')
  .constant('CONTACT_UPLOAD_BUCKET', 'contact-uploads')
  .constant('ZIP_UPLOAD_POLICY_URL', 'http://localhost:8001/policy/zip-upload')
  ;
