(function() {
  "use strict";

  angular.module("websocketLoadTester").directive("globalNavbar", globalNavbar);

  /** @ngInject */
  function globalNavbar() {
    var directive = {
      restrict: "E",
      templateUrl: "app/views/partials/globalNavbar/navbar.html",
      scope: {
        creationDate: "="
      },
      controller: NavbarController,
      controllerAs: "vm",
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;

      // code
    }
  }
})();
