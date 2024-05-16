<?php
/********** Mostrar errores ***********/
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

if(!filter_var($_POST['Correo'], FILTER_VALIDATE_EMAIL)) {
	echo '{"status": 400}';
	exit();
}

if(!isset($_POST['Correo']) or !isset($_POST['Pass'])){
	echo '{"status":500,"description":"Error de paramteros"}';
	exit();
}

/********** Archivo de conexión *******/
include 'conex.php';
$mysqli=conexion();

/********** Respuesta *****************/
$sql 	= "SELECT * FROM 
						Usuarios
					WHERE 
						nombre	='".$_POST["Correo"] ."' 
					AND 
						contra	='".$_POST["Pass"]."'";
$result = $mysqli -> query($sql);
if($result->num_rows>0){
	$row 			= $result -> fetch_array(MYSQLI_ASSOC);
	$row["status"]	= 200; 
	echo json_encode($row);
}else{
	echo '{"status":500,"description":"Error de consulta"}';
}
	
/********** Liberar conexión **********/
$result -> free_result();
$mysqli -> close();
?>