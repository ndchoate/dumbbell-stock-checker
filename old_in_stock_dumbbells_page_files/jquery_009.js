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

 /*
 * TipTip
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/cxecrtTipTip-jquery-plugin
 *
 * Version 1.3   -   Updated: Mar. 23, 2010
 * 
 * Layers: changed 'tipTip' to 'cxecrtTipTip' so we don;t clash with others using tip tip, and we are not stuck using one top plugin forever.
 *
 * This Plug-In will create a custom tooltip to replace the default
 * browser tooltip. It is extremely lightweight and very smart in
 * that it detects the edges of the browser window and will make sure
 * the tooltip stays within the current window size. As a result the
 * tooltip will adjust itself to be displayed above, below, to the left 
 * or to the right depending on what is necessary to stay within the
 * browser window. It is completely customizable as well via CSS.
 *
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.cxecrtTipTip=function(options){var defaults={activation:"hover",keepAlive:false,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:false,enter:function(){},exit:function(){}};var opts=$.extend(defaults,options);if($("#cxecrtTipTip_holder").length<=0){var cxecrtTipTip_holder=$('<div id="cxecrtTipTip_holder" style="max-width:'+opts.maxWidth+';"></div>');var cxecrtTipTip_content=$('<div id="cxecrtTipTip_content"></div>');var cxecrtTipTip_arrow=$('<div id="cxecrtTipTip_arrow"></div>');$("body").append(cxecrtTipTip_holder.html(cxecrtTipTip_content).prepend(cxecrtTipTip_arrow.html('<div id="cxecrtTipTip_arrow_inner"></div>')))}else{var cxecrtTipTip_holder=$("#cxecrtTipTip_holder");var cxecrtTipTip_content=$("#cxecrtTipTip_content");var cxecrtTipTip_arrow=$("#cxecrtTipTip_arrow")}return this.each(function(){var org_elem=$(this);if(opts.content){var org_title=opts.content}else{var org_title=org_elem.attr(opts.attribute)}if(org_title!=""){if(!opts.content){org_elem.removeAttr(opts.attribute)}var timeout=false;if(opts.activation=="hover"){org_elem.hover(function(){active_cxecrtTipTip()},function(){if(!opts.keepAlive){deactive_cxecrtTipTip()}});if(opts.keepAlive){cxecrtTipTip_holder.hover(function(){},function(){deactive_cxecrtTipTip()})}}else if(opts.activation=="focus"){org_elem.focus(function(){active_cxecrtTipTip()}).blur(function(){deactive_cxecrtTipTip()})}else if(opts.activation=="click"){org_elem.click(function(){active_cxecrtTipTip();return false}).hover(function(){},function(){if(!opts.keepAlive){deactive_cxecrtTipTip()}});if(opts.keepAlive){cxecrtTipTip_holder.hover(function(){},function(){deactive_cxecrtTipTip()})}}function active_cxecrtTipTip(){opts.enter.call(this);cxecrtTipTip_content.html(org_title);cxecrtTipTip_holder.hide().removeAttr("class").css("margin","0");cxecrtTipTip_arrow.removeAttr("style");var top=parseInt(org_elem.offset()['top']);var left=parseInt(org_elem.offset()['left']);var org_width=parseInt(org_elem.outerWidth());var org_height=parseInt(org_elem.outerHeight());var tip_w=cxecrtTipTip_holder.outerWidth();var tip_h=cxecrtTipTip_holder.outerHeight();var w_compare=Math.round((org_width-tip_w)/2);var h_compare=Math.round((org_height-tip_h)/2);var marg_left=Math.round(left+w_compare);var marg_top=Math.round(top+org_height+opts.edgeOffset);var t_class="";var arrow_top="";var arrow_left=Math.round(tip_w-12)/2;if(opts.defaultPosition=="bottom"){t_class="_bottom"}else if(opts.defaultPosition=="top"){t_class="_top"}else if(opts.defaultPosition=="left"){t_class="_left"}else if(opts.defaultPosition=="right"){t_class="_right"}var right_compare=(w_compare+left)<parseInt($(window).scrollLeft());var left_compare=(tip_w+left)>parseInt($(window).width());if((right_compare&&w_compare<0)||(t_class=="_right"&&!left_compare)||(t_class=="_left"&&left<(tip_w+opts.edgeOffset+5))){t_class="_right";arrow_top=Math.round(tip_h-13)/2;arrow_left=-12;marg_left=Math.round(left+org_width+opts.edgeOffset);marg_top=Math.round(top+h_compare)}else if((left_compare&&w_compare<0)||(t_class=="_left"&&!right_compare)){t_class="_left";arrow_top=Math.round(tip_h-13)/2;arrow_left=Math.round(tip_w);marg_left=Math.round(left-(tip_w+opts.edgeOffset+5));marg_top=Math.round(top+h_compare)}var top_compare=(top+org_height+opts.edgeOffset+tip_h+8)>parseInt($(window).height()+$(window).scrollTop());var bottom_compare=((top+org_height)-(opts.edgeOffset+tip_h+8))<0;if(top_compare||(t_class=="_bottom"&&top_compare)||(t_class=="_top"&&!bottom_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_top"}else{t_class=t_class+"_top"}arrow_top=tip_h;marg_top=Math.round(top-(tip_h+5+opts.edgeOffset))}else if(bottom_compare|(t_class=="_top"&&bottom_compare)||(t_class=="_bottom"&&!top_compare)){if(t_class=="_top"||t_class=="_bottom"){t_class="_bottom"}else{t_class=t_class+"_bottom"}arrow_top=-12;marg_top=Math.round(top+org_height+opts.edgeOffset)}if(t_class=="_right_top"||t_class=="_left_top"){marg_top=marg_top+5}else if(t_class=="_right_bottom"||t_class=="_left_bottom"){marg_top=marg_top-5}if(t_class=="_left_top"||t_class=="_left_bottom"){marg_left=marg_left+5}cxecrtTipTip_arrow.css({"margin-left":arrow_left+"px","margin-top":arrow_top+"px"});cxecrtTipTip_holder.css({"margin-left":marg_left+"px","margin-top":marg_top+"px"}).attr("class","tip"+t_class);if(timeout){clearTimeout(timeout)}timeout=setTimeout(function(){cxecrtTipTip_holder.stop(true,true).fadeIn(opts.fadeIn)},opts.delay)}function deactive_cxecrtTipTip(){opts.exit.call(this);if(timeout){clearTimeout(timeout)}cxecrtTipTip_holder.fadeOut(opts.fadeOut)}}})}})(jQuery);

}
/*
     FILE ARCHIVED ON 14:57:26 Feb 02, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:16:08 Jul 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 95.811 (4)
  exclusion.robots: 0.203
  LoadShardBlock: 80.789 (3)
  exclusion.robots.policy: 0.188
  CDXLines.iter: 10.896 (3)
  load_resource: 96.227
  PetaboxLoader3.resolve: 73.569
  captures_list: 97.85
  esindex: 0.01
  RedisCDXSource: 3.447
*/