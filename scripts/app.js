document.addEventListener("DOMContentLoaded", function() {
  const emailForm = document.getElementById("emailForm");
  const emailInput = document.getElementById("email");
  const submitButton = document.getElementById("submitButton");

  emailForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const email = emailInput.value.trim();

      if (!emailPattern.test(email)) {
          alert("الرجاء إدخال بريد إلكتروني صحيح.");
          return;
      }

      alert("شكرًا لك! سنتواصل معك قريبًا.");
      emailInput.value = ""; 
  });
});
// #03becd
// #6f2cee

document.addEventListener("DOMContentLoaded", function() {
  const testimonialsContainer = document.querySelector('.testimonials-carousel');
  const testimonials = testimonialsContainer.querySelectorAll('.testimonial');
  let currentIndex = 0;
  const intervalTime = 2500; 
  let slideInterval;

  function startSlide() {
      slideInterval = setInterval(() => {
          nextSlide();
      }, intervalTime);
  }

  function nextSlide() {
      testimonials[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % testimonials.length;
      testimonials[currentIndex].style.display = 'block';
  }

  function prevSlide() {
      testimonials[currentIndex].style.display = 'none';
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      testimonials[currentIndex].style.display = 'block';
  }



  startSlide();
});

