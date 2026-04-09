export default function FileModule() {
    const upload = document.querySelector(".upload-file-js");
    if (upload) {
        $("#dropArea").on("dragover", function (e) {
            e.preventDefault();
            $(this).addClass("dragover");
        });

        $("#dropArea").on("dragleave drop", function (e) {
            e.preventDefault();
            $(this).removeClass("dragover");
        });

        $("#dropArea").on("drop", function (e) {
            e.preventDefault();
            $(this).removeClass("dragover");

            var files = e.originalEvent.dataTransfer.files;

            // Xử lý từng file được thả vào
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                // Kiểm tra kiểu MIME của file
                if (file.type === "application/pdf" || file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
                    // Nếu là file PDF, doc hoặc docx, cập nhật nội dung của #txtJs
                    updateTxtJs(file.name);
                    // Không hiển thị ảnh PDF
                } else {
                    alert("Chỉ chấp nhận file PDF, doc, docx");
                }
            }
        });

        // Xử lý sự kiện khi chọn file từ máy tính
        $("#fileInput").on("change", function () {
            var files = this.files;

            // Xử lý từng file được chọn
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                // Kiểm tra kiểu MIME của file
                if (file.type === "application/pdf" || file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
                    // Nếu là file PDF, doc hoặc docx, cập nhật nội dung của #txtJs
                    updateTxtJs(file.name);
                    // Không hiển thị ảnh PDF
                } else {
                    alert("Chỉ chấp nhận file PDF, doc, docx");
                }
            }
        });

        function updateTxtJs(newText) {
            // Cập nhật nội dung của #txtJs thành tên của file
            $("#txtJs").text(newText);
        }
    }
}