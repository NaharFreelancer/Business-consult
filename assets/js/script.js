// Swiper-1 Business
// var swiper = new Swiper(".business-swiper", {
//   slidesPerView: 3,
//       spaceBetween: 30,
  
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
     
//       mousewheel: true,
//       keyboard: true,
//     });

    $('.business-slider-class').slick({
      dots: false,
      infinite: false,
      speed: 300,
      centerPadding:"30px",
      spaceBetween: 30,
      slidesToShow: 3,
      slidesToScroll: 4,
      prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


// Swiper-2
// var swiper = new Swiper(".expert-swiper", {
//   slidesPerView: 3,
//       spaceBetween: 30,
  
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       // pagination: {
//       //   el: ".swiper-pagination",
//       // },
//       mousewheel: true,
//       keyboard: true,
//     });


    $('.expert-slider-class').slick({
      dots: false,
      infinite: false,
      speed: 300,
      centerPadding:"30px",
      spaceBetween: 30,
      slidesToShow: 3,
      slidesToScroll: 4,
      prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


// Swiper-3
var swiper = new Swiper(".testimonial-swiper", {
  spaceBetween: 30,
      centeredSlides: true,
      // autoplay:  {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});



