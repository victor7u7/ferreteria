// Define la variable del delay en segundos
const autoplayDelayInSeconds = 2;

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

      
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        /* que se repita o no imagenes */
        loop:true,
        /*  */
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

