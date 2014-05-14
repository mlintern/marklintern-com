$(document).ready(function() {
	
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
		
		var audio1 = document.getElementsByTagName("audio")[0];
		var audio2 = document.getElementsByTagName("audio")[1];
		var audio3 = document.getElementsByTagName("audio")[2];
		var audio4 = document.getElementsByTagName("audio")[3];
		var audio5 = document.getElementsByTagName("audio")[4];
		var audio6 = document.getElementsByTagName("audio")[5];
		var audio7 = document.getElementsByTagName("audio")[6];
		var audio8 = document.getElementsByTagName("audio")[7];

		$('#hole1').delay(0).fadeIn(0,function(){audio1.play();});
		$('#hole2').delay(200).fadeIn(0,function(){audio2.play();});
		$('#hole3').delay(1500).fadeIn(0,function(){audio3.play();});
		$('#hole4').delay(1800).fadeIn(0,function(){audio4.play();});
		$('#hole5').delay(2500).fadeIn(0,function(){audio5.play();});
		$('#hole6').delay(3500).fadeIn(0,function(){audio6.play();});
		$('#hole7').delay(5000).fadeIn(0,function(){audio7.play();});
		$('#hole8').delay(5300).fadeIn(0,function(){audio8.play();});
		
		// When clicking on the button close or the mask layer the popup closed
		//$('#mask').live('click', function() { 
		$('#blackmask').click(function(){
			$('#blackmask , #bulletholes').fadeOut(300 , function() {
				$('#blackmask').remove();  
			}); 
			return false;
		});
	
		return false;
	});
	
});