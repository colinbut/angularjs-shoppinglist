var shoppingListControllers = angular.module('shoppingListControllers',[]);

shoppingListControllers.controller("shoppingListController", function($scope) {

  // just initialise the list of products with some data on page load
  $scope.products = ["Milk", "Bread", "Cheese"];

  $scope.addItem = function() {
    $scope.errorText = "";

    if (!$scope.newProductItem) {
      return;
    }

    // prevent duplicate items added:
    // if the new product item to be added is not already on the list
    if ($scope.products.indexOf($scope.newProductItem) == -1) {
      $scope.products.push($scope.newProductItem);
    } else {
      $scope.errorText = "The item is already in your shopping list.";
    }


  }

  $scope.removeItem = function(x) {
    $scope.errorText = "";
    $scope.products.splice(x,1);
  }

});
