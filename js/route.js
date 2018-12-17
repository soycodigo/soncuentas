var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/home.html"
        }).when("/educacion", {
            templateUrl : "views/educacion_view.html"
        });
});