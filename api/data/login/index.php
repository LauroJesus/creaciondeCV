<?php
function login($data,$mysqli){
	$sql 	= "SELECT * FROM 
							Usuarios 
						WHERE 
							nombre	='".$data["Correo"] ."' 
						AND 
							contra='".$data["Pass"]."'";
	$result = $mysqli -> query($sql);
	if($result->num_rows>0){
		return true;
	}else{
		return false;
	}
}

function datosTabla($mysqli){
    $sql = "SELECT * FROM Usuarios";

$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
    $data = $result->fetch_all(MYSQLI_ASSOC);
    $data['status']= 200;
    echo json_encode($data);
} else {
    echo json_encode(array("status" => 200, "data" => array()));
}

}
