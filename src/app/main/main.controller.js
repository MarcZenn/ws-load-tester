(function() {
  "use strict";

  angular.module("websocketLoadTester").controller("MainController", MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    // TODO:: rename & repurpose use as main UI functionality

    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = "";
    vm.creationDate = 1452034822356;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = "rubberBand";
      }, 4000);
    }

    function showToastr() {
      toastr.info(
        'Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'
      );
      vm.classAnimation = "";
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
