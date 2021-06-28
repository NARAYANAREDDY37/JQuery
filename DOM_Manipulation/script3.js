/// <reference path="../typings/globals/jquery/index.d.ts" />

$(document).ready(function () {
	// $('p.para1').css('color', 'brown');

	//Multiple css properties
	$('p.para1').css({ color: 'brown', background: '#ccc' });

	//adding and removing class
	$('p.para2').addClass('myClass');
	$('p.para2').removeClass('myClass');

	//adding event to button
	$('#btn1').click(function () {
		$('p.para2').toggleClass('myClass');
	});

	//manipulating DOM
	// $('#myDiv').text('Hello George');
	// $('#myDiv').html('<h1>Hello George</h1>');
	// alert($('#myDiv').text());

	// $('ul#list').append('<li>Appended list item</li>');
	// $('ul#list').prepend('<li>prepended list item</li>');

	// $('.para1').appendTo('.para2');
	// $('.para1').prependTo('.para2');

	// $('ul#list').before('<h3>Hello</h3>');
	// $('ul#list').after('<h3>World</h3>');

	//removes inner elements
	// $('ul#list').empty();

	//completely removes ul element
	// $('ul#list').detach();

	//adding attribute
	// $('a').attr('target', '_blank');
	// alert($('a').attr('href'));

	//removing attribute
	// $('a').removeAttr('target');

	//Wrap and WrapAll
	// $('p').wrap('<h1></h1>');
	// $('p').wrapAll('<h1></h1>');

	$('#newItem').keyup(function (e) {
		var code = e.which;
		if (code == 13) {
			e.preventDefault();
			$('ul#list').append('<li>' + e.target.value + '</li>');
		}
	});

	var myArr = ['Brad', 'Kelley', 'Nate', 'Jose'];

	$.each(myArr, function (i, val) {
		$('#users').append('<li>' + val + '</li>');
	});

	var newArray = $('ul#list li').toArray();
	// console.log(newArray);
	$.each(newArray, function (i, val) {
		console.log(val.innerHTML);
	});
});
