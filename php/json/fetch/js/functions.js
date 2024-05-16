/* https://pablomonteserin.com/curso/javascript/ejemplos-api-fetch/ */
 
document.addEventListener("DOMContentLoaded", function(event) {
	function logSubmit(event) {
		event.preventDefault();
		var data = new FormData(document.getElementById("formulario"));
		fetch("php/", {
			method: "POST",
			body: data
		}).then(res => {
			if (res.status != 200) 
			{ 
				throw new Error("Bad Server Response"); 
		    }
			console.log(res);
			return res.json();
		}).then(res => {
			if(res.paso==1){
			   console.log("El usuario" + res.nombre + "si existe en la base de datos " );
			}else{
				console.log("El usuario no existe ");
			}
		}).catch(err => console.error(err));
		return false;	
	}

	const form = document.getElementById("formulario");
	form.addEventListener("submit", logSubmit);	


});



