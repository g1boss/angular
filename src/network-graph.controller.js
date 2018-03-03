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
          },
          tooltip: {
            contentGenerator: function (e) {
              var series = e.series[0];
              if (series.value === null) return;

              var rows =
                "<tr>" +
                  "<td class='key'>" + 'Name: ' + "</td>" +
                  "<td class='x-value'>" + e.name + "</td>" +
                "</tr>" +
                "<tr>" +
                  "<td class='key'>" + 'Group: ' + "</td>" +
                  "<td class='x-value'>" + e.group + "</td>" +
                "</tr>" +
                "<tr>" +
                  "<td class='key'>" + 'Weight: ' + "</td>" +
                  "<td class='x-value'><strong>" + e.weight + "</strong></td>" +
                "</tr>";

              var header =
                "<thead>" +
                  "<tr>" +
                    "<td class='legend-color-guide'><div style='background-color: " + series.color + ";'></div></td>" +
                    "<td class='key'><strong>" + series.key + "</strong></td>" +
                  "</tr>" +
                "</thead>";

              return "<table>" +
                  header +
                  "<tbody>" +
                    rows +
                  "</tbody>" +
                "</table>";
              }
            }
          }
      };
  };

})();
