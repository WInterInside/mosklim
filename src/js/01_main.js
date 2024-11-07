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

// скролл шапки
window.addEventListener("scroll", handleScroll);
function handleScroll() {
	if (window.scrollY > 0) {
		body.classList.add('is-scrolled');
	} else {
		body.classList.remove('is-scrolled');
	}
}

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

// работа с попапом
const openModalBtn = document.querySelector('[data-element="orderBtn"]');
const modal = document.querySelector('[data-element="orderForm"]');
const closeBtn = document.querySelector('[data-element="popupClose"]');
const overlay = modal.querySelector('.popup__overlay'); // Добавляем ссылку на overlay

openModalBtn.addEventListener('click', () => {
	modal.classList.add('is-open');
	body.classList.add('is-popup-open');
});

closeBtn.addEventListener('click', () => {
	modal.classList.remove('is-open');
	body.classList.remove('is-popup-open');
});

// Закрыть модальное окно при нажатии клавиши Escape
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && modal.classList.contains('is-open')) {
		modal.classList.remove('is-open');
		body.classList.remove('is-popup-open');
	}
});

// Закрыть модальное окно при клике на overlay
overlay.addEventListener('click', (e) => {
	if (modal.classList.contains('is-open')) {
		modal.classList.remove('is-open');
	}
});

class Tabs {
	setTabs = (tabs, id) => {
		this.clearTabs(tabs);

		tabs.querySelectorAll('[data-tab="' + id + '"]').forEach((el) => {
			el.classList.add('is-active');
		});
	}

	clearTabs = (tabs) =>{
		let tabsBtn = tabs.querySelectorAll('[data-elements ~= "tabsBtn"]'),
			tabsItems = tabs.querySelectorAll('[data-elements ~= "tabsItem"]');

		tabsBtn.forEach((el) => {
			el.classList.remove('is-active')
		});

		tabsItems.forEach((el) => {
			el.classList.remove('is-active')
		});
	}
}

document.addEventListener('click', (e) => {
	let el = e.target.closest('[data-elements~="tabsBtn"]');
	if (el) {
	let id = el.dataset.tab;
	let tabs = el.closest('[data-elements~="tabs"]');
	let tabContents = tabs.querySelectorAll('[data-tab]');

	tabContents.forEach((item) => {
		item.classList.toggle('is-active', id === item.dataset.tab);
	});

	// Example method to set the active tabs
	function setTabs(tabsContainer, activeTabId) {
		console.log(`Setting tabs for ${activeTabId} in ${tabsContainer}`);
	}

	setTabs(tabs, id);
	}
});