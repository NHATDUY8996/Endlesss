export default function ComponentModule() {
    const monacontents = document.querySelectorAll(".mona-content");
    if (monacontents.length > 0) {
        monacontents.forEach((item) => {
            const tables = item.querySelectorAll("table");
            tables.forEach((table) => {
                const wrapper = document.createElement("div");
                wrapper.classList.add("scroll-table");
                table.parentNode.insertBefore(wrapper, table);
                wrapper.appendChild(table);
            });
        });
    }

    /**
     * Hàm khởi tạo "Xem thêm" cho bất kỳ container nào
     * @param {string} selector - Selector của container cha
     */
    function initContentMore(selector) {
        const containers = document.querySelectorAll(selector);

        containers.forEach((container) => {
            const targetP = container.querySelector(".ctentjs");
            if (!targetP || targetP.dataset.initialized) return;

            targetP.dataset.initialized = "true";

            const fullText = targetP.textContent.replace(/\s+/g, " ").trim();
            const maxChars = 200;

            if (fullText.length > maxChars) {
                const shortText = fullText.slice(0, maxChars) + "...";

                targetP.setAttribute("data-full", fullText);
                targetP.setAttribute("data-short", shortText);
                targetP.textContent = shortText;

                const seeMoreBtn = document.createElement("span");
                seeMoreBtn.className = "see-more";
                seeMoreBtn.textContent = "Xem thêm";

                targetP.after(seeMoreBtn);

                let isExpanded = false;
                seeMoreBtn.addEventListener("click", () => {
                    isExpanded = !isExpanded;
                    targetP.textContent = isExpanded ? targetP.getAttribute("data-full") : targetP.getAttribute("data-short");

                    seeMoreBtn.textContent = isExpanded ? " Thu gọn" : " Xem thêm";
                    targetP.after(seeMoreBtn);
                });
            }
        });
    }

    initContentMore(".ctentMorejs");

    const frmItems = document.querySelectorAll(".frm-item");

    // Kiểm tra nếu frmItems không trống
    if (frmItems.length > 0) {
        frmItems.forEach((item) => {
            const input = item.querySelector(".frm-input");
            const label = item.querySelector(".frm-lb");

            // Kiểm tra nếu input không trống
            if (input) {
                input.addEventListener("focus", () => {
                    item.classList.add("focus");
                });

                input.addEventListener("blur", () => {
                    item.classList.remove("focus");
                    if (input.value) {
                        item.classList.add("valid");
                    } else {
                        item.classList.remove("valid");
                    }
                });

                // Kiểm tra giá trị ban đầu của input
                if (input.value) {
                    item.classList.add("valid");
                }
            }
        });
    }

    // Funtion Download pdf
    const btnDownload = document.querySelectorAll(".docs-wrap");
    if (btnDownload) {
        btnDownload.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                var link = document.createElement("a");
                link.href = item.getAttribute("data-src");
                link.download = "file.pdf";
                link.dispatchEvent(new MouseEvent("click"));
            });
        });
    }

    // check pass;
    const fPass = document.querySelectorAll(".f-pass");
    if (fPass) {
        fPass.forEach((item) => {
            item.addEventListener("click", (e) => {
                const input = item.querySelector(".re-input");
                if (e.target.closest(".f-lock")) {
                    if (input.type == "text") {
                        input.type = "password";
                        item.classList.remove("active");
                    } else {
                        input.type = "text";
                        item.classList.add("active");
                    }
                }
            });
        });
    }

    // Js get height item

    function getHeight() {
        const getHeightItems = document.querySelectorAll(".getHeight");
        if (getHeightItems) {
            getHeightItems.forEach((item) => {
                item.style = `--height:${item.getBoundingClientRect().height}px`;
            });
        }
    }
    getHeight();

    // Js get width item
    function getWidth() {
        const getWidthItems = document.querySelectorAll(".getWidth");
        if (getWidthItems) {
            getWidthItems.forEach((item) => {
                item.style = `--width:${item.getBoundingClientRect().width}px`;
            });
        }
    }
    getWidth();
    window.addEventListener("resize", () => {
        getHeight();
        getWidth();
    });

    function cscrollAddClass(el, className) {
        $(el).each(function () {
            let el = this;
            let itemTop = $(el).offset().top;
            if ($(el).hasClass("custom-fadeInUpBig") || $(el).hasClass("custom-bounceInUp")) {
                itemTop = $(el).offset().top - 2000;
            }
            if ($(el).hasClass("custom-fadeInDownBig") || $(el).hasClass("custom-bounceInDown")) {
                itemTop = $(el).offset().top + 2000;
            }

            if ($(el).hasClass("custom-fadeInUp")) {
                itemTop = $(el).offset().top - 20;
            }

            if ($(el).hasClass("custom-fadeInDown")) {
                itemTop = $(el).offset().top + 20;
            }

            if ($(el).hasClass("custom-backInUp")) {
                itemTop = $(el).offset().top - 1200;
            }

            if ($(el).hasClass("custom-backInDown")) {
                itemTop = $(el).offset().top + 1200;
            }
            if (itemTop < $(window).scrollTop() + ($(window).height() / 10) * 8) {
                $(el).addClass(className);
            }
        });
    }

    function cbindImageAnimations() {
        cscrollAddClass(".scr-item", "active");
        $(window).on("scroll", function () {
            cscrollAddClass(".scr-item", "active");
        });
    }
    cbindImageAnimations();

    // AUTO MOVE
    const cirs = document.querySelectorAll(".cir");
    var timer = Array;

    function randomXY(cir, x, y) {
        if (!x) {
            x = 10;
        }
        if (!y) {
            y = 15;
        }
        if (cir.classList.contains("cir-2")) {
            const translateX = Math.floor(Math.random() * x);
            const translateY = Math.floor(Math.random() * y);
            cir.style.transfrm = `translate(${translateX + "%" + "," + translateY + "%"})`;
        } else {
            // const translateX = Math.floor(Math.random() * 10);
            const translateY = Math.floor(Math.random() * y);
            // cir.style.transfrm = `translate(${translateX + "%" + "," + translateY + "%"})`;
            cir.style.transfrm = `translate(${0 + "%" + "," + -translateY + "%"})`;
        }
    }
    for (let i = 0; i < cirs.length; i++) {
        let time = (i % 3) * 200 + 1500;
        const x = parseInt(cirs[i].getAttribute("data-x"));
        const y = parseInt(cirs[i].getAttribute("data-y"));
        timer[i] = setInterval(() => {
            randomXY(cirs[i], x, y);
        }, time);
    }

    // hover fill SVG
    const homesMap = document.querySelector(".homes-map");
    if (homesMap) {
        const pin = homesMap.querySelectorAll(".map-pin-it");
        const path = homesMap.querySelectorAll(".map-front-in svg path");

        console.log(pin.length);
        console.log(path.length);
        path.forEach((items, index) => {
            items.addEventListener("mouseenter", () => {
                pin[index].classList.add("open");
            });
            items.addEventListener("mouseleave", () => {
                pin[index].classList.remove("open");
            });
        });
    }

    // play Video frame
    const videoWrap = document.querySelectorAll(".videoJS");
    if (videoWrap) {
        videoWrap.forEach((items) => {
            const videoFrame = items.querySelector("#vhd-lesson-video");
            const toggleButton = items.querySelector(".playJS");
            const img = items.querySelector(".thumbJS img");
            toggleButton.addEventListener("click", function () {
                const iframeSrc = videoFrame.getAttribute("src");
                if (iframeSrc.includes("autoplay=1")) {
                    videoFrame.setAttribute("src", iframeSrc.replace("autoplay=1", "autoplay=0"));
                    img.style.display = "block";
                    toggleButton.style.display = "block";
                } else {
                    videoFrame.setAttribute("src", iframeSrc.replace("autoplay=0", "autoplay=1"));
                    toggleButton.textContent = `<i class="fa-regular fa-circle-pause"></i>`;
                    img.style.display = "none";
                    toggleButton.style.display = "none";
                }
            });
        });
    }

    const copyBtn = document.querySelector(".btncopyJs");
    let canCopy = true;
    const delay = 2000;

    if (copyBtn) {
        copyBtn.addEventListener("click", function (e) {
            e.preventDefault();

            if (!canCopy) return;

            const textToShow = this.getAttribute("data-txt") || "Đã sao chép!";
            const urlToCopy = window.location.href;

            navigator.clipboard.writeText(urlToCopy).then(() => {
                renderCopyMessage(textToShow);
                canCopy = false;
                setTimeout(() => {
                    canCopy = true;
                }, delay);
            });
        });
    }

    function renderCopyMessage(message) {
        const btn = document.querySelector(".btncopyJs");
        if (!btn) return;

        const oldMsg = btn.querySelector(".copy-msg");
        if (oldMsg) oldMsg.remove();

        const tal = document.createElement("span");
        tal.className = "copy-msg";
        tal.innerText = message;
        btn.appendChild(tal);

        requestAnimationFrame(() => {
            tal.classList.add("active");
        });

        setTimeout(() => {
            tal.classList.remove("active");
            setTimeout(() => tal.remove(), 500);
        }, delay);
    }

    $(document).ready(function () {
        $(".seepassJS").on("click", function () {
            const $input = $(this).closest(".frm-ip").find(".frm-input");
            const $icon = $(this).find("i");

            if ($input.attr("type") === "password") {
                $input.attr("type", "text");
                $icon.removeClass("fa-eye").addClass("fa-eye-slash");
            } else {
                $input.attr("type", "password");
                $icon.removeClass("fa-eye-slash").addClass("fa-eye");
            }
        });
    });

    const exproductFixed = document.querySelector(".exproduct-fixed");
    if (exproductFixed) {
        const headerfixed = document.querySelector(".header");
        const footerfixed = document.querySelector(".footer");

        function checkSticky() {
            if (!headerfixed) return;
            const headerRect = headerfixed.getBoundingClientRect();
            const exproductRect = exproductFixed.getBoundingClientRect();
            const footerRect = footerfixed ? footerfixed.getBoundingClientRect() : null;

            // Nếu footer chạm hoặc vượt đáy header thì xóa sticky
            if (footerRect && footerRect.top <= headerRect.bottom) {
                exproductFixed.classList.remove("sticky");
                return;
            }

            // Chỉ sticky khi đáy exproductFixed chạm hoặc vượt đáy header
            if (exproductRect.bottom <= headerRect.bottom) {
                exproductFixed.classList.add("sticky");
            } else {
                exproductFixed.classList.remove("sticky");
            }
        }

        window.addEventListener("scroll", checkSticky);
        checkSticky();
    }

    const avatarContainer = document.querySelector(".avt.avatajs");
    if (avatarContainer) {
        const fileInput = avatarContainer.querySelector(".avta-input");
        const avatarImg = avatarContainer.querySelector(".inner img");

        avatarContainer.addEventListener("click", function () {
            fileInput.click();
        });

        // Khi chọn file thì đổi ảnh avatar
        fileInput.addEventListener("change", function (e) {
            const file = e.target.files[0];
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = function (evt) {
                    avatarImg.src = evt.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
    if (innerWidth > 1200) {
        const mission = document.querySelector(".mission");

        if (mission) {
            const missionDecors = document.querySelectorAll(".mission-decor");
            let animationStarted = false;

            function startShootingStars() {
                if (animationStarted || missionDecors.length === 0) return;
                animationStarted = true;

                missionDecors.forEach((decor) => {
                    function createRandomSpan() {
                        const span = document.createElement("span");

                        const randomTop = Math.floor(Math.random() * 80) + 10;
                        const randomLeft = Math.floor(Math.random() * 95);
                        const randomHeight = Math.floor(Math.random() * 100) + 150;
                        const duration = Math.random() * 1 + 1;

                        span.style.cssText = `
                    position: absolute;
                    top: ${randomTop}%;
                    left: ${randomLeft}%;
                    height: ${randomHeight}px;
                    animation: shootingStar ${duration}s linear forwards;
                `;

                        decor.appendChild(span);

                        setTimeout(() => {
                            span.remove();
                            // Sửa: is-inview thay vì in-inview
                            if (mission.classList.contains("is-inview")) {
                                createRandomSpan();
                            }
                        }, duration * 1000);
                    }

                    const spanCount = Math.floor(Math.random() * 5) + 5;
                    for (let i = 0; i < spanCount; i++) {
                        setTimeout(() => {
                            createRandomSpan();
                        }, Math.random() * 3000);
                    }
                });
            }

            // Sửa: is-inview thay vì in-inview
            if (mission.classList.contains("is-inview")) {
                startShootingStars();
            } else {
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (
                            mutation.type === "attributes" &&
                            mutation.attributeName === "class" &&
                            mission.classList.contains("is-inview") // Sửa: is-inview
                        ) {
                            startShootingStars();
                            observer.disconnect();
                        }
                    });
                });

                observer.observe(mission, { attributes: true });
            }
        }
    }
    const recruitItems = document.querySelectorAll(".recruit-item");
    if (recruitItems) {
        recruitItems.forEach((item) => {
            const recruitShare = item.querySelector(".recruit-share");
            const icon = recruitShare.querySelector(".icon");
            icon.addEventListener("click", function () {
                recruitShare.classList.toggle("active");
            });
            document.addEventListener("click", function (e) {
                if (!recruitShare.contains(e.target) && !icon.contains(e.target)) {
                    recruitShare.classList.remove("active");
                }
            });
        });
    }

    // ============= Quhu ===================
    // 1. Chọn tất cả các table nằm trong .mona-content
    const tables = document.querySelectorAll(".mona-content table");
    if (tables) {
        // 2. Duyệt qua từng table
        tables.forEach((table) => {
            // Tạo một thẻ div mới
            const wrapper = document.createElement("div");
            // Thêm class 'table-over' cho thẻ div vừa tạo
            wrapper.className = "table-over";

            // Chèn thẻ div mới vào vị trí ngay trước thẻ table trong DOM
            table.parentNode.insertBefore(wrapper, table);

            // Chuyển thẻ table vào bên trong thẻ div bọc ngoài
            wrapper.appendChild(table);
        });
    }

    const speed = 300;
    // NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
    const hash = window.location.hash;
    if ($(hash).length) scrollToID(hash, speed);
    // TÌM ĐỊA CHỈ ID VÀ SCROLL XUỐNG NẾU CÓ CLASS
    $(".dest-infor__control").on("click", function (e) {
        e.preventDefault();

        const href = $(this).find("> a").attr("href") || $(this).attr("href");
        const id = href.slice(href.lastIndexOf("#"));
        if ($(id).length) {
            scrollToID(id, speed);
        } else {
            // window.location.replace(/${id});
            window.location.href = href;
        }
    });
    // HÀM SCROLL CHO MƯỢT MÀ
    function scrollToID(id, speed) {
        const offSet = $(".hd").outerHeight();
        const section = $(id).offset();
        const targetOffset = section.top - offSet - 0;
        $("html,body").animate({ scrollTop: targetOffset }, speed);
    }

    const controls = document.querySelector(".dest-infor__controls");
    if (!controls) return;
    const items = controls.querySelectorAll(".dest-infor__control");
    if (items) {
        items.forEach((item) => {
            item.addEventListener("click", () => {
                items.forEach((active2) => {
                    items.forEach((item2) => {
                        item2.classList.remove("active");
                    });
                });
                item.classList.add("active");
            });
        });
    }
    const windt = window.innerWidth < 768;
    if (windt) {
        const rect = controls.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY - 70;

        console.log("👉 Vị trí chính xác cách đỉnh trang là:", absoluteTop);

        window.addEventListener("scroll", function () {
            if (window.scrollY >= absoluteTop) {
                controls.classList.add("fixed");
            } else {
                controls.classList.remove("fixed");
            }
        });
    } else {
        const rect = controls.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY - 60;

        console.log("👉 Vị trí chính xác cách đỉnh trang là:", absoluteTop);

        window.addEventListener("scroll", function () {
            if (window.scrollY >= absoluteTop) {
                controls.classList.add("fixed");
            } else {
                controls.classList.remove("fixed");
            }
        });
    }

    // hpt js

    // scroll target area
    const scrollTarget = document.querySelectorAll(".scroll-target");
    const targetActive = document.querySelector(".target-active");

    if (scrollTarget.length > 0) {
        function handleScroll() {
            scrollTarget.forEach((scrollitem) => {
                const itemTop = scrollitem.offsetTop;
                const itemBottom = itemTop + scrollitem.offsetHeight;
                const scrollY = window.scrollY + window.innerHeight / 2;

                if (scrollY > itemTop + 400 && scrollY < itemBottom - 100) {
                    targetActive?.classList.add("active");
                } else {
                    targetActive?.classList.remove("active");
                }
            });
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll);
    }
}
