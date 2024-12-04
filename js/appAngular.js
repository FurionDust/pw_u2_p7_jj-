// Definir el módulo de AngularJS
var app = angular.module('myApp', []);

// Crear un controlador
app.controller('myController', function($scope) {
    // Definir una variable en el scope
    $scope.message = "Hola Mundo Angular";
});