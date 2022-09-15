//이 책을 구매하신 분들이 함께 구매하신 상품입니다.
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "내가", size: 18 },
  headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
})
  .done(function (msg) {
    console.log(msg.documents[0].thumbnail);

    const otherBookBox = document.querySelectorAll(".other_book_box");
    const otherBookImg = document.querySelectorAll(".other_book_img");

    for (let i = 0; i < otherBookBox.length; i++) {

      $(otherBookImg).eq(i).append("<a href='#'>" + "<img src='" + msg.documents[i].thumbnail + "'/" + "</a>");
      $(otherBookBox).eq(i).append("<h3>" + "<a href='#'>" + "[" + msg.documents[i].title + "]" + "</a>" + "</h3>");
      $(otherBookBox).eq(i).append("<h4>" + "<a href='#'>" + msg.documents[i].price + "</a>" + "</h3>");
    }
  });
//이 분야의 베스트
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "내" },
  headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
})
  .done(function (msg) {
    console.log(msg.documents[0].thumbnail);

    const sideProductBox = document.querySelectorAll(".side_product_box");
    const sideProductImg = document.querySelectorAll(".side_product_img");
    const sideProductSub = document.querySelectorAll(".side_product_sub");

    for (let i = 0; i < sideProductBox.length; i++) {

      let str = msg.documents[i].title;
      let str2 = str.substring(0, 10);

      $(sideProductImg).eq(i).append("<a href='#'>" + "<img src='" + msg.documents[i].thumbnail + "'/" + "</a>" + "<br>");
      $(sideProductSub).eq(i).append("<h4>" + "<a href='#'>" + str2 + "</a>" + "</h4>");
      $(sideProductSub).eq(i).append("<h4>" + "<a href='#'>" + msg.documents[i].authors + "</a>" + "</h4>");
      $(sideProductSub).eq(i).append("<h4>" + "<a href='#'>" + msg.documents[i].price + "원" + "</a>" + "</h4>");
    }
  });
//정지우의 다른 작품
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "말이", size: 12 },
  headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
})
  .done(function (msg) {
    console.log(msg.documents[0].thumbnail);

    const authorBook = document.querySelectorAll(".author_book");
    const authorBookImg = document.querySelectorAll(".author_book_img");

    for (let i = 0; i < authorBook.length; i++) {

      $(authorBookImg).eq(i).append("<a href='#'>" + "<img src='" + msg.documents[i].thumbnail + "'/" + "</a>" + "<br>");
      $(authorBook).eq(i).append("<h4>" + "<a href='#'>" + msg.documents[i].title + "</a>" + "</h4>");
      $(authorBook).eq(i).append("<h4>" + "<a href='#'>" + msg.documents[i].price + "원" + "</a>" + "</h4>");
    }
  });
//기프트 BEST
//json method
$(function () {
  $.ajax({
    url: "./json/sub_gift1.json",
    dataType: "json",
    success: function (data) {
      for (let i in data) {
        $(".top_box").eq(i).append("<a href='#'>" + "<img src='img/" + data[i].url + "'/>" + "</a>");
        $(".top_box").eq(i).append("<h4><a href='#'>" + data[i].title + "</a></h4>");
        $(".top_box").eq(i).append("<h5><a href='#'>" + data[i].price +"</a></h5>");

        console.log(data[1].title)
      }
    }
  });
});