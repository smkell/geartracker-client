'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('geartrackerClientApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of gearSites to the scope', function() {
    expect(scope.gearSites.length).toBe(2);
  });

  it('should attach a list of popular items to the scope', function() {
    expect(scope.popularItems.length).toBe(10);
  });
});
