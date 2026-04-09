export default function SwiperModule() {
    function functionSlider(element, customizeOption, typePagi) {
        const swiperSlider = document.querySelectorAll(element);
        if (swiperSlider.length > 0) {
            swiperSlider.forEach((item) => {
                const swiper = item.querySelector(".swiper");
                const pagi =
                    typePagi === "scrollbar"
                        ? item.querySelector(".swiper-scrollbar")
                        : item.querySelector(".swiper-pagination");
                const next = item.querySelector(".swiper-next");
                const prev = item.querySelector(".swiper-prev");

                // Mặc định kiểu pagination là 'bullets' nếu không chỉ định
                if (!typePagi) {
                    typePagi = "bullets";
                }

                const swiperOptions = {
                    watchSlidesProgress: true,
                    pagination: {
                        el: pagi,
                        type: typePagi,
                        clickable: true,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    fadeEffect: {
                        crossFade: true,
                    },
                    ...customizeOption,
                };

                // Nếu `typePagi` là `scrollbar`, cấu hình lại cho Swiper
                if (typePagi === "scrollbar") {
                    swiperOptions.scrollbar = {
                        el: pagi,
                        draggable: true,
                    };
                    delete swiperOptions.pagination; // Không dùng `pagination` khi sử dụng `scrollbar`
                }

                // Nếu element có class "loop", bật chế độ loop
                if (item.classList.contains("swiper-loop")) {
                    swiperOptions.loop = true;
                }

                var slide = new Swiper(swiper, swiperOptions);

                // Kiểm tra và ẩn nút điều hướng nếu số lượng slide không vượt quá slidesPerView
                function toggleNavigationButtons() {
                    const totalSlides = slide.slides.length;
                    const visibleSlides = slide.slidesPerViewDynamic
                        ? slide.slidesPerViewDynamic()
                        : 1;

                    if (totalSlides <= visibleSlides) {
                        if (next) next.style.display = "none";
                        if (prev) prev.style.display = "none";
                    } else {
                        if (next) next.style.display = "flex";
                        if (prev) prev.style.display = "flex";
                    }
                }

                // Kiểm tra ngay khi khởi tạo Swiper
                slide.on("init", toggleNavigationButtons);
                slide.on("resize", toggleNavigationButtons);
                slide.init();

                // Tìm và cuộn tới slide chứa .swiper-btn.active
                const activeSlide = item.querySelector(
                    ".swiper-slide .swiper-btn.active",
                );
                if (activeSlide) {
                    const activeSlideIndex = Array.from(slide.slides).findIndex(
                        (s) => s.contains(activeSlide),
                    );
                    if (activeSlideIndex !== -1) {
                        slide.slideTo(activeSlideIndex, 0);
                    }
                }
            });
        }
    }

    function functionThumbSlider(element, customizeOption) {
        const swiperSlider = document.querySelectorAll(element);
        const swiperInstances = [];

        swiperSlider.forEach((item) => {
            const swiper = item.querySelector(".swiper");

            const slide = new Swiper(swiper, {
                watchSlidesProgress: true,
                ...customizeOption,
            });

            swiperInstances.push(slide);
        });

        return swiperInstances;
    }

    function functionMainSlider(
        element,
        thumbSliderInstances,
        customizeOption,
        typePagi,
    ) {
        const swiperSlider = document.querySelectorAll(element);

        if (swiperSlider) {
            swiperSlider.forEach((item, index) => {
                const swiper = item.querySelector(".swiper");
                const pagi = item.querySelector(".swiper-pagination");
                const next = item.querySelector(".swiper-next");
                const prev = item.querySelector(".swiper-prev");

                if (!typePagi) {
                    typePagi = "bullets";
                }

                new Swiper(swiper, {
                    watchSlidesProgress: true,
                    pagination: {
                        el: pagi,
                        type: typePagi,
                        clickable: true,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    fadeEffect: {
                        crossFade: true,
                    },
                    thumbs: {
                        swiper: thumbSliderInstances[index], // Sử dụng thumb slider tương ứng
                    },
                    ...customizeOption,
                });
            });
        }
    }

    function functionSliderGrid(
        element,
        customizeOption,
        typePagi,
        totalSlides,
    ) {
        const swiperSliders = document.querySelectorAll(element);
        if (swiperSliders) {
            swiperSliders.forEach((slider) => {
                const swiper = slider.querySelector(".swiper");
                const pagi = slider.querySelector(".swiper-pagination");
                const next = slider.querySelector(".swiper-next");
                const prev = slider.querySelector(".swiper-prev");
                if (!typePagi) {
                    typePagi = "bullets";
                }

                // Tính số hàng dựa trên số lượng slide của slider hiện tại
                const slideCount =
                    slider.querySelectorAll(".swiper-slide").length;
                const rows = slideCount < totalSlides ? 1 : 2;

                var slide = new Swiper(swiper, {
                    watchSlidesProgress: true,
                    pagination: {
                        el: pagi,
                        type: typePagi,
                        clickable: true,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    fadeEffect: {
                        crossFade: true,
                    },
                    grid: {
                        rows: rows,
                        fill: "row",
                    },
                    ...customizeOption, // Sử dụng toàn bộ customizeOption
                });
            });
        }
    }
    functionSlider(".filter-slider", {
        speed: 1200,
        slidesPerView: "auto",
        spaceBetween: 12,
    });

    functionSlider(".newsrlt", {
        speed: 1200,
        slidesPerView: 3,
        spaceBetween: 24,
        autoplay: {
            delay: 8000,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            501: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            901: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });
    functionSlider(".swiper-row-3", {
        speed: 1200,
        slidesPerView: 3,
        spaceBetween: 24,
        autoplay: {
            delay: 8000,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            501: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            901: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });
    functionSlider(".swiper-row-4", {
        speed: 1200,
        slidesPerView: 4,
        spaceBetween: 24,
        autoplay: {
            delay: 8000,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            501: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            901: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1201: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
    });
    functionSlider(".tourrlt-slider", {
        speed: 1200,
        slidesPerView: 3,
        spaceBetween: 24,
        autoplay: {
            delay: 8000,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            501: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            901: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });
    var bnhslider = new Swiper(".bnh-slider .swiper", {
        speed: 1200,
        slidesPerView: 1,
        effect: "coverflow",
        parallax: true,
        coverflowEffect: {
            rotate: 0.05,
            depth: 0,
            stretch: 0,
            modifier: 1,
            slideShadows: false,
        },
        on: {
            init: function () {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find(".bnh-img")
                        .attr({
                            "data-swiper-parallax": 0.9 * swiper.width,
                        });
                }
            },
            resize: function () {
                this.update();
            },
        },
    });
    var bnhswiper = new Swiper(".bnh-swiper .swiper", {
        speed: 1200,
        slidesPerView: 1,
        parallax: true,
        autoplay: {
            delay: 8000,
        },
        pagination: {
            el: ".bnh-swiper .swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    });
    bnhswiper.controller.control = bnhslider;
    bnhslider.controller.control = bnhswiper;

    functionSlider(
        ".tourdt-slider ",
        {
            speed: 1200,
            slidesPerView: 1,
            spaceBetween: 24,
            autoplay: {
                delay: 8000,
            },
        },
        "fraction",
    );
}
