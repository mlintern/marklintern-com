/*Function used by all the main column images to show hidden div*/
function showhide (div) {
	if ($(div).hasClass('show')) {
		$(div).removeClass('show');
		$(div).addClass('hide');
	} else {
		$(div).removeClass('hide');
		$(div).addClass('show');
	}
}