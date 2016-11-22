/*var width = $(window).width(), height = $(window).height();
alert('width : ' +width + 'height : ' + height);*/
$(document).ready(function(){
    function setHeight() {
        var $window = $(window);
            windowHeight = $(window).innerHeight();
               if ($window.width() >= 1600) {

            $('#index-banner').css('min-height', windowHeight);
        } 
        else{
            $('#header').removeClass('home-center');
        }
          };
          setHeight();
          
          $(window).resize(function() {
            setHeight();
        });
    
    /*This is ScrollSpy */

    $('body').scrollspy({target: ".navbar", offset: 50});     

    /*------------------------------------------
    Scroll Up Button 
    ------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    /*Preloader Starts*/ 

    $(window).load(function(){
        $('#btry-loader').fadeOut('slow',function(){$(this).remove();});
    });

    /*Preloader Ends*/

    // Add smooth scrolling on all links inside the navbar
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });

    /*Side-bar Menu Starts*/

    var sides = ["left", "top", "right", "bottom"];
    $("h1 span.version").text($.fn.sidebar.version);

    // Initialize sidebars
    for (var i = 0; i < sides.length; ++i) {
        var cSide = sides[i];
        $(".sidebar." + cSide).sidebar({side: cSide});
    }

    // Click handlers
    $(".sidebar-btn").on("click", function () {
        var $this = $(this);
        var action = $this.attr("data-action");
        var side = $this.attr("data-side");
        $(".sidebar." + side).trigger("sidebar:" + action);
        return false;
    });
    /*Side-bar Menu Ends*/   
    /*Magnific Pop-Up Js*/
    $('.video').magnificPopup({
        type: 'iframe',
        closeOnBgClick: false, 
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            '<div class="mfp-title">Some caption</div>'+
            '</div>'
        },
        callbacks: {
            markupParse: function(template, values, item) {
                values.title = item.el.attr('title');
            }
        }, 
        // Delay in milliseconds before popup is removed
        removalDelay: 300,

        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
    });

  

    /*Buttons For Owl Slider*/

    /*Screenshots Owl Slider*/

    $('#owl-demo').owlCarousel({        
        loop:true,
        margin:1, 
        dots:false,        
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{                        // width >=0px && width <=399px no. of screenshots display 1
                items:2,
                nav:false,
                dots: false
            },
            400:{                        // width >=400px && width <=699px no. of screenshots display 2
                items:2,
                nav:false
            },
            700:{                        // width >=700px && width <=999px no. of screenshots display 3
                items:4,
                nav:false
            },
            1000:{                                    // width =>1000px no. of screenshots display 5
                items:5,
                nav:false,
                dots:false,                              
                loop:true
            },
            1400:{
                items:5,
                margin:1,
                nav:false,
                dots:false,
                loop:true
            }            
        }
    });

    
    /* TESTIMONIALS Starts*/
    var owl = $("#owl-demo2");            // Testimonial owl carousel initialization
    owl.owlCarousel({
        items : 1,                         //10 items above 1000px browser width   
        pagination  :true,
        loop:true
    });
    /* TESTIMONIALS Ends*/

    /*Client Owl Starts*/
    $(".client-owl").owlCarousel({
        dots: false,
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed:1000,
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            400:{
                items:3,  
                nav:true
            },
            700:{
                items:4,
                nav:true
            },
            1000:{
                items:6,
                nav:true,
                loop:true
            }
        }        
    });
    /*Client Owl Ends*/

    /*Tweet Starts*/
    if($('.tweet').length!=0){
        $('.tweet').twittie({
            username: 'phoenixcoded',
            dateFormat: '%b. %d, %Y',
            template: '<div class="circle mb20">{{avatar}}</div><p>{{tweet}}</p> <time class="date">{{date}}</time>',
            count: 10,
        },function()
        {
            $(".tweet ul").addClass("tweet_slider");
            $(".tweet li").addClass("item");
            $(".tweet_slider").owlCarousel(
            {
                dots: false,
                loop:true,
                margin:20,
                responsiveClass:true,
                responsive:
                {
                    0:{
                        items:1,
                        nav:true
                    },
                    400:{
                        items:1,
                        nav:true
                    },
                    700:{
                        items:1,
                        nav:true
                    },
                    1000:{
                        items:1,
                        nav:true,
                        loop:true
                    }
                }
            });
        });
    }
    /*Tweet Ends*/

    /* Menu hide/show on scroll */
    var ost = 0;
    $(window).scroll(function() {
        var cOst = $(this).scrollTop();
        if(cOst == 0)
        {
            $('.navbar').addClass('top-nav-collapse');
        } else if(cOst > ost)
        {
            $('.navbar').addClass('top-nav-collapse').removeClass('default');
        } else 
        {
            $('.navbar').addClass('default').removeClass('top-nav-collapse');
        }
        ost = cOst;
    });

    /* End of Menu hide/show on scroll */ 

    /*Tooltip*/

    $('[data-toggle="tooltip"]').tooltip();

    /*Tooltip Ends*/           

    /*Wave Button Effects*/
    Waves.init();
    Waves.attach('.flat-buttons', ['waves-button']);
    Waves.attach('.float-buttons', ['waves-button', 'waves-float']);
    Waves.attach('.float-button-light', ['waves-button', 'waves-float', 'waves-light']);

    /*Wave Button Effects End*/


    /*Counter Js Starts*/                            
    $('.counter').counterUp({
        delay: 10, // the delay time in ms
        time: 400 // the speed time in ms
    });
    /*Counter Js Ends*/      

    /*Sidebar Social Button Starts*/
    if( $('.cd-stretchy-nav').length > 0 ) {
        var stretchyNavs = $('.cd-stretchy-nav');

        stretchyNavs.each(function(){
            var stretchyNav = $(this),
            stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

            stretchyNavTrigger.on('click', function(event){
                event.preventDefault();
                stretchyNav.toggleClass('nav-is-visible');
            });
        });

        $(document).on('click', function(event){
            ( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
        });
    }

    /*Sidebar Social Button Ends*/

    /*Sidebar Collapse button Show-hide Starts*/
    $(".fa-bar-hide").click(function(){       
        $(".fa-bars").fadeOut("slow");        
    });
    $(".fa-bar-show").click(function(){       
        $(".fa-bars").fadeIn("slow");        
    });

    /*Sidebar Collapse button Show-hide Ends*/


    /*Sidebar Search Starts*/
    $(".fa-search").click(function(){
        $(".search-box").show(500);
    });
    $(".search-close").click(function(){
        $(".search-box").hide(500);
    });
    /*Sidebar Search Ends*/
    /*Custom Scroll Starts*/

    var navBodyScroll = $('.nav-body .overflow');
    $(window).load(function(){
        navBodyScroll.height($(window).height() - $('.nav-head').height()-45);
        navBodyScroll.mCustomScrollbar({
            theme:"dark-thick",           
            scrollInertia: 300             
        });
    });
    $(window).resize(function(){
        navBodyScroll.height($(window).height() - $('.nav-head').height()-45);
    });

    /*Custom Scroll Ends*/ 

    /*Map JS*/
	
   var map;
    map = new GMaps({
        el: '#map',
        lat: 21.2334329,
        lng: 72.86372,
        scrollwheel: false
    });

    map.addMarker({
        lat: 21.2334329,
        lng: 72.86372,
        title: 'Marker with InfoWindow',
        infoWindow: {
            content: '<p>Phoenix app landing page <br/> Buy Now at <a href="">Themeforest</a></p>'
        }
    });
	
    /*Map JS Ends*/
    
   

       /** Sign in / Sign up form switching (in modal)
       *********************************************************/
       $('.form-switch a').click(function(e){
        var form = $(this).attr('href');
        e.preventDefault();
        $(form + '> a').click();
    });


       /* Switch to Sign In/Sign Up Form when Modal open (For separate Sign In/Sign Up button)
       ****************************************************************************************/
       $('[data-modal-form="sign-in"]').click(function(){
        $('#form-2 a').click();
    });
       $('[data-modal-form="sign-up"]').click(function(){
        $('#form-1 a').click();
    });

       /* Modal JS Ends */


   });

/*---------------------------------------------
Waypoints animation
---------------------------------------------*/

$(function(){
    function onScrollInit( items, trigger ) {
        items.each( function() {
            var osElement = $(this),
            osAnimationClass = osElement.attr('data-os-animation'),
            osAnimationDelay = osElement.attr('data-os-animation-delay'),
            osAnimationDuration = osElement.attr('data-os-animation-duration');

            osElement.css({
                '-webkit-animation-delay':    osAnimationDelay,
                '-moz-animation-delay':       osAnimationDelay,
                'animation-delay':            osAnimationDelay,
                '-webkit-animation-duration': osAnimationDuration,
                '-moz-animation-duration':    osAnimationDuration,
                'animation-duration':         osAnimationDuration
            });
            var osTrigger = ( trigger ) ? trigger : osElement;

            osTrigger.waypoint(function() {
                osElement.addClass('animated').addClass(osAnimationClass);
            },{
                triggerOnce: true,

                offset: '90%' /*Change Offset For Change animation on Scroll*/
            });
        });
    }
    onScrollInit( $('.os-animation') );
    onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
});//]]>






/* Google Analytics */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80115393-1', 'auto');
  ga('send', 'pageview');

