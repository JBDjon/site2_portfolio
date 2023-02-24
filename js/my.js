$(document).ready(function () {
	$('.burger').click(function () {
		$('.header__menu').toggleClass('show');
		$('.header-nav').toggleClass('show');
		$('.burger').toggleClass('show');
		$('.header__user-menu_wrap').toggleClass('show');
		$('body').toggleClass('noscroll');


	});

	// Добавляем обработчик события click на область экрана
	$(document).click(function (e) {
		if (!$('.header__menu').is(e.target) && !$('.burger').is(e.target) && $('.header__menu').has(e.target).length === 0) {
			$('.header__menu').removeClass('show');
			$('.header-nav').removeClass('show');
			$('.burger').removeClass('show');
			$('.header__user-menu_wrap').removeClass('show');
			$('body').removeClass('noscroll');

		}
	});
});



