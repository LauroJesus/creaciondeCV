<?php
	/* Variables */
	$debug		=	true;
	$secret_Key	=	'$2y$10$b2WWyYaqJDKHLSdw1Jd48.EjDXS6sC9gUXZKidMnlOreFReWl40ha';
	$key		=	"login";
	
	/* Archivos base */
	include '../../helper/helper.php';
	include '../../data/login/index.php';
   
	/* Cuerpo del API */
	if($method=='POST'){
		if(isset($data)){
			if(login($data,$mysqli)){
				$data["status"]	= 200; 
				echo json_encode($data);
				die();
			}else{
				echo '{"status":502,"description":"Error de usuario o contraseña"}';
				die();
			}
		}
	}
	if($method=='GET'){
		
		datosTabla($mysqli);
		

	
	}	
	if($method=='PUT'){
	
	}	
	if($method=='DELETE'){
	
	}

	
?>

