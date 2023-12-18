// Define la variable del delay en segundos
const autoplayDelayInSeconds = 9;

document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper', {
      // Configura las opciones de Swiper
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        /* que se repita o no imagenes */
        loop:true,
        /*  */

         effect: "coverflow",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
          delay: autoplayDelayInSeconds * 1000, // Convierte segundos a milisegundos
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }
      });


      
});

