$('.tab').click(function() {
    // Add active class to the active tab and remove from all other tabs
    $('.tab').removeClass('active');
    $(this).addClass('active');

    // Get the class name of the active tab and display the corresponding carousel
    var carouselOrder = this.className.split(' ')[1];
    $('.owl-carousel').addClass('d-none');
    $(`.owl-carousel.${carouselOrder}`).removeClass('d-none');
});

$('input:valid').next().removeClass('d-none');