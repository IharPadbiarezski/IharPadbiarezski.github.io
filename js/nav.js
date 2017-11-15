$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 10) {
      $('#nav').addClass('shrink');
    } else {
      $('#nav').removeClass('shrink');
    }
  });
/*
  $("div").mouseenter(function() {
    var id = $(this).attr('id');
    $('a').removeClass('active');
    $("[href=#"+id+"]").addClass('active');
  });
  */
});
