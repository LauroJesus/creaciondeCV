function jwt(){
    const formData  = new FormData();
    formData.append("jwt", true);
    fetch("php/jwt/", {
        method: "POST",
        body: formData
    }).then(res => {
        if (res.status != 200){ throw new Error("Bad Server Response"); }
        return res.json();
    }).then(res =>{
        if(res.status==200){
            document.getElementById('jwt').value = res.jwt;
        }
    }).catch(err => console.error(err));
}

function verPerfil(id) {
	var url = 'curriculum.html?id=' + id;
	document.location.href = url;
}

function eliminarPerfil(id){
    
    var confirmacion = confirm("¿Seguro que desea eliminar el registro " + id + "?");

	if(confirmacion){
	fetch(`php/eliminarPerfil.php?id=${id}`, {
		method: "DELETE"
	}).then(res => {
		if (res.status != 200){ 
			throw new Error("Bad Server Response"); 
		}
		return res.json();
	}).then(res =>{
		
		if(res.status==200){
			alert("Registro eliminado correctamente");
			location.reload();
		}else{
			//alert("No se pudo eliminar el registro");
			console.log(res);
		}
	}).catch(err => console.error(err));
	return false;

	}
}

function editarPerfil(id){
    
	var url = 'modificarCurriculum.html?id=' + id;
	document.location.href = url;	


}

function compartir(id){
	   // URL base
  var baseUrl = "https://acadserv.upaep.mx/lauro/proyectolauro1/curriculum.html";

  // Concatenar el id a la URL base
  var urlConId = baseUrl + "?id=" + id;

  // Crear un elemento de entrada de texto
  var inputElement = document.createElement("input");
  
  // Establecer el valor del elemento de entrada
  inputElement.value = urlConId;

  // Crear un contenedor para el elemento de entrada
  var container = document.createElement("div");

  // Agregar el elemento de entrada al contenedor
  container.appendChild(inputElement);

  // Agregar el contenedor al cuerpo del documento
  document.body.appendChild(container);

  // Seleccionar el texto en el elemento de entrada
  inputElement.select();

  // Copiar el texto seleccionado al portapapeles
  document.execCommand('copy');

  // Eliminar el contenedor después de copiar
  document.body.removeChild(container);

  // Informar al usuario que el enlace ha sido copiado
  alert("Enlace copiado. Puedes pegarlo donde lo necesites.");
}

document.addEventListener("DOMContentLoaded", function(event) {
	function loadinfo() {
		fetch("php/idinfo.php", {
			method: "GET"
		}).then(res => {
			if (res.status != 200){ 
				throw new Error("Bad Server Response"); 
			}
			return res.json();
		}).then(res =>{
			
			if(res.status==200){
				const elem = document.getElementById("idinfo");
				elem.innerHTML = res.html;
			}else{
				alert("Error al recuperar datos");
			}
		}).catch(err => console.error(err));
		return false;	
	}
	jwt();
	loadinfo();
    
});