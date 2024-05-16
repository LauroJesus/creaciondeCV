

document.addEventListener("DOMContentLoaded", function(event) {
	function logSubmit(event) {
		event.preventDefault();
		var data = new FormData(document.getElementById("formulario"));
		fetch("php/", {
			method: "POST",
			body: data
		}).then(res => {
			if (res.status != 200){ 
				throw new Error("Bad Server Response"); 
			}
			return res.json();
		}).then(res =>{''
			if(res.status==200){
				alert("Inicio de sesión correcto para: "+ res.nombre);
			}else{ 
                alert("Error de usuario o contraseña");
            }
            }).catch(err=>console.error(err));
		return false;	
	}
	const form = document.getElementById("formulario");
	form.addEventListener("submit", logSubmit);	

});

