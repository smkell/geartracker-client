'use strict';

/**
 * @ngdoc function
 * @name geartrackerClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geartrackerClientApp
 */
angular.module('geartrackerClientApp')
  .controller('MainCtrl', function ($scope) {

    $scope.gearSites = [
    	{name: 'Steep & Cheap', description: 'Steep & Cheap offers steals on camping, hiking, skiing, cycling gear and more.', url: 'http://www.steepandcheap.com/'},
    	{name: 'Backcountry', description: 'Offers climbing, backpacking, and backcountry wintersports gear.', url: 'http://www.backcountry.com/'}
    ];
  });
