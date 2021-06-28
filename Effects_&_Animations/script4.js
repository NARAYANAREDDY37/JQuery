/// <reference path="../typings/globals/jquery/index.d.ts" />

$(document).ready(function () {
	$('#btnFadeOut').click(function () {
		$('#box').fadeOut(2000, function () {
			$('#btnFadeOut').text('Its gone');
		});
	});

	$('#btnFadeIn').click(function () {
		$('#box').fadeIn(2000);
	});

	$('#btnFadeTog').click(function () {
		$('#box').fadeToggle(1000);
	});

	$('#btnSlideUp').click(function () {
		$('#box').slideUp(1000);
	});
	$('#btnSlideDown').click(function () {
		$('#box').slideDown(1000);
	});
	$('#btnSlideTog').click(function () {
		$('#box').slideToggle(1000);
	});
	$('#btnStop').click(function () {
		$('#box').stop();
	});

	$('#moveRight').click(function () {
		$('#box2').animate({
			left: 500,
			height: 300,
			width: 300,
			opacity: 0.5
		});
	});

	$('#moveLeft').click(function () {
		$('#box2').animate({
			left: 0,
			height: 100,
			width: 100,
			opacity: 1
		});
	});

	$('#moveAround').click(function () {
		var box = $('#box2');

		box.animate({
			left: 300
		});
		box.animate({
			top: 300
		});
		box.animate({
			left: 0,
			top: 300
		});
		box.animate({
			left: 0,
			top: 0
		});
	});
});
