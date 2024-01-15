
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

function submitForm() { 
    //this function used in online reporting page
    // Directly submit the form
    document.getElementById("reportForm").submit();
    alert("Thank you! Your report has been successfully submitted.");

      window.location.href = window.location.href;

  }
