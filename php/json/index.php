<?php
  $jsonText= '{"nombre:"Lauro","edad":24,"altura":1.70,"sexo": "M"}';
  $jsonText=json_encode($jsonText,JSON_UNESCAPED_UNICODE);

  echo"<pre>";
  var_dump($jsonText);
  echo"</pre>";

  
  echo"<pre>";
  var_dump($jsonText);
  echo"</pre>";

  $jsonText=json_decode($jsonText); // convierte el arreglo en un objeto 

  echo"<pre>";
  var_dump($jsonText);
  echo"</pre>";


  $jsonArray = array(
    "Nombre" => "Lauro",
    "edad"=>32,
    "altura"=>1.70,
    "sexo"=> "M"
  );
  $jsonArray=json_encode($jsonArray);

  echo"<pre>";
  var_dump($jsonArray);
  echo"</pre>";

  $Colore ='{"rojo":"#f00","verde":"#0f0","azul":"#00f","cyan":"#0ff","magenta":"#f0f","amarillo":"#ff0","negro":"#000"}';
  $Colores=json_encode($Colores,JSON_UNESCAPED_UNICODE); //convierte el objeto en string
  echo"<pre>";
  var_dump($Colores); // Sale Null porque hay una falla en la estructura de json 
  echo"</pre>";










?>