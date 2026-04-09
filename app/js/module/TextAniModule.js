export default function TextAniModule() {
    if (innerWidth > 1200) {
        Splitting({
            target: "[data-spl]",
        });

        Splitting({
            target: "[data-spl-line]",
            by: "lines",
        });

        // SplitText inner

        const charSpls = document.querySelectorAll(".txt-spl .word");

        if (charSpls) {
            let text = "";
            charSpls.forEach((item) => {
                text = item.innerHTML.trim();
                item.innerHTML = `<span class="chars">${text}</span>`;
            });
        }

        const textAni = document.querySelectorAll(".txt-ani");
        if (textAni) {
            // Thêm khoảng trắng
            textAni.forEach((item) => {
                const textAniItems = item.querySelectorAll(".txt-ani-item");
                let arrs = [];
                if (textAniItems) {
                    textAniItems.forEach((item, index) => {
                        arrs.push(item.outerHTML);
                        arrs.push(
                            `${index == textAniItems.length - 1 ? "" : "<span>&nbsp;</span>"}`,
                        );
                    });
                }
                item.innerHTML = arrs.join("");
            });
            // End thêm khoảng trắng
            textAni.forEach((item) => {
                const textAniItems = item.querySelectorAll(".txt-ani-item");
                if (textAniItems) {
                    textAniItems.forEach((item) => {
                        let arrText = item.textContent.trim().split(" ");
                        let arrTextSecond = [];
                        arrText.forEach((item) => {
                            arrTextSecond.push(item.split(""));
                        });
                        let textSecond = "";
                        arrTextSecond.forEach((item, index) => {
                            let textFirst = "";
                            item.forEach((item, index) => {
                                textFirst += `<span><span class="letter">${item}</span></span>`;
                            });

                            textSecond += `<p>${textFirst}</p>${index == arrTextSecond.length - 1 ? "" : "<span>&nbsp;</span>"}`;
                        });
                        item.innerHTML = textSecond;
                        const txtAni = document.querySelectorAll(".txt-ani");
                        if (txtAni) {
                            txtAni.forEach((txt) => {
                                const letter = txt.querySelectorAll(".letter");
                                if (letter) {
                                    letter.forEach((item, index) => {
                                        let delay = index * 0.05;
                                        if (
                                            txt.classList.contains("animated")
                                        ) {
                                            item.style = `animation-delay:${delay}s`;
                                        } else {
                                            item.style = `transition-delay:${delay}s`;
                                        }
                                        if (
                                            txt.classList.contains("no-delay")
                                        ) {
                                            item.style = ``;
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }

        const textSplit = document.querySelectorAll(".txt-split");
        if (textSplit) {
            // Thêm khoảng trắng
            textSplit.forEach((item) => {
                const textSplitItems = item.querySelectorAll(".txt-split-item");
                let arrs = [];
                if (textSplitItems) {
                    textSplitItems.forEach((item, index) => {
                        arrs.push(item.outerHTML);
                        arrs.push(
                            `${index == textSplitItems.length - 1 ? "" : "<span>&nbsp;</span>"}`,
                        );
                    });
                }
                item.innerHTML = arrs.join("");
            });
            // End thêm khoảng trắng
            textSplit.forEach((item) => {
                const textSplitItems = item.querySelectorAll(".txt-split-item");
                if (textSplitItems) {
                    textSplitItems.forEach((item) => {
                        let arrText = item.textContent.trim().split(" ");
                        let arrTextSecond = [];
                        arrText.forEach((item) => {
                            arrTextSecond.push(item.split(""));
                        });
                        let textSecond = "";
                        arrTextSecond.forEach((item, index) => {
                            let textFirst = "";
                            item.forEach((item, index) => {
                                textFirst += `<span><span class="letter">${item}</span></span>`;
                            });

                            textSecond += `<p>${textFirst}</p>${index == arrTextSecond.length - 1 ? "" : "<span>&nbsp;</span>"}`;
                        });
                        item.innerHTML = textSecond;
                        const textSplit =
                            document.querySelectorAll(".txt-split");
                        if (textSplit) {
                            textSplit.forEach((txt) => {
                                const letter = txt.querySelectorAll(".letter");
                                if (letter) {
                                    letter.forEach((item, index) => {
                                        let delay = index * 0.05;
                                        if (
                                            txt.classList.contains("animated")
                                        ) {
                                            item.style = `animation-delay:${delay}s`;
                                        } else {
                                            item.style = `transition-delay:${delay}s`;
                                        }
                                        if (
                                            txt.classList.contains("no-delay")
                                        ) {
                                            item.style = ``;
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    }
}
