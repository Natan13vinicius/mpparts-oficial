/**
 * init_header
 * Menu
 * Owlcarousel brand
 */

;(function($) {

    'use strict'

    var init_header = function() {
        // Header Scroll
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            //$('header.header-sticky').addClass('fixed');
            //For Transparent Header
            //$('header.header-sticky-transparent').addClass('fixed');

            //Hide Top Header when main header is toogle
            //$('.header-top').css ("display", "none");

            //For transparent header only: This will display the 'Black Logo' when transparent header is true
            //$('.black-logo').css('display', '-webkit-inline-box');

            //For transparent header only: After the 'Black Logo' is display the 'White Logo' need to display none
            //$('.white-logo').css('display', 'none');

             //For transparent header only: When Header toogle the menu colors change to white
            //$('#mainnav ul li.menu-transparent a').removeClass('font-white');

        } else {
            // This Code is reverse to the if condition it means contradict to the 'if condition' given true value
            $('header.header-sticky').removeClass('fixed');

            //For transparent header only: when condition returned false sticky menu will remove
            //$('header.header-sticky-transparent').removeClass('fixed');

            //Top Header display block
            //$('.header-top').css ("display", "block");

             //For transparent header only: Menu fonts change color white
            //$('#mainnav ul li.menu-transparent a').addClass('font-white');

            //$('#mainnav ul.sub-menu li.menu-transparent a').addClass('font-black-important');
           

             //For transparent header only: Hide the 'Black Logo' when 'white logo' is present
            //$('.black-logo').css('display', 'none');

            //For transparent header only: Display the 'White Logo' when 'black logo' is present
            //$('.white-logo').css('display', '-webkit-inline-box');
        }
    });   

}

    //Responsive Menu
    var ResponsiveMenu =  {
        menuType: 'desktop',
        initial: function(winWidth) {
            ResponsiveMenu.menuWidthDetect(winWidth);
            ResponsiveMenu.menuBtnClick();
            ResponsiveMenu.parentMenuClick();
        },
        menuWidthDetect: function(winWidth) {
            var currMenuType = 'desktop';
            if (matchMedia('only screen and (max-width: 991px)').matches) {
                currMenuType = 'mobile';
                $('sticky-wrapper').css('height', '68px !important');
            }
          
            if ( currMenuType !== ResponsiveMenu.menuType ) {
                ResponsiveMenu.menuType = currMenuType;
                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    $('#header').find('.header-wrap').after($mobileMenu);
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
                    $desktopMenu.find('.sub-menu').removeAttr('style');
                    $('#header').find('.btn-menu').after($desktopMenu);
                    $('.btn-submenu').remove();
                     $('sticky-wrapper').css('height', '68px');
                }
            } // clone and insert menu
        },
        menuBtnClick: function() {
            $('.btn-menu').on('click', function() {
                $('#mainnav-mobi').slideToggle(300);
                $(this).toggleClass('active');
            });
        }, // click on moblie button
        parentMenuClick: function() {
            $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
                if ( $(this).has('ul') ) {
                    e.stopImmediatePropagation()
                    $(this).next('ul').slideToggle(300);
                    $(this).toggleClass('active');
                }
            });
        } // click on sub-menu button
    };

    //owlcarousel Brand Logo
    var owl = function(){ 
        //slider Testimonial
        var owl1 = $("#testimonial01");
        owl1.addClass('owl-carousel');
        owl1.owlCarousel({
            slideSpeed : 3000,
            nav: false,
            autoplay: true,
            items : 1,
            dots: true,
            loop: true
        });

        var owl2 = $("#owl-brand");
        owl2.owlCarousel({
            slideSpeed : 3000,
            autoplay: true,
            items : 6,
            loop: true,
            responsive : {
                0 : {
                    items : 2
                },
                480 : {
                    items : 3,
                },
                768 : {
                    items : 4,
                },
                991 : {
                    items : 6,
                }
            },
            navigation : false,
            dots: false
        });

        //SLIDER "OUR WORKS" - Home2
        var owl3 = $("#owl-work02");
        owl3.owlCarousel({
            items : 1,
            //nav : false,
            responsiveClass:true,
            dots: false,
            nav: true,
            //pagination: true,
            lazyLoad: true,
            navText: ["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"],
            responsive : {
                0 : {
                    nav: false
                },
                768 : {
                    nav: true
                }
            }
        });
        
        //SLIDER "OUR WORKS" - Tab
        var owl31 = $("#owl-work02-design2");
        owl31.owlCarousel({
            items : 1,
            //nav : false,
            responsiveClass:true,
            dots: false,
            nav: true,
            //pagination: true,
            lazyLoad: true,
            navText: ["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"],
            responsive : {
                0 : {
                    nav: false
                },
                768 : {
                    nav: true
                }
            }
        });
        
        //SLIDER "OUR WORKS" - Tab
        var owl32 = $("#owl-work02-building2");
        owl32.owlCarousel({
            items : 1,
            //nav : false,
            responsiveClass:true,
            dots: false,
            nav: true,
            //pagination: true,
            lazyLoad: true,
            navText: ["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"],
            responsive : {
                0 : {
                    nav: false
                },
                768 : {
                    nav: true
                }
            }
        });
        
        //SLIDER "OUR WORKS" - Tab
        var owl33 = $("#owl-work02-architecture2");
        owl33.owlCarousel({
            items : 1,
            //nav : false,
            responsiveClass:true,
            dots: false,
            nav: true,
            //pagination: true,
            lazyLoad: true,
            navText: ["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"],
            responsive : {
                0 : {
                    nav: false
                },
                768 : {
                    nav: true
                }
            }
        });
        
        //SLIDER "OUR WORKS" - Tab
        var owl34 = $("#owl-work02-plumbing2");
        owl34.owlCarousel({
            items : 1,
            //nav : false,
            responsiveClass:true,
            dots: false,
            nav: true,
            //pagination: true,
            lazyLoad: true,
            navText: ["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"],
            responsive : {
                0 : {
                    nav: false
                },
                768 : {
                    nav: true
                }
            }
        });
        
        //slider CLIENT SAYS
        var owl4 = $("#testimonial02");
        owl4.addClass('owl-carousel');
        owl4.owlCarousel({
            slideSpeed : 3000,
            autoplay: true,
            nav : false,
            margin: 30,
            responsive : {
                0 : {
                    items : 1
                },
                768 : {
                    items : 2,
                }
            }
        });

        

        //Slider Shop Detail
        var
            $sync1 = $("#sync1"), //big photo
            $sync2 = $("#sync2"), //thumbs
            duration = 300;

        //big photo
        $sync1
            .owlCarousel({
                items: 1,
                dots: false
            })
            .on('changed.owl.carousel', function (e) {
                var syncedPosition = syncPosition(e.item.index);

                if ( syncedPosition != "stayStill" ) {
                    $sync2.trigger('to.owl.carousel', [syncedPosition, duration, true]);
                }
            });

        //thumbs
        $sync2
            .on('initialized.owl.carousel', function() { //must go before owl carousel initialization
                addClassCurrent( 0 );
            })
            .owlCarousel({ //owl carousel init
                items: 4,
                dots: false,
                margin: 10
            })
            .on('click', '.owl-item', function () {
                $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            });


        //adds 'current' class to the thumbnail
        function addClassCurrent( index ) {
            $sync2
                .find(".owl-item")
                .removeClass("current")
                .eq( index ).addClass("current");
        }

        //syncs positions. argument 'index' represents absolute position of the element
        function syncPosition( index ) {

            //PART 1 (adds 'current' class to thumbnail)
            addClassCurrent( index );


            //PART 2 (counts position)

            var itemsNo = $sync2.find(".owl-item").length; //total items
            var visibleItemsNo = $sync2.find(".owl-item.active").length; //visible items

            //if all items are visible
            if (itemsNo === visibleItemsNo) {
                return "stayStill";
            }

            //relative index (if 4 elements are visible and the 2nd of them has class 'current', returns index = 1)
            var visibleCurrentIndex = $sync2.find(".owl-item.active").index( $sync2.find(".owl-item.current") );

            //if it's first visible element and if there is hidden element before it
            if (visibleCurrentIndex == 0 && index != 0) {
                    return index - 1;
            }

            //if it's last visible element and if there is hidden element after it
            if (visibleCurrentIndex == (visibleItemsNo - 1) && index != (itemsNo - 1)) {
                    return index - visibleItemsNo + 2;
            }

            return "stayStill";
        };
    };

	var consIsotope = function(elm) {
		if ( $().isotope ) {
			var $container = $(elm);
			$container.imagesLoaded(function(){
				$container.isotope({
					itemSelector: '.masonry-item',
					transitionDuration: '1s'
				}); // end isotope
			});
		};
	};



	//
	$(".zoom").fancybox();

    // Dom Ready
    $(function() {
        init_header();
        owl();
        ResponsiveMenu.initial($(window).width());
        $(window).resize(function() {
            ResponsiveMenu.menuWidthDetect($(this).width());
        });


    });


    // LOAD MORE PROJECTS //
    function load_more_projects() {
    
        var number_clicks = 0;
        
        $(".load-more").on("click", function(e) {
            
            e.preventDefault();
            
            if (number_clicks == 0) {
                $.ajax({
                    type: "POST",
                    url: $(".load-more").attr("href"),
                    dataType: "html",
                    cache: false,
                    msg : '',
                    success: function(msg) {
                        $(".isotope").append(msg);  
                        $(".isotope").imagesLoaded(function() {
                            $(".isotope").isotope("reloadItems").isotope();
                            $(".fancybox-portfolio-gallery").attr("rel","group").fancybox({
                                prevEffect: 'none',
                                nextEffect: 'none'
                            });
                            
                            $(".fancybox-blog-gallery").attr("rel","group").fancybox({
                                prevEffect: 'none',
                                nextEffect: 'none'
                            });
                        });
                        number_clicks++;
                        $(".load-more").html("No more project");
                    }
                });
            }
            
        });
        
    }



    // ISOTOPE //
        $(".isotope").imagesLoaded( function() {
            
            var container = $(".isotope");
            
            container.isotope({
                itemSelector: '.isotope-item',
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });
            
            $(".filter li a").on("click", function () {
                $(".filter li a").removeClass("active");
                $(this).addClass("active");
    
                var selector = $(this).attr("data-filter");
                container.isotope({
                    filter: selector
                });
    
                return false;
            });
    
            $("body").resize(function () {
                container.isotope();
            });
            
        });


        // LOAD MORE PORTFOLIO ITEMS //
        load_more_projects();


        // FANCYBOX //
        $(".fancybox").fancybox({});
        
        $(".fancybox-portfolio-gallery").attr("rel","group").fancybox({
            prevEffect: 'none',
            nextEffect: 'none'
        });
        
        $(".fancybox-blog-gallery").attr("rel","group").fancybox({
            prevEffect: 'none',
            nextEffect: 'none'
        });
        
         // BACK TO TOP //
        var offset = 1000,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

    $('#popup').modal('show');


})(jQuery);