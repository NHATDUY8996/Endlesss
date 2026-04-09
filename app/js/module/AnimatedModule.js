export default function AnimatedModule() {
    if (innerWidth > 1200) {
        let $window = $(window);

        function scrollAddClass(el, className) {
            $(el).each(function () {
                let el = this;
                if (
                    $(el).offset().top <
                    $window.scrollTop() + ($window.height() / 10) * 8
                ) {
                    $(el).addClass(className);
                }
            });
        }

        function bindImageAnimations() {
            scrollAddClass(".load-img", "is-inview");
            scrollAddClass(".load-img-second", "is-isview");
            scrollAddClass(".load-img-third", "is-inview");
            scrollAddClass(".txt-focus", "is-inview");
            scrollAddClass(".txt-animated", "is-inview");
            scrollAddClass(".txt-spl", "is-inview");
            scrollAddClass(".add-img", "is-inview");
            scrollAddClass(".scroll-item", "is-inview");
            scrollAddClass(".add-class", "is-inview");
            scrollAddClass(".img-left", "is-inview");
            scrollAddClass(".img-right", "is-inview");
            scrollAddClass(".img-center", "is-inview");

            $window.on("scroll", function () {
                scrollAddClass(".load-img", "is-inview");
                scrollAddClass(".load-img-second", "is-inview");
                scrollAddClass(".load-img-third", "is-inview");
                scrollAddClass(".txt-focus", "is-inview");
                scrollAddClass(".txt-animated", "is-inview");
                scrollAddClass(".txt-spl", "is-inview");
                scrollAddClass(".add-img", "is-inview");
                scrollAddClass(".add-class", "is-inview");
                scrollAddClass(".scroll-item", "is-inview");
                scrollAddClass(".img-left", "is-inview");
                scrollAddClass(".img-right", "is-inview");
                scrollAddClass(".img-center", "is-inview");
            });
        }
        bindImageAnimations();
    }

    // let moveItems = document.querySelectorAll(".move-item");
    // let height = window.innerHeight;
    // if (moveItems.length > 0 && window.innerWidth > 1200) {
    //     window.addEventListener("scroll", () => {
    //         moveItems.forEach((item) => {
    //             let pos = item.getBoundingClientRect().top;
    //             if (pos > -height / 2 && pos < height) {
    //                 let Y = (pos / height) * 100;
    //                 if (item.classList.contains("mx")) {
    //                     item.style.transform = `translateX(` + Y + `px)`;
    //                 } else {
    //                     item.style.transform = `translateY(` + Y + `px)`;
    //                 }
    //             }
    //         });
    //     });
    // }

    // Cusor
    $(document).ready(function () {
        $(this).mousemove(function (e) {
            if (
                e.target.closest(".swiper-control-btn") ||
                e.target.closest("a") ||
                e.target.closest(".header-search-icon")
            ) {
                $(".banner-home .cursor-custom").addClass("hide");
            } else {
                $(".banner-home .cursor-custom").removeClass("hide");
            }
            if ($(window).width() > 1500) {
                $(".banner-home .cursor-custom").css({
                    top: e.pageY - 20,
                    left: e.pageX - 20,
                });
            } else {
                $(".banner-home .cursor-custom").css({
                    top: e.pageY - 20,
                    left: e.pageX - 20,
                });
            }
        });
    });

    function reveal() {
        var reveals = document.querySelectorAll(".parallaxSecJS");

        reveals.forEach((ele, i) => {
            var windowHeight = window.innerHeight;
            var elementTop = ele.getBoundingClientRect().top;
            var elementBottom = ele.getBoundingClientRect().bottom;
            var elementVisible = 150;
            const reveal = ele.querySelectorAll(".parallaxJS");
            const paraZoom = ele.querySelectorAll(".paraZoom");
            if (elementTop < windowHeight - elementVisible) {
                if (reveal.length > 0) {
                    reveal.forEach((ele2, i2) => {
                        let pos = elementTop / -2;
                        // console.log(pos);
                        if (ele2.querySelector("img")) {
                            ele2.querySelector("img").style.top = `${pos}px`;
                        }
                        if (ele2.querySelector("video")) {
                            ele2.querySelector("video").style.top = `${pos}px`;
                        }
                    });
                }
            }
        });
    }
    if (window.innerWidth > 1200) {
        reveal();
        window.addEventListener("scroll", reveal);
    }

    //Scroll Percent page
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            scrollProgress();
        }
    });

    function scrollProgress() {
        let winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        let height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        const progress = document.querySelector(".header-progress");
        if (progress) {
            progress.style.width = scrolled + "%";
        }
    }
    scrollProgress();

    // Check if the element with the class 'title-pri ttdecor' exists
    // if (document.querySelector('.title-pri.ttdecor')) {
    //     document.querySelectorAll('.title-pri.ttdecor span').forEach(function (span) {
    //       const text = span.textContent;
    //       span.classList.add('splitting'); // Add the 'splitting' class

    //       span.innerHTML = ''; // Clear the existing text content
    //       const words = text.split(' '); // Split text by spaces (words)

    //       let charIndex = 0; // This will track the total index of characters across words

    //       words.forEach(function (word, wordIndex) {
    //         const wordElement = document.createElement('span');
    //         wordElement.classList.add('word'); // Wrap each word in a span for spacing

    //         word.split('').forEach(function (char) {
    //           const charElement = document.createElement('span');
    //           charElement.classList.add('char');
    //           charElement.textContent = char;
    //           wordElement.appendChild(charElement); // Append each character to the word

    //           // Set the delay for each character (continuing from the last character)
    //           charElement.style.transitionDelay = `${(charIndex + 1) * 0.1}s`;

    //           // Increment charIndex for the next character
    //           charIndex++;
    //         });

    //         span.appendChild(wordElement); // Append each word (with characters inside) back to the span
    //         if (wordIndex < words.length - 1) {
    //           span.appendChild(document.createTextNode(' ')); // Add a space between words
    //         }
    //       });
    //     });
    //   }
}
