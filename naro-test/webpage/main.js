$(document).ready(function(){
  // $('#slider').slick({
  //   autoplay:true,
  //   autoplaySpeed:2000,
  //   arrows:false,
  // });
  $('#slider').infiniteslide({
            'height': 400,
            'speed': 40, 
            'direction' : 'left', 
            'pauseonhover': false 
  });
});
//レスポンシブ
$(window).on('load', function(e) {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    
    var speed    = 600;
    var winWidth = window.innerWidth;
    var hdrHeight;
    if (winWidth > 768) {
      // PC時
      hdrHeight = 50;
    } else if (winWidth <= 480) {
      // TB時
      hdrHeight = 50;
      speed = 100;
    } else if (winWidth <= 768) {
      // SP時
      hdrHeight = 100;
    }
    var href      = $(this).attr('href');
    var target    = $(href == '#' || href == '' ? 'html' : href);
    var position  = target.offset().top - hdrHeight;

    $('body').animate({
      scrollTop: position
    }, speed, "easeInOutQuart");
    if (480 >= winWidth){
      $("#drop").slideToggle();
    }
  });
});
//toggleクリックのアクション
$(document).ready(function(){
  hsize = $(window).height();
  $("#drop-box").css("height", hsize - 450 + "px");
  $("#toggle").click(function(){
    $.when(
      $("#drop").slideToggle(),
      $("#drop").toggleClass('active')
    ).done(function(){ 
      if (480 < window.innerWidth){
        $("#drop").show();
        $("#drop-box").hide();
      }
    });
    return false;
  });
  $(window).resize(function(){
    var win = window.innerWidth;
    var p = 480;
    hsize = $(window).height();
    $("#drop-box").css("height", hsize - 450 + "px");
    if(win > p){
      $("#drop").show();
      $("#drop-box").hide();
    }else {
      $("#drop").hide();
      $("#drop-box").show();
    }
  });
});
//ナビゲーションのあまり埋める
// $(document).ready(function () {
//   hsize = $(window).height();
//   $("#drop-box").css("height", hsize - 450 + "px");
//   if (480 < window.innerWidth) {
//     $("#drop-box").hide();
//   }
// });
// $(window).resize(function () {
//   hsize = $(window).height();
//   $("#drop-box").css("height", hsize - 450 + "px");
// });
