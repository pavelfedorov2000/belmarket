$(function () {
    /* @@include('tabs.js') */

    $('.burger-btn').on('click', function () {
        $('body').addClass('_lock');
        $('.drop-menu').addClass('drop-menu--active');
    });
    $('.drop-menu__close').on('click', function () {
        $('body').removeClass('_lock');
        $('.drop-menu').removeClass('drop-menu--active');
    });

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

    const communitySlider = new Swiper('.community__slider', {
        loop: true,
        slidesPerView: 'auto',
        //spaceBetween: 0,
        /* pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.news__slider-btn--prev',
            prevEl: '.news__slider-btn--next',
        }, */
        /* breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 4,
            }
        } */
    });

    if ($(window).width() < 992) {
        const pointsOfViewSlider = new Swiper('.points-of-view__slider', {
            loop: true,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                },
            }
        });
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
        const videoSlider = new Swiper('.video-slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 54,
                },
            }
        });
        const popularArticlesSlider = new Swiper('.popular-articles-slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 32,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
            }
        });
        const opinionsSlider = new Swiper('.opinion-articles', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
            }
        });
        const accidentsSlider = new Swiper('.accidents-slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 32,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
            }
        });
    }

    @@include('dinamic-adapt.js')
});





