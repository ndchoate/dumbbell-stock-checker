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

/*!
 * accounting.js v0.4.2
 * Copyright 2014 Open Exchange Rates
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://openexchangerates.github.io/accounting.js/
 */
!function(n,r){function e(n){return!!(""===n||n&&n.charCodeAt&&n.substr)}function t(n){return p?p(n):"[object Array]"===l.call(n)}function o(n){return n&&"[object Object]"===l.call(n)}function a(n,r){var e;n=n||{},r=r||{};for(e in r)r.hasOwnProperty(e)&&null==n[e]&&(n[e]=r[e]);return n}function i(n,r,e){var t,o,a=[];if(!n)return a;if(f&&n.map===f)return n.map(r,e);for(t=0,o=n.length;t<o;t++)a[t]=r.call(e,n[t],t,n);return a}function u(n,r){return n=Math.round(Math.abs(n)),isNaN(n)?r:n}function c(n){var r=s.settings.currency.format;return"function"==typeof n&&(n=n()),e(n)&&n.match("%v")?{pos:n,neg:n.replace("-","").replace("%v","-%v"),zero:n}:n&&n.pos&&n.pos.match("%v")?n:e(r)?s.settings.currency.format={pos:r,neg:r.replace("%v","-%v"),zero:r}:r}var s={};s.version="0.4.1",s.settings={currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}};var f=Array.prototype.map,p=Array.isArray,l=Object.prototype.toString,m=s.unformat=s.parse=function(n,r){if(t(n))return i(n,function(n){return m(n,r)});if("number"==typeof(n=n||0))return n;r=r||s.settings.number.decimal;var e=new RegExp("[^0-9-"+r+"]",["g"]),o=parseFloat((""+n).replace(/\((.*)\)/,"-$1").replace(e,"").replace(r,"."));return isNaN(o)?0:o},d=s.toFixed=function(n,r){r=u(r,s.settings.number.precision);var e=Math.pow(10,r);return(Math.round(s.unformat(n)*e)/e).toFixed(r)},g=s.formatNumber=s.format=function(n,r,e,c){if(t(n))return i(n,function(n){return g(n,r,e,c)});n=m(n);var f=a(o(r)?r:{precision:r,thousand:e,decimal:c},s.settings.number),p=u(f.precision),l=n<0?"-":"",h=parseInt(d(Math.abs(n||0),p),10)+"",y=h.length>3?h.length%3:0;return l+(y?h.substr(0,y)+f.thousand:"")+h.substr(y).replace(/(\d{3})(?=\d)/g,"$1"+f.thousand)+(p?f.decimal+d(Math.abs(n),p).split(".")[1]:"")},h=s.formatMoney=function(n,r,e,f,p,l){if(t(n))return i(n,function(n){return h(n,r,e,f,p,l)});n=m(n);var d=a(o(r)?r:{symbol:r,precision:e,thousand:f,decimal:p,format:l},s.settings.currency),y=c(d.format);return(n>0?y.pos:n<0?y.neg:y.zero).replace("%s",d.symbol).replace("%v",g(Math.abs(n),u(d.precision),d.thousand,d.decimal))};s.formatColumn=function(n,r,f,p,l,d){if(!n)return[];var h=a(o(r)?r:{symbol:r,precision:f,thousand:p,decimal:l,format:d},s.settings.currency),y=c(h.format),b=y.pos.indexOf("%s")<y.pos.indexOf("%v"),v=0;return i(i(n,function(n,r){if(t(n))return s.formatColumn(n,h);var e=((n=m(n))>0?y.pos:n<0?y.neg:y.zero).replace("%s",h.symbol).replace("%v",g(Math.abs(n),u(h.precision),h.thousand,h.decimal));return e.length>v&&(v=e.length),e}),function(n,r){return e(n)&&n.length<v?b?n.replace(h.symbol,h.symbol+new Array(v-n.length+1).join(" ")):new Array(v-n.length+1).join(" ")+n:n})},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=s),exports.accounting=s):"function"==typeof define&&define.amd?define([],function(){return s}):(s.noConflict=function(r){return function(){/*!
 * accounting.js v0.4.2
 * Copyright 2014 Open Exchange Rates
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://openexchangerates.github.io/accounting.js/
 */
return n.accounting=r,s.noConflict=void 0,s}}(n.accounting),n.accounting=s)}(this);

}
/*
     FILE ARCHIVED ON 21:51:39 Feb 04, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:16:04 Jul 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 0.838
  esindex: 0.011
  exclusion.robots: 0.186
  LoadShardBlock: 99.682 (3)
  exclusion.robots.policy: 0.174
  captures_list: 124.016
  load_resource: 69.707
  PetaboxLoader3.resolve: 32.138
  PetaboxLoader3.datanode: 122.842 (4)
  CDXLines.iter: 19.788 (3)
*/