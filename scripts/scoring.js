var array1=['31','41','51','61','71','81','91','101','j1','q1','k1'];
var array2=['32','42','52','62','72','82','92','102','j2','q2','k2'];
var array3=['33','43','53','63','73','83','93','103','j3','q3','k3'];
var array4=['34','44','54','64','74','84','94','104','j4','q4','k4'];
var array5=['35','45','55','65','75','85','95','105','j5','q5','k5'];
var array6=['36','46','56','66','76','86','96','106','j6','q6','k6'];
var array7=['37','47','57','67','77','87','97','107','j7','q7','k7'];
var arrayt=['t1','t2','t3','t4','t5','t6','t7'];

function calculate_score(){
	add_column(array1,1);
	add_column(array2,2);
	add_column(array3,3);
	add_column(array4,4);
	add_column(array5,5);
	add_column(array6,6);
	add_column(array7,7);
};

function add_column(col_array,col_id) {
	var x = 0;
	var y = col_array.length-1;
	for (i=0;i<=y;i++)
		{
		 x = x + (document.getElementById(col_array[i]).value -0);
		}
	document.getElementById(arrayt[col_id-1]).value = x;
};

function reset_column(col_array) {
	var x = 0;
	var y = col_array.length-1;
	for (i=0;i<=y;i++)
		{
		document.getElementById(col_array[i]).value = 0;
		}
};

function reset_score(){
	var ans=confirm("Are You Sure you want to Reset?!");
	if (ans==true)
		{
		reset_column(array1);
		reset_column(array2);
		reset_column(array3);
		reset_column(array4);
		reset_column(array5);
		reset_column(array6);
		reset_column(array7);
		reset_column(arrayt);
		}
	  else
		{
		}
};

function fixsizing(divname) {

		//Getting the variable's value from a link 
		var popupBox = divname;

		//Fade in the Popup
		$(popupBox).fadeIn(300);

		//Set the center alignment padding + border see css style
		var popMargTop = ($(popupBox).height() + 24) / 2; 
		var popMargLeft = ($(popupBox).width() + 24) / 2; 

		$(popupBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		return false;
	};

$(document).ready(function() {

	$('#player_3').click(function() {
		console.log('3');
		$('.player4').hide();
		$('.player5').hide();
		$('.player6').hide();
		$('.player7').hide();
		fixsizing('#score-sheet')
	});
	
	$('#player_4').click(function() {
		console.log('4');
		$('.player3').show();
		$('.player4').show();
		$('.player5').hide();
		$('.player6').hide();
		$('.player7').hide();
		fixsizing('#score-sheet')
	});
	
	$('#player_5').click(function() {
		console.log('5');
		$('.player4').show();
		$('.player3').show();
		$('.player5').show();
		$('.player6').hide();
		$('.player7').hide();
		fixsizing('#score-sheet')
	});
	
	$('#player_6').click(function() {
		console.log('6');
		$('.player4').show();
		$('.player5').show();
		$('.player6').show();
		$('.player3').show();
		$('.player7').hide();
		fixsizing('#score-sheet')
	});
	
	$('#player_7').click(function() {
		console.log('7');
		$('.player4').show();
		$('.player5').show();
		$('.player6').show();
		$('.player7').show();
		$('.player3').show();
		fixsizing('#score-sheet')
	});
});