const body = document.body;
const navToggle = document.querySelector('[data-element~="navToggle"]');
const navMore = document.querySelector('.header__nav-more');

// Function to toggle navigation
const toggleNav = () => {
	if (!body.classList.contains('is-nav-open')) {
		body.classList.add('is-nav-open');
	} else {
		body.classList.remove('is-nav-open');
	}
};

// Add event listener to navToggle and navMore
navToggle.addEventListener('click', toggleNav);
navMore.addEventListener('click', toggleNav);

// Add event listener to document to close nav when clicking outside
document.addEventListener('click', (e) => {
	if (!navToggle.contains(e.target) && !navMore.contains(e.target) && !e.target.closest('.header__nav-more')) {
		body.classList.remove('is-nav-open');
	}
});

window.addEventListener("scroll", handleScroll);

function handleScroll() {
	const headerElement = document.querySelector('[data-element="header"]');
	// const headerHeight = headerElement.offsetHeight / 3;

	if (window.scrollY > 0) {
		body.classList.add('is-scrolled');
	} else {
		body.classList.remove('is-scrolled');
	}
}