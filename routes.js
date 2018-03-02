(function () {
'use strict';

angular.module('GraphApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/welcome-menu.html'
  })

  .state('graph', {
  url: '/graph',
    templateUrl: 'src/templates/graph.template.html',
    controller: 'NetworkGraphController as graphCtrl',
    resolve: {
      graphData: ['GraphDataService', function (GraphDataService) {
        return GraphDataService.getData();
      }]
    }
  })
  .state('query', {
  url: '/query',
  templateUrl: 'src/templates/queryform.html',
  controller: 'QueryController',
  controllerAs: 'queryCtlr'
  })

};

})();
