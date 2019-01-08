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
        }).when("/sueldos_educacion", {
            templateUrl : "views/sueldos_educacion.html"
        }).when("/gastos_operacion_educacion", {
            templateUrl : "views/gastos_operacion_educacion.html"
        }).when("/rehabilitacion_escuelas", {
            templateUrl : "views/rehabilitacion_escuelas.html"
        }).when("/uniformes", {
            templateUrl : "views/uniformes.html"
        }).when("/programas_federales", {
            templateUrl : "views/programas_federales.html"
        }).when("/construccion_aulas", {
            templateUrl : "views/construccion_aulas.html"
        }).when("/mobiliario", {
            templateUrl : "views/mobiliario.html"
        }).when("/becas", {
            templateUrl : "views/becas.html"
        }).when("/utiles_escolares", {
            templateUrl : "views/utiles_escolares.html"
        }).when("/proyectos_educacion", {
            templateUrl : "views/proyectos_educacion.html"
        }).when("/salud", {
            templateUrl : "views/salud_view.html"
        }).when("/sueldos_salud", {
            templateUrl : "views/sueldos_salud.html"
        }).when("/gastos_operacion_salud", {
            templateUrl : "views/gastos_operacion_salud.html"
        }).when("/medicinas_salud", {
            templateUrl : "views/medicinas_salud.html"
        }).when("/rehabilitacion_salud", {
            templateUrl : "views/rehabilitacion_salud.html"
        }).when("/isssteson", {
            templateUrl : "views/isssteson.html"
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
        }).when("/seguridad", {
            templateUrl : "views/seguridad_view.html"
        }).when("/policia_estatal", {
            templateUrl : "views/policia_estatal.html"
        }).when("/fiscalia_estado", {
            templateUrl : "views/fiscalia_estado.html"
        }).when("/ceresos", {
            templateUrl : "views/ceresos.html"
        }).when("/centro_emergencias", {
            templateUrl : "views/centro_emergencias.html"
        }).when("/prevencion_delito", {
            templateUrl : "views/prevencion_delito.html"
        }).when("/seg_gastos_operacion", {
            templateUrl : "views/seg_gastos_operacion.html"
        }).when("/justicia_penal", {
            templateUrl : "views/justicia_penal.html"
        }).when("/instituto_policia", {
            templateUrl : "views/instituto_policia.html"
        }).when("/estadistica", {
            templateUrl : "views/estadistica.html"
        }).when("/centrocontrol", {
            templateUrl : "views/centrocontrol.html"
        }).when("/desarrollo_social", {
            templateUrl : "views/desarrollo_social_view.html"
        }).when("/desoc_comision", {
            templateUrl : "views/desoc_comision.html"
        }).when("/desoc_vivienda", {
            templateUrl : "views/desoc_vivienda.html"
        }).when("/desoc_infraestructura", {
            templateUrl : "views/desoc_infraestructura.html"
        }).when("/desoc_gastos", {
            templateUrl : "views/desoc_gastos.html"
        }).when("/desoc_recarpeteo", {
            templateUrl : "views/desoc_recarpeteo.html"
        }).when("/desoc_sueldos", {
            templateUrl : "views/desoc_sueldos.html"
        }).when("/desoc_ecologia", {
            templateUrl : "views/desoc_ecologia.html"
        }).when("/administracion_view", {
            templateUrl : "views/administracion_view.html"
        }).when("/ag-secretariagobierno", {
            templateUrl : "views/ag-secretariagobierno.html"
        }).when("/ag-consejeria", {
            templateUrl : "views/ag-consejeria.html"
        }).when("/ag-gastos", {
            templateUrl : "views/ag-gastos.html"
        }).when("/ag-ejecutivo", {
            templateUrl : "views/ag-ejecutivo.html"
        });
});