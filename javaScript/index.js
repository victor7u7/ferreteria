const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");


function toggleMenu() {
    menu.classList.toggle("menu_opened");

    var mySwiper = swiperContainer.swiper

    if (menu.classList.contains("menu_opened")) {
        mySwiper.autoplay.stop();
        mySwiper.allowTouchMove = false; /* Deshabilita el deslizamiento del swiper */
        swiperContainer.classList.add("hidden");
    } else {
        mySwiper.autoplay.start();
        mySwiper.allowTouchMove = true; /* Habilita el deslizamiento del swiper */
    }

}
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menulinks = document.querySelectorAll(".menu a[href^=\"#\"]")
    menulinks.forEach(menulink =>{
        menulink.addEventListener("click", function(){
            menu.classList.remove("menu_opened");
        })
    })