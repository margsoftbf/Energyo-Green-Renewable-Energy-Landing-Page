let swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    centeredSlides: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        575: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        767: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        991: {
            slidesPerView: 4,
        }
    }
});