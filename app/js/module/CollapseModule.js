export default function CollapseModule() {
    const clBlock = document.querySelectorAll(".collapse-block");
    if (clBlock) {
        clBlock.forEach((item) => {
            const clBody = item.querySelectorAll(".collapse-body");
            const clItems = item.querySelectorAll(".collapse-item");
            if (clBody) {
                $(clBody[0]).slideDown();
                clBody[0].parentElement.classList.add("active");
            }
            if (clItems) {
                clItems.forEach((item) => {
                    if (item.classList.contains("active")) {
                        const body = item.querySelector(".collapse-body");
                        $(body).slideDown();
                    }
                });
            }
            const head = item.querySelectorAll(".collapse-head");
            head.forEach((item) => {
                item.addEventListener("click", () => {
                    clBody.forEach((item) => {
                        $(item).slideUp();
                    });
                    clItems.forEach((item) => {
                        $(item).removeClass("active");
                    });
                    const body =
                        item.parentElement.querySelector(".collapse-body");
                    if (
                        body.style.display == "none" ||
                        body.style.display == ""
                    ) {
                        $(body).slideDown();
                        $(item.parentElement).addClass("active");
                    } else {
                        $(body).slideUp();
                        $(item.parentElement).removeClass("active");
                    }
                });
            });
        });
    }
    const clBlockCus = document.querySelectorAll(".collapse-block-cus");
    if (clBlockCus) {
        clBlockCus.forEach((item) => {
            const clBody = item.querySelectorAll(".collapse-body");
            const clItems = item.querySelectorAll(".collapse-item");

            // Mở tất cả các item và thêm class active
            if (clBody) {
                clBody.forEach((body) => {
                    $(body).show(); // Sử dụng show thay vì slideDown để đảm bảo tất cả đều mở
                    body.parentElement.classList.add("active");
                });
            }

            const head = item.querySelectorAll(".collapse-head");
            head.forEach((headItem) => {
                headItem.addEventListener("click", () => {
                    const parentItem = headItem.parentElement;
                    const body = parentItem.querySelector(".collapse-body");

                    if (!$(body).is(":animated")) {
                        // Ngăn chặn việc trượt lên xuống nhiều lần nếu click liên tục
                        if (parentItem.classList.contains("active")) {
                            $(body).slideUp();
                            parentItem.classList.remove("active");
                        } else {
                            $(body).slideDown();
                            parentItem.classList.add("active");
                        }
                    }
                });
            });
        });
    }
    const clBlock2 = document.querySelectorAll(".collapse-block2");
    if (clBlock2) {
        clBlock2.forEach((item) => {
            const clBody = item.querySelectorAll(".collapse-body2");
            const clItems = item.querySelectorAll(".collapse-item2");
            const clHeads = item.querySelectorAll(".collapse-head2");

            if (clBody.length > 0 && clHeads.length > 0) {
                $(clBody[0]).slideDown();
                $(clHeads[0]).slideUp(); // Ẩn head đầu tiên vì body đang mở
                clBody[0].parentElement.classList.add("active");
            }
            if (clItems) {
                clItems.forEach((item) => {
                    if (item.classList.contains("active")) {
                        const body = item.querySelector(".collapse-body2");
                        const head = item.querySelector(".collapse-head2");
                        $(body).slideDown();
                        if (head) $(head).slideUp();
                    }
                });
            }
            const head = item.querySelectorAll(".collapse-head2");
            head.forEach((item) => {
                item.addEventListener("click", () => {
                    // Đóng tất cả body và hiện lại tất cả head
                    clBody.forEach((bodyItem) => {
                        $(bodyItem).slideUp();
                    });
                    head.forEach((headItem) => {
                        $(headItem).slideDown();
                    });
                    clItems.forEach((item2) => {
                        $(item2).removeClass("active");
                    });

                    const body =
                        item.parentElement.querySelector(".collapse-body2");
                    if (
                        body.style.display == "none" ||
                        body.style.display == ""
                    ) {
                        $(body).slideDown(); // Hiện body
                        $(item).slideUp(); // Ẩn head
                        $(item.parentElement).addClass("active");
                    } else {
                        $(body).slideUp(); // Ẩn body
                        $(item).slideDown(); // Hiện head
                        $(item.parentElement).removeClass("active");
                    }
                });
            });
        });
    }

    const clBlockCustom = document.querySelectorAll(".collapse-blockCustom");
    if (clBlockCustom) {
        clBlockCustom.forEach((item) => {
            const blockSlug = item.getAttribute("data-slug");
            const clBody = item.querySelectorAll(".collapse-body");
            const clItems = item.querySelectorAll(".collapse-item");
            let activeItem = null;

            console.log("[CollapseModule] collapse-blockCustom init", {
                blockSlug,
                block: item,
            });

            if (clItems) {
                clItems.forEach((collapseItem, index) => {
                    const body = collapseItem.querySelector(".collapse-body");
                    const inputs = Array.from(
                        collapseItem.querySelectorAll("input"),
                    );
                    const inputValues = inputs
                        .map((input) => input.value)
                        .filter(Boolean);
                    const matchedInput = inputs.find(
                        (input) => input.value === blockSlug,
                    );
                    const checkedInput = inputs.find((input) => input.checked);
                    const isMatched = Boolean(matchedInput);
                    const wasActive = collapseItem.classList.contains("active");

                    console.log(
                        "[CollapseModule] compare data-slug with nested input values",
                        {
                            blockSlug,
                            inputValues,
                            matchedValue: matchedInput
                                ? matchedInput.value
                                : "",
                            checkedValue: checkedInput
                                ? checkedInput.value
                                : "",
                            isMatched,
                            index,
                            collapseItem,
                        },
                    );

                    if (body) {
                        $(body).hide();
                    }

                    collapseItem.classList.remove("active");

                    if (isMatched) {
                        activeItem = collapseItem;
                    } else if (!activeItem && wasActive) {
                        activeItem = collapseItem;
                    }
                });
            }

            if (!activeItem && clItems.length > 0) {
                activeItem = clItems[0];
            }

            if (activeItem) {
                const activeBody = activeItem.querySelector(".collapse-body");

                console.log("[CollapseModule] active collapse-item", {
                    blockSlug,
                    activeInputValues: Array.from(
                        activeItem.querySelectorAll("input"),
                    ).map((input) => input.value),
                    activeItem,
                });

                if (activeBody) {
                    $(activeBody).slideDown();
                }
                activeItem.classList.add("active");
            }

            const head = item.querySelectorAll(".collapse-head");
            head.forEach((item) => {
                item.addEventListener("click", () => {
                    clBody.forEach((item) => {
                        $(item).slideUp();
                    });
                    clItems.forEach((item) => {
                        $(item).removeClass("active");
                    });
                    const body =
                        item.parentElement.querySelector(".collapse-body");
                    if (
                        body.style.display == "none" ||
                        body.style.display == ""
                    ) {
                        $(body).slideDown();
                        $(item.parentElement).addClass("active");
                    } else {
                        $(body).slideUp();
                        $(item.parentElement).removeClass("active");
                    }
                });
            });
        });
    }
}
