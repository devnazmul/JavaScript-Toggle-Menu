let btn = document.getElementById("btn");
let nav = document.getElementById("nav");

//MENU TOGGLE
function menuToggle(){
	nav.classList.toggle("extand");
	btn.classList.toggle("extand2");
}
//ICON TOGGLLE
function iconToggle(){
	if(btn.innerHTML == '<i class="fas fa-times"></i>'){
		btn.innerHTML = '<i class="fas fa-bars"></i>';
	}else{
		btn.innerHTML = '<i class="fas fa-times"></i>';
	}
}
