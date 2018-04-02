(function() {
  "use strict";

  angular.module("websocketLoadTester").factory("githubContributor", githubContributor);

  /** @ngInject */
  function githubContributor($log, $http) {
    // TODO:: rename, repurpose & prune - consider this for websocket service

    var apiHost = "https://api.github.com/repos/Swiip/generator-gulp-angular";

    var service = {
      apiHost: apiHost,
      getContributors: getContributors
    };

    return service;

    function getContributors(limit) {
      if (!limit) {
        limit = 30;
      }

      return $http
        .get(apiHost + "/contributors?per_page=" + limit)
        .then(getContributorsComplete)
        .catch(getContributorsFailed);

      function getContributorsComplete(response) {
        return response.data;
      }

      function getContributorsFailed(error) {
        $log.error("XHR Failed for getContributors.\n" + angular.toJson(error.data, true));
      }
    }
  }
})();
