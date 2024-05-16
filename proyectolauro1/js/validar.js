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
				window.location.href = "https://acadserv.upaep.mx/lauro/proyectolauro1/";
			}
		}).catch(err => console.error(err));
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
				window.location.href = "https://acadserv.upaep.mx/lauro/proyectolauro1/";
			}else{
				alert("Error al intentar cerrar la sesión");
			}
		}).catch(err => console.error(err));		
	}
	validate();
	const form = document.getElementById("cerrar");
	form.addEventListener("click", cerrar_session);	
});