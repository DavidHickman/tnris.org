'use strict';

//DEVELOPMENT front-end app config

angular.module('ConfigApp', [])
  .constant('CONTACT_SUBMIT_URL', 'http://localhost:8001/')
  .constant('ORDER_DATA_UPLOAD_POLICY_URL', 'http://localhost:8001/policy/order-data')
  ;
