$(document).ready(function () {

  // sticky menu
  $(window).scroll(function () {
    var sticky = $('.TopHeader'),
      scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
  // sticky menu
  // back to top
  //  Banner
  // Get all the background divs
  var backgrounds = document.querySelectorAll('.background');
  // Get the slider and the images
  const slider = document.querySelector('.slider-images');
  const images = Array.from(slider.children);

  // Set the initial image index
  let imageIndex = 0;

  // Update the slider
  function updateSlider() {
    // Remove the 'active', 'previous', 'next', and 'inactive' classes from all images
    images.forEach(image => {
      image.classList.remove('active', 'previous', 'next', 'inactive');
    });

    // Add the 'active' class to the current image
    images[imageIndex].classList.add('active');

    // Add the 'previous' class to the image before the current one
    if (imageIndex - 1 >= 0) {
      images[imageIndex - 1].classList.add('previous');
    } else {
      images[images.length - 1].classList.add('previous');
    }

    // Add the 'next' class to the image after the current one
    if (imageIndex + 1 < images.length) {
      images[imageIndex + 1].classList.add('next');
    } else {
      images[0].classList.add('next');
    }

    // Add the 'inactive' class to the other images
    images.forEach((image, index) => {
      if (index !== imageIndex && index !== (imageIndex - 1 + images.length) % images.length && index !== (imageIndex + 1) % images.length) {
        image.classList.add('inactive');
      }
    });

    // Set the opacity of all the background divs to 0
    backgrounds.forEach((background) => {
      background.style.opacity = 0;
    });
    // If the current image is active, set the opacity of the corresponding background div to 1
    if (images[imageIndex].classList.contains('active')) {
      backgrounds[imageIndex].style.opacity = 1;
    }
    // Update the image index
    imageIndex = (imageIndex + 1) % images.length;
  }
  updateSlider();
  // Update the slider every 3 seconds
  setInterval(updateSlider, 4000);

  images[1].classList.add('next');
  images[2].classList.add('inactive');
  images[3].classList.add('inactive');
  images[4].classList.add('previous');
  images[0].classList.add('active');
  //  Banner

  let scrollToTop = document.getElementById("bottomToUp");
  window.onscroll = function () {
    scroll();
  };
  function scroll() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      scrollToTop.style.display = "flex";
    } else {
      scrollToTop.style.display = "none";
    }
  }

  // back to top
  // Tabs
  $('.posttabhead').click(function () {
    var currentList = $(this);
    var triggerList = $(this).attr('id');

    if (currentList.hasClass('active')) {
    }
    else {
      currentList.closest('.contact-form').find('.posttabhead, .msg-form').removeClass('active');
      $('.msg-form[data-tab="' + triggerList + '"], .posttabhead[id="' + triggerList + '"]').addClass('active');
    }
  });
  // Tabs
  // faq
  // Accordion code faq section
  const accordionItems = document.querySelectorAll(".faq-container");

  accordionItems.forEach(item =>
    item.addEventListener("click", () => {
      const isItemOpen = item.classList.contains("open");
      accordionItems.forEach(item => item.classList.remove("open"));
      if (!isItemOpen) {
        item.classList.toggle("open");
      }
    })
  );
  // faq

  let SwiperTop = new Swiper('.logoSlider', {
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
    freeMode: true,
    autoplay: true,
    loop: true,
    slidesPerView: 5,
    allowTouchMove: false,
    disableOnInteraction: true
  });
  var swiper = new Swiper(".testimonial-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
      pagination:true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});