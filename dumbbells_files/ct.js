jQuery( function ( $ ) {


    //find and change thumbnails connected with videos in product gallery
    $(document).ready(function () {

        var videos = $('.ct-woovideo-gallery-videos').find('.ct-woovideo-video').addClass('ct-woovideo-hidden');

        var thumbs = $('.single-product .images, .single-product .thumbnailSlider, .single-product .iosSlider').find('img');

        $.each(thumbs, function (thumbindex, thumbvalue) {

            var $link = $(this).attr('src');
            //remove height and width from url string
            var replaced = $link.replace(/-\d+[Xx]\d+\./, '.');

            var thumb_root = replaced.replace(/\/wp-content\/.+/, '');

            $.each(videos, function(index, value) {

                var url = $(value).data('video');

                var video_thumb_root = url.replace(/\/wp-content\/.+/, '');

                //#27828 fix
                if (thumb_root != video_thumb_root) {
                    replaced = replaced.replace(/^.+?(?=\/wp-content\/)/, '');
                    url = url.replace(/^.+?(?=\/wp-content\/)/, '');
                }

                if (replaced == url) {

                    //#27828 fix
                    if (thumb_root != video_thumb_root) {
                        url = $(value).data('video');
                    }

                    if ($(thumbvalue).parent("a").length) {
                        $(thumbvalue).parent().unbind('click.prettyphoto').addClass('ct-woovideo-gallery-thumbnail').attr('data-videorel', url).attr('data-rel', '').attr('href', '#').append('<span></span>');
                    }

                    //Owl carousel compatibility
                    else if ($('.owl-theme').length > 0) {

                        $(thumbvalue).parent().unbind('click.magnificpopup').unbind('click.prettyphoto');

                        $(thumbvalue).wrap(function () {
                            return "<div class='ct-woovideo-gallery-thumbnail' data-videorel='" + url + "'></div>";
                        });

                        $(thumbvalue).parent().append('<span></span>');
                    }

                    else {
                        $(thumbvalue).parent().unbind('click.magnificpopup').unbind('click.prettyphoto');

                        $(thumbvalue).wrap(function () {
                            return "<a href='#' class='ct-woovideo-gallery-thumbnail' data-videorel='" + url + "'></a>";
                        });
                        $(thumbvalue).parent().append('<span></span>');
                    }

                    if ($(thumbvalue).parent('.ct-woovideo-gallery-thumbnail').hasClass('lightbox-added')) {
                        $(thumbvalue).parent('.ct-woovideo-gallery-thumbnail').attr('href', url);
                    }
                    //Owl carousel compatibility
                    if ($('.owl-theme').length > 0) {
                        if ($(thumbvalue).parent('.ct-woovideo-gallery-thumbnail').parent().is('span')) {
                            var $owl_item = $(thumbvalue).closest('.owl-item');
                            $owl_item.find('.ct-woovideo-gallery-thumbnail').attr('data-videorel', '');
                            $owl_item.find('.ct-woovideo-gallery-thumbnail').find('span').remove();
                        }
                    }

                }
            });

            if ($('.flexslider').length != 0) {
                $('.thumbnailSlider .slides').find('li a').addClass('woocommerce-main-image');
            }

            if ($('.yith_magnifier_zoom').length != 0) {
                $('a.yith_magnifier_zoom').addClass('woocommerce-main-image');
            }
        });

        //#27999
        if($('.images .image_frame.scale-with-grid').length > 0) {
            var $vid_thumb = $('.thumbnails .ct-woovideo-gallery-thumbnail');
            if ($vid_thumb.hasClass('woocommerce-main-image')) {
                $vid_thumb.removeClass('woocommerce-main-image');
            }

            $('.images').find('.wp-post-image').first().addClass('attachment-shop_single');
        }

        //remove popup images from video thumbnail
        var popup_image = $('.ct-woovideo-gallery-thumbnail').find('.image-overlay');
        if ($('.ct-woovideo-gallery-thumbnail').hasClass('lightbox-added')) {
            $('.ct-woovideo-gallery-thumbnail').addClass('.noLightbox').unbind().removeClass('lightbox-added').removeClass('zoom').attr('rel', '');
            $('.ct-woovideo-gallery-thumbnail').find('.attachment-shop_thumbnail').unbind().removeClass('attachment-shop_thumbnail');
            if (popup_image) {
                popup_image.remove();
            }
        }

        //#28325
        if ($('.ct-woovideo-gallery-thumbnail').attr('rel')=='prettyPhoto[product-gallery]') {
            $('.ct-woovideo-gallery-thumbnail').attr('rel','');
        }



        //remove buttos if cloned
        var buttons = $('.single-product').find('.ct-woovideo-button');
        var button_hrefs = new Array;
        $.each(buttons, function(index, value){
            var href = $(this).attr('href');
            if ($.inArray(href, button_hrefs) !== -1) {
                $(this).remove();
            } else {
                button_hrefs.push(href);
            }
        });


    });


    //hide gallery video when other image or video clicked
    $('.images img, .images a, .thumbnailSlider img, .iosSlider img, .ct-woovideo-button, .ct-woovideo-close-video').click(function () {
        $(".ct-woovideo-gallery-videos .ct-woovideo-active").slideUp("fast", function () {
            $(".ct-woovideo-gallery-videos .ct-woovideo-active").detach().appendTo(".ct-woovideo-gallery-videos").removeClass('ct-woovideo-active').addClass('ct-woovideo-hidden').trigger('classHiddenAdded');
        });

    });

    //view video when gallery thumbnail clicked
    var li = $('.ct-woovideo-gallery-thumbnail').parent('li');

    $('.images, .thumbnailSlider, .iosSlider').on( 'click', '.ct-woovideo-gallery-thumbnail', function(e){

        $( ".ct-woovideo-gallery-videos .ct-woovideo-active").slideUp("fast", function(){
            $( ".ct-woovideo-gallery-videos .ct-woovideo-active").detach().appendTo( ".ct-woovideo-gallery-videos" ).removeClass('ct-woovideo-active').addClass('ct-woovideo-hidden');
        });

        var image = $('.ct-woovideo-gallery-videos').find('.woocommerce-main-image');
        if ($(image).length == 0) {
            var image = $('.ct-woovideo-gallery-videos').find('.attachment-shop_single');
        }

        if(image.length > 0) {
            var gal_video = $('.images, .thumbnailSlider').find('.ct-woovideo-video');

            $(image).removeClass('hidden').detach();
            $(gal_video).removeClass('ct-woovideo-active').addClass('ct-woovideo-hidden').trigger('classHiddenAdded');
            $(gal_video).replaceWith(image);
            $(gal_video).appendTo( '.ct-woovideo-gallery-videos' ).trigger('classHiddenAdded');
            if (($(gal_video).hasClass('ct-woovideo-hidden')) && ($(gal_video).css('display') != 'none')) {
                $(gal_video).css('display', 'none');
            }
        }

        var thumbrel = $(this).data('videorel');

        var video =  $('.ct-woovideo-gallery-videos').find('.ct-woovideo-video[data-video=\"'+thumbrel+'\"]');

        if (($('.flexslider').length != 0)||($('.yith_magnifier_zoom').length != 0)||($('.images .lightbox-added').length != 0)) {

            $(video).fadeIn("slow", function(){
            $(video).addClass('ct-woovideo-active').removeClass('ct-woovideo-hidden').trigger('classHiddenAdded');
            });
        } else {
            $(video).show("slide", function () {
                $(video).removeClass('ct-woovideo-hidden').addClass('ct-woovideo-active').trigger('classHiddenAdded');
            });
        }


        e.preventDefault();

    });

    //view video when popup button clicked
    $('.ct-woovideo-button').magnificPopup({
        type:'inline',
        midClick: true,
        closeBtnInside: false,
        callbacks: {
            open: function() {
                $('.mfp-wrap .ct-woovideo-video').removeClass('ct-woovideo-hidden').addClass('ct-woovideo-active');
            },
            close: function() {
                $('.ct-woovideo-active').removeClass('ct-woovideo-active').addClass('ct-woovideo-hidden')
                    .trigger('classHiddenAdded');
            }
        }
    });


    //make embedded videos responsive
    $('.ct-woovideo-video').fitVids();

    //autoplay function for vimeo api
    var ctWoovideoVimeoAutoplay = function(player, act) {
    if ($(player)[0].src.indexOf('?api=1&player_id=player') == -1) {
        $(player)[0].src += '?api=1&player_id=player';
    }
    var playerOrigin = '*';

    if (window.addEventListener) {
        window.addEventListener('message', onMessageReceived, false);
    }
    else {
        window.attachEvent('onmessage', onMessageReceived, false);
    }

    function onMessageReceived(event) {

        if (!(/^https?:\/\/player.vimeo.com/).test(event.origin)) {
            return false;
        }

        if (playerOrigin === '*') {
            playerOrigin = event.origin;
        }

        var data = JSON.parse(event.data);

        if (data.event == 'ready') {
            post(act);
        }
    }

    function post(action) {
        var data = {
            method: action
        };

        player[0].contentWindow.postMessage(data, playerOrigin);

    }

    };
    window.ctWoovideoVimeoAutoplay = ctWoovideoVimeoAutoplay;


    //remove autoplay when video is hidden
    $(document).on('classHiddenAdded', function(){

        var iframe_yt = $('.ct-woovideo-popup-video.mfp-hide iframe[src*="&autoplay=1"], .ct-woovideo-hidden iframe[src*="&autoplay=1"]');

        if ($(iframe_yt).length != 0) {
            var new_src_yt = iframe_yt.attr('src').replace('&autoplay=1','');
            iframe_yt.attr('src', new_src_yt);
        }

        var iframe_vimeo = $('.ct-woovideo-popup-video.mfp-hide iframe[src*="?api=1&player_id=player"], .ct-woovideo-hidden iframe[src*="?api=1&player_id=player"]');

        if ($(iframe_vimeo).length != 0) {
            ctWoovideoVimeoAutoplay(iframe_vimeo, 'unload');
            var new_src_vimeo = iframe_vimeo.attr('src').replace('?api=1&player_id=player','');
            iframe_vimeo.attr('src', '');
            iframe_vimeo.attr('src', new_src_vimeo);

        }

        if (($('.yith_magnifier_zoom').length != 0)&&($('.ct-woovideo-active').length != 0)) {

            if ($('#ct-hide-magnifier').length == 0) {
                $('body').append('<style id="ct-hide-magnifier">.yith_magnifier_mousetrap{width: 0!important;}.yith_magnifier_loading{display:none}</style>');
            }

            } else {
                if ($('#ct-hide-magnifier').length != 0) {
                    $('#ct-hide-magnifier').remove();
                }
        }

    });


});

