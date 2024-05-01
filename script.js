document.addEventListener('DOMContentLoaded', function () {
  // Initialize Bootstrap Carousel for the testimonial slider
  var testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
    interval: 5000, // Set the interval for automatic sliding (in milliseconds)
    pause: 'hover' // Pause the slider on hover
  });

  // Custom slider controls
  var prevBtn = document.getElementById('carouselPrevBtn');
  var nextBtn = document.getElementById('carouselNextBtn');

  // Check if both buttons exist
  if (prevBtn && nextBtn) {
    // Add event listeners for the previous and next buttons
    prevBtn.addEventListener('click', function () {
      testimonialCarousel.prev();
    });

    nextBtn.addEventListener('click', function () {
      testimonialCarousel.next();
    });
  } else {
    console.error("One or both of the custom slider controls are missing.");
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Gallery modal image view
  var galleryImages = document.querySelectorAll('.gallery-item img');
  galleryImages.forEach(img => {
    img.addEventListener('click', function () {
      showModalImage(this.src);
    });
  });

  // Function to show image in modal
  function showModalImage(src) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImg');
    modal.style.display = 'block'; // Show the modal
    modalImg.src = src; // Set the source of the modal image to the clicked image source
  }
});
