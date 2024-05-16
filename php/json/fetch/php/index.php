<?php

header('Content-Type:application/json; charset=utf-8');

if(isset($POST['usuario']) or ! isset($_POST['password'])){
   echo '{"estatus":500 "description":"Error de parametros"}';
   exit();
}
include 'conex.php';
$mysqli=conex();

$sql 	= "SELECT * FROM 
						Usuarios 
					WHERE 
						nombre	='".$_POST["usuario"] ."' 
					AND 
						contra='".$_POST["password"]."'";
$result = $mysqli -> query($sql);
if($result->num_rows>0){
	$row = $result -> fetch_array(MYSQLI_ASSOC);
	$row["paso"] = 1; 
	echo json_encode($row);
}else{
	echo '{"status":500 "description": "Error de consulta"}';
}

$result -> free_result();
$mysqli -> close();
?>