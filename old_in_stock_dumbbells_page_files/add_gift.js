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

jQuery(document).ready(function ($) {
	jQuery(".btn-add-gift-button").live("click",function(e){
		jQuery(".gift_cart_ajax").show();
		
		e.preventDefault();
		
		var pdata = {
					action: pw_wc_gift_adv_ajax.action_add_gift,
					pw_add_gift: jQuery(this).data("id"),
				}
		$.ajax ({
			type: "POST",
			url: pw_wc_gift_adv_ajax.ajaxurl,
			data: pdata,
			success: function (resp) {
			    //alert(resp);
				window.location.href = pw_wc_gift_adv_ajax.cart_page_id;
			}
		});
	}); 	
	
	jQuery(".btn-select-gift-button").live("click",function(e){
		
		
		e.preventDefault();
	
		var pdata = {
					action: pw_wc_gift_adv_ajax.action_show_variation,
					pw_gift_variable: jQuery(this).data("id"),
					pw_gift_rule_id: jQuery(this).data("rule-id"),
				}
		$.ajax ({
			type: "POST",
			url: pw_wc_gift_adv_ajax.ajaxurl,
			data: pdata,
			success: function (resp) {
			   // alert();
				$(".pw-gifts").html(resp);				
				chanegLayout();
				jQuery(".pw-cover").css('visibility','visible');
				jQuery(".pw_gift_popup").css('visibility','visible');
				//window.location.href = pw_wc_gift_adv_ajax.cart_page_id;
			}
		});
		  
	}); 
	
	$(".pw_gift_pagination_num").click(function(e){
		e.preventDefault();
		var page=$(this).attr("data-page-id");
		$("."+page).siblings(".pw_gift_pagination_div").removeClass("pw-gift-active");
		$("."+page).addClass("pw-gift-active");
	});	
	

	jQuery('.pw-cover,.pw_gift_popup_close').on('click',function(){
		jQuery('.pw_gift_popup').css('visibility','hidden');
		jQuery('.pw-cover').css('visibility','hidden');
	});	
});

jQuery(window).on('resize', function(){
	chanegLayout();
});
function chanegLayout() {
  jQuery('.pw_gift_popup').css({
    position: 'fixed',
    left: (jQuery(window).width() - jQuery('.pw_gift_popup').outerWidth()) / 2,
    top: (jQuery(window).height() - jQuery('.pw_gift_popup').outerHeight()) / 2
  });

}



}
/*
     FILE ARCHIVED ON 14:57:21 Feb 02, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:15:53 Jul 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 58.897 (4)
  exclusion.robots: 0.15
  LoadShardBlock: 61.761 (3)
  exclusion.robots.policy: 0.141
  CDXLines.iter: 12.148 (3)
  load_resource: 58.37
  PetaboxLoader3.resolve: 50.561
  captures_list: 76.862
  esindex: 0.011
  RedisCDXSource: 0.649
*/