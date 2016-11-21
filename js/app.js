var app = angular.module("shoppingList", ['ngRoute', 'shoppingListControllers']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
    when("/", {
      templateUrl: 'partials/shoppingList.html',
      controller: 'shoppingListController'
    });

    $locationProvider.html5Mode(false).hashPrefix('!');

  }]);
