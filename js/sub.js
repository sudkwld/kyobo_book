$(function () {
  $(".into_open_btn").click(function () {
    $(".intothe_book").stop().show()
    $(this).css({ "display": "none" })
  })
  $(".into_close_btn").click(function () {
    $(".intothe_book").stop().hide()
    $(this).css({ "display": "block" })
  });
});

$(function () {
  $(".last_open_btn").click(function () {
    $(".last_close").stop().show()
    $(this).css({ "display": "none" })
  })
  $(".last_close_btn").click(function () {
    $(".last_close").stop().hide()
    $(this).css({ "display": "block" })
  });
});