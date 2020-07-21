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

!function(e){e.fn.appear=function(a,p){var r=e.extend({data:void 0,one:!0,accX:0,accY:0},p);return this.each(function(){var p=e(this);if(p.appeared=!1,a){var n=e(window),t=function(){if(p.is(":visible")){var e=n.scrollLeft(),a=n.scrollTop(),t=p.offset(),c=t.left,i=t.top,f=r.accX,o=r.accY,s=p.height(),l=n.height(),h=p.width(),u=n.width();i+s+o>=a&&i<=a+l+o&&c+h+f>=e&&c<=e+u+f?p.appeared||p.trigger("appear",r.data):p.appeared=!1}else p.appeared=!1},c=function(){if(p.appeared=!0,r.one){n.unbind("scroll",t);var c=e.inArray(t,e.fn.appear.checks);c>=0&&e.fn.appear.checks.splice(c,1)}a.apply(this,arguments)};r.one?p.one("appear",r.data,c):p.bind("appear",r.data,c),n.scroll(t),e.fn.appear.checks.push(t),t()}else p.trigger("appear",r.data)})},e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var a=e.fn.appear.checks.length;if(a>0)for(;a--;)"function"==typeof e.fn.appear.checks[a]&&e.fn.appear.checks[a]()},run:function(){e.fn.appear.timeout&&clearTimeout(e.fn.appear.timeout),e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}}),e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(a,p){var r=e.fn[p];r&&(e.fn[p]=function(){var a=r.apply(this,arguments);return e.fn.appear.run(),a})})}(jQuery);

}
/*
     FILE ARCHIVED ON 14:57:18 Feb 02, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:16:02 Jul 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 92.501 (2)
  exclusion.robots.policy: 0.126
  captures_list: 999.744
  LoadShardBlock: 980.668 (3)
  CDXLines.iter: 14.803 (3)
  PetaboxLoader3.datanode: 913.156 (4)
  RedisCDXSource: 0.644
  esindex: 0.014
  exclusion.robots: 0.136
  load_resource: 73.897
*/