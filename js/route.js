var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/front.html"
        })
        .when("/home", {
            templateUrl : "views/home.html"
        }).when("/educacion", {
            templateUrl : "views/educacion_view.html"
        }).when("/salud", {
            templateUrl : "views/salud_view.html"
        }).when("/sueldos_salud", {
            templateUrl : "views/sueldos_salud.html"
        }).when("/gastos_operacion_salud", {
            templateUrl : "views/gastos_operacion_salud.html"
        }).when("/medicinas_salud", {
            templateUrl : "views/medicinas_salud.html"
        });
});