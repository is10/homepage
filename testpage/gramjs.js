//animation

$(document).ready(function(){
	$('a[href^=#]').click(function(){
		var speed = 800;
    	var href= $(this).attr("href");
    	var target = $(href == "#" || href == "" ? 'html' : href);
    	var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    	return false;
	});

	$(window).scroll(function(){
		var now = $(document).scrollTop();
			if( now > 700 ){
				$( '#pagetop' ).fadeIn( 'slow' );
			}
			else{
				$( '#pagetop' ).fadeOut( 'slow' );
			}
	});	
	
//googlemap

function mapInit() {
    var centerPosition = new google.maps.LatLng(35.656956, 139.695518);
    var option = {
        zoom : 15,
        center : centerPosition,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    //地図本体描画
    var googlemap = new google.maps.Map(document.getElementById("mapField"), option);
}
 
    mapInit();
    
});