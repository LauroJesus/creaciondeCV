//https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/
document.addEventListener("DOMContentLoaded", function(event){
	function loadBanner() {
		fetch("php/", {
			method: "GET"
		}).then(res => {
			if (res.status != 200){ 
				throw new Error("Bad Server Response"); 
			}
			return res.json();
		}).then(res =>{
			let html='',a=0;
			if(res.status==200){
				for(const [key, value] of Object.entries(res)) {
					if(value!=200){
						if(a==0){
							html='<div class="carousel-item active">';
						}else{
							html= html+'<div class="carousel-item">';
						}
						html=html+'<img src="'+value.url+'" class="d-block w-100" alt="'+value.titlle+'">';
						html= html+'</div>';
						a++;
					}
				}
				const elem = document.getElementById("imagesBanner");
				elem.innerHTML = html;
			}else{
				alert("Error al recuperar datos");
			}
		}).catch(err => console.error(err));
		return false;	
	}
	function loadBanner2() {
		fetch("php/banner2.php", {
			method: "GET"
		}).then(res => {
			if (res.status != 200){ 
				throw new Error("Bad Server Response"); 
			}
			return res.json();
		}).then(res =>{
			let html='',a=0;
			if(res.status==200){
				const elem = document.getElementById("imagesBanner2");
				elem.innerHTML = res.html;
			}else{
				alert("Error al recuperar datos");
			}
		}).catch(err => console.error(err));
		return false;	
	}
	loadBanner();
	loadBanner2();
});
