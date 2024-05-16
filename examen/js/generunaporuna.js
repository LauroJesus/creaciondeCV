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
function regresar(){
    
    var url = 'home.html';
    document.location.href = url;	


}
function siguiente(){
    
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
					
					html += '<td><img src="img/' + value.img + '" alt="Imagen" width="100"></td>';
					
					
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

				const data = Array.isArray(res) ? res : Object.values(res);

                totalRegistros = Object.keys(res).length;
                console.log(totalRegistros);
                
                html += '<tr>';
                
                    const imagenAleatoria = getRandomImage(data.map(item => item.img));
                    html += `<td><img src="img/${imagenAleatoria}" alt="Imagen" width="100"></td>`;
                    html += '<td><button class="btn btn-success" onclick="siguiente()">Sigueiente</button></td>';
                
                html += '</tr>';
            
                const elem = document.getElementById("datosTabla");
                elem.innerHTML = html;


             
			}else{
				alert("Error al recuperar datos");
			}
			console.log(html);
			new DataTable('#example');
		}).catch(err => console.error(err));
	}

    function getRandomImage(images) {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }
    



    validate();
	loadmenu2();
	datosTabla();
	jwt();
	const form = document.getElementById("cerrar");
	form.addEventListener("click", cerrar_session);	
});