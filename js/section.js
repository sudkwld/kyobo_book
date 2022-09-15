//Section
    //오늘의 책 멀티페이지
    $(function() {
      $(".today_slide li").mouseenter(function(){
        $(".welcome_book").hide()
        $(".welcome_book").eq($(this).index()).stop().show()

        $(".today_slide li").css({
          "background-color":"inherit",
          "color":"#666"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
        })
      }).mouseleave(function(){
        $(".today_slide li").css({
          "background-color":"inherit",
          "color":"#666"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
      })
    });
    });
    //화제의 신간 mouseenter evnet
    $(function () {
      $(".newbook_box").mouseenter(function () {
        $(this).children(".newbook_hide").stop().fadeIn();
      }).mouseleave(function () {
        $(this).children(".newbook_hide").stop().fadeOut();
      });
    });
    //OOO님을 위한 Picks 추천 샘플 mouseenter evenet
    $(function () {
      $(".sample_box").mouseenter(function () {
        $(this).children(".sample_img").stop().fadeIn();
      }).mouseleave(function () {
        $(this).children(".sample_img").stop().fadeOut();
      });
    });
    //라이징스타 button mouseenter event
    $(function () {
      $(".center_slide").mouseenter(function () {
        $(this).children(".center_left").stop().fadeIn();
        $(this).children(".center_right").stop().fadeIn();
      }).mouseleave(function () {
        $(this).children(".center_left").stop().fadeOut();
        $(this).children(".center_right").stop().fadeOut();
      })
    });
    
    //이럴 땐 이런 책 button mouseenter event
    $(function () {
      $(".this_book_slide").mouseenter(function () {
        $(this).children(".this_prev").stop().fadeIn();
      }).mouseleave(function () {
        $(this).children(".this_prev").stop().fadeOut();
      });
    });
    $(function () {
      $(".this_book_slide").mouseenter(function () {
        $(this).children(".this_next").stop().fadeIn();
      }).mouseleave(function () {
        $(this).children(".this_next").stop().fadeOut();
      });
    });
    //화제의 신간 멀티페이지
    $(function(){
      $(".new_book li").eq(0).mouseenter(function(){
        $(".new_book_foreign").stop().hide()
        $(".new_book_ebook").stop().hide()
        $(".new_book_sam").stop().hide()
        $(".new_book_album").stop().hide()
        $(".new_book_country").stop().show()

        $(".new_book li").css({
          "background-color":"inherit",
          "color":"#555"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
        })
      }).mouseleave(function(){
        $(".new_book li").css({
          "background-color":"inherit",
          "color":"#555"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
      })
      })

      $(".new_book li").eq(1).mouseenter(function(){
        $(".new_book_country").stop().hide()
        $(".new_book_ebook").stop().hide()
        $(".new_book_sam").stop().hide()
        $(".new_book_album").stop().hide()
        $(".new_book_foreign").stop().show()

        $(".new_book li").css({
          "background-color":"inherit",
          "color":"#555"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
        })
      }).mouseleave(function(){
        $(".new_book li").css({
          "background-color":"inherit",
          "color":"#555"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
      })
      })

      $(".new_book li").eq(2).mouseenter(function(){
        $(".new_book_foreign").stop().hide()
        $(".new_book_country").stop().hide()
        $(".new_book_sam").stop().hide()
        $(".new_book_album").stop().hide()
        $(".new_book_ebook").stop().show()

        $(".new_book li").css({
          "background-color":"inherit",
          "color":"#555"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
        })
      }).mouseleave(function(){
        $(".new_book li").css({
          "background-color":"inherit",
          "color":"#555"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
      })
      })

      $(".new_book li").eq(3).mouseenter(function(){
        $(".new_book_foreign").stop().hide()
        $(".new_book_ebook").stop().hide()
        $(".new_book_country").stop().hide()
        $(".new_book_album").stop().hide()
        $(".new_book_sam").stop().show()

        $(".new_book li").css({
          "background-color":"inherit",
          "color":"#555"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
        })
      }).mouseleave(function(){
        $(".new_book li").css({
          "background-color":"inherit",
          "color":"#555"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
      })
      })

      $(".new_book li").eq(4).mouseenter(function(){
        $(".new_book_foreign").stop().hide()
        $(".new_book_ebook").stop().hide()
        $(".new_book_sam").stop().hide()
        $(".new_book_country").stop().hide()
        $(".new_book_album").stop().show()

        $(".new_book li").css({
          "background-color":"inherit",
          "color":"#555"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
        })
      }).mouseleave(function(){
        $(".new_book li").css({
          "background-color":"inherit",
          "color":"#555"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
      })
      })
    });
    //화제의 신간 prev/next mouseenter/mouseleave
    $(function () {
      $(".new_book").mouseenter(function () {
        $(".book_prev").stop().fadeIn();
      }).mouseleave(function () {
        $(".book_prev").stop().fadeOut();
      });
    });
    $(function () {
      $(".new_book").mouseenter(function () {
        $(".book_next").stop().fadeIn();
      }).mouseleave(function () {
        $(".book_next").stop().fadeOut();
      });
    });
    //베스트셀러 멀티페이지
    $(function() {
      $(".best_menu li").mouseenter(function(){
        $(".best_corner").hide()
        $(".best_corner").eq($(this).index()).stop().css({"display":"flex"})

        $(".best_menu li").css({
          "background-color":"inherit",
          "color":"#666"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
        })
      }).mouseleave(function(){
        $(".best_menu li").css({
          "background-color":"inherit",
          "color":"#666"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
      })
    });
    });
    //베스트셀러 우측
    //멀티페이지 : li에 mouseenter시 index에 따라 각각의 화면을 보여준다
    $(function () {
      $(".best_ad li").mouseenter(function () {
        $(".best_youtuber").hide()
        $(".best_youtuber").eq($(this).index()).stop().show()

        $(".best_ad li").css({
          "background-color":"#dfdfdf",
          "color":"#666"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
        })
      }).mouseleave(function(){
        $(".best_ad li").css({
          "background-color":"#dfdfdf",
          "color":"#666"
        })
        $(this).css({
          "background-color":"#5e6b9e",
          "color":"#fff"
        })
      });
    });
    //감성메이커 멀티페이지
    $(function () {
      $(".dot_box .dot_icon").mouseenter(function () {
        $(".maker_container").hide()
        $(".maker_container").eq($(this).index()).stop().css("display","flex")

        $("dot_box .dot_icon").removeClass("ch_blue").css("background-color","#fff")
        $(this).css("background-color","").addClass("ch_blue")
        
      }).mouseleave(function(){
        $(".dot_box .dot_icon").removeClass("ch_blue").css("background-color","#fff")
        $(this).css("background-color","").addClass("ch_blue")
      });
    });