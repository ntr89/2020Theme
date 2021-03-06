(function ($) {
  class Search {
    // describing the search object
    constructor() {
      this.addSeachTemplate();
      this.searchResults = $("#search-results");
      this.openButton = $(".ntr-search");
      this.closeButton = $(".search-close");
      this.searchOverlay = $(".search-overlay");
      this.searchInput = $(".search-term");
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
      $(document).on("keydown", this.keyPressDispatcher.bind(this));
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
      $.getJSON(
        localSite.root_url +
          "/wp-json/ntrSite/v1/search?term=" +
          this.searchInput.val(),
        (results) => {
          this.searchResults.html(`
        <div class="row">
          <div class="one-third">
            
            ${
              results.general.length
                ? "<h3>Pages</h3><ul>"
                : "<p>No results found</p>"
            }
            ${results.general
              .map(
                (item) =>
                  `<li><a href="${item.permalink}">${item.title}</a></li>`
              )
              .join("")}
              ${results.general.length ? "</ul>" : ""}
          </div>
          <div class="one-third">
          
          ${
            results.projects.length
              ? "<h3>Projects</h3><ul>"
              : "<p>No results found</p>"
          }
          ${results.projects
            .map(
              (item) => `<li><a href="${item.permalink}">${item.title}</a></li>`
            )
            .join("")}
            ${results.projects.length ? "</ul>" : ""}
          </div>
          <div class="one-third last">
          
          ${
            results.posts.length
              ? "<h3>Posts</h3><ul>"
              : "<p>No results found</p>"
          }
            ${results.posts
              .map(
                (item) =>
                  `<li><a href="${item.permalink}">${item.title} ${
                    item.postType == "post" ? `${item.postDate}` : ""
                  }</a></li>`
              )
              .join("")}
              ${results.posts.length ? "</ul>" : ""}
          </div>  
        </div>`);
          this.spinnerVisible = false;
        }
      );
      // Delete this code later
    }

    keyPressDispatcher(e) {
      // console.log(e.keyCode);

      if (
        e.keyCode == 83 &&
        !this.overlayActive &&
        $("input, textarea").is(":focus")
      ) {
        this.openOverlay();
      }
      if (e.keyCode == 27 && this.overlayActive) {
        this.closeOverlay();
      }
    }
    openOverlay() {
      this.searchOverlay.addClass("active");
      $("body").addClass("no_scrolling");
      this.searchInput.val("");
      setTimeout(() => this.searchInput.focus(), 301);
      this.overlayActive = true;
    }
    closeOverlay() {
      this.searchOverlay.removeClass("active");
      $("body").removeClass("no_scrolling");
      this.overlayActive = false;
    }
    focusSearch(e) {
      e.stopPropagation();
      console.log("yep");
    }
    addSeachTemplate() {
      $("body").append(`
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
})(jQuery);
