const swiper = new Swiper('.swiper', {
    slidesPerView: "2",
    grabCursor: true,
    loop: true,
    spaceBetween: 40,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },

    autoplay: {
        delay:7000,
        disableOnInteraction:false
    },

    breakpoints: {
        359: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        1100: {
            slidesPerView: 2,
        },

        1380: {
            slidesPerView: 2,
        }
    }
});