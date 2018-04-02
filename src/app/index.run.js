(function() {
  "use strict";

  angular.module("websocketLoadTester").run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug("runBlock end");
  }
})();
