export default function RangeModule() {
    const formFilter = document.querySelector(".box-range-slider");
    if (formFilter) {
        const sliderOne = document.querySelector(".slider-1");
        const sliderTwo = document.querySelector(".slider-2");
        const displayRangeOne = document.querySelector(".range-val-1");
        const displayRangeTwo = document.querySelector(".range-val-2");
        const sliderTrack = document.querySelector(".slider-track");

        const minGap = 0;
        const sliderMinValue = parseInt(sliderOne.min);
        const sliderMaxValue = parseInt(sliderOne.max);

        sliderOne.oninput = slideOne;
        sliderTwo.oninput = slideTwo;

        function slideOne() {
            if (
                parseInt(sliderTwo.value) - parseInt(sliderOne.value) <=
                minGap
            ) {
                sliderOne.value = parseInt(sliderTwo.value) - minGap;
            }
            displayRangeOne.textContent =
                parseInt(sliderOne.value).toLocaleString() + "đ";
            fillColor();
        }

        function slideTwo() {
            if (
                parseInt(sliderTwo.value) - parseInt(sliderOne.value) <=
                minGap
            ) {
                sliderTwo.value = parseInt(sliderOne.value) + minGap;
            }
            displayRangeTwo.textContent =
                parseInt(sliderTwo.value).toLocaleString() + "đ";
            fillColor();
        }

        function fillColor() {
            const val1 = parseInt(sliderOne.value);
            const val2 = parseInt(sliderTwo.value);

            const percent1 =
                ((val1 - sliderMinValue) / (sliderMaxValue - sliderMinValue)) *
                    100 +
                "%";
            const percent2 =
                100 -
                ((val2 - sliderMinValue) / (sliderMaxValue - sliderMinValue)) *
                    100 +
                "%";

            sliderTrack.style.left = percent1;
            sliderTrack.style.right = percent2;
        }

        // Khởi tạo ban đầu
        slideOne();
        slideTwo();
    }
}
