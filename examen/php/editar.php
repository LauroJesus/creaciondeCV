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


if (empty($_FILES['imagen']['name'])) {
	echo '{"status": 403, "description": "Selecciona una imagen"}';
	exit();
}

// Validar nombre








$imagen = $_FILES['imagen'];
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

$id = $_GET['id'] ?? null;

$auth	=	JWT::encode($request_data,$secret_Key,'HS256');
$url = "https://acadserv.upaep.mx/lauro/api/service/examen/?id=" . urlencode($id);
$post	=	$_POST;
$metodo	=	"PUT";
curl($url,$post,$auth,$metodo);
?>