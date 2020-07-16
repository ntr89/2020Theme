class Search {
  // describing the search object
  constructor() {
    this.searchResults = jQuery("#search-results");
    this.openButton = jQuery(".ntr-search");
    this.closeButton = jQuery(".search-close");
    this.searchOverlay = jQuery(".search-overlay");
    this.searchInput = jQuery(".search-term");
    this.events();
    this.overlayActive = false;
    this.typingTimer;
    this.spinnerVisible = false;
    this.lastValue;
  }

  // all the search events
  events() {
    this.openButton.on("click", this.openOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
    this.searchOverlay.on("click", this.closeOverlay.bind(this));
    this.searchInput.on("click", this.focusSearch.bind(this));
    jQuery(document).on("keydown", this.keyPressDispatcher.bind(this));
    this.searchInput.on("keyup", this.typingLogic.bind(this));
  }
  // methods
  typingLogic() {
    if (this.searchInput.val() != this.lastValue) {
      clearTimeout(this.typingTimer);

      if (this.searchInput.val()) {
        if (!this.spinnerVisible) {
          this.searchResults.html('<div class="spinner"></div>');
          this.spinnerVisible = true;
        }
        this.typingTimer = setTimeout(this.getResults.bind(this), 2000);
      } else {
        this.searchResults.html("");
        this.spinnerVisible = false;
      }
    }
    this.lastValue = this.searchInput.val();
  }

  getResults() {
    this.searchResults.html("testing");
    this.spinnerVisible = false;
    console.log("wooo");
  }

  keyPressDispatcher(e) {
    // console.log(e.keyCode);

    if (
      e.keyCode == 83 &&
      !this.overlayActive &&
      jQuery("input, textarea").is(":focus")
    ) {
      this.openOverlay();
    }
    if (e.keyCode == 27 && this.overlayActive) {
      this.closeOverlay();
    }
  }
  openOverlay() {
    this.searchOverlay.addClass("active");
    jQuery("body").addClass("no_scrolling");
    this.overlayActive = true;
  }
  closeOverlay() {
    this.searchOverlay.removeClass("active");
    jQuery("body").removeClass("no_scrolling");
    this.overlayActive = false;
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
