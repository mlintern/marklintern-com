$(document).ready(function() {
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
