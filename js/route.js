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
        }).when("/equipamiento", {
            templateUrl : "views/salud_equipamiento.html"
        }).when("/prevencion_enfermedades", {
            templateUrl : "views/prevencion_enfermedades.html"
        }).when("/alimentacion_hospitalaria", {
            templateUrl : "views/alimentacion_hospitalaria.html"
        }).when("/dif", {
            templateUrl : "views/dif.html"
        }).when("/instituto_juventud", {
            templateUrl : "views/instituto_juventud.html"
        }).when("/jornadas_salud", {
            templateUrl : "views/jornadas_salud.html"
        }).when("/ayudas_sociales", {
            templateUrl : "views/ayudas_sociales.html"
        }).when("/salud_mental", {
            templateUrl : "views/salud_mental.html"
        }).when("/asistencia_social", {
            templateUrl : "views/asistencia_social.html"
        }).when("/desarrollo_economico", {
            templateUrl : "views/desarrollo_economico_view.html"
        }).when("/de_sueldos", {
            templateUrl : "views/de_sueldos.html"
        }).when("/rescate_carretero", {
            templateUrl : "views/rescate_carretero.html"
        }).when("/transporte", {
            templateUrl : "views/transporte.html"
        }).when("/de_gastos_de_operacion", {
            templateUrl : "views/de_gastos_de_operacion.html"
        }).when("/agricultura", {
            templateUrl : "views/agricultura.html"
        }).when("/ganaderia", {
            templateUrl : "views/ganaderia.html"
        }).when("/pesca", {
            templateUrl : "views/pesca.html"
        }).when("/cea", {
            templateUrl : "views/cea.html"
        }).when("/deiaes", {
            templateUrl : "views/deiaes.html"
        }).when("/de_fideicomiso", {
            templateUrl : "views/de_fideicomiso.html"
        }).when("/de_apoyos", {
            templateUrl : "views/de_apoyos.html"
        }).when("/turismo", {
            templateUrl : "views/de_turismo.html"
        }).when("/de_obras_turisticas", {
            templateUrl : "views/de_obras_turisticas.html"
        }).when("/de_atraccion", {
            templateUrl : "views/de_atraccion.html"
        }).when("/de_pymes", {
            templateUrl : "views/de_pymes.html"
        }).when("/de_ciencia", {
            templateUrl : "views/de_ciencia.html"
        });
});