window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let bgTheme = document.querySelector('.factory-theme-bg'),
    objTheme = document.querySelector('.factory-theme-obj'),
    imgTheme = document.querySelector('.factory-theme-obj__img');

  const changeButton = document.getElementById('change-theme');

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
    elem.addEventListener('click', function (e) {
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
});
