/**
 * Created by andrew on 25.11.15.
 */
angular.module("movieMediaApp").controller("MovieById", function($scope, $routeParams){
    $scope.id = $routeParams.id;
});