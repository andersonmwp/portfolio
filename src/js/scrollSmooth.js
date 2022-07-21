const linksInternos = document.querySelectorAll('.menuNav a[href^="#"]');

function scrollSection(event) {
	event.preventDefault();
	const href = event.currentTarget.getAttribute('href');
	const section = document.querySelector(href);
	
	section.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
}

linksInternos.forEach((link) => {
	link.addEventListener('click', scrollSection);
});

const linkAbertura = document.querySelector('.abertura a[href^="#"]');

function scrollInit(event){
	event.preventDefault();
	const href = event.currentTarget.getAttribute('href');
	const section = document.querySelector(href);
	
	section.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
}

linkAbertura.addEventListener('click', scrollInit);