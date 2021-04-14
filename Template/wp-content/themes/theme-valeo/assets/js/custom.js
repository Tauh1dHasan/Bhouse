jQuery(document).ready(function() {
  var x = jQuery("#count-one").position();
  var done = false;

  if (x) {
    jQuery(window).on("scroll", function() {
      if (jQuery(window).scrollTop() > x.top - 200 && done == false) {
        jQuery(".counter").each(function() {
          var num = jQuery(this).attr("data-js");
          jQuery(this).numerator({
            easing: "linear", // easing options.
            duration: 2000, // the length of the animation.
            delimiter: ",",
            rounding: 0,
            toValue: num // animate to this value.
          });
        });

        done = true;
      }
    });
  }
});


// Homepage Carousel
// Homepage Carousel
jQuery(".carousel").carousel({
  interval: 5000 //changes the speed
});

// Search Overlay
jQuery(document).ready(function() {
  jQuery(".search-overlay .js-search__close").click(function() {
    jQuery("#js-searchOverlay").fadeOut();
    jQuery("#js-searchOverlayOpen").show();
  });
  jQuery("#js-searchOverlayOpen").click(function() {
    jQuery(this).hide();
    jQuery("#js-searchOverlay").fadeIn();
  });
});

// Goto Top
jQuery(document).ready(function() {
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 200) {
      jQuery(".go-top").fadeIn(200);
    } else {
      jQuery(".go-top").fadeOut(200);
    }
  });

  jQuery(".go-top").click(function(event) {
    event.preventDefault();

    jQuery("html, body").animate(
      {
        scrollTop: 0
      },
      300
    );
  });
});

// Sidebar Collapse
jQuery(document).ready(function() {
  var mql = window.matchMedia("screen and (max-width: 991px)");
  mediaqueryresponse(mql);
  mql.addListener(mediaqueryresponse);

  function mediaqueryresponse(mql) {
    if (mql.matches) {
      jQuery(".sidebar .taber").attr("data-toggle", "collapse");
      jQuery(".sidebar .collapse").collapse("hide");
      jQuery(".footer .taber").attr("data-toggle", "collapse");
      jQuery(".footer .collapse").collapse("hide");
      jQuery("nav.navbar-default").removeClass("navbar-fixed-top");
    } else {
      jQuery(".sidebar .collapse").collapse("show");
      jQuery(".sidebar [data-toggle='collapse']").removeAttr("data-toggle");
      jQuery(".footer .collapse").collapse("show");
      jQuery(".footer [data-toggle='collapse']").removeAttr("data-toggle");
      jQuery("nav.navbar-default").addClass("navbar-fixed-top");
    }
  }
});

// Carousel > Products (4)
jQuery(document).ready(function() {
  jQuery(".owl-carousel.carousel-products--4").owlCarousel({
    loop: true,
    responsiveClass: true,
    dots: false,
    nav: true,
    margin: 30,
    stagePadding: 80,
    navText: ["<i class='fa fa-fw fa-angle-left'></i>", "<i class='fa fa-fw fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
        stagePadding: 50
      },
      600: {
        items: 2,
        stagePadding: 40
      },
      1000: {
        items: 3
      },
      1300: {
        items: 4
      }
    }
  });
});

// Carousel > Detail
// jQuery(document).ready(function() {
//   jQuery(".owl-carousel.carousel-industry").owlCarousel({
//     loop: false,
//     responsiveClass: true,
//     dots: false,
//     margin: 20,
//     navigation: true,
//     navText: ["<i class='fa fa-fw fa-angle-left'></i>", "<i class='fa fa-fw fa-angle-right'></i>"],
//     stagePadding: 0,
//     responsive: {
//       0: {
//         items: 2
//       },
//       600: {
//         items: 3,
//         nav: true
//       },
//       1000: {
//         items: 4,
//         nav: true
//       }
//     }
//   });
// });

// Category > Load More
jQuery(document).ready(function() {
  jQuery(".has--loadmore-6 .card")
    .slice(0, 6)
    .show();
  jQuery("#js-loadMore").on("click", function(e) {
    if (jQuery(".has--loadmore-6 .card:hidden").length == 0) {
      jQuery("#js-loadMore").css("display", "none");
    } // fine prodotti, nascondi pulsante

    e.preventDefault();
    jQuery(".has--loadmore-6 .card:hidden")
      .slice(0, 6)
      .slideDown();
    if (jQuery(".has--loadmore-6 .card:hidden").length == 0) {
      jQuery("#js-loadMore").fadeOut();
    }
  });
});

// Section image height = height box
jQuery(function() {
  var boxheight = jQuery(".half-bg").height();
  jQuery(".half-text").css("height", boxheight + "px");
});

// Offset for Main Navigation
(function(jQuery) {
  "use strict";

  jQuery("#mainNav").affix({
    offset: {
      top: 50
    }
  });
})(jQuery);

// WOW
jQuery(document).ready(function() {
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: false, // default
    live: true // default
  });
  wow.init();
});

//Post slider
$(document).ready(function() {
    $("#lightSlider").lightSlider({
        item: 4,
        autoWidth: false,
        slideMove: 1, 
        slideMargin: 10,
 
        addClass: 'section-news-item',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', 
        easing: 'linear', 
 
        speed: 400, 
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,
 
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
 
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
 
        thumbItem:10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [],
 
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });
});