export default function InfiniteslideModule() {
  $(document).ready(function () {
    if ($(".js-infinite-left").length) {
      $(".js-infinite-left").infiniteslide({
        direction: "left",
        speed: 50,
        clone: 5,
      });
    }
    if ($(".js-infinite-right").length) {
      $(".js-infinite-right").infiniteslide({
        direction: "right",
        speed: 50,
        clone: 5,
      });
    }
  });

}

