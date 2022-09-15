//#Slider
    //멀티페이지
    let sliderBg = ["#e7e9f6","#a8daff","#e4f1d3","#daecf0","#f8f4d7","#def3e4","#fbeaef"];
    $(function () {
      $("#main_slider li").css("background-color","#fff")

      $("#main_slider li").mouseenter(function () {
        $("#slider").css("background-color",sliderBg[$(this).index()])
        $(".slider_show").hide()
        $(".slider_show").eq($(this).index()).stop().show()

        $("#main_slider li").removeClass("ch_blue").css("background-color","#fff")
        $(this).css("background-color","").addClass("ch_blue")
        
      }).mouseleave(function(){
        $("#main_slider li").removeClass("ch_blue").css("background-color","#fff")
        $(this).css("background-color","").addClass("ch_blue")
      })
    });
    var i = 0
    function mainSlider() {
      i++;
      if(i > $(".slider_show:last").index()){
        i = 0
      }
      $("#slider").css("background-color",sliderBg[i])
      $(".slider_show").stop().hide()
      $(".slider_show").eq(i).stop().show()

      $("#main_slider li").removeClass("ch_blue").css("background-color","#fff")
      $("#main_slider li").eq(i).css("background-color","").addClass("ch_blue")
    }

    setInterval(mainSlider , 3000)