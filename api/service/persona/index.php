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
			$edad = $data["edad"];
			$localidad = $data["localidad"];
			$puesto = $data["puesto"];
			$hogar = $data["hogar"];
			$bio = $data["bio"];
			$deseo = $data["deseos"];
			$int1 = isset($data["internet1"]) ? $data["internet1"] : 0;
			$int2 = isset($data["internet2"]) ? $data["internet2"] : 0;
			$int3 = isset($data["internet3"]) ? $data["internet3"] : 0;
			$int4 = isset($data["internet4"]) ? $data["internet4"] : 0;
			$int5 = isset($data["internet5"]) ? $data["internet5"] : 0;
			$soc1 = isset($data["social1"]) ? $data["social1"] : 0;
			$soc2 = isset($data["social2"]) ? $data["social2"] : 0;
			$soc3 = isset($data["social3"]) ? $data["social3"] : 0;
			$soc4 = isset($data["social4"]) ? $data["social4"] : 0;
			$soc5 = isset($data["social5"]) ? $data["social5"] : 0;
			$onl_1 = isset($data["online1"]) ? $data["online1"] : 0;
			$onl_2 = isset($data["online2"]) ? $data["online2"] : 0;
			$onl_3 = isset($data["online3"]) ? $data["online3"] : 0;
			$onl_4 = isset($data["online4"]) ? $data["online4"] : 0;
			$onl_5 = isset($data["online5"]) ? $data["online5"] : 0;
			$gat_1 = isset($data["gatgets1"]) ? $data["gatgets1"] : 0;
			$gat_2 = isset($data["gatgets2"]) ? $data["gatgets2"] : 0;
			$gat_3 = isset($data["gatgets3"]) ? $data["gatgets3"] : 0;
			$gat_4 = isset($data["gatgets4"]) ? $data["gatgets4"] : 0;
			$gat_5 = isset($data["gatgets5"]) ? $data["gatgets5"] : 0;
			$ear_1 = isset($data["early1"]) ? $data["early1"] : 0;
			$ear_2 = isset($data["early2"]) ? $data["early2"] : 0;
			$ear_3 = isset($data["early3"]) ? $data["early3"] : 0;
			$ear_4 = isset($data["early4"]) ? $data["early4"] : 0;
			$ear_5 = isset($data["early5"]) ? $data["early5"] : 0;
			$mar_1 = isset($data["marca1"]) ? $data["marca1"] : 0;
			$mar_2 = isset($data["marca2"]) ? $data["marca2"] : 0;
			$mar_3 = isset($data["marca3"]) ? $data["marca3"] : 0;
			$mar_4 = isset($data["marca4"]) ? $data["marca4"] : 0;
			$mar_5 = isset($data["marca5"]) ? $data["marca5"] : 0;
			$frus = $data["frustraciones"];
			$adm = 1;
			// Insertar datos en la base de datos
			$sql = "INSERT INTO curriculum (photo, nombre, edad, localidad, puesto, hogar, biografia, deseos, 
					internet_1, internet_2, internet_3, internet_4, internet_5,
					social_1, social_2, social_3, social_4, social_5,
					online_1, online_2, online_3, online_4, online_5,
					gatges_1, gatges_2, gatges_3, gatges_4, gatges_5,
					earlyadopter_1, earlyadopter_2, earlyadopter_3, earlyadopter_4, earlyadopter_5,
					marca1, marca2, marca3, marca4, marca5, frustraciones,fk_admi) 
					VALUES ('$foto', '$nombre', '$edad', '$localidad', '$puesto', '$hogar', '$bio', '$deseo',
					'$int1', '$int2', '$int3', '$int4', '$int5',
					'$soc1', '$soc2', '$soc3', '$soc4', '$soc5',
					'$onl_1', '$onl_2', '$onl_3', '$onl_4', '$onl_5',
					'$gat_1', '$gat_2', '$gat_3', '$gat_4', '$gat_5',
					'$ear_1', '$ear_2', '$ear_3', '$ear_4', '$ear_5',
					'$mar_1', '$mar_2', '$mar_3', '$mar_4', '$mar_5', '$frus', '$adm')";

					


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

	
	}	
	if($method=='PUT'){
		
		$id = isset($_GET['id']) ? $_GET['id'] : null;

		    $foto = $data['nom'];
			$nombre = $data["nombre"];
			$edad = $data["edad"];
			$localidad = $data["localidad"];
			$puesto = $data["puesto"];
			$hogar = $data["hogar"];
			$bio = $data["bio"];
			$deseo = $data["deseos"];
			$int1 = isset($data["internet1"]) ? $data["internet1"] : 0;
			$int2 = isset($data["internet2"]) ? $data["internet2"] : 0;
			$int3 = isset($data["internet3"]) ? $data["internet3"] : 0;
			$int4 = isset($data["internet4"]) ? $data["internet4"] : 0;
			$int5 = isset($data["internet5"]) ? $data["internet5"] : 0;
			$soc1 = isset($data["social1"]) ? $data["social1"] : 0;
			$soc2 = isset($data["social2"]) ? $data["social2"] : 0;
			$soc3 = isset($data["social3"]) ? $data["social3"] : 0;
			$soc4 = isset($data["social4"]) ? $data["social4"] : 0;
			$soc5 = isset($data["social5"]) ? $data["social5"] : 0;
			$onl_1 = isset($data["online1"]) ? $data["online1"] : 0;
			$onl_2 = isset($data["online2"]) ? $data["online2"] : 0;
			$onl_3 = isset($data["online3"]) ? $data["online3"] : 0;
			$onl_4 = isset($data["online4"]) ? $data["online4"] : 0;
			$onl_5 = isset($data["online5"]) ? $data["online5"] : 0;
			$gat_1 = isset($data["gatgets1"]) ? $data["gatgets1"] : 0;
			$gat_2 = isset($data["gatgets2"]) ? $data["gatgets2"] : 0;
			$gat_3 = isset($data["gatgets3"]) ? $data["gatgets3"] : 0;
			$gat_4 = isset($data["gatgets4"]) ? $data["gatgets4"] : 0;
			$gat_5 = isset($data["gatgets5"]) ? $data["gatgets5"] : 0;
			$ear_1 = isset($data["early1"]) ? $data["early1"] : 0;
			$ear_2 = isset($data["early2"]) ? $data["early2"] : 0;
			$ear_3 = isset($data["early3"]) ? $data["early3"] : 0;
			$ear_4 = isset($data["early4"]) ? $data["early4"] : 0;
			$ear_5 = isset($data["early5"]) ? $data["early5"] : 0;
			$mar_1 = isset($data["marca1"]) ? $data["marca1"] : 0;
			$mar_2 = isset($data["marca2"]) ? $data["marca2"] : 0;
			$mar_3 = isset($data["marca3"]) ? $data["marca3"] : 0;
			$mar_4 = isset($data["marca4"]) ? $data["marca4"] : 0;
			$mar_5 = isset($data["marca5"]) ? $data["marca5"] : 0;
			$frus = $data["frustraciones"];
			$adm = 1;
			// Insertar datos en la base de datos
			$sql = "UPDATE curriculum SET 
            photo = '$foto', 
            nombre = '$nombre', 
            edad = '$edad', 
            localidad = '$localidad', 
            puesto = '$puesto', 
            hogar = '$hogar', 
            biografia = '$bio', 
            deseos = '$deseo', 
            internet_1 = '$int1', 
            internet_2 = '$int2', 
            internet_3 = '$int3', 
            internet_4 = '$int4', 
            internet_5 = '$int5',
            social_1 = '$soc1', 
            social_2 = '$soc2', 
            social_3 = '$soc3', 
            social_4 = '$soc4', 
            social_5 = '$soc5',
            online_1 = '$onl_1', 
            online_2 = '$onl_2', 
            online_3 = '$onl_3', 
            online_4 = '$onl_4', 
            online_5 = '$onl_5',
            gatges_1 = '$gat_1', 
            gatges_2 = '$gat_2', 
            gatges_3 = '$gat_3', 
            gatges_4 = '$gat_4', 
            gatges_5 = '$gat_5',
            earlyadopter_1 = '$ear_1', 
            earlyadopter_2 = '$ear_2', 
            earlyadopter_3 = '$ear_3', 
            earlyadopter_4 = '$ear_4', 
            earlyadopter_5 = '$ear_5',
            marca1 = '$mar_1', 
            marca2 = '$mar_2', 
            marca3 = '$mar_3', 
            marca4 = '$mar_4', 
            marca5 = '$mar_5', 
            frustraciones = '$frus'
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
	
	}

	
?>