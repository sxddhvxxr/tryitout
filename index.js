// Toggle mobile menu
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');

function toggleNav() {
	if (nav.classList.contains("active")) {
		nav.classList.remove("active");
		toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
	} else {
		nav.classList.add("active");
		toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
	}

}

toggle.addEventListener('click', toggleNav, false)