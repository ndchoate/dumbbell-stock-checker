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
    if (jQuery().tooltipster) {

        $('.track-button').tooltipster();

        if ( ywot.tooltip == 'yes' )
            $(document).on('mouseover', 'a.track-button', (function (e) {
                $(this).tooltipster('content', $(this).attr('data-title'));
            }));

        if (1 != ywot.p) {
            $(document).on('click', "a.track-button", (function (e) {
                e.preventDefault();

                $(this).tooltipster('content', $(this).attr('data-title'));
            }));
        }
    }


    var originalDefaultLabel = $("label[for='ywot_tracking_code']").text();
    var originalDefaultPlaceholder = $("#ywot_tracking_code").attr('placeholder');

    /*
    Change label and placeholder for BRT_WITH_PACKAGE_NUMBER carrier
     */
    jQuery( '#ywot_carrier_id' ).on('change',function(){
        var label = '';
        var placeholder = '';
        var currentCarrier = $(this).val();
        if( currentCarrier == 'BRT_WITH_PACKAGE_NUMBER' ){
            label = 'Package Number';
            placeholder = 'Enter package number';
        }else{
            label = originalDefaultLabel;
            placeholder = originalDefaultPlaceholder
        }
        $("label[for='ywot_tracking_code']").text(label);
        $("#ywot_tracking_code").attr('placeholder',placeholder);
    });


});

}
/*
     FILE ARCHIVED ON 14:57:18 Feb 02, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:16:06 Jul 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 0.756
  esindex: 0.013
  exclusion.robots: 0.194
  LoadShardBlock: 76.373 (3)
  exclusion.robots.policy: 0.182
  captures_list: 107.827
  load_resource: 97.406
  PetaboxLoader3.resolve: 115.292 (2)
  PetaboxLoader3.datanode: 52.948 (4)
  CDXLines.iter: 25.9 (3)
*/