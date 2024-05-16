

function seleccionarCheckboxes(numero) {
    const checkbox = document.getElementById('circle' + numero);
    
    if (checkbox.checked) {
        for (let i = 1; i <= numero; i++) {
            const otherCheckbox = document.getElementById('circle' + i);
            if (otherCheckbox) {
                otherCheckbox.checked = true;
            }
        }
    } else {
        for (let i = 1; i <= numero; i++) {
            const otherCheckbox = document.getElementById('circle' + i);
            if (otherCheckbox) {
                otherCheckbox.checked = false;
            }
        }
    }
}

function seleccionarCheckboxes2(numero, grupo) {
    const checkboxes = document.querySelectorAll(`[data-group="${grupo}"]`);
    const index = numero - 1; // Restamos 1 para obtener el índice del checkbox seleccionado

    if (checkboxes[index].checked) {
        // Si el checkbox actual está marcado, lo deseleccionamos y deseleccionamos los anteriores
        for (let i = 0; i <= index; i++) {
            checkboxes[i].checked = true;
        }
    } else {
        // Si el checkbox actual está desmarcado, lo marcamos y marcamos los anteriores
        for (let i = 0; i <= index; i++) {
            checkboxes[i].checked = false;
        }
    }
}

function seleccionarCheckboxes3 (numero, grupo) {
    const checkboxes = document.querySelectorAll(`[data-group="${grupo}"]`);
    const index = numero - 1; // Restamos 1 para obtener el índice del checkbox seleccionado

    if (checkboxes[index].checked) {
        // Si el checkbox actual está marcado, lo deseleccionamos y deseleccionamos los anteriores
        for (let i = 0; i <= index; i++) {
            checkboxes[i].checked = true;
        }
    } else {
        // Si el checkbox actual está desmarcado, lo marcamos y marcamos los anteriores
        for (let i = 0; i <= index; i++) {
            checkboxes[i].checked = false;
        }
    }
}

function seleccionarCheckboxes4 (numero, grupo) {
    const checkboxes = document.querySelectorAll(`[data-group="${grupo}"]`);
    const index = numero - 1; // Restamos 1 para obtener el índice del checkbox seleccionado

    if (checkboxes[index].checked) {
        // Si el checkbox actual está marcado, lo deseleccionamos y deseleccionamos los anteriores
        for (let i = 0; i <= index; i++) {
            checkboxes[i].checked = true;
        }
    } else {
        // Si el checkbox actual está desmarcado, lo marcamos y marcamos los anteriores
        for (let i = 0; i <= index; i++) {
            checkboxes[i].checked = false;
        }
    }
}

function seleccionarCheckboxes5 (numero, grupo) {
    const checkboxes = document.querySelectorAll(`[data-group="${grupo}"]`);
    const index = numero - 1; // Restamos 1 para obtener el índice del checkbox seleccionado

    if (checkboxes[index].checked) {
        // Si el checkbox actual está marcado, lo deseleccionamos y deseleccionamos los anteriores
        for (let i = 0; i <= index; i++) {
            checkboxes[i].checked = true;
        }
    } else {
        // Si el checkbox actual está desmarcado, lo marcamos y marcamos los anteriores
        for (let i = 0; i <= index; i++) {
            checkboxes[i].checked = false;
        }
    }
}


document.addEventListener("DOMContentLoaded", function(event) {
	const toastLiveExample = document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    
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
		}).catch(err => {console.error(err);console.log("Error in catch block:", err);});
	}


	function logSubmit(event) {
        event.preventDefault();
        var data = new FormData(document.getElementById("cuadro5"));
        
        for (var pair of data.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
        
        fetch("php/agregar.php", {
            method: "POST",
            body: data,
            
        }).then(res => {
            if (res.status != 200) {
                throw new Error("Bad Server Response " + res.status);
            }
            return res.json();
        }).then(res => {
            console.log(res);
            if (res.status == 200) {
                console.log("Registro exitoso");
                alert("Registro exitoso");
                toastBootstrap.show();
                document.location.href ="perfiles.html";
            } else if (res.status == 403) {
                alert("Agrega una foto");
            } else if (res.status == 404) {
                alert("El campo nombre es obligatorio");
            } else if (res.status == 405) {
                alert("La edad es un campo obligatorio");
            } else if (res.status == 406) {
                alert("El campo Localidad es obligatorio");
            } else if (res.status == 407) {
                alert("El campo Puesto es obligatorio");
            } else if (res.status == 408) {
                alert("El campo Con quien vives es obligatorio");
            } else if (res.status == 409) {
                alert("El campo Bio es obligatorio");
            } else if (res.status == 416) {
                alert("El campo Deseos y necesidades es obligatorio");
            } else if (res.status == 411) {
                alert("Selecciona al menos una tecnología");
            } else if (res.status == 412) {
                alert("Selecciona al menos una marca favorita");
            } else if (res.status == 413) {
                alert("El campo Frustraciones es obligatorio");
            } else {
                console.log("No se realizó el registro:", res.status, res.description);
            }
        }).catch(err => console.error(err));
        return false;
    }
    
	
	jwt();
    
	const form = document.getElementById("cuadro5");	
    
    form.addEventListener("submit", logSubmit);
        
   
  


	
});