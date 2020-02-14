'use strict';

function parallax(event) {
    let layers = document.querySelectorAll('.layer');
    layers.forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${event.clientX * speed / 1000}px)`;
    });
}

document.addEventListener('mousemove', parallax);
