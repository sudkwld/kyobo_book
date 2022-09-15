//화제의 신간
    //국내도서
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "여행", size: 12 },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {
        console.log(msg.documents[1].title);

        const bookCountry = document.querySelector(".new_book_country");
        const newBook = document.querySelectorAll(".new_book_country .newbook_box");
        const newBookHide = document.querySelectorAll(".newbook_hide");

        for (var i = 0; i < newBook.length; i++) {

          $(newBook).eq(i).append("<a href='#'>" + "<img src='" + msg.documents[i].thumbnail + "'/" + "</a>");
          $(newBook).eq(i).append("<h3>" + "<a href='#'>" + "[" + msg.documents[i].authors + "]" + "</a>" + "</h3>");
          $(newBook).eq(i).append("<h4>" + "<a href='#'>" + msg.documents[i].title + "</a>" + "</h3>");

          var str = msg.documents[i].contents;
          var str2 = str.substring(0, 35);

          $(newBookHide).eq(i).append("<p>" + '<a href="#">' + str2 + "···" + "</a>" + "</p>");
          $(newBookHide).eq(i).append("<a href='#' class='hide_img'>" + "<img src='img/sample_cart.png'>" + "</a>");
          $(newBookHide).eq(i).append("<a href='#' class='hide_img'>" + "<img src='img/sample_mag.png'>" + "</a>");
        }
      });
    //외국도서
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "인류", size: 12 },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {
        console.log(msg.documents[1].title);

        const foreignNewBook = document.querySelectorAll(".new_book_foreign .newbook_box");
        const foreignHide = document.querySelectorAll(".new_book_foreign .newbook_hide");

        for (var i = 0; i < foreignNewBook.length; i++) {

          var strtitle = msg.documents[i].title;
          var strtitle2 = strtitle.substring(0, 35);

          $(foreignNewBook).eq(i).append("<a href='#'>" + "<img src='" + msg.documents[i].thumbnail + "'/" + "</a>");
          $(foreignNewBook).eq(i).append("<h3>" + "<a href='#'>" + "[" + msg.documents[i].authors + "]" + "</a>" + "</h3>");
          $(foreignNewBook).eq(i).append("<h4>" + "<a href='#'>" + strtitle2 + "</a>" + "</h3>");

          var str = msg.documents[i].contents;
          var str2 = str.substring(0, 38);

          $(foreignHide).eq(i).append("<p>" + '<a href="#">' + str2 + "···" + "</a>" + "</p>");
          $(foreignHide).eq(i).append("<a href='#' class='hide_img'>" + "<img src='img/sample_cart.png'>" + "</a>");
          $(foreignHide).eq(i).append("<a href='#' class='hide_img'>" + "<img src='img/sample_mag.png'>" + "</a>");
        }
      });
    //eBook
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "내일", size: 12 },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {
        console.log(msg.documents[1].title);

        const ebookNewBook = document.querySelectorAll(".new_book_ebook .newbook_box");
        const ebookHide = document.querySelectorAll(".new_book_ebook .newbook_hide");

        for (var i = 0; i < ebookNewBook.length; i++) {

          var strtitle = msg.documents[i].title;
          var strtitle2 = strtitle.substring(0, 38);

          $(ebookNewBook).eq(i).append("<a href='#'>" + "<img src='" + msg.documents[i].thumbnail + "'/" + "</a>");
          $(ebookNewBook).eq(i).append("<h3>" + "<a href='#'>" + "[" + msg.documents[i].authors + "]" + "</a>" + "</h3>");
          $(ebookNewBook).eq(i).append("<h4>" + "<a href='#'>" + strtitle2 + "</a>" + "</h3>");

          var str = msg.documents[i].contents;
          var str2 = str.substring(0, 38);

          $(ebookHide).eq(i).append("<p>" + '<a href="#">' + str2 + "···" + "</a>" + "</p>");
          $(ebookHide).eq(i).append("<a href='#' class='hide_img'>" + "<img src='img/sample_cart.png'>" + "</a>");
          $(ebookHide).eq(i).append("<a href='#' class='hide_img'>" + "<img src='img/sample_mag.png'>" + "</a>");
        }
      });
    //sam
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "안녕", size: 12 },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {
        console.log(msg.documents[1].title);

        const samNewBook = document.querySelectorAll(".new_book_sam .newbook_box");
        const samHide = document.querySelectorAll(".new_book_sam .newbook_hide");

        for (var i = 0; i < samNewBook.length; i++) {

          var strtitle = msg.documents[i].title;
          var strtitle2 = strtitle.substring(0, 38);

          $(samNewBook).eq(i).append("<a href='#'>" + "<img src='" + msg.documents[i].thumbnail + "'/" + "</a>");
          $(samNewBook).eq(i).append("<h3>" + "<a href='#'>" + "[" + msg.documents[i].authors + "]" + "</a>" + "</h3>");
          $(samNewBook).eq(i).append("<h4>" + "<a href='#'>" + strtitle2 + "</a>" + "</h3>");

          var str = msg.documents[i].contents;
          var str2 = str.substring(0, 38);

          $(samHide).eq(i).append("<p>" + '<a href="#">' + str2 + "···" + "</a>" + "</p>");
          $(samHide).eq(i).append("<a href='#' class='hide_img'>" + "<img src='img/sample_cart.png'>" + "</a>");
          $(samHide).eq(i).append("<a href='#' class='hide_img'>" + "<img src='img/sample_mag.png'>" + "</a>");
        }
      });
    //음반/기프트
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "노래", size: 12 },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {
        console.log(msg.documents[1].title);

        const albumNewBook = document.querySelectorAll(".new_book_album .newbook_box");
        const albumHide = document.querySelectorAll(".new_book_album .newbook_hide");

        for (var i = 0; i < albumNewBook.length; i++) {

          var strtitle = msg.documents[i].title;
          var strtitle2 = strtitle.substring(0, 38);

          $(albumNewBook).eq(i).append("<a href='#'>" + "<img src='" + msg.documents[i].thumbnail + "'/" + "</a>");
          $(albumNewBook).eq(i).append("<h3>" + "<a href='#'>" + "[" + msg.documents[i].authors + "]" + "</a>" + "</h3>");
          $(albumNewBook).eq(i).append("<h4>" + "<a href='#'>" + strtitle2 + "</a>" + "</h3>");

          var str = msg.documents[i].contents;
          var str2 = str.substring(0, 38);

          $(albumHide).eq(i).append("<p>" + '<a href="#">' + str2 + "···" + "</a>" + "</p>");
          $(albumHide).eq(i).append("<a href='#' class='hide_img'>" + "<img src='img/sample_cart.png'>" + "</a>");
          $(albumHide).eq(i).append("<a href='#' class='hide_img'>" + "<img src='img/sample_mag.png'>" + "</a>");
        }
      });
    //OOO님을 위한 Picks 추천 샘플
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "감수성" },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {

        console.log(msg.documents[1].title);
        console.log(msg.documents[1].thumbnail);
        //smaple box 수만큼 도는 for문
        const smapleBox = document.querySelectorAll('.sample_box');
        const sampleImg = document.querySelectorAll('.sample_img');
        for (var i = 0; i < smapleBox.length; i++) {

          $(smapleBox).eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
          $(smapleBox).eq(i).append("<h3>" + '<a href="#">' + "[" + msg.documents[i].authors + "]" + "</a>" + "</h3>");
          $(smapleBox).eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");

          var str = msg.documents[i].contents;
          var str2 = str.substring(0, 40);

          $(sampleImg).eq(i).append("<p>" + '<a href="#">' + str2 + "···" + "</a>" + "</p>");
          $(sampleImg).eq(i).append('<a href="#">' + "<img src='img/sample_cart.png'>" + "</a>");
          $(sampleImg).eq(i).append('<a href="#">' + "<img src='img/sample_mag.png'>" + "</a>");
        }
      });
    //베스트셀러 - 교보문고종합, 인터넷일간
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "기억", size: 20 },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {

        console.log(msg.documents[1].title);
        console.log(msg.documents[1].thumbnail);

        const bestBox = document.querySelectorAll('.best_box');
        const bestCoverImg = document.querySelectorAll('.best_cover_img');
        for (var i = 0; i < bestBox.length; i++) {

          $(bestCoverImg).eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
          $(bestBox).eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
        }
      });
    //베스트셀러 - 외국도서
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "other" },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {

        console.log(msg.documents[1].title);
        console.log(msg.documents[1].thumbnail);

        const bestFor = document.querySelectorAll('.best_for');
        const bestForImg = document.querySelectorAll('.best_for_img');
        for (var i = 0; i < bestFor.length; i++) {

          let str = msg.documents[i].title;
          let str2 = str.substring(0, 25);

          $(bestForImg).eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
          $(bestFor).eq(i).append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>");
        }
      });
    //베스트셀러 - eBook
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "결정" },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {

        console.log(msg.documents[1].title);
        console.log(msg.documents[1].thumbnail);

        const bestBoxEbook = document.querySelectorAll('.best_box_ebook');
        const bestImgEbook = document.querySelectorAll('.best_ebook_img');
        for (var i = 0; i < bestBoxEbook.length; i++) {

          let str = msg.documents[i].title;
          let str2 = str.substring(0, 20);

          $(bestImgEbook).eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
          $(bestBoxEbook).eq(i).append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>");
        }
      });
    //베스트셀러 - 오디오북
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "우리" },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {

        console.log(msg.documents[1].title);
        console.log(msg.documents[1].thumbnail);

        const bestBoxAudio = document.querySelectorAll('.best_box_audio');
        const bestImgAudio = document.querySelectorAll('.best_audio_img');
        for (var i = 0; i < bestBoxAudio.length; i++) {

          let str = msg.documents[i].title;
          let str2 = str.substring(0, 20);

          $(bestImgAudio).eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
          $(bestBoxAudio).eq(i).append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>");
        }
      });
    //베스트셀러 - sam
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "그게" },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {

        console.log(msg.documents[1].title);
        console.log(msg.documents[1].thumbnail);

        const bestBoxSam = document.querySelectorAll('.best_box_sam');
        const bestImgSam = document.querySelectorAll('.best_sam_img');
        for (var i = 0; i < bestBoxSam.length; i++) {

          let str = msg.documents[i].title;
          let str2 = str.substring(0, 20);

          $(bestImgSam).eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
          $(bestBoxSam).eq(i).append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>");
        }
      });
    //베스트셀러 - gift
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "선물" },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {

        console.log(msg.documents[1].title);
        console.log(msg.documents[1].thumbnail);

        const bestBoxGift = document.querySelectorAll('.best_box_gift');
        const bestImgGift = document.querySelectorAll('.best_gift_img');
        for (var i = 0; i < bestBoxGift.length; i++) {

          let str = msg.documents[i].title;
          let str2 = str.substring(0, 20);

          $(bestImgGift).eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
          $(bestBoxGift).eq(i).append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>");
        }
      });
    //베스트셀러 우측
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "주술회전" },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {

        console.log(msg.documents[1].title);
        console.log(msg.documents[1].thumbnail);

        const recommendImg = document.querySelectorAll('.recommend_img');
        for (var i = 0; i < recommendImg.length; i++) {

          let str = msg.documents[i].title;
          let str2 = str.substring(0, 11);

          $(recommendImg).eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
          $(recommendImg).eq(i).append("<h3>" + '<a href="#">' + str2 + "</a>" + "</h3>");
        }
      });
    //이주의 책
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "되기" },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {

        console.log(msg.documents[1].title);
        console.log(msg.documents[1].thumbnail);
        //week box 수만큼 도는 for문
        const weekBox = document.querySelectorAll('.week_box');
        const weekImg = document.querySelectorAll('.week_img');
        for (var i = 0; i < weekBox.length; i++) {

          $(weekImg).eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
          $(weekBox).eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");

          var str = msg.documents[i].contents;
          var str2 = str.substring(0, 15);

          $(weekBox).eq(i).append("<p>" + '<a href="#">' + str2 + "</a>" + "</p>");
        }
      });
    //klover 평점 좋은 책
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "여행" },
      headers: { Authorization: "KakaoAK 252e82cfdd1ef6dc18b7a23679dbec5a" }
    })
      .done(function (msg) {
        console.log(msg.documents[1].title);

        const kloverBook = document.querySelectorAll('.klover_book');
        const kloverImg = document.querySelectorAll('.klover_img');
        const kloverScore = document.querySelectorAll('.klover_score');

        for (var i = 0; i < kloverScore.length; i++) {
          $(kloverImg).eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
          $(kloverScore).eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
          $(kloverScore).eq(i).append("<h4>" + '<a href="#">' + msg.documents[i].authors + "</a>" + "</h4>");
          $(kloverScore).eq(i).append("<img src='img/klover.png'>");
        }
      });