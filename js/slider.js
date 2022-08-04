const swiper = new Swiper('.s1', {
    slidesPerView: "2",
    grabCursor: true,
    loop: true,
    spaceBetween: 40,

    navigation: {
        nextEl: '#nav1',
        prevEl: '#nav1',
    },

    pagination: {
        el: "#pag1",
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

const swiper2 = new Swiper2('.s2', {
    slidesPerView: "1",
    loop: true,

    pagination: {
        el: "#pag2",
        type: 'bullets',
    },

    autoplay: {
        delay:10000,
        disableOnInteraction:false
    },

});