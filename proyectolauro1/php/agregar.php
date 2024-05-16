<?php
/********** Mostrar errores ***********/
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/********** Librerías *****************/
require_once('/var/www/html/lauro/api/libraries/jwt/vendor/autoload.php');
use Firebase\JWT\JWT;
include 'function.php';

/********** Configuración *************/
session_start();
header('Content-Type: application/json; charset=utf-8');


if (empty($_FILES['photo']['name'])) {
	echo '{"status": 403, "description": "Selecciona una imagen"}';
	exit();
}

// Validar nombre
if (!isset($_POST['nombre']) || empty($_POST['nombre'])) {
	echo '{"status": 404, "description": "El campo Nombre es obligatorio"}';
	exit();
}

// Validar edad
if (!isset($_POST['edad']) || empty($_POST['edad'])) {
	echo '{"status": 405, "description": "La edad debe obligatorio"}';
	exit();
}

// Validar localidad
if (!isset($_POST['localidad']) || empty($_POST['localidad'])) {
	echo '{"status": 406, "description": "El campo Localidad es obligatorio"}';
	exit();
}

// Validar puesto
if (!isset($_POST['puesto']) || empty($_POST['puesto'])) {
	echo '{"status": 407, "description": "El campo Puesto es obligatorio"}';
	exit();
}

// Validar con quien vives
if (!isset($_POST['hogar']) || empty($_POST['hogar'])) {
	echo '{"status": 408, "description": "El campo Con quien vives es obligatorio"}';
	exit();
}

// Validar biografía
if (!isset($_POST['bio']) || empty($_POST['bio'])) {
	echo '{"status": 409, "description": "El campo Bio es obligatorio"}';
	exit();
}

// Validar deseos y necesidades
if (!isset($_POST['deseos']) || empty($_POST['deseos'])) {
	echo '{"status": 4016, "description": "El campo Deseos y necesidades es obligatorio"}';
	exit();
}





// Validar al menos una tecnología seleccionada
$tecnologias = ['internet', 'social', 'online', 'gadgets', 'early'];
$tecnologiaSeleccionada = false;
foreach ($tecnologias as $tecnologia) {
	for ($i = 1; $i <= 5; $i++) {
		$checkboxName = $tecnologia . $i;
		if (isset($_POST[$checkboxName])) {
			$tecnologiaSeleccionada = true;
			break 2;
		}
	}
}
if (!$tecnologiaSeleccionada) {
	echo '{"status": 4011, "description": "Selecciona al menos una tecnología"}';
	exit();
}

// Validar al menos una marca favorita seleccionada
$marcasFavoritas = ['marca1', 'marca2', 'marca3', 'marca4', 'marca5'];
$marcaFavoritaSeleccionada = false;
foreach ($marcasFavoritas as $marca) {
	if (isset($_POST[$marca])) {
		$marcaFavoritaSeleccionada = true;
		break;
	}
}
if (!$marcaFavoritaSeleccionada) {
	echo '{"status": 412, "description": "Selecciona al menos una marca favorita"}';
	exit();
}

// Validar frustraciones
if (!isset($_POST['frustraciones']) || empty($_POST['frustraciones'])) {
	echo '{"status": 413, "description": "El campo Frustraciones es obligatorio"}';
	exit();
}




$imagen = $_FILES['photo'];
//$fotoAnterior = $_POST['imagenAnterior'];
$carpetaFotoUser= '../img/';
if(!$carpetaFotoUser){
	mkdir($carpetaFotoUser);
}
$nombreImagen = md5(uniqid(rand(),true)).".jpg";
move_uploaded_file($imagen['tmp_name'],$carpetaFotoUser.$nombreImagen);

$_POST['nom'] = $nombreImagen;


/***************** JWT **************/
$secret_Key  	= '$2y$10$b2WWyYaqJDKHLSdw1Jd48.EjDXS6sC9gUXZKidMnlOreFReWl40ha'; //m
$date   		= new DateTimeImmutable();
$expire_at     	= $date->modify('+6 minutes')->getTimestamp();      
$domainName 	= "acadserv.upaep.mx";
$key		   	= "login";                                          
$request_data = [
	'iat'  		=> $date->getTimestamp(),        
	'iss'  		=> $domainName,                  
	'nbf'  		=> $date->getTimestamp(),        
	'exp'  		=> $expire_at,                      
	'key' 		=> $key                
];
$auth	=	JWT::encode($request_data,$secret_Key,'HS256');
$url	=	'https://acadserv.upaep.mx/lauro/api/service/persona/';
$post	=	$_POST;
$metodo	=	"POST";
//echo 'Datos a enviar a la API: ' . json_encode($_POST) . PHP_EOL;

curl($url,$post,$auth,$metodo);

?>						