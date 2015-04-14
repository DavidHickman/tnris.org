'use strict';
/* global angular:false */

//PRODUCTION front-end app config

angular.module('ConfigApp', [])
  .constant('CONTACT_SUBMIT_URL', 'https://tnris.org/contact-submit/')
  .constant('ORDER_DATA_UPLOAD_POLICY_URL', 'http://tnris.org/policy/order-data')
  ;
