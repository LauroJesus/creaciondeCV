<?php
/* JWT */
declare(strict_types=1);
require_once('/var/www/html/lauro/api/libraries/jwt/vendor/autoload.php'); // m
use Firebase\JWT\JWT;
/* Encabezados */
header('Vary: Origin');
header('Access-Control-Allow-Origin: https://acadserv.upaep.mx');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json; charset=utf-8');
/* Respuesta **/
if($_SERVER["HTTP_SEC_FETCH_SITE"]=="same-origin"){
	if($_POST["jwt"]){
		session_start();
		if(!isset($_SESSION["jwt"])){
			$secret_Key  	= '$2y$10$b2WWyYaqJDKHLSdw1Jd48.EjDXS6sC9gUXZKidMnlOreFReWl40ha'; //m
			$date   		= new DateTimeImmutable();
			$expire_at     	= $date->modify('+6 minutes')->getTimestamp();      
			$domainName 	= "acadserv.upaep.mx";
			$key		   	= "lauro";    //m                                      
			$request_data = [
				'iat'  		=> $date->getTimestamp(),        
				'iss'  		=> $domainName,                  
				'nbf'  		=> $date->getTimestamp(),        
				'exp'  		=> $expire_at,                      
				'key' 		=> $key                
			];
			if($auth=JWT::encode($request_data,$secret_Key,'HS512')){
				$_SESSION["jwt"]=$auth;
				echo '{"status":200,"jwt":"'.$auth.'"}';
			}else{
				echo '{"status":500}';
			}
		}else{
			echo '{"status":200,"jwt":"'.$_SESSION["jwt"].'"}';
		}
	}
}