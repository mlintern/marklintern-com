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

function calculate_score() {
	add_column(array1,1);
	add_column(array2,2);
	add_column(array3,3);
	add_column(array4,4);
	add_column(array5,5);
	add_column(array6,6);
	add_column(array7,7);
	add_column(array8,8);
}

function add_column(col_array,col_id) {
	var x = 0;
	var y = col_array.length-1;
	for (i=0;i<=y;i++)
		{
		 x = x + (document.getElementById(col_array[i]).value - 0);
		}
	document.getElementById(arrayt[col_id-1]).value = x;
}

function reset_column(col_array) {
	var x = 0;
	var y = col_array.length-1;
	for (i = 0;i <= y; i++){
		document.getElementById(col_array[i]).value = '';
	}
}

function reset_score(){
	var ans = confirm("Are You Sure you want to Reset?!");
	if (ans === true) {
		reset_column(array1);
		reset_column(array2);
		reset_column(array3);
		reset_column(array4);
		reset_column(array5);
		reset_column(array6);
		reset_column(array7);
		reset_column(array8);
		reset_column(arrayt);
	} else
	{
	}
}

$(document).ready(function() {
	$('#player_3').click(function() {
		$('.player3').show();
		$('.player4').hide();
		$('.player5').hide();
		$('.player6').hide();
		$('.player7').hide();
		$('.player8').hide();
	});
	$('#player_4').click(function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').hide();
		$('.player6').hide();
		$('.player7').hide();
		$('.player8').hide();
	});
	$('#player_5').click(function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').show();
		$('.player6').hide();
		$('.player7').hide();
		$('.player8').hide();
	});
	$('#player_6').click(function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').show();
		$('.player6').show();
		$('.player7').hide();
		$('.player8').hide();
	});
	$('#player_7').click(function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').show();
		$('.player6').show();
		$('.player7').show();
		$('.player8').hide();
	});
	$('#player_8').click(function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').show();
		$('.player6').show();
		$('.player7').show();
		$('.player8').show();
	});
	$('#onetothree').click(function() {
		if($('#onetothree').prop('checked')) {
		    $("#rowone").show();
		    $("#rowtwo").show();
		} else {
		    $("#rowone").hide();
		    $("#rowtwo").hide();
		}
	});
	$('#jacktoking').click(function() {
		if($('#jacktoking').prop('checked')) {
		    $("#rowJ").show();
		    $("#rowQ").show();
		    $("#rowK").show();
		} else {
		    $("#rowJ").hide();
		    $("#rowQ").hide();
		    $("#rowK").hide();
		}
	});
});

//Scoreboard
$(document).ready(function() {
	$(".HomeMinus").click(function() {
		var current = parseInt($("#homescore").val());
		if (current === 0){
		}else{
			$("#homescore").val(current - 1);
		}
	});
	$(".HomePlus").click(function() {
		var current = parseInt($("#homescore").val());
		if (current == 999){
		}else{
			$("#homescore").val(current + 1);
		}
	});
	$(".AwayMinus").click(function() {
		var current = parseInt($("#awayscore").val());
		if (current === 0){
		}else{
			$("#awayscore").val(current - 1);
		}
	});
	$(".AwayPlus").click(function() {
		var current = parseInt($("#awayscore").val());
		if (current == 999){
		}else{
			$("#awayscore").val(current + 1);
		}
	});
	$("#resetscore").click(function() {
		$("#homescore").val(0);
		$("#awayscore").val(0);
	});
});


//Eucher Scoreboard
var WIN_POINTS = 10;
var PIE_SIZE = 360 / WIN_POINTS;
var HALF_WAY = WIN_POINTS / 2;

function reseteuchergame() {
	progressZero('.home-progress');
	$("#eucherhomescore").val(0);
	progressZero('.away-progress');
	$("#eucherawayscore").val(0);
}

function minusHomePoint() {
	var currentscore = parseInt($("#eucherhomescore").val());
	if (currentscore === 0){
	}else{
		progressDown('.home-progress', currentscore, 1);
		$("#eucherhomescore").val(currentscore - 1);
	}
}

function addHomePoint(num){
	var stop = false;
	for ( i=0;i<num;i++ ){
		if (!stop){
			if ( $("#eucherhomescore").val() == ( WIN_POINTS - 1 ) ) {
				stop = true;
				$("#eucherhomeoverallscore").val(parseInt($("#eucherhomeoverallscore").val()) + 1);
				reseteuchergame();
			}else{
				currScore = parseInt($("#eucherhomescore").val());
				progressUp('.home-progress', currScore, 1);
				$("#eucherhomescore").val(currScore + 1);
			}
		}
	}
}

function minusAwayPoint() {
	var currentscore = parseInt($("#eucherawayscore").val());
	if (currentscore === 0){
	}else{
		progressDown('.away-progress', currentscore, 1);
		$("#eucherawayscore").val(currentscore - 1);
	}
}

function addAwayPoint(num){
	var stop = false;
	for ( i=0;i<num;i++ ){
		if (!stop){
			if ( $("#eucherawayscore").val() == ( WIN_POINTS - 1 ) ) {
				stop = true;
				$("#eucherawayoverallscore").val(parseInt($("#eucherawayoverallscore").val()) + 1);
				reseteuchergame();
			}else{
				currScore = parseInt($("#eucherawayscore").val());
				progressUp('.away-progress', currScore, 1);
				$("#eucherawayscore").val(currScore + 1);
			}
		}
	}
}

var fullRight = {
	'-webkit-transform': 'rotate(180deg)',
	'-moz-transform': 'rotate(180deg)',
	'-o-transform': 'rotate(180deg)',
	'transform': 'rotate(180deg)'
};

function progressUp(id, curr, amount) {
	if ( curr + amount > HALF_WAY ) {
		degree = (curr + amount - HALF_WAY) * PIE_SIZE;
		styleleft = {
			'-webkit-transform': 'rotate(' + degree + 'deg)',
			'-moz-transform': 'rotate(' + degree + 'deg)',
			'-o-transform': 'rotate(' + degree + 'deg)',
			'transform': 'rotate(' + degree + 'deg)'
		};
		$(id + '.right .pie').css(fullRight);
		$(id + '.left .pie').css(styleleft);
	}else{
		degree = (curr + amount) * PIE_SIZE;
		style = {
			'-webkit-transform': 'rotate(' + degree + 'deg)',
			'-moz-transform': 'rotate(' + degree + 'deg)',
			'-o-transform': 'rotate(' + degree + 'deg)',
			'transform': 'rotate(' + degree + 'deg)'
		};
		$(id + '.right .pie').css(style);
	}
}

function progressDown(id, curr, amount) {
	if ( curr - amount > HALF_WAY ) {
		degree = (curr - amount - HALF_WAY ) * PIE_SIZE;
		console.log(degree);
		styleleft = {
			'-webkit-transform': 'rotate(' + degree + 'deg)',
			'-moz-transform': 'rotate(' + degree + 'deg)',
			'-o-transform': 'rotate(' + degree + 'deg)',
			'transform': 'rotate(' + degree + 'deg)'
		};
		$(id + '.left .pie').css(styleleft);
	}else{
		degree = (curr - amount) * PIE_SIZE;
		style = {
			'-webkit-transform': 'rotate(' + degree + 'deg)',
			'-moz-transform': 'rotate(' + degree + 'deg)',
			'-o-transform': 'rotate(' + degree + 'deg)',
			'transform': 'rotate(' + degree + 'deg)'
		};
		if ( (curr - amount) === 0 ) {
			progressZero(id);
		} else {
			$(id + '.right .pie').css(style);
			$(id + '.left .pie').attr('style','');
		}
	}
}

function progressZero(id){
	$(id + ' .pie').attr('style','');
}

$(document).ready(function() {
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
	
	$("#eucherresetscore").on('touchstart click', function() {
		reseteuchergame();
		$("#eucherhomeoverallscore").val(0);
		$("#eucherawayoverallscore").val(0);
	});
	
	$(".opencloseteamscore").click(function() {
		$(".wins-losses").toggle();
	});

	$('.away-plus').on('touchstart click', function(){
		addAwayPoint(1);
	});

	$('.home-plus').on('touchstart click', function(){
		addHomePoint(1);
	});

	$('.away-minus').on('touchstart click', function(){
		minusAwayPoint();
	});

	$('.home-minus').on('touchstart click', function(){
		minusHomePoint();
	});
});

