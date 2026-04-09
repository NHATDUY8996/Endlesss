export default function MansoryModule() {
    const $gridWrapper = $('.load-grid');

    $gridWrapper.each(function () {
        const $this = $(this);
        const initCount = parseInt($this.data('init'));
        const loadCount = parseInt($this.data('sl'));
        const showText = $this.data('show') || 'Show More';
        const hideText = $this.data('hide') || 'Show Less';
        const $items = $this.find('.load-grid-item');
        const $btn = $this.find('.mansory-btn');
        let currentCount = initCount;

        // Ẩn item vượt quá init ban đầu
        $items.each(function (i) {
            if (i >= initCount) {
                $(this).hide();
            }
        });

        // Init Masonry
        const $grid = $this.find('.grid');
        $grid.masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
        });

        $btn.on('click', function () {
            if (currentCount < $items.length) {
                const nextCount = Math.min(currentCount + loadCount, $items.length);
                const $newItems = $items.slice(currentCount, nextCount);

                $newItems.slideDown(300, function () {
                    // Khi item cuối cùng xong animation thì layout lại
                    if ($(this).is($newItems.last())) {
                        $grid.masonry('layout');
                    }
                });

                currentCount = nextCount;

                if (currentCount >= $items.length) {
                    $btn.find('p.text').text(hideText);
                }
            } else {
                const $hiddenItems = $items.slice(initCount);
                $hiddenItems.slideUp(300, function () {
                    if ($(this).is($hiddenItems.last())) {
                        $grid.masonry('layout');
                    }
                });

                currentCount = initCount;
                $btn.find('p.text').text(showText);
            }
        });
    });
}
