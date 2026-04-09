export default function HeaderModule() {
    const header = document.querySelector(".header");
    const mobile = document.querySelector(".mobile");
    const mobileOverlay = document.querySelector(".mobile-overlay");
    const popup = document.querySelector(".popup");
    let lastScrollTop = 0;
    const delta = 5;
    const navbarHeight = header ? header.offsetHeight : 0;
    const sideFixed = document.querySelector(".side-fixed");
    const sideOverlay = document.querySelector(".side-overlay");

    function handleScroll() {
        if (header && mobile && mobileOverlay) {
            const currentScroll = window.scrollY;

            // Toggle sticky classes
            if (currentScroll > 0) {
                header.classList.add("sticky");
                mobile.classList.add("sticky");
                mobileOverlay.classList.add("sticky");
                if (sideFixed && sideOverlay) {
                    sideFixed.classList.add("sticky");
                    sideOverlay.classList.add("sticky");
                }
            } else {
                header.classList.remove("sticky");
                mobile.classList.remove("sticky");
                mobileOverlay.classList.remove("sticky");
                if (sideFixed && sideOverlay) {
                    sideFixed.classList.remove("sticky");
                    sideOverlay.classList.remove("sticky");
                }
            }

            // Hide and show header based on scroll direction, only if mobile menu is not open
            if (
                !mobile.classList.contains("open") &&
                Math.abs(lastScrollTop - currentScroll) > delta
            ) {
                if (currentScroll > lastScrollTop && currentScroll > 0) {
                    header.classList.add("hide");
                    if (popup) {
                        popup.classList.add("hidden");
                    }
                } else if (
                    currentScroll + window.innerHeight <
                    document.body.scrollHeight
                ) {
                    header.classList.remove("hide");
                    if (popup) {
                        popup.classList.remove("hidden");
                    }
                }
                lastScrollTop = currentScroll;
            }
        }
    }
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("DOMContentLoaded", handleScroll);

    const headerAcc = document.querySelector(".header-acc");
    if (headerAcc && headerAcc.classList.contains("dropdown")) {
        headerAcc.addEventListener("click", (e) => {
            if (e.target.closest(".header-acc-link")) return;
            headerAcc.classList.toggle("active");
        });
        document.addEventListener("click", (e) => {
            if (!headerAcc.contains(e.target)) {
                headerAcc.classList.remove("active");
            }
        });
    }
    const windowHeight = () => {
        const doc = document.documentElement;
        doc.style.setProperty("--window-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", windowHeight);
    windowHeight();
}
