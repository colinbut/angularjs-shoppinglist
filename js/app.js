var app = angular.module("shoppingList", ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
    when("/", {
      templateUrl: 'shoppingList.html',
      controller: 'shoppingListController' 
    });

    $locationProvider.html5Mode(false).hashPrefix('!');

  }]);

app.controller("shoppingListController", function($scope) {
  $scope.products = ["Milk", "Bread", "Cheese"];
});
