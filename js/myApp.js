var app = angular.module('myApp', []);


app.controller('mezzanineController', function($scope, $http, $rootScope, $location){

	 $scope.inicializar = function () {
	 	
	}


$scope.enviar_correo = function () {

   $('#btnEnviar').prop('disabled', true);
	var nombre = $scope.nombre;
	var mail = $scope.correo;
	var asunto = $scope.asunto;
	var mensaje = $scope.mensaje;
	console.log("hey");

			                   		$.ajax({

											url:"php/enviar_correo.php",
											success:function(result) //devuelve el resultado desde php
											{
												console.log(result);
												if(result == "enviado")
												{
												 swal("Success!", "Su correo fue enviado correctamente!", "success");
			                   					
			                   					 $('#btnEnviar').prop('disabled', false);
												
			                   				}else
			                   				{
			                   					swal("Error!", "Su correo no fue enviado intente nuevamente!", "error");
												
			                   					$('#btnEnviar').prop('disabled', false);
			                   				}
												
											},
											data:{ 
												nombre:nombre,
												mail:mail,
												asunto:asunto,
												mensaje:mensaje
											},
											type:"GET"
										});
    }           
});



   



