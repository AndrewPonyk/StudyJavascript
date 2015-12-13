/**
 * Created by andrew on 25.11.15.
 */
angular.module("movieMediaApp").config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: "MainCtrl"
        }).when("/about", {
            templateUrl: "views/about.html",
            controller: "AboutCtrl"
        }).
        when("/movieById/:id", {
            templateUrl: "views/movieById.html",
            controller: "MovieById"
        }).otherwise({
            redirectTo : "/"
        });
});