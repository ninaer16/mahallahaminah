
const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').clientWidth;

function nextSlide() {
  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = 'translateX(' + (-slideWidth) + 'px)';
  setTimeout(() => {
    slides.appendChild(slides.firstElementChild);
    slides.style.transition = "none";
    slides.style.transform = 'translateX(0)';
  }, 500);
}

function prevSlide() {
  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = 'translateX(' + slideWidth + 'px)';
  setTimeout(() => {
    slides.prepend(slides.lastElementChild);
    slides.style.transition = "none";
    slides.style.transform = 'translateX(0)';
  }, 500);
}

setInterval(nextSlide, 3000); // Auto slide every 3 seconds


var scrollToTopButton = document.getElementById("scrollToTopBtn");

//button will show when user scroll 20px down
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

function scrollToTop() {
  // Scroll to top with smooth animation
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

