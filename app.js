let btn = document.getElementById("btn");
let nav = document.getElementById("nav");
let clocked = false;
function menuToggle(){
	nav.classList.toggle("extand");
        btn.innerHTML = "<i class = 'fas fa-times'></i>";
	btn.classList.toggle("extand2");
}
