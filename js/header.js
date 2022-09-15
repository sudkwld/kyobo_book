//jquery
    //Header
    //최상단 banner close event
    $(function () {
      $(".banner_close").click(function () {
        $(".banner").slideUp();
      });
    });
    //매장안내
    $(function () {
      $(".store_guide").mouseenter(function () {
        $(this).children(".city_name").stop().css("display","flex");
      }).mouseleave(function () {
        $(this).children(".city_name").stop().css("display","none");
      });
    });
    //회원혜택
    $(function () {
      $(".membership").mouseenter(function () {
        $(this).children(".membership_guide").stop().show();
      }).mouseleave(function () {
        $(this).children(".membership_guide").stop().hide();
      });
    });
    //Header Navigation
    $(function () {
      $(".nav_ebook").mouseenter(function () {
        $(this).children(".none_ebook").stop().show();
      }).mouseleave(function () {
        $(this).children(".none_ebook").stop().hide();
      });
    });
    $(function () {
      $(".nav_gift").mouseenter(function () {
        $(this).children(".none_gift").stop().show();
      }).mouseleave(function () {
        $(this).children(".none_gift").stop().hide();
      });
    });
    $(function () {
      $(".nav_album").mouseenter(function () {
        $(this).children(".none_album").stop().show();
      }).mouseleave(function () {
        $(this).children(".none_album").stop().hide();
      });
    });
    $(function () {
      $(".nav_plus").mouseenter(function () {
        $(this).children(".none_plus").stop().show();
      }).mouseleave(function () {
        $(this).children(".none_plus").stop().hide();
      });
    });
    $(function(){
        $(".hide_menu li").mouseenter(function(){
          $(this).children("div").stop().css("display","flex")

          $(".best_menu li").css({
          "background-color":"#fff",
          "color":"#000"
        })
        $(this).css({
          "background-color":"#1e326e",
          "color":"#fff"
        })
        }).mouseleave(function(){
          $(this).children("div").stop().css("display","none")

          $(".best_menu li").css({
            "background-color":"#1e326e",
            "color":"#fff"
        })
        $(this).css({
          "background-color":"#fff",
          "color":"#000"
      })
        });
    });
  
  