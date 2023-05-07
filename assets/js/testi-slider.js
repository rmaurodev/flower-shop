/*--------------- Testimonial Slider ---------------*/
var swiper = new Swiper(".testimonial-slider", {

    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 4,
        },

        1024: {
            slidesPerView: 6,
        },
    },

}); 