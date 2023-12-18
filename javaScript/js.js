/* no veo necesario el siguiente codigo solo consume recursos demás
sobre todo los listeners
*/
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
// const swiperContainer = document.querySelector('.swiper');



function toggleMenu() {
  menu.classList.toggle("menu_opened");

//   var mySwiper = swiperContainer.swiper

//     if (menu.classList.contains("menu_opened")) {
//         mySwiper.autoplay.stop();
//         mySwiper.allowTouchMove = false; /* Deshabilita el deslizamiento del swiper */
//     } else {
//         mySwiper.autoplay.start();
//         mySwiper.allowTouchMove = true; /* Habilita el deslizamiento del swiper */
//     }
  
}


openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
