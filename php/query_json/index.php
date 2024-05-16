<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

                           //Usuario //Contraseña //Nombre de BD
$mysqli = new mysqli("localhost","user6","user6","user6"); //Conexion a la Base de datos
 
if ($mysqli -> connect_errno) { // Si no se puede conectar a la Bd
  echo "No se puede conectar a la Base de Datos
  : " . $mysqli -> connect_error;
  exit();
}

$sql = "SELECT * FROM Lauro"; // Query 
$result = $mysqli -> query($sql);

// Número array
$row = $result -> fetch_array(MYSQLI_NUM);
printf ("%s (%s)\n", $row[0], $row[1]);

// Campo array
$row = $result -> fetch_array(MYSQLI_ASSOC);
printf ("%s (%s)\n", $row["prueba"], $row["nombre"]);


$row = json_encode($result -> fetch_array(MYSQLI_ASSOC));

echo "<pre>";
var_dump($row);
echo "</pre>";	

$row = json_decode($row);

echo "<pre>";
var_dump($row);
echo "</pre>";

echo "El numero de prueba es $row->prueba ";
echo 'El nombre '. $row->nombre;
