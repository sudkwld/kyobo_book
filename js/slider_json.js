//main slider
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "환멸" },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {
        console.log(msg.documents[1].title);

        const sliderShowBook = document.querySelectorAll(".slider_show_book");
        const showBookImg = document.querySelectorAll(".show_book_img");

        for (var i = 0; i < sliderShowBook.length; i++) {

          var str = msg.documents[i].contents;
          var str2 = str.substring(0, 40);

          $(showBookImg).eq(i).append("<a href='#'>" + "<img src='" + msg.documents[i].thumbnail + "'/" + "</a>");
          $(sliderShowBook).eq(i).append("<h3>" + "<a href='#'>" + "[" + msg.documents[i].title + "]" + "</a>" + "</h3>");
          $(sliderShowBook).eq(i).append("<h4>" + "<a href='#'>" + str2 + "</a>" + "</h3>");
        }
      });