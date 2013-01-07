$(document).ready(function() {
	$('a.link-to-form').click(function() {

		//Getting the variable's value from a link 
		var loginBox = $(this).attr('href');

		//Fade in the Popup
		$(loginBox).fadeIn(300);

		//Set the center alignment padding + border see css style
		var popMargTop = ($(loginBox).height() + 24) / 2; 
		var popMargLeft = ($(loginBox).width() + 24) / 2; 

		$(loginBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});

		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(300);

		return false;
	});

	// When clicking on the button close or the mask layer the popup closed
	$('a.close, #mask').live('click', function() { 
		$('#mask , #popupform , #score-sheet').fadeOut(300 , function() {
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
