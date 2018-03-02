(function () {
  'use strict';

  // this file declares the main module
  angular.module('GraphApp')
  .controller('NetworkGraphController',NetworkGraphController);

  NetworkGraphController.$inject = ['$scope','graphData'];
  function NetworkGraphController($scope, graphData) {

    var color = d3.scale.category20();

    $scope.data = graphData;
    $scope.options = {
      chart: {
          type: 'forceDirectedGraph',
          height: 600,
           width: (function(){ return nv.utils.windowSize().width - 450 })(),
          margin:{top: 20, right: 20, bottom: 20, left: 20},
          color: function(d){
              return color(d.group)
          },
          nodeExtras: function(node) {
              node && node
                .append("text")
                .attr("dx", 8)
                .attr("dy", ".35em")
                .text(function(d) { return d.name })
                .style('font-size', '10px');
          }
      }
    };
  };

})();
