export default function LoadMoreModule() {
    $(document).ready(function () {
        const loadContainer = document.querySelectorAll(".load-container");
        if (loadContainer) {
            loadContainer.forEach((item) => {
                const loadNumberInit = parseInt(item.getAttribute("data-init"));
                const loadNumberSl = parseInt(item.getAttribute("data-sl"));
                const loadShow = item.getAttribute("data-show");
                const loadHide = item.getAttribute("data-hide");
                const loadItems = item.querySelectorAll(".load-item");
                const loadBtn = item.querySelector(".load-btn");
                loadBtn.querySelector(".text").innerHTML = loadShow;
                loadItems.forEach((item) => {
                    item.classList.add("load-hidden");
                });
                if (loadItems.length <= loadNumberInit) {
                    $(loadBtn).hide();
                }
                $(loadItems).slice(0, loadNumberInit).show();
                $(loadItems)
                    .slice(0, loadNumberInit)
                    .removeClass("load-hidden");
                $(loadBtn).on("click", function (e) {
                    e.preventDefault();
                    const loadItemsAffter = item.querySelectorAll(
                        ".load-item.load-hidden"
                    );
                    if (
                        $(item.querySelectorAll(".load-item.load-hidden"))
                            .length !== 0
                    ) {
                        loadBtn.classList.remove("load-hide");
                        $(loadItemsAffter).slice(0, loadNumberSl).slideDown();
                        $(loadItemsAffter)
                            .slice(0, loadNumberSl)
                            .removeClass("load-hidden");
                    }
                    if (
                        $(item.querySelectorAll(".load-item.load-hidden"))
                            .length == 0
                    ) {
                        loadBtn.classList.add("load-hide");
                        loadBtn.querySelector(".text").innerHTML = loadHide;
                        if (loadItemsAffter.length == 0) {
                            $(loadItems).slice(loadNumberInit).slideUp();
                            loadItems.forEach((item) => {
                                item.classList.add("load-hidden");
                            });
                            $(loadItems)
                                .slice(0, loadNumberInit)
                                .removeClass("load-hidden");
                            loadBtn.querySelector(".text").innerHTML = loadShow;
                            loadBtn.classList.remove("load-hide");
                        }
                    }
                });
            });
        }

        const loaditemJs = document.querySelectorAll(".loaditemJs");
        if (loaditemJs) {
            loaditemJs.forEach((item) => {
                const loadNumberInit =
                    parseInt(item.getAttribute("data-innit")) || 5;
                const loadNumberSl =
                    parseInt(item.getAttribute("data-loadmore")) || 5;
                const loadShow =
                    item.getAttribute("data-more") || "Hiển thị nhiều hơn";
                const loadHide =
                    item.getAttribute("data-less") || "Hiển thị ít hơn";
                const loadItems = item.querySelectorAll(".item-load");
                const loadBtn = item.querySelector(".item-more");

                let showing = loadNumberInit;

                // Ẩn tất cả, chỉ show số lượng ban đầu
                loadItems.forEach((el, idx) => {
                    el.style.display = idx < showing ? "" : "none";
                });

                // Nếu số lượng nhỏ hơn tổng, show nút
                if (loadItems.length > showing) {
                    loadBtn.style.display = "";
                } else {
                    loadBtn.style.display = "none";
                }

                let expanded = false;

                loadBtn.addEventListener("click", function () {
                    if (!expanded) {
                        // Show thêm
                        showing = Math.min(
                            showing + loadNumberSl,
                            loadItems.length
                        );
                        loadItems.forEach((el, idx) => {
                            el.style.display = idx < showing ? "" : "none";
                        });
                        if (showing >= loadItems.length) {
                            loadBtn.querySelector(".text").textContent =
                                loadHide;
                            loadBtn.classList.add("item-less");
                            expanded = true;
                        }
                    } else {
                        showing = loadNumberInit;
                        loadItems.forEach((el, idx) => {
                            el.style.display = idx < showing ? "" : "none";
                        });
                        loadBtn.querySelector(".text").textContent = loadShow;
                        loadBtn.classList.remove("item-less");

                        expanded = false;
                    }
                });
            });
        }
    });

    const box = document.querySelectorAll(".prd-dt-over");
    if (box) {
        box.forEach((items) => {
            const des = items.querySelector(".des");
            const btn = items.querySelector(".viewmore");
            const more = btn.getAttribute("data-more");
            const less = btn.getAttribute("data-less");
            let open = true;
            btn.addEventListener("click", () => {
                if (open) {
                    des.classList.add("drop");
                    btn.innerHTML = less;
                    open = false;
                } else {
                    des.classList.remove("drop");
                    btn.innerHTML = more;
                    open = true;
                }
            });
        });
    }
}
