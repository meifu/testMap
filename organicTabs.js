(function($) {

    $.organicTabs = function(el, options) {
    
        var base = this;
        base.$el = $(el);
        base.$nav = base.$el.find(".tabnav");
                
        base.init = function() {
        
            base.options = $.extend({},$.organicTabs.defaultOptions, options);
            
            // Accessible hiding fix
            $(".hide").css({
                "position": "relative",
                "top": 0,
                "left": 0,
                "display": "none"
            }); 
            
            base.$nav.delegate("li > a", "click", function() {
                var tabClass = $(this).parents('li').eq(0);
                if (tabClass.hasClass("nav-one")) {
                    // console.log('nav-one');
                    $('#gmap-menu').css('display', 'block');
                    $('#pano').css('display', 'none');
                    newMap.SetLocations(LocationsPool, true);
                    $('#controls1').css('display', 'none');
                } else if (tabClass.hasClass("nav-two")) {
                    // console.log('nav-two');
                    $('#gmap-menu').css('display', 'block');
                    $('#pano').css('display', 'none');
                    newMap.SetLocations(LocationsPool, true);
                    $('#controls1').css('display', 'none');
                } else if (tabClass.hasClass("nav-three")) {
                    // console.log('nav-three');
                    $('#gmap-menu').css('display', 'block');
                    $('#pano').css('display', 'none');
                    // renderSelection(3);
                    newMap.SetLocations(LocationsPool, true);
                    $('#controls1').css('display', 'none');
                } else if (tabClass.hasClass("nav-four")) {
                    $('#gmap-menu').css('display', 'none');
                    $('#pano').css('display', 'block');
                    var fenway = new google.maps.LatLng(24.973733,121.236494);
                    var mapOptions = {
                        center: fenway,
                        zoom: 14,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
                    var panoramaOptions = {
                        position: fenway,
                        pov: {
                            heading: 34,
                            pitch: 10,
                            zoom: 1
                        }, 
                    };
                    var panorama = new  google.maps.StreetViewPanorama(document.getElementById("pano"), panoramaOptions);
                    map.setStreetView(panorama);
                }
            
                // Figure out current list via CSS class
                var curList = base.$el.find("a.current").attr("href").substring(1),
                
                // List moving to
                    $newList = $(this),
                    
                // Figure out ID of new list
                    listID = $newList.attr("href").substring(1),
                
                // Set outer wrapper height to (static) height of current inner list
                    $allListWrap = base.$el.find(".list-wrap"),
                    curListHeight = $allListWrap.height();
                $allListWrap.height(curListHeight);
                                        
                if ((listID != curList) && ( base.$el.find(":animated").length == 0)) {
                                            
                    // Fade out current list
                    base.$el.find("#"+curList).fadeOut(base.options.speed, function() {
                        
                        // Fade in new list on callback
                        base.$el.find("#"+listID).fadeIn(base.options.speed);
                        
                        // Adjust outer wrapper to fit new list snuggly
                        // var newHeight = base.$el.find("#"+listID).height();
                        // $allListWrap.animate({
                        //     height: newHeight
                        // });
                        
                        // Remove highlighting - Add to just-clicked tab
                        base.$el.find(".tabnav li a").removeClass("current");
                        $newList.addClass("current");
                            
                    });
                    
                }   
                
                // Don't behave like a regular link
                // Stop propegation and bubbling
                return false;
            });
            
        };
        base.init();
    };
    
    $.organicTabs.defaultOptions = {
        "speed": 300
    };
    
    $.fn.organicTabs = function(options) {
        return this.each(function() {
            (new $.organicTabs(this, options));
        });
    };

    $('#tabWrap').organicTabs();
    
})(jQuery);