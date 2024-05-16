<?php
	/* Variables */
	$debug		=	true;
	$secret_Key	=	'$2y$10$b2WWyYaqJDKHLSdw1Jd48.EjDXS6sC9gUXZKidMnlOreFReWl40ha';
	$key		=	"login";
	
	/* Archivos base */
	include '../../helper/helper.php';   
	
    //include '../../helper/db.php';
	/* Cuerpo del API */
	
	
	if($method=='POST'){
	
		

   
		
	}
	if($method=='GET'){

        $id = isset($_GET['id']) ? $_GET['id'] : null;

		$sql 	= "SELECT * FROM 
							examen
                             WHERE id = $id";
		
		$result = $mysqli -> query($sql);
		if($result->num_rows>0){
			$row = $result -> fetch_all(MYSQLI_ASSOC);

			$row["status"] = 200; 
			echo json_encode($row);
		}else{
			echo '{"status":500}';
		}
	}	
	if($method=='PUT'){
		
		
	
	}	
	if($method=='DELETE'){
     
    }
	
?>