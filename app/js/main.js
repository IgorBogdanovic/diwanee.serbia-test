$(document).ready(function() {
	var menu = $('.nav_menu');
	var windowWidth = $(window).width();
	var page = $('html, body');

	// Smooth scroll on menu click
	$('a[href*=\\#]').click(function() {
		page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);

		// Set menu display to none after click depending of window width
		if (windowWidth <= 1024) {
		    menu.slideToggle('slow');
		}

		return false;
	});

	// Sets new value to var windowWidth when resize
	$(window).resize(function() {
		if ($(window).width() != windowWidth) {
			windowWidth = $(window).width();
		}
	});

	// Set menu display to block after click
	$('.menu_bar').click(function() {
		menu.slideToggle('slow');
	});

	// Set menu display to none after click depending of window width
	menu.click(function() {
		if (windowWidth <= 1024) {
		    menu.slideToggle('slow');
		}
	});

	// Set menu display to block after window resize to desktop mode
	$(window).resize(function(){
		if (windowWidth > 1024 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});