class Search {
  // describing the search object
  constructor() {
    this.openButton = jQuery(".ntr-search");
    this.closeButton = jQuery(".search-close");
    this.searchOverlay = jQuery(".search-overlay");
    this.events();
  }

  // all the search events
  events() {
    this.openButton.on("click", this.openOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
  }
  // methods
  openOverlay() {
    this.searchOverlay.addClass("active");
  }
  closeOverlay() {
    this.searchOverlay.removeClass("active");
  }
}

const search = new Search();

/* OLD SOLUTION
(function ($) {
  $(".ntr-search").click(function () {
    $(this).toggleClass("active");
    // $(".main_nav").toggleClass("active");
    $(".search-overlay").toggleClass("active");
  });

  $(".search-overlay").click(function () {
    $(this).toggleClass("active");
    // $(".main_nav").toggleClass("active");
    // $(".button_for_menu").toggleClass("active");
  });
})(jQuery);
*/
