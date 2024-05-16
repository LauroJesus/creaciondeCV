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
                
                for(const [key, value] of Object.entries(res)) {
                    if(value!=200){
                    html += '<div id="foto">';
                        html += `<img src="img/${value.photo}">`;
                        html += '</div>';
    
                        // Sección de información personal
                        html += '<div class="info">';
                        html += `<div id="nombre"><h5>${value.nombre}</h5>`;
                        html += `<i class="fa-solid fa-user"></i> ${value.edad}<br>`;
                        html += `<i class="fa-solid fa-location-dot"></i> ${value.localidad}<br>`;
                        html += `<i class="fa-solid fa-briefcase"></i> ${value.puesto}<br>`;
                        html += `<i class="fa-solid fa-house"></i> ${value.hogar}</div>`;
    
                        // Sección de biografía
                        html += '<div id="bio">';
                        html += '<a>Bio</a><br>';
                        html += '<div class="mi-linea-horizontal"></div>';
                        html += `<p>${value.biografia}</p>`;
                        html += '</div>';
    
                        // Sección de deseos y necesidades
                        html += '<div id="nece">';
                        html += '<a>Deseos y Necesidades</a><br>';
                        html += '<div class="mi-linea-horizontal"></div>';
                        html += `<p>${value.deseos}</p>`;
                        html += '</div>';
                        html += '</div>';
 
                        html += '<div class="info">';

                        // Sección de tecnología
                        html += '<div id="tec">';
                        html += '<br>';
                        html += '<a>Tecnologia</a>';
                        html += '<br>';
    
                        // Genera la sección de Internet
                        html += `<div class="in">Internet</div>`;
                        html += '<div class="circles-input">';
                        for (let i = 1; i <= 5; i++) {
                
                            let isChecked = value['internet_' + i] === "2" ? 'checked' : '';  // Verifica si el valor es 2
                            html += `<input type="checkbox" name="internet${i}" value="${value['internet_' + i]}" id="circle${i}" data-group="internet" ${isChecked}>`;
                            html += `<label for="circl${i}I" class="circle"></label>`;
                        }
                        html += '</div>';
    
    
                        // Genera la sección de Social Media
                        html += ` <div class="in">Social Media</div>`;
                        html += '<div class="circles-input">';
                        for (let i = 1; i <= 5; i++) {
                            
                            console.log(`Valor ${i}: ${value['social_' + i]}`);
                            let isChecked = value['social_' + i] === "2" ? 'checked' : '';
                            html += `<input type="checkbox" name="social${i}" value="${value['social_' + i]}" id="circl${i}S" data-group="social" ${isChecked}>`;
                            html += `<label for="circl${i}S" class="circle"></label>`;
                            
                        }
                        html += '</div>';
                        // Genera la sección de Online shopping
                        html += `<div class="in">Online shopping</div>`;
                        html += '<div class="circles-input">';
                        for (let i = 1; i <= 5; i++) {
                            
                            
                            let isChecked = value['online_' + i] === "2" ? 'checked' : '';
                            html += `<input type="checkbox" name="online${i}" value="${value['online_' + i]}" id="circle${i}O" data-group="online" ${isChecked}>`;
                            html += `<label for="circle${i}O" class="circle"></label>`;
                        }
                        html += '</div>';
                        // Genera la sección de Gadgets
                        html += `<div class="in">Gadgets</div>`;
                        html += '<div class="circles-input">';
                        for (let i = 1; i <= 5; i++) {
                            
                            
                            let isChecked = value['gatges_' + i] === "2" ? 'checked' : '';
                            html += `<input type="checkbox" name="gatgets${i}" value="${value['gatges_' + i]}" id="circle${i}G" data-group="gadgets" ${isChecked}>`;
                            html += `<label for="circle${i}G" class="circle"></label>`;
                        }
                        html += '</div>';
                        // Genera la sección de Early Adopter
                        html += `<div class="in">Early Adopter</div>`;
                        html += '<div class="circles-input">';
                        for (let i = 1; i <= 5; i++) {
                            
                            let isChecked = value['earlyadopter_' + i] === "2" ? 'checked' : '';
                            html += `<input type="checkbox" name="early${i}" value="${value['earlyadopter_' + i]}" id="circle${i}E" data-group="early" ${isChecked}>`;
                            html += `<label for="circle${i}E" class="circle"></label>`;
                        }
                        html += '</div>';
                        // Cierra la sección de tecnología
                        html += '</div>';
    
                        // Sección de marca favorita
                        html += '<div id="favorito">';

                            html += '<a>Marca Favorita</a>';
                            html += '<div class="lista-imagenes">';
                            if(value.marca1 ==2){
                                html += '<input type="checkbox" name="marca1" value="${value.marca1}" id="radio1" />'
                                html += '<label for="radio1"><i class="fa-brands fa-apple"></i></label>'  
                            }
                            if(value.marca2 ==2){
                                html += '<input type="checkbox" name="marca2" value="${value.marca2}" id="radio2" />'
                                html += '<label for="radio2"><i class="fa-brands fa-google"></i></label>'
                                
                            }
                            if (value.marca3 ==2){
                                html += '<input type="checkbox" name="marca3" value="${value.marca3}" id="radio3" />'
                                html += '<label for="radio3"><i class="fa-brands fa-facebook"></i></label>'
                            }
                            if(value.marca4 ==2){
                                html +=  '<input type="checkbox" name="marca4" value="${value.marca4}" id="radio4" />'
                                html +=  '<label for="radio4"><i class="fa-solid fa-ice-cream"></i></label>'
                            }
                           if (value.marca5 ==2){
                            html += '<input type="checkbox" name="marca5" value="${value.marca5}" id="radio5" />'
                            html += '<label for="radio5"><i class="fa-solid fa-tv"></i></label>'
                           } 
                            html += '</div>';

                        html += '</div>';
    
                        // Sección de frustraciones
                        html += '<div id="frus">';
                        html += '<a>Frustaciones</a>';
                        html += '<div class="mi-linea-horizontal"></div>';
                        html += `<p>${value.frustraciones}</p>`;

                       
                        // Agrega más frustaciones si es necesario.
                        html += '</div>';
    
                        // Cierra el div de la información personal
                        html += '</div>';
    
                        // Cierra el div principal
                        html += '</div>';
                            
                                        
                                    
                    }
    
    
                }
                const elem = document.getElementById("cuadro");
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

    // Obtiene el valor del parámetro 'id' de la URL
    var idFromURL = getParameterByName('id');
	jwt();
	loadinfo(idFromURL);
    
});