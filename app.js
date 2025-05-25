const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});




// document.body.style.overflow = "hidden";

// // Show lock icon after 3 seconds
// setTimeout(() => {
//   document.getElementById("intro").classList.add("lock-active");
// }, 3000);

// // Fade out intro after 5 seconds
// setTimeout(() => {
//   const intro = document.getElementById("intro");
//   intro.classList.add("fade-out");
// }, 5000);

// // Show main content after fade-out is complete (1s later)
// setTimeout(() => {
//   document.getElementById("main-content").style.display = "block";
//   document.body.style.overflow = "auto";
// }, 6000);
