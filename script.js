$(document).ready(function() {
    $('.slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 1,
        responsive:{
            0:{
                stagePadding:10
            },
            360:{ 
                items: 1,
                stagePadding:30
            },
            768:{ 
                items: 2,
                stagePadding:30
            },
            992:{
                items:3
            }
        }
    });
})