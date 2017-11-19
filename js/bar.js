var skillsDiv = jQuery('#skills');

$(window).on('scroll', function() {
  var winT = jQuery(window).scrollTop(),
    winH = jQuery(window).height(),
    skillsT = skillsDiv.offset().top;
  if (winT + winH > skillsT) {
    $('.html').animate({width:'90%'},2000);
    $('.css').animate({width:'90%'},2000);
    $('.js').animate({width:'40%'},2000);
    $('.jQuery').animate({width:'50%'},2000);
    $('.sass').animate({width:'60%'},2000);
    $('.boot').animate({width:'65%'},2000);
    $('.git').animate({width:'75%'},2000);
    $('.ps').animate({width:'75%'},2000);
  }
});
