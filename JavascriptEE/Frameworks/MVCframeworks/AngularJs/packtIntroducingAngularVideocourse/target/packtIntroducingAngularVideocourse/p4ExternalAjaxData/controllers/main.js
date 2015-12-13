/**
 * Created by andrew on 25.11.15.
 */
angular.module("movieMediaApp").controller("MainCtrl", function ($scope, $location, $http) {
    $scope.title = "Thanks for attending";
    $http.get("/movies.json").success(function(data){
        $scope.movies = data;
    });


    $scope.movie = {
        title : "",
        image : "",
        category : "",
        description : ""
    }

    $scope.validateTitle = function(){
        if(this.movie.title.length > 0 ){

        }else{
            alert("Title is mandatory");
        }
    }

    $scope.checkCategorySelected = function(){
        if(this.movie.category === ""){
            alert("Category cant be empty")
        }
    }

    $scope.checkDescription = function(){

    }

    $scope.addMovie = function(){
        this.movies.push(angular.copy(this.movie));
    }

    $scope.closed = false;
});