//only when the whole document is loaded

$(document).ready(() => {
	/* $('#btn1').click(() => {
		alert('button clicked');
	}); */

	/* $('#btn1').on('click', () => {
		console.log('button clicked');
	}); */

	/* $('#btn1').on('click', () => {
		$('.para1').hide();
	}); */

	/* $('#btn2').on('click', () => {
		$('.para1').show();
	}); */

	//Toggle para1

	/* $('#btn1').on('click', () => {
		$('.para1').toggle();
	}); */

	//hover combines mouseenter & mouseleave

	/* $('#btn1').hover(() => {
		$('.para1').toggle();
	}); */

	/* $('#btn1').on('mouseenter', () => {
		$('.para1').toggle();
	}); */

	/* $('#btn1').on('mouseleave', () => {
		$('.para1').toggle();
	}); */

	/* $('#btn1').on('mousemove', () => {
		$('.para1').toggle();
	}); */

	/* $('#btn1').on('mousedown', () => {
		$('.para1').toggle();
	}); */

	/* $('#btn1').on('mouseup', () => {
		$('.para1').toggle();
	}); */

	/* $('#btn1').click((e) => {
		console.log(e.currentTarget.id);
		console.log(e.currentTarget.innerHTML);
		console.log(e.currentTarget.outerHTML);
		console.log(e.currentTarget.className);
	}); */

	/* $('btn1').on('mousemove', (e) => {
		console.log('Cords X: ' + e.clientX + ',' + 'Y: ' + e.clientY);
	}); */

	$(document).on('mousemove', (e) => {
		console.log('Cords X: ' + e.clientX + ',' + 'Y: ' + e.clientY);
	});
});
