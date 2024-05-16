document.addEventListener("DOMContentLoaded", function(event) {
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

	loadmenu2();
});