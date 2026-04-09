export default function TabModule() {
    let tab = document.querySelectorAll(".tabJS");
    if (tab) {
        tab.forEach((t) => {
            let tBtn = t.querySelectorAll(".tabBtn");
            let tPanel = t.querySelectorAll(".tabPanel");

            // for tab
            if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                tBtn[0].classList.add("active");
                tPanel[0].classList.add("open");
                $(tPanel[0]).slideDown();

                for (let i = 0; i < tBtn.length; i++) {
                    tBtn[i].addEventListener("click", showPanel);

                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtn.length; a++) {
                            tBtn[a].classList.remove("active");
                            tPanel[a].classList.remove("open");
                            $(tPanel[a]).slideUp(400);
                        }
                        tBtn[i].classList.add("active");
                        tPanel[i].classList.add("open");
                        $(tPanel[i]).slideDown(400);
                    }
                }
            }
        });
    }
    if (window.location.hash === "#comments") {
        const prodTab = document.querySelector(".prod-tab.tabJS");
        if (prodTab) {
            const tBtn = prodTab.querySelectorAll(".tabBtn");
            const tPanel = prodTab.querySelectorAll(".tabPanel");

            if (tBtn.length >= 2 && tPanel.length >= 2) {
                // Remove active from all
                tBtn.forEach((btn) => btn.classList.remove("active"));
                tPanel.forEach((panel) => {
                    panel.classList.remove("open");
                    $(panel).slideUp(0);
                });

                // Active tab thứ 2 (index 1)
                tBtn[1].classList.add("active");
                tPanel[1].classList.add("open");
                $(tPanel[1]).slideDown(0);
            }
        }
    }
    let tabcus = document.querySelectorAll(".tabJSCus");
    if (tabcus) {
        tabcus.forEach((t) => {
            let tBtn = t.querySelectorAll(".tabBtn");
            let tPanel = t.querySelectorAll(".tabPanel");

            // for tab
            if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                tBtn[0].classList.add("active");
                tPanel[0].classList.add("open");
                //    $(tPanel[0]).slideDown();

                for (let i = 0; i < tBtn.length; i++) {
                    tBtn[i].addEventListener("click", showPanel);

                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtn.length; a++) {
                            tBtn[a].classList.remove("active");
                            tPanel[a].classList.remove("open");
                            //    $(tPanel[a]).slideUp(400);
                        }
                        tBtn[i].classList.add("active");
                        tPanel[i].classList.add("open");
                        //    $(tPanel[i]).slideDown(400);
                    }
                }
            }
        });
    }
    let tabJSScrollbar = document.querySelectorAll(".tabJSScrollbar");
    if (tabJSScrollbar) {
        tabJSScrollbar.forEach((t) => {
            let tBtn = t.querySelectorAll(".tabBtn");
            let tPanel = t.querySelectorAll(".tabPanel");

            // for tab
            if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                tBtn[0].classList.add("active");
                tPanel[0].classList.add("open");
                //    $(tPanel[0]).slideDown();

                for (let i = 0; i < tBtn.length; i++) {
                    tBtn[i].addEventListener("click", showPanel);

                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtn.length; a++) {
                            tBtn[a].classList.remove("active");
                            tPanel[a].classList.remove("open");
                            //    $(tPanel[a]).slideUp(400);
                        }
                        tBtn[i].classList.add("active");
                        tPanel[i].classList.add("open");
                        //    $(tPanel[i]).slideDown(400);
                    }
                }
            }
        });
    }
}
