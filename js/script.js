
var slider = document.querySelector('.FAQ-container');

if (slider) {
  new Swiper('.FAQ-container', {

    slidesPerView: 'auto',

 
    centeredSlidesBounds: true,

  

    spaceBetween: 24,

 
    speed: 500,


    loop: true,


    navigation: {
      nextEl: '.FAQ-card-arrow-prev',
      prevEl: '.FAQ-card-arrow-next',
    },


    breakpoints: {
      // 540: {
      //   slidesPerView: 'auto',
      // },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },


    watchOverflow: true,


  });
}

/* let width = 282; // ширина картинки


let list = document.querySelector('.FAQ-cards')
let listElems = document.querySelectorAll('.FAQ-card')

let position = 0; // положение ленты прокрутки


document.querySelector('.FAQ-card-arrow').onclick = function() {
    position -= width 
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px'
} */




