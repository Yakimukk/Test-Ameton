
const slider = document.querySelector('.swiper-container');
if (slider) {
    new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      centeredSlidesBounds: true,
      spaceBetween: 24,
      speed: 500,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
      },
      watchOverflow: true,
    });
}


