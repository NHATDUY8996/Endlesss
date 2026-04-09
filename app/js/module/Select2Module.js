export default function Select2Module() {
    $(document).ready(function () {
        $(".re-select-cus").select2({
            dropdownCssClass: "custom-dropdown",
            selectionCssClass: "custom-selection",
            allowClear: true,
        });
        $(".re-select-popup").select2({
            dropdownCssClass: "custom-dropdown-popup",
            selectionCssClass: "custom-selection-popup",
        });
        $(".header-select-main").select2({
            dropdownCssClass: "header-custom-dropdown",
            selectionCssClass: "header-custom-selection",
        });
        $(".re-select-main").select2({
            allowClear: true,
        });
        $(".re-select-sub").select2({});
    });
    $(document).on("scroll wheel touchmove", function (e) {
        if (
            $(e.target).closest(".select2-dropdown, .select2-container")
                .length === 0
        ) {
            $(
                ".re-select-cus, .re-select-popup, .header-select-main, .re-select-main, .re-select-sub",
            ).each(function () {
                try {
                    $(this).select2("close");
                } catch (err) {}
            });
        }
    });
}
