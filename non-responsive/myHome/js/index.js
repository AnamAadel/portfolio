// Initialize Swiper

var swiper = new Swiper(".mycarousel", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction:false,
      },
      loop: true,
  });