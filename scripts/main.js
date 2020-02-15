'use strict';
document.body.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

let bgTheme = document.querySelector('.factory-theme-bg'),
    objTheme = document.querySelector('.factory-theme-obj');

const changeButton = document.getElementById('change-theme');

changeButton.addEventListener('click', () => {
  bgTheme.classList.toggle('woods-theme-bg');
  objTheme.classList.toggle('woods-theme-obj');
});


