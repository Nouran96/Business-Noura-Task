$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        mouseDrag: false,
        touchDrag: false,
        nav: true,
        navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
        dots: false,
        items: 1,
        navSpeed: 1000,
        slideTransition: 'linear'
    });
});