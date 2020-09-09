var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function ( $ ) {
	'use strict';

	$( document ).ready( function () {
		$( 'body' ).on( 'adding_to_cart', function ( event, $button, data ) {
			if ( $button && $button.hasClass( 'vc_gitem-link' ) ) {
				$button
					.addClass( 'vc-gitem-add-to-cart-loading-btn' )
					.parents( '.vc_grid-item-mini' )
					.addClass( 'vc-woocommerce-add-to-cart-loading' )
					.append( $( '<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>' ) );
			}
		} ).on( 'added_to_cart', function ( event, fragments, cart_hash, $button ) {
			if ( 'undefined' === typeof ($button) ) {
				$button = $( '.vc-gitem-add-to-cart-loading-btn' );
			}
			if ( $button && $button.hasClass( 'vc_gitem-link' ) ) {
				$button
					.removeClass( 'vc-gitem-add-to-cart-loading-btn' )
					.parents( '.vc_grid-item-mini' )
					.removeClass( 'vc-woocommerce-add-to-cart-loading' )
					.find( '.vc_wc-load-add-to-loader-wrapper' ).remove();
			}
		} );
	} );
})( window.jQuery );


}
/*
     FILE ARCHIVED ON 14:57:30 Feb 02, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:15:54 Jul 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.142
  PetaboxLoader3.resolve: 106.712 (2)
  LoadShardBlock: 199.366 (3)
  RedisCDXSource: 3.054
  exclusion.robots.policy: 0.132
  esindex: 0.012
  PetaboxLoader3.datanode: 96.268 (4)
  CDXLines.iter: 12.021 (3)
  captures_list: 217.237
  load_resource: 64.704
*/