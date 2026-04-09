export default function SearchModule() {
    const hdSForm = document.querySelector(".header-search");
    const hdSIcon = document.querySelector(".header-search-icon");
    let isOpen = false;
    if (hdSIcon) {
        hdSIcon.addEventListener("click", () => {
            isOpen = !isOpen;
            if (isOpen) {
                hdSForm.classList.add("open");
            } else {
                hdSForm.classList.remove("open");
            }
        });
        window.addEventListener("click", (e) => {
            if (
                !e.target.closest(".header-search-icon") &&
                !e.target.closest(".header-search")
            ) {
                isOpen = false;
                hdSForm.classList.remove("open");
            }
        });
    }
    var searchMains = document.querySelectorAll(".searchMain");
    const body = document.getElementsByTagName("body")[0];

    if (searchMains) {
        searchMains.forEach((item) => {
            var searchIconJs = item.querySelector(".searchIconJs");
            var searchOverlayJs = item.querySelector(".searchOverlayJs");
            var searchBarJs = item.querySelector(".searchBarJs");
            var searchCloseJs = item.querySelector(".searchCloseJs");
            let isOpen = false;

            function HandleOpen() {
                isOpen = !isOpen;
                if (isOpen) {
                    item.classList.add("active");
                    searchOverlayJs.classList.add("active");
                    searchBarJs.classList.add("active");
                    searchCloseJs.classList.add("active");
                    body.classList.add("no-scroll");
                } else {
                    item.classList.remove("active");
                    searchOverlayJs.classList.remove("active");
                    searchBarJs.classList.remove("active");
                    searchCloseJs.classList.remove("active");
                    body.classList.remove("no-scroll");
                }
            }

            function HandleClose() {
                isOpen = false;
                item.classList.remove("active");
                searchOverlayJs.classList.remove("active");
                searchBarJs.classList.remove("active");
                searchCloseJs.classList.remove("active");
                body.classList.remove("no-scroll");
            }

            if (searchIconJs) {
                searchIconJs.addEventListener("click", () => {
                    HandleOpen();
                });
            }
            if (searchOverlayJs) {
                searchOverlayJs.addEventListener("click", function () {
                    HandleClose();
                });
            }
            if (searchCloseJs) {
                searchCloseJs.addEventListener("click", function () {
                    HandleClose();
                });
            }
        });
    }
    var searchjs = document.querySelector(".searchjs");
    if (searchjs) {
        var txt = searchjs.getAttribute("placeholder");
        var timeOut;
        var txtLen = txt.length;
        var char = 0;
        $(".searchjs").attr("placeholder", "|");

        function typeIt() {
            var humanize = Math.round(Math.random() * (200 - 30)) + 30;
            timeOut = setTimeout(function () {
                char++;
                var type = txt.substring(0, char);
                $(".searchjs").attr("placeholder", type + "|");
                typeIt();

                if (char == txtLen) {
                    $(".searchjs").attr(
                        "placeholder",
                        $(".searchjs").attr("placeholder").slice(0, -1),
                    );
                    clearTimeout(timeOut);
                    char = 0;
                    setTimeout(typeIt, 2000);
                }
            }, humanize);
        }

        typeIt();
    }
}
