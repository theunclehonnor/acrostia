//On_load
$(window).load(function () {
	//Gamburger
	$('.navbar__button').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('menu-btn_active');
		$('.navbar-links').toggleClass('navbar-links_active');
	});
	// Slider slick
	$('.home-slider').slick({
		dots: true,
		dotsClass: 'home-slider__dots',
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right')
	});
	// Анимация медленной прокрутки
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top - 120 + "px" });
		return false;
	});
});