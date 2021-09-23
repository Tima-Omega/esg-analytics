document.querySelector('.international__more').addEventListener('click', function(){
	document.querySelector('.international__wrap-text').classList.toggle('open')
	document.querySelector('.international__text').classList.toggle('open')
	if (this.textContent === '>> развернуть') {
		this.textContent = '>> свернуть';
	} else {
		this.textContent = '>> развернуть'
	}
});