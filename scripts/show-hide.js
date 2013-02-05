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
/* For the Twitter sidebar div */
$(document).ready(function() {
	$('a#twitter-link').hover(
	function() {
		$('#twitter-box').show();
	},
	function() {
		$('#twitter-box').hide();
	}
	);
});
/* For the Blog sidebar div */
$(document).ready(function() {
	$('a#blog-link').hover(
	function() {
		$('#blog-post-list').show();
	},
	function() {
		$('#blog-post-list').hide();
	}
	);
});