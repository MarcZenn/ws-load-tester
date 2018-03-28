(function() {
  'use strict';

  angular
    .module('openWifi', ['ngCookies', 'ngSanitize', 'ngMessages', 'ngResource', 'ngRoute', 'toastr']);
    // ngAnimate should be included also but it causes errors if left in. Not sure why.

})();
