$(document).ready(function() {
	$('a.popup-link').click(function() {

		//Getting the variable's value from a link 
		var popupBox = $(this).attr('href');

		//Fade in the Popup
		$(popupBox).fadeIn(300);

		//Set the center alignment padding + border see css style
		var popMargTop = ($(popupBox).height() + 24) / 2; 
		var popMargLeft = ($(popupBox).width() + 24) / 2; 

		$(popupBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});

		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(300);

		return false;
	});

	// When clicking on the button close or the mask layer the popup closed
	//$('#mask').live('click', function() { 
	$('#mask').live("click touchstart", function(){
		$('#mask , #popupform , #score-sheet , #scoreboard , #score-eucher','#bulletholes').fadeOut(300 , function() {
			$('#mask').remove();  
		}); 
		return false;
	});
	
	//$('#mask').live('click', function() { 
	$('#mask').live("click touchstart", function(){
		$('#pic1, #pic2, #pic3, #pic4, #pic5, #pic6, #pic7, #pic8, #pic9, #pic10, #pic11, #pic12, #pic13').fadeOut(300 , function() {
			$('#mask').remove();  
		}); 
		return false;
	});
});

$(document).ready(function (){ 
	$('#cb_web_to_post').on('submit',function(){ 
		$.post('https://cl.exct.net/subscribe.aspx',{ 
		SubAction:sub_add_update, 
		MID:'xxx18', 
		lid:'xxx26', 
		Name:$("#DataField_Name").val(), 
		Company:$("#DataField_Company").val(), 
		Email:$("#DataField_Email").val() 
		}); 
	}); 
}); 
