let toggleNav = document.querySelector(".menu-toggle");
let out = true
toggleNav.addEventListener('click',toggle);

function toggle(){
				let img = document.querySelector(".img")
				let nav = document.querySelector('.menu');
				nav.classList.toggle('active',out);
				document.body.style.overflow = out ? "hidden" : "initial"
				out = !out
				
}
