export default function CheckModule() {
    const reCheckBlocks = document.querySelectorAll('.recheck-block');
    if (reCheckBlocks) {
        reCheckBlocks.forEach(item => {
            const recheckItems = item.querySelectorAll(".recheck-item");
            if (recheckItems) {
                recheckItems.forEach(item => {
                    const input = item.querySelector(".recheck-input");
                    if (input.checked) {
                        item.classList.add("active")
                    } else {
                        item.classList.remove("active")
                    }
                })
            }
        })
    }
    document.addEventListener("click", (e) => {
        const reCheckBlock = e.target.closest(".recheck-block");
        const reCheckItem = e.target.closest(".recheck-item");
        var event = new Event("change");
        if (reCheckBlock) {
            const reCheckItems = reCheckBlock.querySelectorAll(".recheck-item");
            const reCheckInputs = reCheckBlock.querySelectorAll(".recheck-input");

            if (reCheckItem) {
                const input = reCheckItem.querySelector(".recheck-input");
                if (input.type == "radio") {
                    reCheckItems.forEach((item) => {
                        item.classList.remove("active");
                    });
                    reCheckInputs.forEach((item) => {
                        item.checked = false;
                    });
                    input.checked = true;
                    if (input.checked == true) {
                        reCheckItem.classList.add("active");
                    }
                    input.dispatchEvent(event);
                    $(input).trigger("change");

                }
                if (input.type == "checkbox") {
                    if (input.checked == true) {
                        input.checked = false;
                        reCheckItem.classList.remove("active");
                    } else {
                        input.checked = true;
                        reCheckItem.classList.add("active");
                    }
                    input.dispatchEvent(event);
                    $(input).trigger("change");
                }
            }
        }
    });
    const filpduct = document.querySelector(".filpduct");


    if (filpduct) {
        const resetButtons = filpduct.querySelectorAll('.filpduct-rset');
        resetButtons.forEach(resetButton => {
            resetButton.addEventListener('click', function () {
                const inputs = filpduct.querySelectorAll('.filpduct .recheck-input');
                const items = filpduct.querySelectorAll('.filpduct .recheck-item');

                inputs.forEach(input => {
                    input.checked = false;
                    input.removeAttribute('checked'); // Xóa thuộc tính checked nếu có
                    input.dispatchEvent(new Event('change')); // Kích hoạt sự kiện change
                });

                items.forEach(item => {
                    item.classList.remove('active'); // Xóa class active
                });
            });
        });
    }

    const remembermeGroups = document.querySelectorAll(".rememberme");

    remembermeGroups.forEach((group) => {
        const checkbox = group.querySelector('input[type="checkbox"]');
        const label = group.querySelector(".checkbox-label");

        if (checkbox && label) {
            checkbox.addEventListener("change", function () {
                if (this.checked) {
                    label.classList.add("active");
                } else {
                    label.classList.remove("active");
                }
            });
        }
    });
}