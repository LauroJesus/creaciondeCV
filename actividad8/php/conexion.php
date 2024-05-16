<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

	function conexion(){
	

                                 //Usuario //Contraseña //Nombre de BD
        $mysqli = new mysqli("localhost","user6","user6","user6"); //Conexion a la Base de datos
        
        if ($mysqli -> connect_errno) { // Si no se puede conectar a la Bd
        echo "No se puede conectar a la Base de Datos
        : " . $mysqli -> connect_error;
        exit();
        }
        return $mysqli;
	}
