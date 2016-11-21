var app = angular.module("shoppingList", ['ngRoute', 'shoppingListControllers']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
    when("/view", {
      templateUrl: 'partials/shoppingList.html',
      controller: 'shoppingListController'
    })
    .otherwise({
      template: "<h1>Please navigate to correct path to view shopping list</h1>"
    });

    $locationProvider.html5Mode(false).hashPrefix('!');

  }]);
