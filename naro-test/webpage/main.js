$(document).ready(function(){
  // $('#slider').slick({
  //   autoplay:true,
  //   autoplaySpeed:2000,
  //   arrows:false,
  // });
  $('#slider').infiniteslide({
            'height': 400, //高さ
            'speed': 40, //速さ
            'direction' : 'left', //向き
            'pauseonhover': false //マウスオーバーでストップ
  });
});

$(document).ready(function () {
    var headerHight = 50; //ヘッダの高さ
    $('a[href^=#]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
        $("html, body").animate({scrollTop:position}, 600, "easeInOutQuart");
        return false;
    });
});