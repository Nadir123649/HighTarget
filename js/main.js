$(".jd-slider").slick({
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    arrows: true,
    dots: true,
    responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// fixed header
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var bannerHeight = document.querySelector('.hero-banner').offsetHeight;
    var scrollPosition = window.pageYOffset;

    if (scrollPosition >= bannerHeight) {
        header.classList.add('scrolled-header');
    } else {
        header.classList.remove('scrolled-header');
    }
});