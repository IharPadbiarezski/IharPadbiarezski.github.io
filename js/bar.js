var skillsDiv = jQuery('#skills');

$(window).on('scroll', function() {
	var winT = jQuery(window).scrollTop(),
		winH = jQuery(window).height(),
		skillsT = skillsDiv.offset().top;
	if (winT + winH > skillsT) {
		$('.html').animate({ width: '90%' }, 2000);
		$('.css').animate({ width: '90%' }, 2000);
		$('.js').animate({ width: '80%' }, 2000);
		$('.jQuery').animate({ width: '60%' }, 2000);
		$('.sass').animate({ width: '70%' }, 2000);
		$('.boot').animate({ width: '70%' }, 2000);
		$('.git').animate({ width: '75%' }, 2000);
		$('.react').animate({ width: '70%' }, 2000);
	}
});
