<?php
	function conexion(){
		$mysqli = new mysqli("localhost","user6","user6","user6");
		if ($mysqli -> connect_errno) {
		  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
		  exit();
		}
		return $mysqli;
	}