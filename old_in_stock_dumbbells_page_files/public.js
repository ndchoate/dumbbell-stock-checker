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
	"use strict";
	
	$(function () {
		
	jQuery('.gallery_vote').one('click', function() {
        var photoId = jQuery(this).data('item');
        var pageId = jQuery(this).data('page');
		var num = parseInt($.trim($('.pc-votes-count').html()));
        var data = {
            action: 'voted_for_photo',
            photo_id: photoId,
			page_id: pageId
        };
        $.post(ajaxurl, data, function(response) {
                $("div.pc-show").fadeOut(0);
				$("div.pc-hide").fadeIn(2000);
				$(".pc-votes-count").html(++num)
        });
    });
	
	  
  });
  
$(document).ready(function() {
    $("input.old").focus(function() { $(this).select(); } );
});
 
}(jQuery));

// JavaScript Document

 var loadFileU = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('coutput');
      output.src = reader.result;
	  document.getElementById("coutput").className = "uploadimage";
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  

}
/*
     FILE ARCHIVED ON 14:57:20 Feb 02, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:15:56 Jul 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 136.404
  CDXLines.iter: 11.391 (3)
  LoadShardBlock: 132.007 (3)
  esindex: 0.012
  captures_list: 340.428
  exclusion.robots.policy: 0.118
  RedisCDXSource: 194.919
  PetaboxLoader3.datanode: 188.336 (4)
  PetaboxLoader3.resolve: 35.248
  exclusion.robots: 0.127
*/