window.addEventListener('load', () => {
    const more = document.querySelector('.international__more');
    const burger = document.querySelector('.burger');
    const burgerList = document.querySelector('.burger__list');
    const upBtn = document.querySelector('.up');
    const choose = document.querySelector('.choose__trigger');
    const chooseList = document.querySelector('.choose__list');
    // const input = document.querySelectorAll('.form__input');
    const aboutNav = document.querySelector('.about__nav');
    const burgerTrigger = document.querySelector('.menu-sec');
    const burgerBack = document.querySelector('.burger__back');
    const tabs = Array.from(document.querySelectorAll('.about__tab')).reverse();
    const titles = tabs.map((tab) => {
        const index = tab.href.indexOf('#') + 1;
        const id = decodeURIComponent(tab.href.substring(index));
        return document.getElementById(id);
    });

    if (burgerTrigger) {
        burgerTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.burger-submenu').classList.add('open');
        });
    }

    if (burgerBack) {
        burgerBack.addEventListener('click', function () {
            document.querySelector('.burger-submenu').classList.remove('open');
        });
    }

    if (choose) {
        choose.addEventListener('click', function () {
            this.classList.toggle('open');
            chooseList.classList.toggle('open');
        });
    }

    if (more) {
        more.addEventListener('click', function () {
            document.querySelector('.international__wrap-text').classList.toggle('open');
            document.querySelector('.international__text').classList.toggle('open');
            this.classList.toggle('open');
            if (this.textContent === '>> развернуть') {
                this.textContent = '>> свернуть';
            } else {
                this.textContent = '>> развернуть';
            }
        });
    }

    burger.addEventListener('click', function () {
        this.classList.toggle('open');
        burgerList.classList.toggle('open');
        document.body.classList.toggle('open');
        document.querySelector('.burger-submenu').classList.remove('open');
        document.querySelector('.header').classList.toggle('open');
    });

    window.addEventListener('scroll', function () {
        const y = window.scrollY;
        for (let i = 0; i < titles.length; i++) {
            const t = titles[i];
            if (t.getBoundingClientRect().y <= 1) {
                const tab = tabs[i];
                tab.classList.add('active');
                tabs.forEach((el) => {
                    if (el !== tab) {
                        el.classList.remove('active');
                    }
                });
                break;
            }
        }

        const headerEl = document.querySelector('.header');
        const footerEl = document.querySelector('.footer');

        if (aboutNav) {
            if (y > headerEl.clientHeight) {
                aboutNav.style.position = 'fixed';
                // aboutNav.style.padding = '24px 0';
                if (window.innerWidth > 992) {
                    aboutNav.style.padding = '24px 0';
                } else {
                    aboutNav.style.padding = '24px 16px';
                }
                aboutNav.style.background = '#ffffff';
            } else {
                // aboutNav.style.position = 'absolute';
                // aboutNav.style.padding = '0';
                aboutNav.style.background = 'transparent';
            }
        }
        if (upBtn) {
            if (y > headerEl.clientHeight) {
                upBtn.style.opacity = '1';
                upBtn.style.visibility = 'visible';
            } else {
                upBtn.style.opacity = '0';
                upBtn.style.visibility = 'hidden';
            }

            const footerY = footerEl.getBoundingClientRect().y;

            const diff = footerY - window.innerHeight;

            if (diff < 0) {
                upBtn.classList.add('absoluted');
            } else {
                upBtn.classList.remove('absoluted');
            }
        }
    });

    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
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

    // input.forEach((e) => {
    //     e.addEventListener('input', function () {
    //         if (e.value.length > 1) {
    //             e.classList.add('fill');
    //         }
    //     });
    // });
});
