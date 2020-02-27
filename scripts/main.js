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

// графики

const ctxRadar = document.getElementById('radarChart').getContext('2d');
const radarChart = new Chart(ctxRadar, {
    type: 'radar',
    data: {
        labels: ['Завод', 'Берег', 'Развязка', 'Таможня', 'Лес', 'Резерв', 'Лаборатория', 'Улицы Таркова'],
        datasets: [{
            label: 'Количество сессий за день',
            data: [54, 37, 46, 82, 34, 79, 50, 80],
            pointBacgroundColor: '#9a8866',
            backgroundColor: '#9a886650',
            borderColor: '#9a8866',
        }, 
        {
            label: 'Количество сессий в среднем за месяц',
            data: [60, 74, 42, 86, 52, 52, 55, 102],
            pointBacgroundColor: '#aaaaaa',
            backgroundColor: '#aaaaaa50',
            borderColor: '#aaaaaa'},
        ]
    },
    options: {        
        legend: {
            labels: {
                fontColor: '#aaaaaa',
                fontFamily: 'Bender'
            }
        },
        scale: {
            angleLines: {
                display: true,
                color: '#ffffff25'
            },
            gridLines: {
                display: true,
                color: '#ffffff25'
            },
            ticks: {                
                backdropColor: 'transparent',           
                fontColor: '#aaaaaa',
                fontFamily: 'Bender'
            }
        }
    },
});

const ctxPie = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctxPie, {
    type: 'doughnut',
    data: {
        labels: ['Выживаний', 'Смертей'],
        datasets: [{
            data: [62, 38, 0, 0],
            borderWidth: 3,
            borderColor: [
                '#aaaaaa',
                '#9a8866',
                '#9a8866',
                '#aaaaaa',
            ],
            backgroundColor: [
                '#aaaaaa50',
                '#9a886650',
                '#9a886650',
                '#aaaaaa50',
            ],
        },]
    },
    
    options: {
        cutoutPercentage: 25,        
        legend: {
            labels: {
                fontColor: '#aaaaaa',
                fontFamily: 'Bender'
            }
        },
    },
});

const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        datasets: [{
            label: 'Убито USEC',
            data: [1824, 4231, 965, 521, 2452, 8566, 1200, 7620, 2752, 6578, 6211, 2227],
            backgroundColor: '#9a886650',
            borderColor: '#9a8866',
        },
        {
            label: 'Убито BEAR',
            data: [6454, 2431, 7565, 4201, 9452, 5560, 2400, 6080, 4562, 1448, 6751, 1177], 
            backgroundColor: '#aaaaaa50',
            borderColor: '#aaaaaa',
        }],
    },
    options: { 
        legend: {
            labels: {
                fontColor: '#aaaaaa',
                fontFamily: 'Bender'
            }
        },
        scales: {            
          xAxes: [{
            display: true,
            gridLines: {
              display: true,
              color: '#ffffff25',
            },
            scaleLabel: {
              display: true,
              labelString: 'Месяц',              
              fontColor: '#aaaaaa',
              fontFamily: 'Bender'
            },
          }],
          yAxes: [{
            display: true,
            gridLines: {
              display: true,
              color: '#ffffff25',
            },
            scaleLabel: {
              display: true,
              labelString: 'Убийства',        
              fontColor: '#aaaaaa',
              fontFamily: 'Bender'
            }
          }]
        }
    },
});
