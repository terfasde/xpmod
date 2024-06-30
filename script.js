let currentSlide = 0;

function changeSlide(n) {
    let slides = document.getElementsByClassName("slide");
    currentSlide += n;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}
