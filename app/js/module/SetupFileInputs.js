export default function SetupFileInputs() {
    const fileInputs = document.querySelectorAll(".upload-file");

    const formatFileSize = (size) => {
        if (size < 1024) {
            return `${size} B`;
        }

        if (size < 1024 * 1024) {
            return `${(size / 1024).toFixed(2)} KB`;
        }

        return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    };

    if (fileInputs) {
        fileInputs.forEach((fileInput) => {
            const fileArea = fileInput.querySelector(".file-Area");
            const input = fileInput.querySelector('input[type="file"]');
            const img = fileInput.querySelector(
                ".frm-upload img, .frm-upload picture, .frm-upload .img",
            ); // tùy +img ra tag gì

            const isCv = fileInput.classList.contains("file-cv");
            const txt = fileInput.querySelector(".des .txt");
            const defaultTxt = txt ? txt.innerText : "";

            // Thiết lập accept tùy thuộc vào việc có class file-cv hay không
            if (input) {
                if (isCv) {
                    input.setAttribute("accept", ".pdf,.doc,.docx");
                } else {
                    input.setAttribute("accept", "image/*");
                }
            }

            if (fileArea) {
                fileArea.addEventListener("click", () => {
                    if (input) {
                        input.click();
                    }
                });
            }

            if (input) {
                input.addEventListener("change", (e) => {
                    if (input.files && input.files[0]) {
                        const file = input.files[0];

                        console.log("Selected file:", {
                            name: file.name,
                            type: file.type || "unknown",
                            size: file.size,
                            readableSize: formatFileSize(file.size),
                        });

                        // Xử lý nếu là file CV
                        if (isCv) {
                            fileInput.classList.add("has-item");
                            if (txt) {
                                txt.innerText = file.name;
                            }
                        }
                        // Xử lý nếu là file Hình ảnh
                        else if (file.type.startsWith("image/")) {
                            fileInput.classList.add("has-item");
                            const reader = new FileReader();
                            reader.onload = function (ev) {
                                if (img && img.tagName === "IMG") {
                                    img.src = ev.target.result;
                                }
                            };
                            reader.readAsDataURL(file);
                        } else {
                            // Nếu không phải ảnh thì reset lại
                            fileInput.classList.remove("has-item");
                            if (img && img.tagName === "IMG") {
                                img.src = "upfile.png";
                            }
                            input.value = ""; // reset input
                            alert("Vui lòng chọn file ảnh!");
                        }
                    } else {
                        // Trường hợp người dùng mở hộp thoại upload nhưng cancel (không chọn nữa)
                        fileInput.classList.remove("has-item");
                        if (isCv) {
                            if (txt) txt.innerText = defaultTxt;
                        } else {
                            if (img && img.tagName === "IMG") {
                                img.src = "upfile.png";
                            }
                        }
                    }
                });
            }
        });
    }
}
