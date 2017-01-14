/**
 * Plugin Name: jquery.SmoothScroll
 * Plugin URI: http://2inc.org
 * Description: スムーススクロールでページ内移動するためのプラグイン。指定要素のhashをもとに移動する。
 * Version: 0.5.0
 * Author: Takashi Kitajima
 * Author URI: http://2inc.org
 * Created: July 5, 2012
 * Modified: February 8, 2016
 * License: GPLv2+
 *
 * easing: http://gsgd.co.uk/sandbox/jquery/easing/
 * @param { duration, easing, offset, hash )
 */
;( function( $ ) {
	var as = {
		init : function( params ) {
			var as = {
				scrollStop: function() {
					targetBody.stop( true );
				},
				getTargetBody: function() {
					if ( $( 'html' ).scrollTop() > 0 ) {
						targetBody = $( 'html' );
					} else if ( $( 'body' ).scrollTop() > 0 ) {
						targetBody = $( 'body' );
					}
					return targetBody;
				}
			};

			var defaults = {
				duration: 1000,
				easing  : 'easeOutQuint',
				offset  : 0,
				hash    : true
			};
			params = $.extend( defaults, params );

			var targetBody;

			return this.each( function( i, e ) {
				$( e ).on( 'click.SmoothScroll', function() {
					var targetHash = this.hash.split('%').join('\\%').split('(').join('\\(').split(')').join('\\)');
					var offset = $( targetHash ).eq( 0 ).offset();
					if ( !targetHash || offset === null || typeof offset === 'undefined' )
						return;

					var wst = $( window ).scrollTop();
					if ( wst === 0 )
						$( window ).scrollTop( wst + 1 );

					targetBody = as.getTargetBody();
					if ( typeof targetBody === 'undefined' )
						return;
					targetBody.animate(
						{
							scrollTop: offset.top - params.offset
						},
						params.duration,
						params.easing,
						function() {
							if ( params.hash === true ) {
								history.pushState( '', '', targetHash );
							}
						}
					);

					if ( window.addEventListener )
						window.addEventListener( 'DOMMouseScroll', as.scrollStop, false );
					window.onmousewheel = document.onmousewheel = as.scrollStop;
					return false;
				} );
			} );
		},
		off: function() {
			$( this ).unbind( 'click.SmoothScroll' );
		}
	};

	$.fn.SmoothScroll = function( a ) {
		if ( as[a] ) {
			return as[ a ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof a === 'object' || ! a ) {
			return as.init.apply( this, arguments );
		} else {
			$.error( 'a ' +  a + ' does not exist' );
		}
	};
} )( jQuery );
