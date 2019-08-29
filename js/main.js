//On_load
$(window).load(function () {
	// Slider slick
	$('.home-slider').slick({
		draggable: false,
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