var shoppingListControllers = angular.module('shoppingListControllers',[]);

shoppingListControllers.controller("shoppingListController", function($scope) {
  $scope.products = ["Milk", "Bread", "Cheese"];
});
