document.addEventListener("DOMContentLoaded", function(event) {
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
				window.location.href = "https://acadserv.upaep.mx/lauro/actividad12/";
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
				    html += '<td>' + value.contra + '</tb>';
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
				window.location.href = "https://acadserv.upaep.mx/lauro/actividad12/";
			}else{
				alert("Error al intentar cerrar la sesión");
			}
		}).catch(err => console.error(err));		
	}

    validate();
	loadmenu2();
	datosTabla()
	const form = document.getElementById("cerrar");
	form.addEventListener("click", cerrar_session);	
});