

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
		fetch(`php/idunico.php?id=${id}`, {
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

                        html +='<div id="foto">'
                        html +='<input class="btn btn-primary" type="file" name="photo" id="seleccionarArchivo" value="'+ value.photo +' ">'
                        html +='</div>'

                        html += '<div class="info">'    
                        html += '<div id="nombre">' 
                        html +=  '<div class="agregainfo">'
                        html +=   '<h5>Agregar Nombre</h5><input value="' + value.nombre + '" class="form-control " type="text" placeholder="Agrega tu nombre" aria-label=".form-control-lg example" name= "nombre" >'
                        html +=    '</div>'
                        html +=   '<div class="agregainfo">'
                        html +=    '<i class="fa-solid fa-user"></i><input value="' + value.edad + '" class="form-control " type="text" placeholder="Edad" aria-label=".form-control-lg example" name= "edad" ><br>'
                        html +=    '</div>'
                        html +=    '<div class="agregainfo">'
                        html +=   '<i class="fa-solid fa-location-dot"></i><input value="' + value.localidad + '"  class="form-control" type="text" placeholder="Localidad" aria-label=".form-control-lg example" name= "localidad"  ><br>'
                        html +=    '</div>'
                        html +=    '<div class="agregainfo">'
                        html +=    '<i class="fa-solid fa-briefcase"></i><input  value="' + value.puesto + '"  class="form-control" type="text" placeholder="Puesto" name= "puesto" aria-label=".form-control-lg example"><br>'
                        html +=    '</div>'
                        html +=    '<div class="agregainfo">'
                        html +=    '<i class="fa-solid fa-house"></i><input  value="' + value.hogar + '"  class="form-control" type="text" placeholder="Con quien Vives" name= "hogar" aria-label=".form-control-lg example">'
                        html +=    '</div>'
                        html +='</div>'
                        html +='<div id="bio">'
                        html += '<a>Bio</a><br>'
                        html +=  '<div class="mi-linea-horizontal"></div>'
                        html +=   '<div class="agregainfo">'
                        html +=    '<input  value="' + value.biografia + '"  class="form-control form-control-lg " type="text" placeholder="Agrega tu biografria" name= "bio"  aria-label=".form-control-lg example">'
                        html +=    '</div>'
                        html +='</div>'
                        html +='<div id="nece">'
                        html += '  <a>Deseos y Nececidades</a><br>'
                        html +=  '  <div class="mi-linea-horizontal"></div>'
                        html +=   ' <div class="agregainfo">'
                        html +=    '   <input value="' + value.deseos + '" class="form-control form-control-lg " type="text" placeholder="Agrega tus Deseos" name= "deseos"  aria-label=".form-control-lg example">'
                        html +=    '</div>'
                            
                        html +='</div>'
                        html += '</div>'
                    
                        html +='<div class="info">'
                        html += '<div id="tec">'
                        html +=  '<br>'
                        html +=   '<a>Tecnologia</a>'
                        html +=    '<br>'
                            
                        html +=    '<div class="in">Internet</div>'
                        html +=    '<div class="circles-input">'
                        html +=       '<input type="checkbox" name="internet1"  value="2" id="circle1" data-group="internet">'
                        html +=       '<label for="circle1" class="circle" ></label>'
                        html +=        '<input type="checkbox" name="internet2" value="2" id="circle2" data-group="internet" onclick="seleccionarCheckboxes(2, \'internet \')">'
                        html +=        '<label for="circle2" class="circle"></label>'
                        html +=        '<input type="checkbox" name="internet3" value="2" id="circle3" data-group="internet"onclick="seleccionarCheckboxes(3, \'internet \')">'
                        html +=         '<label for="circle3" class="circle"></label>'
                        html +=        '<input type="checkbox" name="internet4" value="2" id="circle4" data-group="internet"onclick="seleccionarCheckboxes(4, \'internet \')">'
                        html +=         '<label for="circle4" class="circle"></label>'
                        html +=         '<input type="checkbox" name="internet5" value="2" id="circle5" data-group="internet"onclick="seleccionarCheckboxes(5, \'internet \')">'
                        html +=         '<label for="circle5" class="circle"></label>'
                        html +=     '</div>'
                        
                        html +=     '<div class="in">Social Media</div>'
                        html +=     '<div class="circles-input">'
                        html +=         '<input type="checkbox" name="social1"  value="2" id="circl1" data-group="social">'
                        html +=        '<label for="circl1" class="circle"></label>'
                        html +=        '<input type="checkbox" name="social2" value="2" id="circl2" data-group="social" onclick="seleccionarCheckboxes2(2, \'social \')">'
                        html +=         '<label for="circl2" class="circle"></label>'
                        html +=         '<input type="checkbox" name="social3" value="2" id="circl3" data-group="social" onclick="seleccionarCheckboxes2(3, \'social \')">'
                        html +=         '<label for="circl3" class="circle"></label>'
                        html +=         '<input type="checkbox" name="social4" value="2" id="circl4" data-group="social" onclick="seleccionarCheckboxes2(4, \'social \')">'
                        html +=         '<label for="circl4" class="circle"></label>'
                        html +=         '<input type="checkbox" name="social5" value="2" id="circl5" data-group="social" onclick="seleccionarCheckboxes2(5, \'social \')">'
                        html +=         '<label for="circl5" class="circle"></label>'
                        html +=     '</div>'
                        
                        html +=     '<div class="in">Online shopping</div>'
                        html +=     '<div class="circles-input">'
                        html +=         '<input type="checkbox" name="online1" value="2" id="circle1O" data-group="online">'
                        html +=         '<label for="circle1O" class="circle"></label>'
                        html +=         '<input type="checkbox" name="online2" value="2" id="circle2O" data-group="online" onclick="seleccionarCheckboxes3(2,  \'online \')">'
                        html +=         '<label for="circle2O" class="circle"></label>'
                        html +=         '<input type="checkbox" name="online3" value="2" id="circle3O" data-group="online" onclick="seleccionarCheckboxes3(3,  \'online \')">'
                        html +=        '<label for="circle3O" class="circle"></label>'
                        html +=        '<input type="checkbox" name="online4" value="2" id="circle4O" data-group="online" onclick="seleccionarCheckboxes3(4,  \'online \')">'
                        html +=        '<label for="circle4O" class="circle"></label>'
                        html +=        '<input type="checkbox" name="online5" value="2" id="circle5O" data-group="online" onclick="seleccionarCheckboxes3(5,  \'online \')">'
                        html +=         '<label for="circle5O" class="circle"></label>'
                        html +=    '</div>'
                        
                        html +=     '<div class="in">Gadgets</div>'
                        html +=     '<div class="circles-input">'
                        html +=        '<input type="checkbox" name="gatgets1" value="2" id="circle1G" data-group="gadgets" >'
                        html +=         '<label for="circle1G" class="circle"></label>'
                        html +=         '<input type="checkbox" name="gatgets2" value="2" id="circle2G" data-group="gadgets" onclick="seleccionarCheckboxes4(2,  \'gadgets \')">'
                        html +=         '<label for="circle2G" class="circle"></label>'
                        html +=         '<input type="checkbox" name="gatgets3" value="2" id="circle3G" data-group="gadgets" onclick="seleccionarCheckboxes4(3,  \'gadgets \')">'
                        html +=         '<label for="circle3G" class="circle"></label>'
                        html +=         '<input type="checkbox" name="gatgets4" value="2" id="circle4G" data-group="gadgets" onclick="seleccionarCheckboxes4(4,  \'gadgets \')">'
                        html +=         '<label for="circle4G" class="circle"></label>'
                        html +=         '<input type="checkbox" name="gatgets5" value="2" id="circle5G" data-group="gadgets" onclick="seleccionarCheckboxes4(5,  \'gadgets \')">'
                        html +=         '<label for="circle5G" class="circle"></label>'
                        html +=     '</div>'
                        
                        html +=     '<div class="in">Early Adopter</div>'
                        html +=     '<div class="circles-input">'
                        html +=         '<input type="checkbox" name="early1" value="2" id="circle1E" data-group="early">'
                        html +=         '<label for="circle1E" class="circle"></label>'
                        html +=         '<input type="checkbox" name="early2" value="2" id="circle2E" data-group="early" onclick="seleccionarCheckboxes5(2,  \'early \')">'
                        html +=         '<label for="circle2E" class="circle"></label>'
                        html +=         '<input type="checkbox" name="early3" value="2" id="circle3E" data-group="early" onclick="seleccionarCheckboxes5(3,  \'early \')">'
                        html +=         '<label for="circle3E" class="circle"></label>'
                        html +=         '<input type="checkbox" name="early4" value="2" id="circle4E" data-group="early" onclick="seleccionarCheckboxes5(4,  \'early \')">'
                        html +=         '<label for="circle4E" class = "circle"></label>'
                        html +=         '<input type="checkbox" name="early5" value="2" id="circle5E" data-group="early" onclick="seleccionarCheckboxes5(5,  \'early \')">'
                        html +=         '<label for="circle5E" class="circle"></label>'
                        html +=     '</div>'
                            
                        html +=  '</div>'

                        
                        html += '<div id="favorito">'
                        
                        html +=       '<a>Marca Favorita</a>'

                                   
                                  
                        html +=        '<div class="lista-imagenes">'
                       
                            html += '<input type="checkbox" name="marca1" value="2" id="radio1" />'
                            html += '<label for="radio1"><i class="fa-brands fa-apple"></i></label>'  
                        
                      
                            html += '<input type="checkbox" name="marca2" value="2" id="radio2" />'
                            html += '<label for="radio2"><i class="fa-brands fa-google"></i></label>'
                            
                        
                    
                            html += '<input type="checkbox" name="marca3" value="2" id="radio3" />'
                            html += '<label for="radio3"><i class="fa-brands fa-facebook"></i></label>'
                        
                      
                            html +=  '<input type="checkbox" name="marca4" value="2" id="radio4" />'
                            html +=  '<label for="radio4"><i class="fa-solid fa-ice-cream"></i></label>'
                       
                            html += '<input type="checkbox" name="marca5" value="2" id="radio5" />'
                            html += '<label for="radio5"><i class="fa-solid fa-tv"></i></label>'
                        
                        html +=         '</div>'
                                
                                  
                            

                        html += '</div>'
                        html += '<div id="frus">'

                        html +=     '<a>Frustaciones</a>'
                        html +=     '<div class="mi-linea-horizontal"></div>'
                        html +=     '<div class="agregainfo">'
                        html +=        '<input type="hidden" value="" name="jwt" id="jwt">'
                        html +=         '<input value="' + value.frustraciones + '" class="form-control form-control-lg " type="text" placeholder="Agrega tus frustraciones" name= "frustraciones"  aria-label=".form-control-lg example">'
                        html +=     '</div>'
                            
                        html +=     '<div class="AgregarCurruculum">'
                        html +=         '<button id="modificar" class="btn btn-success" type="submit" >Modificar Curruculum</button>'
                        html +=      '<a id="cancelar" class="btn btn-success" href="perfiles.html">CANCELAR</a>'
                        html +=     '</div>'
                            
                        html +=  '</div>'
                        html += '</div>' 
                            
                                        
                                    
                    }
    
    
                }
                const elem = document.getElementById("cuadro5");
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
		var data = new FormData(document.getElementById("cuadro5"));
        var id = getParameterByName('id');
        
        

        for (var pair of data.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
        
		fetch(`php/editarPerfil.php?id=${id}`, {
			method: "POST",
			body: data
            
		}).then(res => {
			if (res.status != 200){ 
				throw new Error("Bad Server Response"); 
			}
            
			return res.json();
           
		}).then(res =>{
            console.log(res);
			if (res.status==200) {
                alert("Se actualizo Correctamente el perfil");
                document.location.href ="perfiles.html"
            } 
            
            if(res.status == 403){
                alert("Agrega una foto");
 
             }
             if(res.status == 404){
         
                 alert("El campo nombre es obligatorio");
             }
             if(res.status == 405){
         
                 alert("La edad es un campo obligatorio");
             }
             if(res.status == 406){
         
                 alert("El campo Localidad es obligatorio");
             }
             if(res.status == 407){
         
                 alert("l campo Puesto es obligatorio")
             }
             if(res.status == 408){
         
                 alert("El campo Con quien vives es obligatorio")
             }
             if(res.status == 409){
         
                 alert("El campo Bio es obligatorio")
             }
             if(res.status == 416){
         
                 alert("El campo Deseos y necesidades es obligatorio")
             }
             if(res.status == 411){
         
                 alert("Selecciona al menos una tecnología")
             }
             if(res.status == 412){
         
                 alert("Selecciona al menos una marca favorita")
             }
             if(res.status == 413){
         
                 alert("El campo Frustraciones es obligatorio")
             }
             
            else {
                console.log("No se realizo el registro:", res.status, res.description);
               
           
            }

		}).catch(err => console.error(err));
		return false;	
	}


    var idFromURL = getParameterByName('id');
	jwt();
	loadinfo(idFromURL);

    const form = document.getElementById("cuadro5");	
    
    form.addEventListener("submit", logSubmit);
});