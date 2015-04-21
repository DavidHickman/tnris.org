'use strict';
/* global angular:false */

//PRODUCTION front-end app config

angular.module('ConfigApp', [])
  .constant('CONTACT_SUBMIT_URL', 'https://tnris.org/contact-submit/')
  .constant('CONTACT_UPLOAD_BUCKET', 'contact-uploads')
  .constant('ZIP_UPLOAD_POLICY_URL', 'https://tnris.org/policy/zip-upload')
  .constant('IMAGE_UPLOAD_POLICY_URL', 'https://tnris.org/policy/image-upload')
  ;
