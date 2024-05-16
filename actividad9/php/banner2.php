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
include 'conexion.php';
$mysqli=conexion();

/********** Respuesta *****************/
$sql 	= "SELECT * FROM 
						cards
							WHERE 
								estatus = 1";
$result = $mysqli -> query($sql);
if($result->num_rows>0){
	$row = $result -> fetch_all(MYSQLI_ASSOC);
	
	$json["html"]='';
	foreach($row as $key => $value) {
		
		$json["html"].='<img class="card-img-top" src="'.$value['url'].'" alt="Card image cap">';
		
		$json["html"].='<div class="card-body">'; 
		$json["html"].='<h5 class="card-title">"'.$value['title'].'"</h5>';
		$json["html"].='<p class="card-text">"'.$value['description'].'"</p>';
		$json["html"].=' <a href="#" class="btn btn-primary">Mas Informacion</a>';
		$json["html"].='</div>';

		//$json["html"].='<img src="'.$value['url'].'" class="d-block w-100" alt="'.$value['titlle'].'">';
		
		
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