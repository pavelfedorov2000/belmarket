$(function () {
    /* @@include('tabs.js') */

    const newsSlider = new Swiper('.news__slider', {
        loop: true,
        slidesPerView: 4,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.news__slider-btn--prev',
            prevEl: '.news__slider-btn--next',
        },
    });
    const otherMaterialsSlider = new Swiper('.other-materials__slider', {
        loop: true,
        slidesPerView: 4,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});





