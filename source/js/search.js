class Search {
  // describing the search object
  constructor() {
    this.addSeachTemplate();
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
        this.typingTimer = setTimeout(this.getResults.bind(this), 750);
      } else {
        this.searchResults.html("");
        this.spinnerVisible = false;
      }
    }
    this.lastValue = this.searchInput.val();
  }

  getResults() {
    jQuery.getJSON(
      localSite.root_url +
        "/wp-json/wp/v2/project?search=" +
        this.searchInput.val(),
      (data) => {
        this.searchResults.html(`
        <h2>General Info<h2>
        ${data.length ? "<ul>" : "<p>No results found</p>"}
        ${data
          .map(
            (item) =>
              `<li><a href="${item.link}">${item.title.rendered}</a></li>`
          )
          .join("")}
          ${data.length ? "</ul>" : ""}
        `);
        this.spinnerVisible = false;
      }
    );
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
    this.searchInput.val("");
    setTimeout(() => this.searchInput.focus(), 301);
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
  addSeachTemplate() {
    jQuery("body").append(`
    <div class="search-overlay">
  <div class="search-top">
              <div class="container">
                <i class="fa fa-search search-icon" aria-hidden="true"></i>
                <input type="text" class="search-term" placeholder="What are you looking for?" id="search-term">
                <i class="fa fa-window-close search-close" aria-hidden="true"></i>
              </div>
              <div class="container">
                <div id="search-results">
                </div>
              </div>
  </div>
</div>
    `);
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
