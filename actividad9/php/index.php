<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');

if(!isset($_GET)){
	echo '{"status":500,"description":"Error de paramteros"}';
	exit();
}

include 'conexion.php';
$mysqli=conexion();

$sql 	= "SELECT * 
            FROM cards 
			where estatus = 1";
$result = $mysqli -> query($sql);
if($result->num_rows>0){
	$row 			= $result -> fetch_all(MYSQLI_ASSOC);
	$row["status"] = 200; 
	echo json_encode($row);
}else{
	echo '{"status":500}';
}

$result -> free_result();
$mysqli -> close();
?>