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

    function DynamicAdapt(type) {
    this.type = type;
}

DynamicAdapt.prototype.init = function () {
    const _this = this;
    // ???????????? ????????????????
    this.??bjects = [];
    this.daClassname = "_dynamic_adapt_";
    // ???????????? DOM-??????????????????
    this.nodes = document.querySelectorAll("[data-da]");

    // ???????????????????? ??bjects ????????????????
    for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(",");
        const ??bject = {};
        ??bject.element = node;
        ??bject.parent = node.parentNode;
        ??bject.destination = document.querySelector(dataArray[0].trim());
        ??bject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        ??bject.place = dataArray[2] ? dataArray[2].trim() : "last";
        ??bject.index = this.indexInParent(??bject.parent, ??bject.element);
        this.??bjects.push(??bject);
    }

    this.arraySort(this.??bjects);

    // ???????????? ???????????????????? ??????????-????????????????
    this.mediaQueries = Array.prototype.map.call(this.??bjects, function (item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
    });

    // ?????????????????????? ?????????????????? ???? ??????????-????????????
    // ?? ?????????? ?????????????????????? ?????? ???????????? ??????????????
    for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];

        // ???????????? ???????????????? ?? ???????????????????? ????????????????????????
        const ??bjectsFilter = Array.prototype.filter.call(this.??bjects, function (item) {
            return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function () {
            _this.mediaHandler(matchMedia, ??bjectsFilter);
        });
        this.mediaHandler(matchMedia, ??bjectsFilter);
    }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, ??bjects) {
    if (matchMedia.matches) {
        for (let i = 0; i < ??bjects.length; i++) {
            const ??bject = ??bjects[i];
            ??bject.index = this.indexInParent(??bject.parent, ??bject.element);
            this.moveTo(??bject.place, ??bject.element, ??bject.destination);
        }
    } else {
        for (let i = 0; i < ??bjects.length; i++) {
            const ??bject = ??bjects[i];
            if (??bject.element.classList.contains(this.daClassname)) {
                this.moveBack(??bject.parent, ??bject.element, ??bject.index);
            }
        }
    }
};

// ?????????????? ??????????????????????
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
        destination.insertAdjacentElement('beforeend', element);
        return;
    }
    if (place === 'first') {
        destination.insertAdjacentElement('afterbegin', element);
        return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
}

// ?????????????? ????????????????
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
        parent.insertAdjacentElement('beforeend', element);
    }
}

// ?????????????? ?????????????????? ?????????????? ???????????? ????????????????
DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
};

// ?????????????? ???????????????????? ?????????????? ???? breakpoint ?? place 
// ???? ?????????????????????? ?????? this.type = min
// ???? ???????????????? ?????? this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return -1;
                }

                if (a.place === "last" || b.place === "first") {
                    return 1;
                }

                return a.place - b.place;
            }

            return a.breakpoint - b.breakpoint;
        });
    } else {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return 1;
                }

                if (a.place === "last" || b.place === "first") {
                    return -1;
                }

                return b.place - a.place;
            }

            return b.breakpoint - a.breakpoint;
        });
        return;
    }
};

const da = new DynamicAdapt("max");
da.init();
});





