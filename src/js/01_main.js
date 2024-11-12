const body = document.body;
// const navToggle = document.querySelector('[data-element~="navToggle"]');
const navMore = document.querySelector('.header__nav-more');

// const toggleNav = () => {
// 	if (!body.classList.contains('is-nav-open')) {
// 		body.classList.add('is-nav-open');
// 	} else {
// 		body.classList.remove('is-nav-open');
// 	}
// };

const handleScroll = () => {
	(window.scrollY > 0) ?  body.classList.add('is-scrolled') : body.classList.remove('is-scrolled');
}

// navToggle.addEventListener('click', toggleNav);
// navMore.addEventListener('click', toggleNav);
window.addEventListener("scroll", handleScroll);

// Add event listener to document to close nav when clicking outside
// document.addEventListener('click', (e) => {
// 	if (!navToggle.contains(e.target) && !navMore.contains(e.target) && !e.target.closest('.header__nav-more')) {
// 		body.classList.remove('is-nav-open');
// 	}
// });

// прокрутка статьи
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		let destination = document.querySelector(this.getAttribute('href'));
		const header = document.querySelector('[data-element="header"]');
		if (destination) {
			let headerHeight = (header.offsetHeight + 30);
			let topOfDestination = destination.getBoundingClientRect().top + window.scrollY - headerHeight;
			window.scrollTo({ top: topOfDestination, behavior: "smooth" });
		}
	});
});

[].forEach.call( document.querySelectorAll('.form__input--tel'), function(input) {
	var keyCode;
	function mask(event) {
		event.keyCode && (keyCode = event.keyCode);
		var pos = this.selectionStart;
		if (pos < 3) event.preventDefault();
		var matrix = "+7 (___) ___ __ __",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, ""),
			new_value = matrix.replace(/[_\d]/g, function(a) {
				return i < val.length ? val.charAt(i++) || def.charAt(i) : a
			});
		i = new_value.indexOf("_");
		if (i != -1) {
			i < 5 && (i = 3);
			new_value = new_value.slice(0, i)
		}
		var reg = matrix.substr(0, this.value.length).replace(/_+/g,
			function(a) {
				return "\\d{1," + a.length + "}"
			}).replace(/[+()]/g, "\\$&");
		reg = new RegExp("^" + reg + "$");
		if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
		if (event.type == "blur" && this.value.length < 5) this.value = ""
	}
	input.addEventListener("input", mask, false);
	input.addEventListener("focus", mask, false);
	input.addEventListener("blur", mask, false);
	input.addEventListener("keydown", mask, false)
});

$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 2,
	adaptiveHeight: true
  });