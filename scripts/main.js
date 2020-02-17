'use strict';
let bgTheme = document.querySelector('.factory-theme-bg'),
    objTheme = document.querySelector('.factory-theme-obj');

const changeButton = document.getElementById('change-theme');

document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

changeButton.addEventListener('click', () => {
    if (bgTheme.classList.contains('factory-theme-bg')) {
        bgTheme.classList.remove('factory-theme-bg');
        bgTheme.classList.add('woods-theme-bg');
        objTheme.classList.remove('factory-theme-obj');
        objTheme.classList.add('woods-theme-obj');
    } else {
        bgTheme.classList.remove('woods-theme-bg');
        bgTheme.classList.add('factory-theme-bg');
        objTheme.classList.remove('woods-theme-obj');
        objTheme.classList.add('factory-theme-obj');
    }
  
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
});



