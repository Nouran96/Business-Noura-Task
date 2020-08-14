// Animate On Scroll Initiation
AOS.init();

/**** 
 * Control Active tabs with carousels 
****/
$('.tab').click(function(e) {
    // Add active class to the active tab and remove from all other tabs
    $('.tab').removeClass('active');
    $(this).addClass('active');

    // Get the class name of the active tab and display the corresponding carousel
    var carouselOrder = this.className.split(' ')[1];
    $('.owl-carousel').addClass('d-none');
    $(`.owl-carousel.${carouselOrder}`).removeClass('d-none');
});

// Don't change carousel with navigation to sign up page
$('.tab a').click(function(e) {
    e.stopPropagation();
})

/****
 * Navigate between signin and signup forms
 ****/
$('.form-btns').click(function() {

    $('.form-btns').removeClass('active');
    $(this).addClass('active');

    if($(this).is('#signup-btn')) {
        
        $('#signin-form').addClass('d-none');
        $('#signup-form').removeClass('d-none');
    } else {
        
        $('#signup-form').addClass('d-none');
        $('#signin-form').removeClass('d-none');
    }
});

/****
 * Navigate between types buttons
 ****/
$('.types button').click(function() {
    $('.types button').removeClass('active');
    $(this).addClass('active');
});

// Show popup when forms are submitted
$('#signup-form').submit((e) => submitForm(e));
$('#signin-form').submit((e) => submitForm(e));
$('#modal-form').submit((e) => showDonePopup(e));

function submitForm(e) {
    e.preventDefault();

    $('.spinner-border').removeClass('d-none');

    setTimeout(() => {
        $('.spinner-border').addClass('d-none');
        $('#exampleModal').modal({
            backdrop: 'static'
        });
    }, 2000);
}

function closeMainPopup() {
    $('#exampleModal').modal('hide');
}

function showDonePopup(e) {

    e.preventDefault();

    closeMainPopup();
    $('#done-popup').modal();
}