(function() {
  "use strict";

  angular.module('GraphApp')
  .controller('QueryController', QueryController);

  QueryController.$inject = ['$rootScope','$state'];
  function QueryController($rootScope,$state) {
    var $ctrl = this;

    $ctrl.doQuery = function () {
      $rootScope.bannerMessage = $ctrl.query.bannerMesg;
      $state.go("graph");
    };
  }

})();
