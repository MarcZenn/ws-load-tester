(function() {
  "use strict";

  angular.module("websocketLoadTester").config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "app/views/pages/home.html",
        controller: "MainController",
        controllerAs: "main"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
})();
