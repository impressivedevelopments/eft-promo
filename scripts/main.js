'use strict';
let bgTheme = document.querySelector('.factory-theme-bg'),
    objTheme = document.querySelector('.factory-theme-obj'),
    imgTheme = document.querySelector('.factory-theme-obj__img');

const changeButton = document.getElementById('change-theme');

// контекст меню
document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

// изменение темы
changeButton.addEventListener('click', () => {
      if (bgTheme.classList.contains('factory-theme-bg')) {
        imgTheme.classList.remove('factory-themeobj__img');
        imgTheme.classList.add('woods-theme-obj__img');
        imgTheme.setAttribute('src', "img/branch.png");

        bgTheme.classList.remove('factory-theme-bg');
        bgTheme.classList.add('woods-theme-bg');

        objTheme.classList.remove('factory-theme-obj');
        objTheme.classList.add('woods-theme-obj');
      } else {
        imgTheme.classList.remove('woods-theme-obj__img');
        imgTheme.classList.add('factory-theme-obj__img');
        imgTheme.setAttribute('src', "img/lamp.webp");

        bgTheme.classList.remove('woods-theme-bg');
        bgTheme.classList.add('factory-theme-bg');

        objTheme.classList.remove('woods-theme-obj');
        objTheme.classList.add('factory-theme-obj');
      }
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



