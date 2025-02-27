let index = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
    
    index++;
    if (index >= slides.length) { index = 0; }
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

window.onload = showSlides;