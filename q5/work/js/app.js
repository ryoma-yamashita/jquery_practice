$(".dropdwn_menu").on({
  "mouseenter": function() {
    $(this).children().stop().slideDown();
  },
  "mouseleave": function() {
    $(this).children().stop().slideUp();
  }
});