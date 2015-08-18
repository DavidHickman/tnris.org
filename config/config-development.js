'use strict';

//DEVELOPMENT front-end app config

angular.module('ConfigApp', [])
  .constant('CONTACT_SUBMIT_URL', 'http://localhost:8001/')
  .constant('CONTACT_UPLOAD_BUCKET', 'contact-uploads')
  .constant('ZIP_UPLOAD_POLICY_URL', 'http://localhost:8001/policy/zip-upload')
  .constant('IMAGE_UPLOAD_POLICY_URL', 'http://localhost:8001/policy/image-upload')
  .constant('CARTODB_CONFIG', {
    account: 'tnris',
    'data-download': {
      viz_id: 'eef97f1a-063b-11e5-a187-0e9d821ea90d'
    },
    county: {
      table: 'county_extended',
      nameField: 'name'
    },
    quad: {
      table: 'usgs_doq_names_wgs84',
      nameField: 'quadname'
    }
  })
  .constant('BING_API_KEY', 'Ar54FaSONDkvSeqhwoBnBW61JYlThqD8XVtwlaRAcUZDfKQzDjo2kjkMLKT3LCVi')
  .constant('MAP_IMAGE_URL_PRE', '//s3.amazonaws.com/tnris-datadownload/')
  .constant('DOWNLOAD_URL_PRE', '//tg-twdb-gemss.s3.amazonaws.com')
  //.constant('DOWNLOAD_API_PRE', '//tnris.org/data-download/api/v2')
  .constant('DOWNLOAD_API_PRE', 'http://localhost:6414/v2')
  .constant('HISTORICAL_AERIALS_URL', '//tnris.org/historical-aerials/api/v1')
  ;
