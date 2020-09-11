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

!function(t){var e=-1,a=-1,o=function(t){return parseFloat(t)||0},i=function(e){var a={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(a,e):("boolean"==typeof e?a.byRow=e:"remove"===e&&(a.remove=!0),a)},n=t.fn.matchHeight=function(e){var a=i(e);if(a.remove){var o=this;return this.css(a.property,""),t.each(n._groups,function(t,e){e.elements=e.elements.not(o)}),this}return this.length<=1&&!a.target?this:(n._groups.push({elements:this,options:a}),n._apply(this,a),this)};n._groups=[],n._throttle=80,n._maintainScroll=!1,n._beforeUpdate=null,n._afterUpdate=null,n._apply=function(e,a){var r=i(a),s=t(e),h=[s],c=t(window).scrollTop(),l=t("html").outerHeight(!0),p=s.parents().filter(":hidden");return p.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),p.css("display","block"),r.byRow&&!r.target&&(s.each(function(){var e=t(this),a="inline-block"===e.css("display")?"inline-block":"block";e.data("style-cache",e.attr("style")),e.css({display:a,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),h=function(e){var a=null,i=[];return t(e).each(function(){var e=t(this),n=e.offset().top-o(e.css("margin-top")),r=i.length>0?i[i.length-1]:null;null===r?i.push(e):Math.floor(Math.abs(a-n))<=1?i[i.length-1]=r.add(e):i.push(e),a=n}),i}(s),s.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(h,function(e,a){var i=t(a),n=0;if(r.target)n=r.target.outerHeight(!1);else{if(r.byRow&&i.length<=1)return void i.css(r.property,"");i.each(function(){var e=t(this),a={display:"inline-block"===e.css("display")?"inline-block":"block"};a[r.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),e.css("display","")})}i.each(function(){var e=t(this),a=0;r.target&&e.is(r.target)||("border-box"!==e.css("box-sizing")&&(a+=o(e.css("border-top-width"))+o(e.css("border-bottom-width")),a+=o(e.css("padding-top"))+o(e.css("padding-bottom"))),e.css(r.property,n-a))})}),p.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),n._maintainScroll&&t(window).scrollTop(c/l*t("html").outerHeight(!0)),this},n._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var a=t(this),o=a.attr("data-mh")||a.attr("data-match-height");e[o]=o in e?e[o].add(a):a}),t.each(e,function(){this.matchHeight(!0)})};var r=function(e){n._beforeUpdate&&n._beforeUpdate(e,n._groups),t.each(n._groups,function(){n._apply(this.elements,this.options)}),n._afterUpdate&&n._afterUpdate(e,n._groups)};n._update=function(o,i){if(i&&"resize"===i.type){var s=t(window).width();if(s===e)return;e=s}o?-1===a&&(a=setTimeout(function(){r(i),a=-1},n._throttle)):r(i)},t(n._applyDataApi),t(window).bind("load",function(t){n._update(!1,t)}),t(window).bind("resize orientationchange",function(t){n._update(!0,t)})}(jQuery);

}
/*
     FILE ARCHIVED ON 14:57:12 Feb 02, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:16:01 Jul 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 40.738
  exclusion.robots.policy: 0.237
  captures_list: 284.023
  LoadShardBlock: 262.062 (3)
  CDXLines.iter: 17.044 (3)
  PetaboxLoader3.datanode: 263.16 (4)
  RedisCDXSource: 0.761
  esindex: 0.015
  exclusion.robots: 0.272
  load_resource: 53.509
*/