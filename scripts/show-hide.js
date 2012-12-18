/*$(document).ready(function() {
	$('a#tools').click(function() {
		if ($('#tools-div').hasClass('show')){
			$('#tools-div').removeClass('show');
			$('#tools-div').addClass('hide');
		}else{
			$('#tools-div').removeClass('hide');
			$('#tools-div').addClass('show');
		}
	});
});
*/
function showhide (div) {
		if ($(div).hasClass('show')) {
			$(div).removeClass('show');
			$(div).addClass('hide');
		} else {
			$(div).removeClass('hide');
			$(div).addClass('show');
		}
	}
