    //json method
    $(function () {
      $.ajax({
        url: "./json/kstory.json",
        dataType: "json",
        success: function (data) {
          for (var i in data) {
            $(".k_box").eq(i).append("<a href='#'>" + "<img src='img/" + data[i].url + "'/>" + "</a>");
            $(".k_box").eq(i).append("<p><a href='#'>" + data[i].title + "</a></p>");

            $(".k_sub").eq(i).append("<span><a href='#'>" + data[i].subtitle + "</a></span>");
            $(".k_sub").eq(i).append("<p><a href='#'>" + data[i].ptitle + "</a></p>");
          }
        }
      });
    });