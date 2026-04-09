import { CountUp } from "../../assets/library/countUp/countUp.min.js";
export default function CountUpModule() {
    let countit = 0;
    let counterBlock = document.querySelector(".counter-js");

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function startCounter() {
        if (countit == 0 && isInViewport(counterBlock)) {
            console.log($(".countNum").attr("data-count"));
            $(".countNum").each(function () {
                let $this = $(this),
                    countStr = $this.attr("data-count");

                if (countStr.includes("/")) {
                    $this.text(countStr);
                    return;
                }

                // Bắt cả prefix + number + suffix (ví dụ: "$100K", "1M", "≈200+")
                let match = countStr.match(/^([^\d]*)(\d+)([^\d]*)$/),
                    prefix = match ? match[1] : "",
                    countTo = match ? parseInt(match[2], 10) : NaN,
                    suffix = match ? match[3] : "";

                if (!isNaN(countTo)) {
                    $({
                        countNum: $this.text().replace(/[^\d]/g, "") || 0,
                    }).animate(
                        { countNum: countTo },
                        {
                            duration: 3000,
                            easing: "swing",
                            step: function () {
                                let formattedNum = formatNumber(this.countNum);
                                $this.text(prefix + formattedNum + suffix);
                            },
                            complete: function () {
                                let formattedNum = formatNumber(this.countNum);
                                $this.text(prefix + formattedNum + suffix);
                            },
                        },
                    );
                } else {
                    $this.text(countStr);
                }
            });
            countit = 1;
        }
    }

    if (counterBlock) {
        startCounter();

        $(window).on("scroll", startCounter);
    }

    function formatNumber(num) {
        if (!isNaN(num) && isFinite(num)) {
            return Math.floor(num).toLocaleString("de-DE"); // dùng định dạng Đức, dấu chấm
        }
        return num;

        // let roundedNum = Math.floor(num);
        // return roundedNum >= 10000 ? `${Math.floor(roundedNum / 1000)}k` : roundedNum;
    }
}
