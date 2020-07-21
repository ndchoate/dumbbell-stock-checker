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

!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"],hasImageAttributes:["srcset"]},e.expr[":"].uncached=function(r){return!!e(r).is('img[src][src!=""]')&&!r.complete},e.fn.waitForImages=function(){var r,t,i,n=0,a=0,s=e.Deferred();if(e.isPlainObject(arguments[0])?(i=arguments[0].waitForAll,t=arguments[0].each,r=arguments[0].finished):1===arguments.length&&"boolean"===e.type(arguments[0])?i=arguments[0]:(r=arguments[0],t=arguments[1],i=arguments[2]),r=r||e.noop,t=t||e.noop,i=!!i,!e.isFunction(r)||!e.isFunction(t))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var o=e(this),c=[],u=e.waitForImages.hasImageProperties||[],h=e.waitForImages.hasImageAttributes||[],l=/url\(\s*(['"]?)(.*?)\1\s*\)/g;i?o.find("*").addBack().each(function(){var r=e(this);r.is("img:uncached")&&c.push({src:r.attr("src"),element:r[0]}),e.each(u,function(e,t){var i,n=r.css(t);if(!n)return!0;for(;i=l.exec(n);)c.push({src:i[2],element:r[0]})}),e.each(h,function(t,i){var n,a=r.attr(i);if(!a)return!0;n=a.split(","),e.each(n,function(t,i){i=e.trim(i).split(" ")[0],c.push({src:i,element:r[0]})})})}):o.find("img:uncached").each(function(){c.push({src:this.src,element:this})}),n=c.length,a=0,0===n&&(r.call(o[0]),s.resolveWith(o[0])),e.each(c,function(i,c){var u=new Image,h="load.waitForImages error.waitForImages";e(u).one(h,function i(u){var l=[a,n,"load"==u.type];if(a++,t.apply(c.element,l),s.notifyWith(c.element,l),e(this).off(h,i),a==n)return r.call(o[0]),s.resolveWith(o[0]),!1}),u.src=c.src})}),s.promise()}});

}
/*
     FILE ARCHIVED ON 14:57:20 Feb 02, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:16:07 Jul 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 717.876 (4)
  exclusion.robots: 0.124
  LoadShardBlock: 697.619 (3)
  exclusion.robots.policy: 0.116
  CDXLines.iter: 12.5 (3)
  load_resource: 215.074
  PetaboxLoader3.resolve: 190.041
  captures_list: 718.994
  esindex: 0.01
  RedisCDXSource: 6.179
*/