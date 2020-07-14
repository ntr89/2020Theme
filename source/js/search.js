class Search {
  // describing the search object
  constructor() {
    this.openButton = jQuery(".ntr-search");
    this.closeButton = jQuery(".search-close");
    this.searchOverlay = jQuery(".search-overlay");
    this.searchInput = jQuery(".search-term");
    this.events();
  }

  // all the search events
  events() {
    this.openButton.on("click", this.openOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
    this.searchOverlay.on("click", this.closeOverlay.bind(this));
    this.searchInput.on("click", this.focusSearch.bind(this));
    jQuery(document).on("keyup", this.keyPressDispatcher.bind(this));
  }
  // methods
  keyPressDispatcher(e) {
    console.log(e.keyCode);
  }
  openOverlay() {
    this.searchOverlay.addClass("active");
    jQuery("body").addClass("no_scrolling");
  }
  closeOverlay() {
    this.searchOverlay.removeClass("active");
    jQuery("body").removeClass("no_scrolling");
  }
  focusSearch(e) {
    e.stopPropagation();
    console.log("yep");
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
