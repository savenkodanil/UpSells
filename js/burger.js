/******************************
*************БУРГЕР************
******************************/
$(document).ready(function() {
    $('.menu-container').click(function(event) {
        $('body , .overlay__header, .menu__content__nav, .menu__content, .menu-container, .menu__nav, .btn__login, .btn__join__now ').toggleClass('open');
    });

    $('.overlay__header , .nav__menu ').click(function(event) {
        $('.overlay__header, body , .menu__content__nav, .menu__content, .menu-container, .menu__nav, .btn__login, .btn__join__now').removeClass('open');
    });
});


