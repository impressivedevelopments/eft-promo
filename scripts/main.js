window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // контекст меню
    document.body.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });

    // прелоадер
    window.addEventListener('load', () => {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        }, 500);
    });

    // анимация
    new WOW().init();

    // слайдер 
    var swiperMovie = new Swiper('.swiper-container-m', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiperGallery = new Swiper('.swiper-container-g', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // табы
    const tabs = () => {
        const tabHeader = document.querySelector('.order-list'),
            tab = tabHeader.querySelectorAll('.order-list__item'),
            tabContent = document.querySelectorAll('.order-edition');
        
        // Контент
        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            target = target.closest('.order-list__item');

            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();

    // стрелка наверх
    // const arrowUp = document.querySelector('.arrow-up');
    // let time;

    // const pageOfTop = () => {
    //     window.pageYOffset > 0 ? (window.scrollBy(0, -100), time = setTimeout(pageOfTop, 20)) : clearTimeout(time);
    // };

    // arrowUp.addEventListener('click', pageOfTop);

    // const checkTop = () => {
    //     (window.pageYOffset >= 1000) ? arrowUp.style.cssText = `display: block;`: arrowUp.style.cssText = `display: none;`;
    // };

    // window.addEventListener('scroll', checkTop);

    
    // выпадающий список
    const orderEditionList = document.querySelector('.order');

    const accordeon = (target) => {
        const items = target.querySelectorAll('li'),
            equipmentList = target.querySelector('ul');

        let equipmentListHeight = 0,
            equipmentListItemHeight = 24,
            actionBtn = target.childNodes[1];
                    
            equipmentList.style.height = equipmentListHeight + 'px';

        if (actionBtn.classList.contains('increase-btn')) {
            items.forEach((item, i) => {
                equipmentList.style.height = equipmentListItemHeight*(i + 1) + 'px';
                actionBtn.classList.remove('increase-btn');
                actionBtn.classList.add('decrease-btn');
            });
        } else {
            equipmentList.style.height = equipmentListHeight + 'px';
            actionBtn.classList.remove('decrease-btn');
            actionBtn.classList.add('increase-btn');  
        }
    };

    orderEditionList.addEventListener('click', e => {
        const target = e.target.closest('.equipment');
        if (target) {
            accordeon(target);
        }
    });
});
