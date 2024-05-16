function eliminarPerfil(id){
    
	var confirmacion = confirm("¿Seguro que desea eliminar el registro " + id + "?");

	if(confirmacion){
	fetch(`php/eliminarimg.php?id=${id}`, {
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
    
	var url = 'editarimg.html?id=' + id;
	document.location.href = url;	


}
function generarPlantilla(){
    
	var url = 'generar.html';
	document.location.href = url;	


}
function generaruna(){
    
	var url = 'unaporuna.html';
	document.location.href = url;	


}

document.addEventListener("DOMContentLoaded", function(event) {
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
	function validate(){
		const formData  = new FormData();
		fetch("php/validate.php", {
			method: "POST",
			body: formData
		}).then(res => {
			if (res.status != 200){ throw new Error("Bad Server Response"); }
			return res.json();
		}).then(res =>{
			if(res.status==500){
				alert(res.error);
				window.location.href = "https://acadserv.upaep.mx/lauro/examen/";
			}
		}).catch(err => console.error(err));
	}
	function datosTabla(){
		fetch("php/datosTabla.php", {
			method: "GET",
		}).then(res => {
			if (res.status != 200){ throw new Error("Bad Server Response"); }
			return res.json();
		}).then(res =>{
			console.log(res);
			let html='';
			if(res.status==200){

				for(const [key, value] of Object.entries(res)) {
					if(value!=200){
					html += '<tr>';
					html += '<td>' + value.nombre + '</tb>';
					html += '<td><img src="img/' + value.img + '" alt="Imagen" width="100"></td>';
					html += '<td><button class="btn btn-danger" onclick="eliminarPerfil(' + value.id + ')">Eliminar</button></td>';
                    html += '<td><button class="btn btn-warning" onclick="editarPerfil(' + value.id + ')">Modificar</button></td>';
					
					html += '</tr>';
					}
				}		
                const elem = document.getElementById("datosTabla");
                elem.innerHTML = html;


             
			}else{
				alert("Error al recuperar datos");
			}
			console.log(html);
			new DataTable('#example');
		}).catch(err => console.error(err));
	}


	function loadmenu2() {
		fetch("php/menuimg.php", {
			method: "GET"
		}).then(res => {
			if (res.status != 200){ 
				throw new Error("Bad Server Response"); 
			}
			return res.json();
		}).then(res =>{
			
			if(res.status==200){
				const elem = document.getElementById("menuimg");
				elem.innerHTML = res.html;
			}else{
				alert("Error al recuperar datos");
			}
		}).catch(err => console.error(err));
		return false;	
	}
	function cerrar_session(){
		const formData = new FormData();
		formData.append("salir", true);
		fetch("php/close.php", {
			method: "POST",
			body: formData
		}).then(res => {
			if (res.status != 200){ throw new Error("Bad Server Response"); }
			return res.json();
		}).then(res =>{
			if(res.status==200){
				window.location.href = "https://acadserv.upaep.mx/lauro/examen/";
			}else{
				alert("Error al intentar cerrar la sesión");
			}
		}).catch(err => console.error(err));		
	}
	
	function logSubmit(event) {
		event.preventDefault();
		var data = new FormData(document.getElementById("formulario3"));
		fetch("php/agregarimg.php", {
			method: "POST",
			body: data
		}).then(res => {
			if (res.status != 200){ 
				throw new Error("Bad Server Response"); 
			}
			return res.json();
		}).then(res =>{
			if(res.status==200){
				
				alert("Imagen agregada correctamente");
				location.reload();
			}else if(res.status==403){
				alert("Seleccione una imegen");
			}
			else if(res.status === 404){
				alert("Seleccione una nombre");
			}
			else{
				console.log(res);
			alert("NO se agrego correctamente la imagen");
			}

		}).catch(err => console.error(err));
		return false;	
	}
	
	
	const form3 = document.getElementById("formulario3");
	form3.addEventListener("submit", logSubmit);	







    validate();
	loadmenu2();
	datosTabla();
	jwt();
	const form = document.getElementById("cerrar");
	form.addEventListener("click", cerrar_session);	
});