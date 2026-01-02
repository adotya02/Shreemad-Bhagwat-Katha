document.addEventListener('DOMContentLoaded', function() {
    // Navbar Active Link Logic
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-link');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("active");
        }
    }

    // Booking Form Validation
    const bookingForm = document.querySelector('form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let name = document.getElementById('name').value;
            let mobile = document.getElementById('mobile').value;
            let location = document.getElementById('location').value;
            let date = document.getElementById('date').value;

            if (name === "" || mobile === "" || location === "" || date === "") {
                alert("कृपया सभी अनिवार्य फ़ील्ड भरें (Please fill all required fields)");
                return;
            }

            if (mobile.length < 10) {
                alert("कृपया सही मोबाइल नंबर दर्ज करें (Please enter a valid mobile number)");
                return;
            }

            // Simulate server request
            const submitBtn = document.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert("आपकी बुकिंग अनुरोध सफलतापूर्वक भेज दिया गया है! हम आपसे जल्द ही संपर्क करेंगे। (Your booking request has been sent successfully!)");
                bookingForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Smooth Scrolling for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


  AOS.init({
    once: true,        // animation sirf ek baar
    offset: 120,       // thoda natural scroll
    easing: 'ease-in-out'
  });