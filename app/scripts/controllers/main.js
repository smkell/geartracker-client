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

    $scope.popularItems = [
    	{
    		name: 'Backpack 1', 
    		description: 'asdf',
    		type: 'backpack',
    		categories: ['backpacking', 'camping', 'hiking']
    	},
    	{
    		name: 'Backpack 2', 
    		description: 'asdf',
    		type: 'backpack',
    		categories: ['backpacking', 'camping', 'hiking']
    	},
    	{
    		name: 'Backpack 3', 
    		description: 'asdf',
    		type: 'backpack',
    		categories: ['camping', 'cycling', 'hiking']
    	},
    	{
    		name: 'Boot 1', 
    		description: 'asdf',
    		type: 'shoe',
    		categories: ['hiking']
    	},
    	{
    		name: 'Boot 2', 
    		description: 'asdf',
    		type: 'shoe',
    		categories: ['hiking']
    	},
    	{
    		name: 'Boot 3', 
    		description: 'asdf',
    		type: 'shoe',
    		categories: ['skiing']
    	},
    	{
    		name: 'Camera 1', 
    		description: 'asdf',
    		type: 'camera',
    		categories: ['active', 'digital', 'outdoor']
    	},
    	{
    		name: 'Tent 1', 
    		description: 'asdf',
    		type: 'tent',
    		categories: ['camping', 'family']
    	},
    	{
    		name: 'Tent 2', 
    		description: 'asdf',
    		type: 'tent',
    		categories: ['backpacking', 'camping']
    	},
    	{
    		name: 'Tent 3', 
    		description: 'asdf',
    		type: 'tent',
    		categories: ['backpacking', 'camping', 'ultralight']
    	},
    ];
  });
