'use strict';

function parallax(event) {
    let layers = document.querySelectorAll('.layer');
    layers.forEach(layer => {
        let speedX = layer.getAttribute('data-speedX');
        let speedY = layer.getAttribute('data-speedY');
        layer.style.transform = `translate(${event.clientX * speedX / 1000}px, ${event.clientY * speedY / 1000}px)`;
    });
}

document.addEventListener('mousemove', parallax);
