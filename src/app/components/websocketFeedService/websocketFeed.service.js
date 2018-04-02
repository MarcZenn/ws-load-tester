(function() {
  "use strict";

  angular.module("websocketLoadTester").factory("feedService", feedService);

  /** @ngInject */
  function feedService($log, $http) {
    var apiHost = "https://api.github.com/repos/Swiip/generator-gulp-angular";

    var service = {
      apiHost: apiHost,
      doSomething: doSomething
    };

    return service;

    function doSomething(limit) {
      // code
    }
  }
})();
