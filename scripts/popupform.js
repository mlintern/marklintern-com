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
		$('#mask , #popupform , #score-sheet , #scoreboard , #score-eucher').fadeOut(300 , function() {
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
	
	function gunShot(){
	        $("body").append("<embed src='sounds/Gun-Shot.mp3' autostart='true' loop='false' width='2' height='0'></embed>");
	}
	
	$('a.bullets-link').click(function() {

		//Getting the variable's value from a link 
		var popupBox = $(this).attr('href');

		//Fade in the Popup
		$(popupBox).fadeIn(0);

		//Set the center alignment padding + border see css style
		var popMargTop = ($(popupBox).height() + 24) / 2; 
		var popMargLeft = ($(popupBox).width() + 24) / 2; 

		$(popupBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		$('#hole1').hide();
		$('#hole2').hide();
		$('#hole3').hide();
		$('#hole4').hide();
		$('#hole5').hide();
		$('#hole6').hide();
		$('#hole7').hide();
		$('#hole8').hide();
		
		// Add the mask to body
		$('body').append('<div id="blackmask"></div>');
		$('#blackmask').fadeIn(0);
		
		$('#hole1').delay(0).fadeIn(0,function(){$.playSound('sounds/Gun-Shot.wav');});
		$('#hole2').delay(1000).fadeIn(0,function(){$.playSound('sounds/Gun-Shot.wav');});
		$('#hole3').delay(2000).fadeIn(0,function(){$.playSound('sounds/Gun-Shot.wav');});
		$('#hole4').delay(3000).fadeIn(0,function(){$.playSound('sounds/Gun-Shot.wav');});
		$('#hole5').delay(4000).fadeIn(0,function(){$.playSound('sounds/Gun-Shot.wav');});
		$('#hole6').delay(5000).fadeIn(0,function(){$.playSound('sounds/Gun-Shot.wav');});
		$('#hole7').delay(6000).fadeIn(0,function(){$.playSound('sounds/Gun-Shot.wav');});
		$('#hole8').delay(7000).fadeIn(0,function(){$.playSound('sounds/Gun-Shot.wav');});
	
		return false;
	});

	// When clicking on the button close or the mask layer the popup closed
	//$('#mask').live('click', function() { 
	$('#blackmask').live("click touchstart", function(){
		$('#blackmask , #bulletholes').fadeOut(300 , function() {
			$('#blackmask').remove();  
		}); 
		return false;
	});
	
});

$(document).ready(function (){ 
	$('#cb_web_to_post').on('submit',function(){ 
		$.post('https://cl.exct.net/subscribe.aspx',{ 
		SubAction:'sub_add_update', 
		MID:'xxx18', 
		lid:'xxx26', 
		Name:$("#DataField_Name").val(), 
		Company:$("#DataField_Company").val(), 
		Email:$("#DataField_Email").val() 
		}); 
	}); 
}); 
