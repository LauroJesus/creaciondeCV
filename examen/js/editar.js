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
document.addEventListener("DOMContentLoaded", function(event) {
	function loadinfo(id) {
		fetch(`php/editarnombre.php?id=${id}`, {
            method: "GET"
        }).then(res => {
            if (res.status != 200){ 
                throw new Error("Bad Server Response"); 
            }
            return res.json();
        }).then(res =>{
    
            let html='';
            if(res.status==200){
                console.log(res);
                for(const [key, value] of Object.entries(res)) {
                    
                    if(value!=200){
                        if(value!=200){
                            html += '<tr>';
                           
                            html += '<td><input type="text" value="' + value.nombre + '" name="nombre"></td>';
                            html +='<td><input class="btn btn-primary" type="file" name="imagen" id="seleccionarArchivo" value="'+ value.imagen +' "></td>'
                            html += '<input type="hidden" value="" name="jwt" id="jwt">'
                         
                          
                            html += '</tr>';
                            }
                       
                                           
                    }
    
                    
                }
               
                const elem = document.getElementById("datosTablam");
                    elem.innerHTML = html;
        




                

            // ******
            }else{
                alert("Error al recuperar datos");
            }
        }).catch(err => console.error(err));
        return false;
        




	}

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function logSubmit(event) {

		event.preventDefault();
		var data = new FormData(document.getElementById("modificarn"));
        var id = getParameterByName('id');
        
        

        for (var pair of data.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }

		fetch(`php/editar.php?id=${id}`, {
			method: "POST",
			body: data
            
		}).then(res => {
			if (res.status != 200){ 
				throw new Error("Bad Server Response"); 
			}
            ;
			return res.json();
           
		}).then(res =>{
            console.log(res);
			if (res.status==200) {
                alert("Se actualizo Correctamente la carta");
                document.location.href ="home.html"
            } 
            
            else if(res.status == 403){
                alert("Agrega una foto");
 
             }
             else if(res.status == 404){
         
                 alert("El campo nombre es obligatorio");
             }else {
                console.log("No se realizo la actualizacion:", res.status, res.description);
               
           
            }

		}).catch(err => console.error(err));
		return false;	
	}


    var idFromURL = getParameterByName('id');
	jwt();
	loadinfo(idFromURL);

    const form = document.getElementById("modificarn");	
    
    form.addEventListener("submit", logSubmit);
});