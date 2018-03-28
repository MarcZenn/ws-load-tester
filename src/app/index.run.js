(function() {
  'use strict';

  angular
    .module('openWifi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
