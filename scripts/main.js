'use strict';
let bgTheme = document.querySelector('.factory-theme-bg'),
  objTheme = document.querySelector('.factory-theme-obj');

const changeButton = document.getElementById('change-theme');

document.body.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

changeButton.addEventListener('click', () => {
  bgTheme.classList.toggle('woods-theme-bg');
  objTheme.classList.toggle('woods-theme-obj');
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
});



