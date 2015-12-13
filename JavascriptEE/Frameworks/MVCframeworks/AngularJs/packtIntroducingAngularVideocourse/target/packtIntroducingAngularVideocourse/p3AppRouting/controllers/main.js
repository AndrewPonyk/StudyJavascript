/**
 * Created by andrew on 25.11.15.
 */
angular.module("movieMediaApp").controller("MainCtrl", function ($scope) {
    $scope.title = "Thanks for attending";
    var movieList = [
        {
            title: "Ace Drummond",
            image: "../cdn/t75302rveqr.jpg",
            description: "Ace drummond 1936"
        },
        {
            title: "Ace Drummond 2",
            image: "../cdn/t75302rveqr.jpg",
            description: "Ace drummond 1936 2"
        },
        {
            title: "Ace Drummond 3",
            image: "../cdn/t75302rveqr.jpg",
            description: "Ace drummond 1936 3"
        }
    ];
    $scope.movies = movieList;

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