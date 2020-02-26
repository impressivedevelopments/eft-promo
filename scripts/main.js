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

    // плавная прокрутка страницы
    const anchors = document.querySelectorAll('a[href*="#"]');
    anchors.forEach((elem) => {
        elem.addEventListener('click', e => {
            e.preventDefault();

            const blockID = elem.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
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
    const arrowUp = document.querySelector('.arrow-up');
    let time;

    const pageOfTop = () => {
        window.pageYOffset > 0 ? (window.scrollBy(0, -100), time = setTimeout(pageOfTop, 20)) : clearTimeout(time);
    };

    arrowUp.addEventListener('click', pageOfTop);

    const checkTop = () => {
        (window.pageYOffset >= 1000) ? arrowUp.style.cssText = `display: block;`: arrowUp.style.cssText = `display: none;`;
    };

    window.addEventListener('scroll', checkTop);

    
    // выпадающий список
    const equipmentListItems = document.querySelectorAll('.equipment-list__item'),
        decreaseBtn = document.getElementById('decrease-btn'),
        equipment = document.querySelector('.equipment');

    let isListOpen = false;
    equipment.addEventListener('click', event => {
      const target = event.target;
        if (target.matches('#increase-btn') && isListOpen) {
            isListOpen = false;
            equipmentListItems.forEach((item, i) => {
                setTimeout(() => {
                    item.style.display = 'block';
                }, 20 * i);
            });
            decreaseBtn.style.display = 'block';
        } else if (target.matches('#increase-btn') && !isListOpen) {
            isListOpen = true;
            equipmentListItems.forEach((item, i) => {
                setTimeout(() => {
                    item.style.display = 'none';
                }, 20 * i);
            });
            decreaseBtn.style.display = 'none';
        }
    });


    // increaseBtn.addEventListener('click', () => {

    //     equipmentListItems.forEach((item, i) => {
    //         setTimeout(() => {
    //             item.style.display = 'block';
    //         }, 20 * i);
    //     });
    //     decreaseBtn.style.display = 'block';

    //     // Типо кроссбраузерность)
    //     // for (let i = 0; i < equipmentListItems.length; i++) {
    //     //     setTimeout(() => {
    //     //         equipmentListItems[i].style.display = 'block';
    //     //     }, 20*i);
    //     // }
    // });

    // decreaseBtn.addEventListener('click', () => {

    //     equipmentListItems.forEach((item, i) => {
    //         setTimeout(() => {
    //             item.style.display = 'none';
    //         }, 20 * i);
    //     });
    //     decreaseBtn.style.display = 'none';

    //     // Типо кроссбраузерность)
    //     // for (let i = 0; i < equipmentListItems.length; i++) {
    //     //     setTimeout(() => {
    //     //         equipmentListItems[i].style.display = 'none';
    //     //     }, 20*i);
    //     // }
    // });
  
});