$(window).ready(function () {
	update();
})
$(window).resize(function () {
	update();
})

function update() {
	var winWidth = parseInt($(window).width());
	updateModals(winWidth);
}
function updateModals(winWidth) {
	if (winWidth >= 560)
		$('.modal').css({'width'      : '560px',
		                 'marginLeft' : '-280px'});
	else
		$('.modal').css({'width'      : winWidth + 'px',
		                 'marginLeft' : -parseInt(winWidth / 2) - 1 + 'px'});
	if (winWidth >= 250)
		$('#token-input').css({'width' : '206px'});
	else
		$('#token-input').css({'width' : winWidth - 44 + 'px'});
}
