export default function MobileModule() {
    const burgerBtn = document.getElementById("hamburger");
    const mobilemb = document.querySelector(".mobile");
    const mobileOverLaymb = document.querySelector(".mobile-overlay");
    const bodymb = document.getElementsByTagName("body")[0];
    const headermb = document.querySelector(".header");
    const mobileClosemb = document.querySelector(".mobile-close");

    let isOpen = false;

    // Toggle mobile menu
    if (burgerBtn) {
        burgerBtn.addEventListener("click", () => {
            isOpen = !isOpen;
            if (isOpen) {
                burgerBtn.classList.add("active");
                mobilemb.classList.add("open");
                mobileOverLaymb.classList.add("open");
                bodymb.style.overflowY = "hidden";

                // Kiểm tra và đảm bảo header không bị ẩn khi mở menu
                if (headermb && headermb.classList.contains("hide")) {
                    headermb.classList.remove("hide");
                }
            } else {
                burgerBtn.classList.remove("active");
                mobilemb.classList.remove("open");
                mobileOverLaymb.classList.remove("open");
                bodymb.style.overflowY = "scroll";
            }
        });
    }
    document.addEventListener("click", (event) => {
        const isClickInsideMenu =
            mobilemb.contains(event.target) || burgerBtn.contains(event.target);

        if (!isClickInsideMenu && isOpen) {
            isOpen = false;
            burgerBtn.classList.remove("active");
            mobilemb.classList.remove("open");
            mobileOverLaymb.classList.remove("open");
            bodymb.style.overflowY = "scroll";
        }
    });

    // Close mobile menu
    if (mobileClosemb) {
        mobileClosemb.addEventListener("click", () => {
            isOpen = false;
            burgerBtn.classList.remove("active");
            mobilemb.classList.remove("open");
            mobileOverLaymb.classList.remove("open");
            bodymb.style.overflowY = "scroll";
        });
    }

    // Overlay click to close mobile menu
    if (mobileOverLaymb) {
        mobileOverLaymb.addEventListener("click", () => {
            isOpen = false;
            burgerBtn.classList.remove("active");
            mobilemb.classList.remove("open");
            mobileOverLaymb.classList.remove("open");
            bodymb.style.overflowY = "scroll";
        });
    }

    const menuNavs = document.querySelectorAll(".header .menu-nav");
    if (menuNavs) {
        menuNavs.forEach((item) => {
            const menuLinks = item.querySelectorAll(
                ".menu-item.dropdown .menu-link",
            );
            menuLinks.forEach((item) => {
                const contentOld = item.innerHTML;
                const contentNew = `${contentOld} <i class="fa-solid fa-chevron-down"></i>`;
                item.innerHTML = contentNew;
            });
        });
    }
    const menuNavMegas = document.querySelectorAll(".header .menu-nav");
    if (menuNavMegas) {
        menuNavMegas.forEach((item) => {
            const menuLinks = item.querySelectorAll(
                ".menu-item.mega >.menu-link",
            );
            menuLinks.forEach((item) => {
                const contentOld = item.innerHTML;
                const contentNew = `${contentOld} <i class="fa-solid fa-chevron-down"></i>`;
                item.innerHTML = contentNew;
            });

            // render thẻ i cho menu-mega-link có class dropdown
            const menuMegaLinks = item.querySelectorAll(
                ".menu-mega-item.dropdown >.menu-mega-link",
            );
            menuMegaLinks.forEach((item) => {
                const contentOld = item.innerHTML;
                const contentNew = `${contentOld} <i class="fa-solid fa-caret-down"></i>`;
                item.innerHTML = contentNew;
            });

            // xử lý mega hover trên pc

            const menuMegaItems = item.querySelectorAll(
                ".menu-mega-item[data-menu]",
            );
            const menuMegaSubs = item.querySelectorAll(
                ".menu-mega-inner[data-menu-get]",
            );
            const menuMegaSubItems = item.querySelectorAll(
                ".menu-mega-inner[data-menu-get] .menu-mega-item.dropdown[data-menu-item]",
            );
            const menuMegaProds = item.querySelectorAll(
                ".menu-mega-right .menu-mega-prod[data-menu-id]",
            );
            const menuMegaRight = item.querySelector(".menu-mega-right");

            let currentActive = null;

            function setActive(menuKey) {
                // Xóa active ở tất cả các menu-mega-inner
                menuMegaSubs.forEach((sub) => {
                    sub.classList.remove("active");
                });
                // Xóa active ở tất cả các menu-mega-item
                menuMegaItems.forEach((menu) => {
                    menu.classList.remove("active");
                });
                // Xóa active ở tất cả group
                const allGroups = item.querySelectorAll(
                    ".menu-mega-group[data-menu-get]",
                );
                allGroups.forEach((g) => g.classList.remove("active"));
                // Xóa active ở tất cả prod
                menuMegaProds.forEach((prod) =>
                    prod.classList.remove("active"),
                );

                // Active menu-mega-item
                const menuItem = item.querySelector(
                    `.menu-mega-item[data-menu="${menuKey}"]`,
                );
                if (menuItem) menuItem.classList.add("active");

                // Active menu-mega-inner
                const target = item.querySelector(
                    `.menu-mega-inner[data-menu-get="${menuKey}"]`,
                );
                if (target) target.classList.add("active");

                // Active group tương ứng
                const group = item.querySelector(
                    `.menu-mega-group[data-menu-get="${menuKey}"]`,
                );
                if (group) group.classList.add("active");

                // Active prod đầu tiên trong group nếu có
                if (group) {
                    const firstProd = group.querySelector(
                        ".menu-mega-prod[data-menu-id]",
                    );
                    if (firstProd) firstProd.classList.add("active");
                }

                // Active subItem đầu tiên nếu có
                if (target) {
                    const firstSubItem = target.querySelector(
                        ".menu-mega-item.dropdown[data-menu-item]",
                    );
                    if (firstSubItem) {
                        firstSubItem.classList.add("active");
                    }
                }

                currentActive = target;
            }

            // Mặc định active vào cái đầu tiên
            if (menuMegaItems.length > 0) {
                const firstMenu = menuMegaItems[0];
                const menuKey = firstMenu.getAttribute("data-menu");
                setActive(menuKey);
            }

            if (window.innerWidth >= 1200) {
                // PC: hover menu cha
                menuMegaItems.forEach((menuItem) => {
                    menuItem.addEventListener("mouseenter", function () {
                        const menuKey = menuItem.getAttribute("data-menu");
                        setActive(menuKey);
                    });
                });

                // PC: hover menu con
                menuMegaSubItems.forEach((subItem) => {
                    subItem.addEventListener("mouseenter", function () {
                        const parentMenuGet = subItem
                            .closest(".menu-mega-inner[data-menu-get]")
                            .getAttribute("data-menu-get");
                        const itemKey = subItem.getAttribute("data-menu-item");

                        // Xóa active ở tất cả subItem trước
                        menuMegaSubItems.forEach((el) =>
                            el.classList.remove("active"),
                        );
                        subItem.classList.add("active");

                        // Active prod và group tương ứng cùng group
                        menuMegaProds.forEach((prod) => {
                            const prodGroup = prod.closest(
                                ".menu-mega-group[data-menu-get]",
                            );
                            const prodMenuGet = prodGroup
                                ? prodGroup.getAttribute("data-menu-get")
                                : null;
                            if (
                                prod.getAttribute("data-menu-id") === itemKey &&
                                prodMenuGet === parentMenuGet
                            ) {
                                prod.classList.add("active");
                                // Active group cha
                                if (prodGroup) {
                                    // Xóa active ở tất cả group trước
                                    const allGroups = item.querySelectorAll(
                                        ".menu-mega-group[data-menu-get]",
                                    );
                                    allGroups.forEach((g) =>
                                        g.classList.remove("active"),
                                    );
                                    prodGroup.classList.add("active");
                                }
                            } else {
                                prod.classList.remove("active");
                            }
                        });
                    });
                });
            } else {
                // Mobile: click
                menuMegaSubItems.forEach((subItem) => {
                    subItem.addEventListener("click", function (e) {
                        e.preventDefault();
                        const parentMenuGet = subItem
                            .closest(".menu-mega-inner[data-menu-get]")
                            .getAttribute("data-menu-get");
                        const itemKey = subItem.getAttribute("data-menu-item");

                        // Xóa active ở tất cả subItem trước
                        menuMegaSubItems.forEach((el) =>
                            el.classList.remove("active"),
                        );
                        subItem.classList.add("active");

                        // Active prod và group tương ứng cùng group
                        menuMegaProds.forEach((prod) => {
                            const prodGroup = prod.closest(
                                ".menu-mega-group[data-menu-get]",
                            );
                            const prodMenuGet = prodGroup
                                ? prodGroup.getAttribute("data-menu-get")
                                : null;
                            if (
                                prod.getAttribute("data-menu-id") === itemKey &&
                                prodMenuGet === parentMenuGet
                            ) {
                                prod.classList.add("active");
                                // Active group cha
                                if (prodGroup) {
                                    // Xóa active ở tất cả group trước
                                    const allGroups = item.querySelectorAll(
                                        ".menu-mega-group[data-menu-get]",
                                    );
                                    allGroups.forEach((g) =>
                                        g.classList.remove("active"),
                                    );
                                    prodGroup.classList.add("active");
                                    if (menuMegaRight)
                                        menuMegaRight.classList.add("active");
                                }
                            } else {
                                prod.classList.remove("active");
                            }
                        });
                    });

                    // Thêm xử lý click cho thẻ i trong subItem
                    const icon = subItem.querySelector("i");
                    if (icon) {
                        icon.addEventListener("click", function (e) {
                            e.preventDefault();
                            e.stopPropagation(); // Ngăn sự kiện nổi bọt lên li

                            const parentMenuGet = subItem
                                .closest(".menu-mega-inner[data-menu-get]")
                                .getAttribute("data-menu-get");
                            const itemKey =
                                subItem.getAttribute("data-menu-item");

                            // Xóa active ở tất cả subItem trước
                            menuMegaSubItems.forEach((el) =>
                                el.classList.remove("active"),
                            );
                            subItem.classList.add("active");

                            // Active prod và group tương ứng cùng group
                            menuMegaProds.forEach((prod) => {
                                const prodGroup = prod.closest(
                                    ".menu-mega-group[data-menu-get]",
                                );
                                const prodMenuGet = prodGroup
                                    ? prodGroup.getAttribute("data-menu-get")
                                    : null;
                                if (
                                    prod.getAttribute("data-menu-id") ===
                                        itemKey &&
                                    prodMenuGet === parentMenuGet
                                ) {
                                    prod.classList.add("active");
                                    // Active group cha
                                    if (prodGroup) {
                                        // Xóa active ở tất cả group trước
                                        const allGroups = item.querySelectorAll(
                                            ".menu-mega-group[data-menu-get]",
                                        );
                                        allGroups.forEach((g) =>
                                            g.classList.remove("active"),
                                        );
                                        prodGroup.classList.add("active");
                                        if (menuMegaRight)
                                            menuMegaRight.classList.add(
                                                "active",
                                            );
                                    }
                                } else {
                                    prod.classList.remove("active");
                                }
                            });
                        });
                    }
                });
            }
            if (innerWidth < 1200) {
                const menuMegaIcons = item.querySelectorAll(
                    ".menu-mega-left .menu-mega-item[data-menu] > .menu-mega-link i",
                );
                const menuMegaSub = item.querySelector(".menu-mega-sub");

                // Click icon ở cột trái: mở panel sub + active đúng 1 menu theo data-menu
                if (menuMegaIcons.length && menuMegaSub) {
                    menuMegaIcons.forEach((icon) => {
                        icon.addEventListener("click", (e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            const menuItem = icon.closest(
                                ".menu-mega-item[data-menu]",
                            );
                            if (!menuItem) return;

                            const menuKey = menuItem.getAttribute("data-menu");
                            if (!menuKey) return;

                            // Clear active cũ và active đúng 1 mục
                            setActive(menuKey);

                            // Chỉ mở panel, không toggle để tránh trạng thái sai
                            menuMegaSub.classList.add("active");

                            // reset panel phải (nếu đang mở từ lần trước)
                            if (menuMegaRight) {
                                menuMegaRight.classList.remove("active");
                            }
                        });
                    });
                }

                const menuMegaBackIcons =
                    item.querySelectorAll(".menu-mega-back");
                if (menuMegaBackIcons.length) {
                    menuMegaBackIcons.forEach((icon) => {
                        icon.addEventListener("click", (e) => {
                            e.preventDefault();

                            const megaSub = icon.closest(".menu-mega-sub");
                            const megaRight = icon.closest(".menu-mega-right");
                            const megaLeft = icon.closest(".menu-mega-left");

                            // Back ở cấp sub
                            if (megaSub) {
                                megaSub.classList.remove("active");
                                return;
                            }

                            // Back ở cấp right
                            if (megaRight) {
                                megaRight.classList.remove("active");
                                return;
                            }

                            // Back ở cấp left -> đóng toàn bộ mega menu (mobile)
                            if (megaLeft) {
                                const megaMenu = megaLeft.closest(".menu-mega");
                                const megaItem =
                                    megaLeft.closest(".menu-item.mega");
                                const megaContainer = megaLeft.closest(
                                    ".menu-mega-container",
                                );

                                if (megaMenu)
                                    megaMenu.classList.remove("active");
                                if (megaItem)
                                    megaItem.classList.remove("active");

                                if (megaContainer) {
                                    const subPanel =
                                        megaContainer.querySelector(
                                            ".menu-mega-sub",
                                        );
                                    const rightPanel =
                                        megaContainer.querySelector(
                                            ".menu-mega-right",
                                        );
                                    if (subPanel)
                                        subPanel.classList.remove("active");
                                    if (rightPanel)
                                        rightPanel.classList.remove("active");
                                }
                            }
                        });
                    });
                }
            }
        });
    }

    const menuIcons = document.querySelectorAll(
        ".mobile-nav .menu-list .menu-item.dropdown a i",
    );

    if (menuIcons) {
        menuIcons.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const menu =
                    item.parentElement.parentElement.querySelectorAll(
                        ".menu-list",
                    )[0];
                $(menu).slideToggle();
                $(item.parentElement.parentElement).toggleClass("active");
            });
        });
    }
    const menuMgIcons = document.querySelectorAll(
        ".mobile-nav .menu-list .menu-item.mega a i",
    );

    if (menuMgIcons) {
        menuMgIcons.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const menu =
                    item.parentElement.parentElement.querySelectorAll(
                        ".menu-mega",
                    )[0];
                $(menu).toggleClass("active");
                $(item.parentElement.parentElement).toggleClass("active");
            });
        });
    }

    const mobilecons = document.querySelectorAll(".mobile-con"); // Lấy tất cả tiêu đề
    if (mobilecons) {
        mobilecons.forEach((mobilecon) => {
            const mobilemxh = document.querySelector(".mobile-mxh"); // Lấy tất cả tiêu đề
            if (mobilemxh) {
                const mobilemxhHeight = mobilemxh.offsetHeight; // Lấy chiều cao của từng tiêu đề
                mobilecon.style.setProperty(
                    "--mobilecon-height",
                    `${mobilemxhHeight}px`,
                ); // Gán biến CSS cho từng mô tả
            }
        });
    }

    const mncartBts = document.querySelectorAll(".mncartBtnJs");
    const mncartClose = document.querySelector(".mncart-close");
    const mncartMini = document.querySelector(".mncart");
    const mncartOverlay = document.querySelector(".mncart-overlay");
    const mncartBody = document.getElementsByTagName("body")[0];

    let isOpenmncart = false;

    function openmncart() {
        if (!mncartMini || !mncartOverlay) return;
        isOpenmncart = true;
        mncartBts.forEach((btn) => btn.classList.add("active"));
        mncartMini.classList.add("open");
        mncartOverlay.classList.add("open");
        mncartBody.style.overflowY = "hidden";
    }

    function closemncart() {
        if (!mncartMini || !mncartOverlay) return;
        isOpenmncart = false;
        mncartBts.forEach((btn) => btn.classList.remove("active"));
        mncartMini.classList.remove("open");
        mncartOverlay.classList.remove("open");
        mncartBody.style.overflowY = "scroll";
    }

    // Toggle mobile menu
    if (mncartBts.length) {
        mncartBts.forEach((btn) => {
            btn.addEventListener("click", () => {
                if (isOpenmncart) {
                    closemncart();
                } else {
                    openmncart();
                }
            });
        });
    }

    // Close button
    if (mncartClose) {
        mncartClose.addEventListener("click", closemncart);
    }

    // Overlay click to close mobile menu
    if (mncartOverlay) {
        mncartOverlay.addEventListener("click", closemncart);
    }

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!mncartMini) return;
        const isClickInsideMenu =
            mncartMini.contains(event.target) ||
            Array.from(mncartBts).some((btn) => btn.contains(event.target));

        if (!isClickInsideMenu && isOpenmncart) {
            closemncart();
        }
    });
}
