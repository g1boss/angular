(function () {
  'use strict';

  angular.module('GraphApp')
  .controller('GraphAppController',GraphAppController);

  GraphAppController.$inject = ['$rootScope'];
  function GraphAppController($rootScope) {
    $rootScope.bannerMessage = "DEFAULT VALUE";
  };

})();
