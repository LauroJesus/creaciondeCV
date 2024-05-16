<?php
	/* Variables */
	$debug		=	true;
	$secret_Key	=	'$2y$10$b2WWyYaqJDKHLSdw1Jd48.EjDXS6sC9gUXZKidMnlOreFReWl40ha';
	$key		=	"login";
	
	/* Archivos base */
	include '../../helper/helper.php';
	
   
	/* Cuerpo del API */
	if($method=='POST'){
	
	}
	if($method=='GET'){
        $id = isset($_GET['id']) ? $_GET['id'] : null;

		$sql 	= "SELECT * FROM 
							curriculum
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
		
		$id = isset($_GET['id']) ? $_GET['id'] : null;

		$sql 	= "SELECT * FROM 
							curriculum
                             WHERE id = $id";
		$result = $mysqli -> query($sql);

		if($result->num_rows>0){
			$row = $result -> fetch_all(MYSQLI_ASSOC);
			$a=0;
			$json["html"]='';
			foreach($row as $key => $value) {
			
				
				$json["html"] .= '<div id="foto">'.
									'<img src="img/logo2.webp">' .
									'</div>' .
									'<div class="info">' .
									'<div id="nombre">' .
									'<h5>' . $value['nombre'] . '</h5>' .
									'<i class="fa-solid fa-user"></i>' . $value['edad'] . '<br>' .
									'<i class="fa-solid fa-location-dot"></i>' . $value['localidad'] . '<br>' .
									'<i class="fa-solid fa-briefcase"></i>' . $value['puesto'] . '<br>' .
									'<i class="fa-solid fa-house"></i>' . $value['hogar'] .
									'</div>' .
									'<div id="bio">' .
									'<a>Bio</a><br>' .
									'<div class="mi-linea-horizontal"></div>' .
									'<p>' . $value['biografia'] . '</p>' .
									'</div>' .
									'<div id="nece">' .
									'<a>Deseos y Necesidades</a><br>' .
									'<div class="mi-linea-horizontal"></div>' .
									'<p>' . $value['deseos'] . '</p>' .
									'</div>' .
									'</div>' .
									'<div class="info">' .
									'<div id="tec">' .
									'<br>' .
									'<a>Tecnologia</a>' .
									'<br>' .
									'<div class="in">Internet</div>' .
									'<div class="circles-input">' .
										'<input type="checkbox" id="circle1">' .
										'<label for="circle1" class="circle"></label>' .
										'<input type="checkbox" id="circle2">' .
										'<label for="circle2" class="circle"></label>' .
										'<input type="checkbox" id="circle3">' .
										'<label for="circle3" class="circle"></label>' .
										'<input type="checkbox" id="circle4">' .
										'<label for="circle4" class="circle"></label>' .
										'<input type="checkbox" id="circle5">' .
										'<label for="circle5" class="circle"></label>' .
									'</div>' .
									// Repite el patrón anterior para las otras categorías.
									'</div>' .
									'<div id="favorito">' .
									'<a>Marca Favorita</a>' .
									'<div class="lista-imagenes">' .
									'<img src="img/banner1.webp" alt="Imagen 1">' .
									'<img src="img/banner1.webp" alt="Imagen 2">' .
									'<img src="img/banner1.webp" alt="Imagen 3">' .
									'<img src="img/banner1.webp" alt="Imagen 4">' .
									'<img src="img/banner1.webp" alt="Imagen 5">' .
									'</div>' .
									'</div>' .
									'<div id="frus">' .
									'<a>Frustaciones</a>' .
									'<div class="mi-linea-horizontal"></div>' .
									'<p>' . $value['frustraciones'] . '</p>' .
									// Agrega más frustaciones si es necesario.
									'</div>' .
									'</div>';
									$json["status"] = 200;
			
			}	 
			
			echo json_encode($json);
			
		    die();
		}else{
			echo '{"status":502,"description":"Error de usuario o contraseña"}';
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
		
		$sql = "DELETE FROM curriculum WHERE id = $id";
		
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