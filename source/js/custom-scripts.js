/* add span to menu */
(function ($) {
  $(".button_for_menu").click(function () {
    $(this).toggleClass("active");
    $(".main_nav").toggleClass("active");
    $(".overlayer_menu").toggleClass("active");
  });

  $(".menu-item > a").append("<span></span>");
  $(".menu-item > a").addClass("btn-6");

  $(".overlayer_menu").click(function () {
    $(this).toggleClass("active");
    $(".main_nav").toggleClass("active");
    $(".button_for_menu").toggleClass("active");
  });
})(jQuery);

/* menu span end */
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

(function ($) {
  $(window).resize(function () {
    if (window.innerWidth < 500) {
      $(".button_for_menu").html(
        $(".button_for_menu").html().split("Menu").join("")
      );
    }
  });
})(jQuery);
/* detect if in viewport  OLD CODE FOR ANIMATION
(function ($) {
  //new stuff
  var face1 = $(".wp-image-4765");
  var home_section = $(".background_odd");
  var home_section_v2 = $(".background_odd2");
  var home_section_v3 = $(".background_v3");
  var home_section_v4 = $(".background_v4");
  var $win = $(window);

  // old stuff
  var $myDiv = $(".et_pb_bottom_inside_divider");
  var $myDiv3 = $(".wp-image-4765");
  var $sec2 = $(".sectione1");
  var $sys_d = $(".systech_desktop");
  var $sys_l = $(".systech_laptop");
  var $sys_t = $(".systech_tablet");
  var $sys_m = $(".systech_mobile");

  // settings
  $win.on("resize scroll", function () {
    //console.log(percentageSeen($myDiv) + '%');
    face1.css("opacity", percentageSeen(face1) / 50);
    face1.width(percentageSeen(face1) * 10);
    home_section.css(
      "border-bottom-right-radius",
      "75" + "%" + percentageSeen(home_section_v2) * 0.8 + "%"
    );
    home_section.css(
      "border-bottom-left-radius",
      "25" + "%" + percentageSeen(home_section_v2) * 0.2 + "%"
    );
    home_section_v2.css(
      "border-bottom-right-radius",
      "40" + "%" + percentageSeen(home_section_v2) * 1.1 + "%"
    );

    home_section_v3.css(
      "border-top-right-radius",
      "40" + "%" + percentageSeen(home_section_v3) * 2.4 + "%"
    );
    home_section_v3.css(
      "border-bottom-left-radius",
      "40" + "%" + percentageSeen(home_section_v3) * 1.1 + "%"
    );
    // if (percentageSeen(home_section_v3) < 50) {
    //   home_section_v3.css(
    //     "width",
    //     100 - percentageSeen(home_section_v3) * 0.2 + "%"
    //   );
    // } else {
    //   home_section_v3.css("width", "90" + "%");
    // }
    home_section_v4.css(
      "border-top-right-radius",
      "40" + "%" + percentageSeen(home_section_v4) * 2.4 + "%"
    );
    home_section_v4.css(
      "border-top-left-radius",
      "60" + "%" + percentageSeen(home_section_v4) * 2 + "%"
    );
    home_section_v4.css(
      "border-bottom-left-radius",
      "60" + "%" + percentageSeen(home_section_v4) * 1.4 + "%"
    );

    // $myDiv.css("background-size", "100% " + percentageSeen($myDiv) * 4 + "px");
    // $myDiv.height(percentageSeen($myDiv) * 4);
    //$myDiv3.css("border-bottom-right-radius", (((percentageSeen($myDiv3) * (percentageSeen($myDiv3) / 3)) - 600) + "px"));
    //$sec2.css("border-top-left-radius", ((percentageSeen($sec2) * (percentageSeen($sec2) / 2)) + "px"));
    // $myDiv3.css(
    //   "border-bottom-right-radius",
    //   "65" + "%" + percentageSeen($sec2) / 0.3 + "%"
    // );

    // $sec2.css(
    //   "border-top-left-radius",
    //   "35" + "%" + percentageSeen($sec2) / 2 + "%"
    // );
    // /*
    //   $sec2.css("border-bottom-left-radius", ((percentageSeen($sec2) - 20) + "%"));
    //   $sec2.css("border-bottom-right-radius", (((percentageSeen($sec2) * 3) - 110) + "%" + (percentageSeen($sec2) * 2) + "%"));
    //   */
// // desktop animation
// if (percentageSeen($sys_d) > 20) {
//   $sys_d.addClass("radiate");
// } else if (percentageSeen($sys_d) <= 20) {
//   $sys_d.removeClass("radiate");
// }
// //laptop animation
// if (percentageSeen($sys_l) > 30) {
//   $sys_l.addClass("elaborate");
// } else if (percentageSeen($sys_l) <= 30) {
//   $sys_l.removeClass("elaborate");
// }
// //tablet animation
// if (percentageSeen($sys_t) > 40) {
//   $sys_t.addClass("aggrevate");
// } else if (percentageSeen($sys_t) <= 40) {
//   $sys_t.removeClass("aggrevate");
// }
// //mobile animation
// if (percentageSeen($sys_m) > 40) {
//   $sys_m.addClass("anticipate");
// } else if (percentageSeen($sys_m) <= 40) {
//   $sys_m.removeClass("anticipate");
// }
/*
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
 END OLD CODE FOR ANIMATION    */
(function ($) {
  var $header_top = $(".header");
  $("#fullpage").fullpage({
    sectionSelector: ".vertical-scrolling",
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: [
      "firstSection",
      "secondSection",
      "thirdSection",
      "fourthSection",
      "fifthSection",
      "sixthSection",
      "seventhSection",
    ],
    menu: "#menu",

    afterLoad: function (anchorLink, index) {
      // if (index == 5) {
      //   $("#fp-nav").hide();
      // }
    },

    onLeave: function (index, nextIndex, direction) {
      if (index == 5) {
        $("#fp-nav").show();
      }
    },
  });
})(jQuery);
