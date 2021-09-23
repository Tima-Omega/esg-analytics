const more = document.querySelector('.international__more');

if(more) {
	more.addEventListener('click', function(){
		document.querySelector('.international__wrap-text').classList.toggle('open')
		document.querySelector('.international__text').classList.toggle('open')
		if (this.textContent === '>> развернуть') {
			this.textContent = '>> свернуть';
		} else {
			this.textContent = '>> развернуть'
		}
	});
}

document.addEventListener('scroll', function() {
	const upBtn = document.querySelector('.up');
	if(upBtn) {
		if(window.scrollY > document.querySelector('.header').clientHeight) {
			upBtn.style.display = 'flex';
		} else {
			upBtn.style.display = 'none';
		}
	}
})

const swiper = new Swiper('.swiper', {
	slidesPerView: 3,
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
	  },
	
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
});
