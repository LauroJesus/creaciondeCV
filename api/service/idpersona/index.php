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

		$sql 	= "SELECT * FROM 
							curriculum";
		$result = $mysqli -> query($sql);

		if($result->num_rows>0){
			$row = $result -> fetch_all(MYSQLI_ASSOC);
			$a=0;
			$json["html"]='';
			foreach($row as $key => $value) {
			
				                    $json["html"] .= '<div class="col">';
                                    $json["html"] .= '  <div class="card shadow-sm">';
                                    $json["html"] .= '    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="img/imagen1.jpg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">';
                                    $json["html"] .= '      <title>Placeholder</title>';
                                    $json["html"] .= '      <rect width="100%" height="100%" fill="#55595c" />';
									$json["html"] .= '      <image href="img/'.$value['photo'].'" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />';
                                    
                                    $json["html"] .= '    </svg>';
                                    $json["html"] .= '    <div class="card-body">';
                                    $json["html"] .= '      <p class="card-text">nombre:' . $value['nombre'] . ' </p>';
                                    $json["html"] .= '      <div class="d-flex justify-content-between align-items-center">';
                                    $json["html"] .= '        <div class="btn-group">';
                                    $json["html"] .= '          <button  type="button" class="btn btn-sm btn-outline-secondary"  onclick="verPerfil(' . $value['id'] . ')">Ver</button>';
                                    $json["html"] .= '          <button type="button" class="btn btn-sm btn-outline-secondary" onclick="editarPerfil(' . $value['id'] . ')">Editar</button>';
                                    $json["html"] .= '          <button type="button" class="btn btn-sm btn-outline-secondary"   onclick="eliminarPerfil(' . $value['id'] . ')">Eliminar</button>';
                                    $json["html"] .= '          <button type="button" class="btn btn-sm btn-outline-secondary"   onclick="compartir(' . $value['id'] . ')">Compartir</button>';
                                    $json["html"] .= '        </div>';
                                    $json["html"] .= '      </div>';
                                    $json["html"] .= '    </div>';
                                    $json["html"] .= '  </div>';
                                    $json["html"] .= '</div>';
									$json["status"] = 200;
			
			}	 
			
			echo json_encode($json);
			
		    die();
		}else{
			echo '{"status":502,"description":"Error de usuario o contraseña"}';
			die();
		}
	
	}	
	if($method=='PUT'){
	
	}	
	if($method=='DELETE'){
	
	}

	
?>