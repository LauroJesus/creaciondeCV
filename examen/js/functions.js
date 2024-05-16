document.addEventListener("DOMContentLoaded", function(event) {
	const toastLiveExample = document.getElementById('liveToast');
	const toastLiveExample2 = document.getElementById('liveToast2');

	const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
	const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveExample2);
    
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
		}).then(res =>{
			if(res.status==200){
				document.location.href ="home.html"
			}else if(res.status==400){
				toastBootstrap2.show()
			}else{
				toastBootstrap.show()
			}

		}).catch(err => console.error(err));
		return false;	
	}
	jwt();
	const form = document.getElementById("formulario");
	form.addEventListener("submit", logSubmit);	



	
});