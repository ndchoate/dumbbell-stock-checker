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

!function(t,o,p){if("undefined"!=typeof ywgc_popup_data){var i=function(i){i.length&&(this.self=i,this.wrap=i.find(".yith-ywgc-popup-wrapper"),this.popup=i.find(".yith-ywgc-popup"),this.content=i.find(".yith-ywgc-popup-content-wrapper"),this.overlay=i.find(".yith-ywgc-overlay"),this.blocked=!1,this.opened=!1,this.additional=!1,this.currentSection=null,this.previousSection=null,this.animationIn=this.popup.attr("data-animation-in"),this.animationOut=this.popup.attr("data-animation-out"),this.position(null),t(this.popup).on("click",function(t){t.stopPropagation()}),t(o).on("resize",{obj:this},this.position),t(p).on("click",ywgc_popup_data.mainSelector,{obj:this,additional:!1},this.open),t(p).on("click",".yith-ywgc-overlay.close-on-click",function(o){o.preventDefault(),t(".yith-ywgc-popup-wrapper .yith-ywgc-popup-close").click()}),this.popup.on("click",".yith-ywgc-popup-close",{obj:this},this.close))};i.prototype.position=function(p){let i=null==p?this.popup:p.data.obj.popup,e=t(o).width(),n=t(o).height(),a=e-40>ywgc_popup_data.popupWidth?n/10+"px":"0",s=e-40>ywgc_popup_data.popupWidth?ywgc_popup_data.popupWidth+"px":"auto";i.css({"margin-top":a,"margin-bottom":a,width:s})},i.prototype.block=function(){this.blocked||(this.popup.block({message:null,overlayCSS:{background:"#fff url("+ywgc_popup_data.loader+") no-repeat center",opacity:.5,cursor:"none"}}),this.blocked=!0)},i.prototype.unblock=function(){this.blocked&&(this.popup.unblock(),this.blocked=!1)},i.prototype.open=function(o){o.preventDefault();let i=o.data.obj;i.opened||(i.opened=!0,i.loadTemplate("gift-card-presets",{title:"Test title"}),i.self.fadeIn("slow"),e(i.overlay,"fadeIn"),e(i.popup,i.animationIn),t("html, body").addClass("yith_ywgc_opened"),i.wrap.css("position","fixed"),i.overlay.css("position","fixed"),i.overlay.css("z-index","1"),t(p).trigger("yith_ywgc_popup_opened",[i.popup,i]))},i.prototype.loadTemplate=function(t,o){var p=wp.template(t);this.showTemplate(p(o))},i.prototype.showTemplate=function(o){this.content.hide().html(o).fadeIn("slow"),t(p).trigger("yith_ywgc_popup_template_loaded",[this.popup,this])},i.prototype.close=function(o){o.preventDefault();var i=o.data.obj;i.additional=!1,i.opened=!1,i.self.fadeOut("slow"),t("html, body").removeClass("yith_ywgc_opened"),t(p).trigger("yith_ywgc_popup_closed",[i.popup,i])},t(p).on("ready",function(){new i(t(p).find("#yith-ywgc"))})}function e(t,o,p){t.show().addClass("animated "+o),t.one("animationend",function(){t.removeClass("animated "+o),void 0!==p&&p()})}}(jQuery,window,document);

}
/*
     FILE ARCHIVED ON 21:51:45 Feb 04, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:16:05 Jul 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.223
  PetaboxLoader3.resolve: 88.719 (2)
  LoadShardBlock: 98.337 (3)
  RedisCDXSource: 10.687
  exclusion.robots.policy: 0.207
  esindex: 0.015
  PetaboxLoader3.datanode: 56.609 (4)
  CDXLines.iter: 17.757 (3)
  captures_list: 130.569
  load_resource: 53.701
*/