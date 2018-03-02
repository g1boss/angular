(function() {
  "use strict";

  angular.module('GraphApp')
  .controller('QueryController', QueryController);

  QueryController.$inject = ['$rootScope','$state','$scope'];
  function QueryController($rootScope,$state,$scope) {
    var $ctrl = this;

    $ctrl.doQuery = function () {
      $rootScope.bannerMessage = $ctrl.query.bannerMesg;
      $state.go("graph", {"queryParams":$ctrl.query});
    };
  }

})();
