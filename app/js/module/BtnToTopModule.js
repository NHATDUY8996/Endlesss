export default function BtnToTopModule() {
  const btnToTop = document.querySelector(".backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      btnToTop.classList.add("active");
    } else {
      btnToTop.classList.remove("active");
    }
  });
  if (btnToTop) {
    btnToTop.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
  $(document).ready(function () {
    if (window.scrollY > 10) {
      btnToTop.classList.add("active");
    } else {
      btnToTop.classList.remove("active");
    }
  });


  // Lắng nghe sự kiện scroll
  window.addEventListener("scroll", () => {
    const fbtn = document.querySelector(".fbtn");
    const windowHeight = window.innerHeight; // Chiều cao cửa sổ
    const documentHeight = document.documentElement.scrollHeight; // Tổng chiều cao của nội dung
    const scrollPosition = window.scrollY + windowHeight; // Vị trí scroll hiện tại
    if (fbtn) {
      // Nếu vị trí scroll đạt đến hoặc vượt qua cuối màn hình
      if (scrollPosition >= documentHeight) {
        fbtn.classList.add("hidden");
      } else {
        fbtn.classList.remove("hidden");
      }
    }
  });

  if (btnToTop) {
    var backToTopJs = document.querySelector(".backToTopJs path");
    if(backToTopJs){
      var pathLength = backToTopJs.getTotalLength();
      backToTopJs.style.transition = backToTopJs.style.WebkitTransition =
      "none";
    backToTopJs.style.strokeDasharray = pathLength + " " + pathLength;
    backToTopJs.style.strokeDashoffset = pathLength;
    backToTopJs.getBoundingClientRect();
    backToTopJs.style.transition = backToTopJs.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      backToTopJs.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".backToTopJs").addClass("active-progress");
      } else {
        jQuery(".backToTopJs").removeClass("active-progress");
      }
    });
    jQuery(".backToTopJs").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
    }
  
  }

}