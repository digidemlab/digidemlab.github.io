// ACCORDION MECHANICS
var jsaccordion = {
  init : function (target) {
  // init() : initialize accordion
  // PARAM target : ID of accordion wrapper

    var headers = document.querySelectorAll("#" + target + " .accordion-head");
    if (headers.length > 0) { for (var head of headers) {
      head.addEventListener("click", jsaccordion.select);
    }}
  },

  select : function () {
  // select() : fired when user clicks on a header

    var contents = this.nextElementSibling;
    contents.classList.toggle("open");
    this.classList.toggle("open");
  }
};

// ON PAGE LOAD
window.addEventListener('load', function(){
  jsaccordion.init("accordion-basic");
  jsaccordion.init("accordion-menu");

});
