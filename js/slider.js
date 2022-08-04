const swiper = new Swiper('.swiper', {
    slidesPerView: "2",
    grabCursor: true,
    loop: true,
    spaceBetween: 40,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});