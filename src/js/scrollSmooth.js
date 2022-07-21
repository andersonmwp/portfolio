function initScrollSection() {
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
}

function initScrollAbertura() {
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
}

function initScrollWindow() {
	const sections = document.querySelectorAll('.js-scroll');
	const windowHalf = innerHeight * 0.75;
	
	function animateScroll() {
		sections.forEach((section) => {
			const sectionTop = section.getBoundingClientRect().top - windowHalf;
			if(sectionTop < 0) {
				section.classList.add('active');
			} else {
				section.classList.remove('active');
			}
		});
	}
	
	window.addEventListener('scroll', animateScroll);
}

initScrollSection();
initScrollAbertura();
initScrollWindow();