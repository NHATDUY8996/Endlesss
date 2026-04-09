export default function PlusMinusModule() {
    const CountJs = () => {
        const counts = document.querySelectorAll('.count');

        counts.forEach(count => {
            const minusButton = count.querySelector('.count-btn.count-minus');
            const plusButton = count.querySelector('.count-btn.count-plus');
            const countNumber = count.querySelector('.count-number');
            const inputField = count.querySelector('input[type="number"]');

            // Thiết lập giá trị ban đầu
            let countValue = parseInt(inputField.value) || 1;
            countNumber.textContent = countValue;
            inputField.value = countValue;

            // Hàm cập nhật trạng thái của nút minus
            const updateMinusButtonState = () => {
                if (countValue <= 1) {
                    minusButton.classList.add('disable');
                } else {
                    minusButton.classList.remove('disable');
                }
            };

            // Sự kiện click cho nút minus
            minusButton.addEventListener('click', () => {
                if (countValue > 1) {
                    countValue--;
                    countNumber.textContent = countValue;
                    inputField.value = countValue; // Cập nhật giá trị của input
                    updateMinusButtonState();
                }
            });

            // Sự kiện click cho nút plus
            plusButton.addEventListener('click', () => {
                countValue++;
                countNumber.textContent = countValue;
                inputField.value = countValue; // Cập nhật giá trị của input
                updateMinusButtonState();
            });

            // Gọi hàm kiểm tra trạng thái ban đầu của nút minus
            updateMinusButtonState();
        });
    };

    CountJs();

}