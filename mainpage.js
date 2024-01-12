
var scrollToTopButton = document.getElementById("scrollToTopBtn");

//button will show when user scroll 20px down
window.onscroll = function() {
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