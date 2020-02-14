function parallax(event) {
    let layers = document.querySelectorAll('.layer');
    layers.forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${event.clientX*speed/1000}px)`;
    });
    console.dir(event);
}

document.addEventListener('mousemove', parallax);
