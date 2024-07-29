document.addEventListener('DOMContentLoaded', function() {
    // Banner auto slide
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 3000);

    // Form validation
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var interest = document.getElementById('interest').value;

        if (!name || !email || !interest) {
            alert('Please fill out all required fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Form submitted successfully!');
        form.reset();
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
