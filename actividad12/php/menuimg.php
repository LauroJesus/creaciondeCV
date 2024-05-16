<?php
/********** Mostrar errores ***********/
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

if(!isset($_GET)){
	echo '{"status":500,"description":"Error de paramteros"}';
	exit();
}

/********** Archivo de conexión *******/
include 'conex.php';
$mysqli=conexion();

/********** Respuesta *****************/
$sql 	= "SELECT * FROM 
						menu
							WHERE 
								publicado=1";
$result = $mysqli -> query($sql);
if($result->num_rows>0){
	$row 			= $result -> fetch_all(MYSQLI_ASSOC);
	$a=0;
	$json["html"]='';
	foreach($row as $key => $value) {
		
		$json["html"].='<li>';
		$json["html"].='<a href="#" class="nav-link text-secondary">';
		$json["html"].='<a>&nbsp;&nbsp;</a>'.$value['icono'].'<br>';
		$json["html"].= $value['nombre'].'<a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>';
		$json["html"].='</a>';
		$json["html"].='</li>';
		
		
	}	 
	$json["status"]	= 200; 
	echo json_encode($json);
}else{
	echo '{"status":500}';
}
	
/********** Liberar conexión **********/
$result -> free_result();
$mysqli -> close();
?>