export default function SideModule() {
    const sideOpen = document.querySelector(".side-open");
    const sideClose = document.querySelector(".side-close");
    const sideFixed = document.querySelector(".side-fixed");
    const sideOverlay = document.querySelector(".side-overlay");
    const body = document.getElementsByTagName("body")[0];

    function Open() {
        sideFixed.classList.add("open");
        sideOverlay.classList.add("open");
        sideOpen.classList.add("close");
        body.style.overflowY = "hidden";
        body.classList.add("body-lock");
    }

    function Close() {
        sideFixed.classList.remove("open");
        sideOverlay.classList.remove("open");
        sideOpen.classList.remove("close");
        body.style.overflowY = "auto";
        body.classList.remove("body-lock");
    }
    if (sideOpen) {
        sideOpen.addEventListener("click", () => {
            Open();
        });
    }
    if (sideClose) {
        sideClose.addEventListener("click", () => {
            Close();
        });
    }
    if (sideOverlay) {
        sideOverlay.addEventListener("click", () => {
            Close();
        });
    }

    const actAside = document.querySelectorAll(".sidebarJs");

    if (actAside) {
        actAside.forEach((aside) => {
            const btnAside = aside.querySelector(".btn-aside");
            btnAside.addEventListener("click", () => {
                aside.classList.toggle("open");
            });
        });
    }

    const side2Open = document.querySelector(".side2-open");
    const side2Close = document.querySelector(".side2-close");
    const side2Fixed = document.querySelector(".side2-fixed");
    const side2Overlay = document.querySelector(".side2-overlay");
    const side2body = document.getElementsByTagName("body")[0];

    function toggleSide2() {
        const isOpen = side2Fixed?.classList.contains("open");

        if (isOpen) {
            side2Fixed?.classList.remove("open");
            side2Overlay?.classList.remove("open");
            side2Open?.classList.remove("close");
            if (window.innerWidth < 1200) {
                side2body.style.overflowY = "auto";
            }
        } else {
            side2Fixed?.classList.add("open");
            side2Overlay?.classList.add("open");
            side2Open?.classList.add("close");
            if (window.innerWidth < 1200) {
                side2body.style.overflowY = "hidden";
            }
        }
    }

    if (side2Open) {
        side2Open.addEventListener("click", () => {
            toggleSide2();
            console.log("hello this is side2 click");
        });
    }

    if (side2Close) {
        side2Close.addEventListener("click", toggleSide2);
    }

    if (side2Overlay) {
        side2Overlay.addEventListener("click", toggleSide2);
    }

    document.addEventListener("click", (event) => {
        if (
            side2Fixed &&
            side2Open &&
            !side2Fixed.contains(event.target) &&
            !side2Open.contains(event.target)
        ) {
            side2Fixed.classList.remove("open");
            side2Overlay.classList.remove("open");
            side2Open.classList.remove("close");
            if (window.innerWidth < 1200) {
                side2body.style.overflowY = "auto";
            }
        }
    });

    document.addEventListener("mona-post-ajax-loaded", () => {
        const delay = 300;
        setTimeout(() => {
            if (sideFixed) sideFixed.classList.remove("open");
            if (sideOverlay) sideOverlay.classList.remove("open");
            if (sideOpen) sideOpen.classList.remove("close");
            body.classList.remove("body-lock");
            body.style.overflowY = "auto";
            if (side2Fixed) side2Fixed.classList.remove("open");
            if (side2Overlay) side2Overlay.classList.remove("open");
            if (side2Open) side2Open.classList.remove("close");
        }, delay);
    });
}
