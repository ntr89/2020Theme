(function ($) {
  $(".btn-6")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    });
  $("[href=#]").click(function () {
    return false;
  });
})(jQuery);
document.title = "PpORTFOLIO";
(function ($) {
  $(".button_for_menu").click(function () {
    $(this).toggleClass("active");
    $(".main_nav").toggleClass("active");
    $(".overlayer_menu").toggleClass("active");
  });
  $(".button_for_menu").one("click", function () {
    $(".supermenubutton").append("<span></span>");
  });

  $(".overlayer_menu").click(function () {
    $(this).toggleClass("active");
    $(".main_nav").toggleClass("active");
    $(".button_for_menu").toggleClass("active");
  });
})(jQuery);

/*
  (function($){
      
      $(window).scroll(function() {    //scroll event is bound to the window object
          var $myDiv = $('.et_pb_bottom_inside_divider');    //create a jquery variable pointing to the div
          var $myDiv2 = $('#myface');    //create a jquery variable pointing to the div
          var $myDiv3 = $('.et_pb_section_1');    //create a jquery variable pointing to the div
          var w = window.innerWidth;
          var h = window.innerHeight;
          var st = $(this).scrollTop();//capture the the number hidden pixels, from view above the scrollable area 
  
    //log it, (look at the top of this example snippet)
  
          $myDiv.height( st );         //increase the height of the div by the same, number of hidden pixels
          $myDiv.css("background-size", "100% " + st + "px");
          $myDiv2.children("span").width( ( st / 2 ) - "100");  
          $myDiv2.children("span").css("opacity", (( st / 3 ) - "100") / "100");
          $myDiv3.css("border-bottom-right-radius", ( st / 2 ));
          console.log('percentage ', st / distance, 'scrollDist', st, 'distanceFromTop ', distance);
          if( st == 0 ) {              //this if is not neccessary but just hides div when height is zero
              $myDiv.hide();
          } else {
              $myDiv.show();
          }
      })
      .scroll();                     //Fire the scroll even when the page loads; without this the #myDiv would show
      var scrollTop     = $(window).scrollTop(),
          elementOffset = $('#myface').offset().top,
          distance      = (elementOffset - scrollTop);
                                     //even though it's height is zero per the css
  })(jQuery);
  
  
  */

(function ($) {
  $(window).resize(function () {
    if (window.innerWidth < 500) {
      $(".button_for_menu").html(
        $(".button_for_menu").html().split("Menu").join("")
      );
    }
  });
})(jQuery);
/* detect if in viewport */
(function ($) {
  var face1 = $("#myface2");
  var $myDiv = $(".et_pb_bottom_inside_divider");
  var $win = $(window);
  var $myDiv3 = $(".et_pb_section_1");
  var $sec2 = $(".sectione1");
  var $sys_d = $(".systech_desktop");
  var $sys_l = $(".systech_laptop");
  var $sys_t = $(".systech_tablet");
  var $sys_m = $(".systech_mobile");

  // settings
  $win.on("resize scroll", function () {
    console.log(percentageSeen($myDiv3));
    //console.log(percentageSeen($myDiv) + '%');
    face1.children("span").css("opacity", percentageSeen(face1) / 50);
    face1.children("span").width(percentageSeen(face1) * 10);
    $myDiv.css("background-size", "100% " + percentageSeen($myDiv) * 4 + "px");
    $myDiv.height(percentageSeen($myDiv) * 4);
    //$myDiv3.css("border-bottom-right-radius", (((percentageSeen($myDiv3) * (percentageSeen($myDiv3) / 3)) - 600) + "px"));
    //$sec2.css("border-top-left-radius", ((percentageSeen($sec2) * (percentageSeen($sec2) / 2)) + "px"));
    $myDiv3.css(
      "border-bottom-right-radius",
      "65" + "%" + percentageSeen($sec2) / 0.3 + "%"
    );

    $sec2.css(
      "border-top-left-radius",
      "35" + "%" + percentageSeen($sec2) / 2 + "%"
    );
    /*
      $sec2.css("border-bottom-left-radius", ((percentageSeen($sec2) - 20) + "%"));
      $sec2.css("border-bottom-right-radius", (((percentageSeen($sec2) * 3) - 110) + "%" + (percentageSeen($sec2) * 2) + "%"));
      */
    // desktop animation
    if (percentageSeen($sys_d) > 20) {
      $sys_d.addClass("radiate");
    } else if (percentageSeen($sys_d) <= 20) {
      $sys_d.removeClass("radiate");
    }
    //laptop animation
    if (percentageSeen($sys_l) > 30) {
      $sys_l.addClass("elaborate");
    } else if (percentageSeen($sys_l) <= 30) {
      $sys_l.removeClass("elaborate");
    }
    //tablet animation
    if (percentageSeen($sys_t) > 40) {
      $sys_t.addClass("aggrevate");
    } else if (percentageSeen($sys_t) <= 40) {
      $sys_t.removeClass("aggrevate");
    }
    //mobile animation
    if (percentageSeen($sys_m) > 40) {
      $sys_m.addClass("anticipate");
    } else if (percentageSeen($sys_m) <= 40) {
      $sys_m.removeClass("anticipate");
    }
  });
  // the master func
  function percentageSeen(el) {
    // add variable to this function, so we can pass multiple elements through it :
    var viewportHeight = $(window).height(),
      scrollTop = $win.scrollTop(),
      elementOffsetTop = el.offset().top,
      elementHeight = el.height();

    if (elementOffsetTop > scrollTop + viewportHeight) {
      return 0;
    } else if (elementOffsetTop + elementHeight < scrollTop) {
      return 100;
    } else {
      var distance = scrollTop + viewportHeight - elementOffsetTop;
      var percentage = distance / ((viewportHeight + elementHeight) / 100);
      percentage = Math.round(percentage);
      return percentage;
    }
  }

  $win.trigger("resize scroll");
})(jQuery);
