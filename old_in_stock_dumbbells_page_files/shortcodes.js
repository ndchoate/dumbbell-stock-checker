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

jQuery(function() {
	
	/* Accordion */
	jQuery('.flash_sale-shortcode-toggle-active').each(function() {
		jQuery(this).find('.flash_sale-shortcode-toggle-content').show();
	});
	jQuery('.flash_sale-shortcode-toggle .flash_sale-shortcode-toggle-heading').click(function() {
		var toggle = jQuery(this).parent('.flash_sale-shortcode-toggle');
		if(jQuery(this).parent('.flash_sale-shortcode-toggle').parent('div').hasClass('flash_sale-shortcode-accordion')) {
			toggle.parent('div').find('.flash_sale-shortcode-toggle').find('.flash_sale-shortcode-toggle-content:visible').slideUp();
			toggle.parent('div').find('.flash_sale-shortcode-toggle-active').removeClass('flash_sale-shortcode-toggle-active');
			toggle.toggleClass('flash_sale-shortcode-toggle-active');
			toggle.find('.flash_sale-shortcode-toggle-content').slideToggle(500);
		} else {
			toggle.toggleClass('flash_sale-shortcode-toggle-active');
			toggle.find('.flash_sale-shortcode-toggle-content').slideToggle(500);
		}
	});
	
	
	/* Tabs */
	jQuery('.flash_sale-shortcode-tabs').each(function() {
		
		jQuery(this).prepend('<div class="flash_sale-shortcode-tab-buttons"></div>');
		jQuery(this).find('.flash_sale-shortcode-tabpane').each(function() {
			
			jQuery(this).parent('.flash_sale-shortcode-tabs').find('.flash_sale-shortcode-tab-buttons').append('<a href="#">'+jQuery(this).find('.flash_sale-shortcode-tab-label').text()+'</a>');
			jQuery(this).find('.flash_sale-shortcode-tab-label').remove();
			
		});
		
		jQuery(this).find('.flash_sale-shortcode-tab-buttons').find('a:first').addClass('active');
		jQuery(this).find('.flash_sale-shortcode-tabpane').hide();
		jQuery(this).find('.flash_sale-shortcode-tabpane:first').show();
		
	});
	
	var tab_to_show = 0;
	jQuery(document).on('click', '.flash_sale-shortcode-tab-buttons a', function() {
		tab_to_show = jQuery(this).parent('.flash_sale-shortcode-tab-buttons').find('a').index(jQuery(this));
		jQuery(this).parent('.flash_sale-shortcode-tab-buttons').parent('.flash_sale-shortcode-tabs').find('.flash_sale-shortcode-tabpane').hide();
		jQuery(this).parent('.flash_sale-shortcode-tab-buttons').parent('.flash_sale-shortcode-tabs').find('.flash_sale-shortcode-tabpane').eq(tab_to_show).show();
		jQuery(this).parent('.flash_sale-shortcode-tab-buttons').find('a').removeClass('active');
		jQuery(this).parent('.flash_sale-shortcode-tab-buttons').find('a').eq(tab_to_show).addClass('active');
		return false;
	});
	
});

}
/*
     FILE ARCHIVED ON 14:57:26 Feb 02, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:16:01 Jul 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 46.833 (4)
  LoadShardBlock: 163.738 (3)
  exclusion.robots: 0.19
  load_resource: 73.622
  RedisCDXSource: 110.969
  captures_list: 294.176
  exclusion.robots.policy: 0.179
  PetaboxLoader3.resolve: 182.233 (3)
  CDXLines.iter: 15.895 (3)
  esindex: 0.02
*/