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
  