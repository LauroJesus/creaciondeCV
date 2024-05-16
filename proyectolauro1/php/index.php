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

if(!filter_var($_POST['Correo'], FILTER_VALIDATE_EMAIL)) {
	echo '{"status": 400}';
	exit();
}

if(!isset($_POST['Correo']) or !isset($_POST['Pass'])){
	echo '{"status":500,"description":"Error de paramteros"}';
	exit();
}

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
$url	=	'https://acadserv.upaep.mx/lauro/api/service/login/';
$post	=	$_POST;
$metodo	=	"POST";
curl($url,$post,$auth,$metodo);
$_SESSION["session"]=true;
?>