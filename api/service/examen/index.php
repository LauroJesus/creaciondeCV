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
	
		// Recuperar datos del formulario
		    
		    $foto = $data['nom'];
			$nombre = $data["nombre"];
			// Insertar datos en la base de datos
			$sql = "INSERT INTO examen (nombre, img) 
					VALUES ('$nombre', '$foto')";

					


				if ($mysqli->query($sql) === TRUE) {
					$data["status"]	= 200; 
				    echo json_encode($data);
					die();
				} else {
					echo '{"status":500,"description":"Error al insertar datos: ' . $mysqli->error . '"}';
					die();
				}

   
		
	}
	if($method=='GET'){

        $sql = "SELECT * FROM examen";

        $result = $mysqli->query($sql);
        
        if ($result->num_rows > 0) {
            $data = $result->fetch_all(MYSQLI_ASSOC);
            $data['status']= 200;
            echo json_encode($data);
        } else {
            echo json_encode(array("status" => 200, "data" => array()));
        }
	}	
	if($method=='PUT'){
		
		$id = isset($_GET['id']) ? $_GET['id'] : null;
        $foto = $data['nom'];
        $nombre = $data["nombre"];
		 
			// Insertar datos en la base de datos
			$sql = "UPDATE examen SET 
            nombre = '$nombre', 
            img = '$foto' 
            WHERE id = $id";

				if ($mysqli->query($sql) === TRUE) {
					$data["status"]	= 200; 
				    echo json_encode($data);
					die();
				} else {
					echo '{"status":500,"description":"Error al modificar datos: ' . $mysqli->error . '"}';
					die();
				}
	
	}	
	if($method=='DELETE'){
        $id = isset($_GET['id']) ? $_GET['id'] : null;
		if (!is_numeric($id) || $id <= 0) {
			echo '{"status":400,"description":"ID no válido"}';
			die();
		}
		
		// Escapa el valor de $id para prevenir inyección de SQL
		$id = $mysqli->real_escape_string($id);
		
		$sql = "DELETE FROM examen WHERE id = $id";
		
		$result = $mysqli->query($sql);
		
		if ($result === FALSE) {
			// Error en la consulta DELETE
			echo '{"status":502,"description":"Error de consulta delete: ' . $mysqli->error . '"}';
			die();
		}
		
		if ($result === true) {
			// La eliminación fue exitosa
			$json["status"] = 200;
			$json["description"] = "Eliminación exitosa";
			echo json_encode($json);
			die();
		} else {
			// No se eliminó ningún registro (puede deberse a que no existía el ID)
			echo '{"status":404,"description":"No se encontró el registro para eliminar"}';
			die();
		}
	
	}

	
?>