jQuery(document).ready(function(l){"use strict";var e=l(".yith-s"),a="undefined"!=typeof woocommerce_params&&"undefined"!=typeof woocommerce_params.ajax_loader_url?woocommerce_params.ajax_loader_url:yith_wcas_params.loading,t=""==e.data("loader-icon")?a:e.data("loader-icon"),p=e.data("min-chars");e.each(function(){var i=l(this),o=i.closest("form"),r=!1,n=o.find(".search_categories"),s=o.find(".yit_wcas_post_type"),e=o.find("#yith-searchsubmit"),c=0<o.find('[name="lang"]').length?o.find('[name="lang"]').val():"",d=void 0===i.data("append-to")?i.closest(".yith-ajaxsearchform-container"):i.closest(i.data("append-to")),a=yith_wcas_params.ajax_url.toString().replace("%%endpoint%%","yith_ajax_search_products");e.on("click",function(){if(n.length)o.submit();else if(""==o.find(".yith-s").val())return!1;return!0}),i.yithautocomplete({minChars:p,maxHeight:"auto",appendTo:d,triggerSelectOnValidInput:!1,serviceUrl:a+"&post_type="+s.val()+"&lang="+c+"&action=yith_ajax_search_products",onSearchStart:function(){i.css({"background-image":"url("+t+")","background-repeat":"no-repeat","background-position":"center right"})},onSearchComplete:function(){i.css("background-image","none"),l(window).trigger("resize"),i.trigger("focus")},onSelect:function(e){-1!=e.id&&(l(this).val(""),window.location.href=e.url)},beforeRender:function(){var e,a,t,n;"true"==yith_wcas_params.show_all&&r&&(e={s:i.val(),post_type:o.find(".yit_wcas_post_type").val()},0<o.find(".search_categories").length&&(e.product_cat=o.find(".search_categories").val()),t=-1!==(a=o.attr("action")).indexOf("?")?"&":"?",n='<div class="link-result"><a href="'+(a+t+l.param(e))+'">'+yith_wcas_params.show_all_text+"</a></div>",d.find(".autocomplete-suggestions").append(n))},transformResult:function(e){return e="string"==typeof e?l.parseJSON(e):e,r=e.results,e},formatResult:function(e,a){var t="("+l.YithAutocomplete.utils.escapeRegExChars(a)+")",n="";return"undefined"!=typeof e.img&&(n+=e.img),n+='<div class="yith_wcas_result_content"><div class="title">',n+=e.value.replace(new RegExp(t,"gi"),"<strong>$1</strong>"),n+="</div>","undefined"!=typeof e.sku&&(n+=e.sku),"undefined"!=typeof e.product_categories&&(n+=" "+e.product_categories),"undefined"!=typeof e.div_badge_open&&(n+=e.div_badge_open),"undefined"!=typeof e.on_sale&&(n+=e.on_sale),"undefined"!=typeof e.outofstock&&(n+=e.outofstock),"undefined"!=typeof e.featured&&(n+=e.featured),"undefined"!=typeof e.div_badge_close&&(n+=e.div_badge_close),"undefined"!=typeof e.price&&""!=e.price&&(n+=" "+yith_wcas_params.price_label+" "+e.price),"undefined"!=typeof e.excerpt&&(n+=" "+e.excerpt.replace(new RegExp(t,"gi"),"<strong>$1</strong>")),n+="</div>"}}),n.length&&n.on("change",function(e){var a=i.yithautocomplete(),t=yith_wcas_params.ajax_url.toString().replace("%%endpoint%%","yith_ajax_search_products");""!=n.val()?a.setOptions({serviceUrl:t+"&product_cat="+n.val()+"&lang="+c}):a.setOptions({serviceUrl:t+"&lang="+c}),a.hide(),a.onValueChange()}),s.length&&("any"==s.val()?n.attr("disabled","disabled"):n.removeAttr("disabled"),s.on("change",function(e){var a=i.yithautocomplete(),t=yith_wcas_params.ajax_url.toString().replace("%%endpoint%%","yith_ajax_search_products");"any"==s.val()?n.attr("disabled","disabled"):n.removeAttr("disabled"),""!=s.val()?a.setOptions({serviceUrl:t+"&post_type="+s.val()+"&lang="+c}):a.setOptions({serviceUrl:t+"&lang="+c}),a.hide(),a.onValueChange()}))})});