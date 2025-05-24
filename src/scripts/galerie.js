document.addEventListener('DOMContentLoaded', function () {
    // Spustí Swiper pro mobilní zařízení
    if (window.innerWidth < 768) {
      new Swiper('.swiper', {
        loop: true,
        autoplay: {
          delay: 2500,
        },
        slidesPerView: 1.2,
        spaceBetween: 16,
      });
    }
  
    // Spustí LightGallery pro větší obrazovky
    if (window.innerWidth >= 768) {
      lightGallery(document.getElementById('lightgallery'), {
        speed: 500,
        plugins: [lgThumbnail],
      });
    }
  });