(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.name = "Yaakov";
  $scope.checkTooMuch = function () {
    if(!$scope.mealString){
      $scope.result = "Please enter some data";
    }else{
      var mealsCount = getMealsCount($scope.mealString);
      console.log(mealsCount);
      if(mealsCount > 3){
        $scope.result ="Too much";
      }else if(mealsCount >0){
        $scope.result ="Enjoy!";
      }else{
        $scope.result ="Eat something";
      }
    }
  };
  function getMealsCount(mealString){
    var meals = mealString.split(',');
    return meals.length;
  }


});

})();
