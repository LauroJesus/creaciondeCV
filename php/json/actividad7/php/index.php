<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'conexion.php';
$mysqli=conexion();

$sql 	= "SELECT * FROM 
						Usuarios 
					WHERE 
						nombre	='".$_POST["usuario"] ."' 
					AND 
						contra='".$_POST["password"]."'";
$result = $mysqli -> query($sql);
if($result->num_rows>0){
	$row 			= $result -> fetch_array(MYSQLI_ASSOC);
	$row["status"]	= 200; 
	echo json_encode($row);
}else{
	echo '{"status":500}';
}

$result -> free_result();
$mysqli -> close();
?>