// --------- banner slider

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,

    },
    
});

// ------------  testimonial slider

$(document).ready(function () {
    $('.slickslidebox').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type = "button" class= "slick-prev"><i class="ri-arrow-left-s-line"></i></button>',

        nextArrow:'<button type="button" class="slick-next"><i class="ri-arrow-right-s-line"></i></button>',
       
    });
});
// -----------------  project slider

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// ----------counter no

$(document).ready(function () {

    $(".counter").counterUp({

        delay: 10,
        time: 1800,

    });


});

// ----------to top buttton

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 100) {

        toTop.classList.add("active");

    } else {

        toTop.classList.remove("active");
    }

})
    
// --------------loader

setTimeout(function () {

    $('.loader').fadeToggle();

}, 7200);


//---------  ---- navmenu

const menutoggle = document.querySelector(".menutoggle");

const navbar = document.querySelector(".navbar");

menutoggle.addEventListener("click", () => {

    menutoggle.classList.toggle("active");

    navbar.classList.toggle("active");

})


















