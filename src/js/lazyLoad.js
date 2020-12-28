function ativaNoScroll() {
	
	document.querySelectorAll('.portfolio__imagem').forEach((img, index) => {
		if(img.getBoundingClientRect().top < window.innerHeight) {
			img.src = img.getAttribute('data-src');
		};		
	})

}

window.addEventListener('scroll', ativaNoScroll);