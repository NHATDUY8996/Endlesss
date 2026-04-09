export default function FaqModule() {
  if ($('.f-title').length) {
    $(document).on('click', '.f-title', function () {
      const $item = $(this).closest('.sv-faq-item');
      const $content = $item.find('.f-content');

      // đóng các item khác (nếu muốn dạng accordion)
      $('.sv-faq-item .f-content').not($content).slideUp(300);
      $('.sv-faq-item .f-title').not(this).removeClass('is-active');

      // toggle item hiện tại
      $(this).toggleClass('is-active');
      $content.stop(true, true).slideToggle(300);
    });
  }

  if ($('.js-faqs-content').length) {
    $('.faqs-drop').on('click', function () {
      const $this = $(this);
      const $desc = $this.find('.desc');

      if ($this.hasClass('is-active')) {
        // Đang mở → đóng
        $this.removeClass('is-active');
        $desc.stop(true, true).slideUp(300);
      } else {
        // Đang đóng → mở
        $this.addClass('is-active');
        $desc.stop(true, true).slideDown(300);
      }
    });
  }

  if ($('.know-filter-item').length) {
    $('.js-drop-cate').on('click', function () {
      const $this = $(this);
      const $parent = $this.closest('.know-filter-item');
      const $desc = $parent.find('.drop-cate');

      if ($this.hasClass('is-active')) {
        // Đang mở → đóng
        $this.removeClass('is-active');
        $desc.stop(true, true).slideUp(300);
      } else {
        // Đang đóng → mở
        $this.addClass('is-active');
        $desc.stop(true, true).slideDown(300);
      }
    });
  }



}