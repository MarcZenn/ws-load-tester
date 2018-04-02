(function() {
  "use strict";

  angular.module("websocketLoadTester").config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }
})();
