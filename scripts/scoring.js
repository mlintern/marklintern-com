//5 Crowns Scoring

var array1=['11','21','31','41','51','61','71','81','91','101','j1','q1','k1'];
var array2=['12','22','32','42','52','62','72','82','92','102','j2','q2','k2'];
var array3=['13','23','33','43','53','63','73','83','93','103','j3','q3','k3'];
var array4=['14','24','34','44','54','64','74','84','94','104','j4','q4','k4'];
var array5=['15','25','35','45','55','65','75','85','95','105','j5','q5','k5'];
var array6=['16','26','36','46','56','66','76','86','96','106','j6','q6','k6'];
var array7=['17','27','37','47','57','67','77','87','97','107','j7','q7','k7'];
var array8=['18','28','38','48','58','68','78','88','98','108','j8','q8','k8'];
var arrayt=['t1','t2','t3','t4','t5','t6','t7','t8'];

function calculate_score(){
	add_column(array1,1);
	add_column(array2,2);
	add_column(array3,3);
	add_column(array4,4);
	add_column(array5,5);
	add_column(array6,6);
	add_column(array7,7);
	add_column(array8,8);
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
		reset_column(array8);
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
		$('.player3').show();
		$('.player4').hide();
		$('.player5').hide();
		$('.player6').hide();
		$('.player7').hide();
		$('.player8').hide();
		fixsizing('#score-sheet')
	});
	$('#player_4').click(function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').hide();
		$('.player6').hide();
		$('.player7').hide();
		$('.player8').hide();
		fixsizing('#score-sheet')
	});
	$('#player_5').click(function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').show();
		$('.player6').hide();
		$('.player7').hide();
		$('.player8').hide();
		fixsizing('#score-sheet')
	});
	$('#player_6').click(function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').show();
		$('.player6').show();
		$('.player7').hide();
		$('.player8').hide();
		fixsizing('#score-sheet')
	});
	$('#player_7').click(function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').show();
		$('.player6').show();
		$('.player7').show();
		$('.player8').hide();
		fixsizing('#score-sheet')
	});
	$('#player_8').click(function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').show();
		$('.player6').show();
		$('.player7').show();
		$('.player8').show();
		fixsizing('#score-sheet')
	});
	$('#onetothree').click(function() {
		if($('#onetothree').attr('checked')) {
		    $("#rowone").show();
		    $("#rowtwo").show();
		} else {
		    $("#rowone").hide();
		    $("#rowtwo").hide();
		}
		fixsizing('#score-sheet')
	});
	$('#jacktoking').click(function() {
		if($('#jacktoking').attr('checked')) {
		    $("#rowJ").show();
		    $("#rowQ").show();
		    $("#rowK").show();
		} else {
		    $("#rowJ").hide();
		    $("#rowQ").hide();
		    $("#rowK").hide();
		}
		fixsizing('#score-sheet')
	});
});

//Scoreboard
$(document).ready(function() {
	$(".HomeMinus").live("click", function() {
		var current = parseInt($("#homescore").val());
		if (current == 0){
		}else{
			$("#homescore").val(current - 1);
		}
	});
	$(".HomePlus").live("click", function() {
		var current = parseInt($("#homescore").val());
		if (current == 999){
		}else{
			$("#homescore").val(current + 1);
		}
	});
	$(".AwayMinus").live("click", function() {
		var current = parseInt($("#awayscore").val());
		if (current == 0){
		}else{
			$("#awayscore").val(current - 1);
		}
	});
	$(".AwayPlus").live("click", function() {
		var current = parseInt($("#awayscore").val());
		if (current == 999){
		}else{
			$("#awayscore").val(current + 1);
		}
	});
	$("#resetscore").live("click", function() {
		//console.log("Reset");
		$("#homescore").val(0);
		$("#awayscore").val(0);
	});
});

//Eucher Scoreboard
$(document).ready(function() {
	function reseteuchergame() {
		$("#eucherteam1").width(0);
		$("#eucherhomescore").val(0);
		$("#eucherteam2").width(0);
		$("#eucherawayscore").val(0);
	};
	
	$("#homeeuchername").on('keyup',function(){
		$("#homeeucherteamname").text($('#homeeuchername').val());
		$(".scorecontainer").width($("#homeeucherteamname").width() + 20 + $("#awayeucherteamname").width() + 20 + 135);
		$(".scorecontainer").css({'margin':'0 auto'});
	});
	
	$("#awayeuchername").on('keyup',function(){
		$("#awayeucherteamname").text($('#awayeuchername').val());
		var newWidth = $("#homeeucherteamname").width() + 20 + $("#awayeucherteamname").width() + 20 + 135;
		$(".scorecontainer").width( newWidth );
		$(".scorecontainer").css({'margin':'0 auto'});
	});
	
	$(".eucherhomeminusbtn").live("click", function() {
		var currentscore = parseInt($("#eucherhomescore").val());
		var currentpos = $("#eucherteam1").width();
		if (currentpos == 0){
		}else{
			$("#eucherteam1").width(currentpos - 40);
			$("#eucherhomescore").val(currentscore - 1);
		}
	});
	$(".eucherhomeplus1btn").live("click", function() {
		var currentpos = $("#eucherteam1").width();
		if (currentpos == 360){
			$("#eucherhomeoverallscore").val(parseInt($("#eucherhomeoverallscore").val()) + 1);
			reseteuchergame();
			$(".wins-losses").show();
			fixsizing('#score-eucher');
		}else{
			$("#eucherteam1").width(currentpos + 40);
			$("#eucherhomescore").val(parseInt($("#eucherhomescore").val()) + 1);
		}
	});
	$(".eucherhomeplus2btn").live("click", function() {
		if ( $("#eucherhomescore").val() == 9 ) {var stop = true;}
		$(".eucherhomeplus1btn").click();
		if (stop) {stop=false;return;}
		$(".eucherhomeplus1btn").click();
	});
	$(".eucherhomeplus4btn").live("click", function() {
		if ( $("#eucherhomescore").val() == 9 ) {var stop = true;}
		$(".eucherhomeplus1btn").click();
		if (stop) {stop=false;return;}
		if ( $("#eucherhomescore").val() == 9 ) {var stop = true;}
		$(".eucherhomeplus1btn").click();
		if (stop) {stop=false;return;}
		if ( $("#eucherhomescore").val() == 9 ) {var stop = true;}
		$(".eucherhomeplus1btn").click();
		if (stop) {stop=false;return;}
		$(".eucherhomeplus1btn").click();
	});
	$(".eucherawayminusbtn").live("click", function() {
		var currentscore = parseInt($("#eucherawayscore").val());
		var currentpos = $("#eucherteam2").width();
		if (currentpos == 0){
		}else{
			$("#eucherteam2").width(currentpos - 40);
			$("#eucherawayscore").val(currentscore - 1);
		}
	});
	$(".eucherawayplus1btn").live("click", function() {
		var currentscore = parseInt($("#eucherawayscore").val());
		var currentpos = $("#eucherteam2").width();
		if (currentpos == 360){
			$("#eucherawayoverallscore").val(parseInt($("#eucherawayoverallscore").val()) + 1);
			reseteuchergame();
			$(".wins-losses").show();
			fixsizing('#score-eucher');
		}else{
			$("#eucherteam2").width(currentpos + 40);
			$("#eucherawayscore").val(parseInt($("#eucherawayscore").val()) + 1);
		}
	});
	$(".eucherawayplus2btn").live("click", function() {
	if ( $("#eucherawayscore").val() == 9 ) {var stop = true;}
		$(".eucherawayplus1btn").click();
		if (stop) {stop=false;return;}
		$(".eucherawayplus1btn").click();
	});
	$(".eucherawayplus4btn").live("click", function() {
		if ( $("#eucherawayscore").val() == 9 ) {var stop = true;}
		$(".eucherawayplus1btn").click();
		if (stop) {stop=false;return;}
		if ( $("#eucherawayscore").val() == 9 ) {var stop = true;}
		$(".eucherawayplus1btn").click();
		if (stop) {stop=false;return;}
		if ( $("#eucherawayscore").val() == 9 ) {var stop = true;}
		$(".eucherawayplus1btn").click();
		if (stop) {stop=false;return;}
		$(".eucherawayplus1btn").click();
	});
	$("#eucherresetscore").live("click", function() {
		reseteuchergame()
		$("#eucherhomeoverallscore").val(0);
		$("#eucherawayoverallscore").val(0);
	});
	$(".opencloseteamscore").live("click", function() {
		$(".wins-losses").toggle();
	});
});