const more = document.querySelector('.international__more');
const burger = document.querySelector('.burger');
const burgerList = document.querySelector('.burger__list')
const upBtn = document.querySelector('.up');
const choose = document.querySelector('.choose__trigger')
const chooseList = document.querySelector('.choose__list')

if(choose) {
	choose.addEventListener('click', function(){
		this.classList.toggle('open')
		chooseList.classList.toggle('open')
	});
}

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



burger.addEventListener('click', function() {
	this.classList.toggle('open')
	burgerList.classList.toggle('open')
});

document.addEventListener('scroll', function() {
	if(upBtn) {
		if(window.scrollY > document.querySelector('.header').clientHeight) {
			upBtn.style.opacity = '1';
			upBtn.style.visibility = 'visible';
		} else {
			upBtn.style.opacity = '0';
			upBtn.style.visibility = 'hidden';

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

function addAutoResize() {
	document.querySelectorAll('[data-autoresize]').forEach(function (element) {
	  element.style.boxSizing = 'border-box';
	  const offset = element.offsetHeight - element.clientHeight;
	  element.addEventListener('input', function (event) {
		event.target.style.height = 'auto';
		event.target.style.height = event.target.scrollHeight + offset + 'px';
	  });
	  element.removeAttribute('data-autoresize');
	});
  }
addAutoResize();
