$(function () {
    /* $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $('.tabs-content').removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
}); */

    const newsSlider = new Swiper('.news__slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.news__slider-btn--prev',
            prevEl: '.news__slider-btn--next',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 4,
            }
        }
    });
    const otherMaterialsSlider = new Swiper('.other-materials__slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.other-materials__slider-btn--prev',
            prevEl: '.other-materials__slider-btn--next',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 4,
            },
        }
    });

    if ($(window).width() < 992) {
        const popularSlider = new Swiper('.popular__slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.popular__slider-btn--prev',
                prevEl: '.popular__slider-btn--next',
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
            }
        });
        const newspaperArchiveSlider = new Swiper('.newspaper-single-archive__slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
            }
        });
    }
});





