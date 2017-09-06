/*
 * Local Data
 */
var eucher_data = storage.get('marklintern-com-eucher') || {"homeTeamName":"Good Guys", "awayTeamName":"Bad Guys", "homeTeamScore":0, "awayTeamScore":0, "homeTeamWins":0, "awayTeamWins":0};
if ( whatIsIt(eucher_data) == 'string' ) {
	eucher_data = JSON.parse(eucher_data);
}
storage.save(eucher_storage_name, eucher_data);


/*
 * Helper Functions
 */
function isMobile() {
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)) ) {
		return true;
	} else {
		return false;
	}
}

/*
 * Timer Funcitonality
 */
var ms = 0;
var state = 0;
var first = 0;
var refreshIntervalId;
var targettime = 0;

function showtime() {
	targettime = ms / 1000;
	minutefield = Math.floor(targettime / 60);
	secondfield = (targettime % 60 < 10 ? "0" : "") + targettime % 60;
	secondfieldForDisplay = targettime % 60;

	if (minutefield <= 9) {
		document.images.h.src = "images/numerals/c0.gif";
		document.images.i.src = "images/numerals/c" + minutefield + ".gif";
	} else {
		document.images.h.src = "images/numerals/c" + Math.floor(minutefield / 10) + ".gif";
		document.images.i.src = "images/numerals/c" + (minutefield % 10) + ".gif";
	}
	if (secondfield <= 9) {
		document.k.src = "images/numerals/c0.gif";
		document.images.l.src = "images/numerals/c" + secondfieldForDisplay + ".gif";
	}
	else {
		document.images.k.src = "images/numerals/c" + Math.floor(secondfieldForDisplay / 10) + ".gif";
		document.images.l.src = "images/numerals/c" + (secondfieldForDisplay % 10) + ".gif";
	}
}

function startstop() {
	if (state === 0) {
		state = 1;
		refreshIntervalId = setInterval(run, 1000);
	} else {
		state = 0;
		clearInterval(refreshIntervalId);
	}
}

function addmin() {
	ms = ms + 60000;
	showtime();
}

function addthirty() {
	ms = ms + 30000;
	showtime();
}

function timerreset() {
	state = 0;
	ms = 0;
	first = 0;
	showtime();
	clearInterval(refreshIntervalId);
}

function run() {
	if (state == 1)  {
		if (ms === 0){
			window.alert('Ding Ding Ding');
			clearInterval(refreshIntervalId);
			state = 0;
		} else {
			ms = ms - 1000;
			showtime();
			$('#timedisplay').text(ms/1000);
		}
	}
}

// 5 Crowns Scoring
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
	$('#player_3').on(isMobile() ? 'touchend' : 'click', function() {
		$('.player3').show();
		$('.player4').hide();
		$('.player5').hide();
		$('.player6').hide();
		$('.player7').hide();
		$('.player8').hide();
	});
	$('#player_4').on(isMobile() ? 'touchend' : 'click', function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').hide();
		$('.player6').hide();
		$('.player7').hide();
		$('.player8').hide();
	});
	$('#player_5').on(isMobile() ? 'touchend' : 'click', function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').show();
		$('.player6').hide();
		$('.player7').hide();
		$('.player8').hide();
	});
	$('#player_6').on(isMobile() ? 'touchend' : 'click', function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').show();
		$('.player6').show();
		$('.player7').hide();
		$('.player8').hide();
	});
	$('#player_7').on(isMobile() ? 'touchend' : 'click', function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').show();
		$('.player6').show();
		$('.player7').show();
		$('.player8').hide();
	});
	$('#player_8').on(isMobile() ? 'touchend' : 'click', function() {
		$('.player3').show();
		$('.player4').show();
		$('.player5').show();
		$('.player6').show();
		$('.player7').show();
		$('.player8').show();
	});
	$('#onetothree').on(isMobile() ? 'touchend' : 'click', function() {
		if($('#onetothree').prop('checked')) {
		    $("#rowone").show();
		    $("#rowtwo").show();
		} else {
		    $("#rowone").hide();
		    $("#rowtwo").hide();
		}
	});
	$('#jacktoking').on(isMobile() ? 'touchend' : 'click', function() {
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

// Scoreboard
$(document).ready(function() {
	$(".HomeMinus").on(isMobile() ? 'touchend' : 'click', function() {
		var current = parseInt($("#homescore").text());
		if (current === 0){
		}else{
			$("#homescore").text(current - 1);
		}
	});
	$(".HomePlus").on(isMobile() ? 'touchend' : 'click', function() {
		var current = parseInt($("#homescore").text());
		if (current == 999){
		}else{
			$("#homescore").text(current + 1);
		}
	});
	$(".AwayMinus").on(isMobile() ? 'touchend' : 'click', function() {
		var current = parseInt($("#awayscore").text());
		if (current === 0){
		}else{
			$("#awayscore").text(current - 1);
		}
	});
	$(".AwayPlus").on(isMobile() ? 'touchend' : 'click', function() {
		var current = parseInt($("#awayscore").text());
		if (current == 999){
		}else{
			$("#awayscore").text(current + 1);
		}
	});
	$("#resetscore").on(isMobile() ? 'touchend' : 'click', function() {
		$("#homescore").text(0);
		$("#awayscore").text(0);
	});
});


//Eucher Scoreboard
var WIN_POINTS = 10;
var PIE_SIZE = 360 / WIN_POINTS;
var HALF_WAY = WIN_POINTS / 2;

function reseteuchergame() {
	progressZero('.home-progress');
	$("#eucherhomescore").text(0);
	progressZero('.away-progress');
	$("#eucherawayscore").text(0);
}

function minusHomePoint() {
	var currentscore = parseInt($("#eucherhomescore").text());
	if (currentscore === 0){
	}else{
		progressDown('.home-progress', currentscore, 1);
		$("#eucherhomescore").text(currentscore - 1);
		eucher_data.homeTeamScore = currentscore - 1;
		storage.save(eucher_storage_name, eucher_data);
	}
}

function addHomePoint(num){
	var stop = false;
	for ( i=0;i<num;i++ ){
		if (!stop){
			if ( parseInt($("#eucherhomescore").text()) == ( WIN_POINTS - 1 ) ) {
				stop = true;
				$("#eucherhomeoverallscore").val(parseInt($("#eucherhomeoverallscore").val()) + 1);
				eucher_data.homeTeamWins = $("#eucherhomeoverallscore").val();
				storage.save(eucher_storage_name, eucher_data);
				reseteuchergame();
			} else {
				currScore = parseInt($("#eucherhomescore").text());
				progressUp('.home-progress', currScore, 1);
				$("#eucherhomescore").text(currScore + 1);
				eucher_data.homeTeamScore = currScore + 1;
				storage.save(eucher_storage_name, eucher_data);
			}
		}
	}
}

function minusAwayPoint() {
	var currentscore = parseInt($("#eucherawayscore").text());
	if (currentscore === 0){
	}else{
		progressDown('.away-progress', currentscore, 1);
		$("#eucherawayscore").text(currentscore - 1);
		eucher_data.awayTeamScore = currentscore - 1;
		storage.save(eucher_storage_name, eucher_data);
	}
}

function addAwayPoint(num){
	var stop = false;
	for ( i=0;i<num;i++ ){
		if (!stop){
			if ( parseInt($("#eucherawayscore").text()) == ( WIN_POINTS - 1 ) ) {
				stop = true;
				$("#eucherawayoverallscore").val(parseInt($("#eucherawayoverallscore").val()) + 1);
				eucher_data.awayTeamWins = $("#eucherawayoverallscore").val();
				storage.save(eucher_storage_name, eucher_data);
				reseteuchergame();
			}else{
				currScore = parseInt($("#eucherawayscore").text());
				progressUp('.away-progress', currScore, 1);
				$("#eucherawayscore").text(currScore + 1);
				eucher_data.awayTeamScore = currScore + 1;
				storage.save(eucher_storage_name, eucher_data);
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

function setData(data) {
	console.log(data);
	$("#homeeucherteamname").text(data.homeTeamName);
	$("#homeeuchername").val(data.homeTeamName);
	$("#awayeucherteamname").text(data.awayTeamName);
	$("#awayeuchername").val(data.awayTeamName);
	$("#eucherhomeoverallscore").val(data.homeTeamWins);
	$("#eucherawayoverallscore").val(data.awayTeamWins);
	$("#eucherhomescore").text(data.homeTeamScore);
	$("#eucherawayscore").text(data.awayTeamScore);
	progressUp('.home-progress', 0, data.homeTeamScore);
	progressUp('.away-progress', 0, data.awayTeamScore);
}

var eucher_storage_name = 'marklintern-com-eucher';

$(document).ready(function() {
	setData(eucher_data);

	$("#homeeuchername").on('keyup',function(){
		$("#homeeucherteamname").text($('#homeeuchername').val());
		eucher_data.homeTeamName = $('#homeeuchername').val();
		storage.save(eucher_storage_name, eucher_data);
		$(".scorecontainer").width($("#homeeucherteamname").width() + 20 + $("#awayeucherteamname").width() + 20 + 135);
		$(".scorecontainer").css({'margin':'0 auto'});
	});

	$("#awayeuchername").on('keyup',function(){
		$("#awayeucherteamname").text($('#awayeuchername').val());
		eucher_data.awayTeamName = $('#awayeuchername').val();
		storage.save(eucher_storage_name, eucher_data);
		var newWidth = $("#homeeucherteamname").width() + 20 + $("#awayeucherteamname").width() + 20 + 135;
		$(".scorecontainer").width( newWidth );
		$(".scorecontainer").css({'margin':'0 auto'});
	});

	$("#eucherresetscore").on(isMobile() ? 'touchend' : 'click', function() {
		reseteuchergame();
		$("#eucherhomeoverallscore").val(0);
		$("#eucherawayoverallscore").val(0);
		eucher_data.homeTeamWins = 0;
		eucher_data.awayTeamWins = 0;
		eucher_data.homeTeamScore = 0;
		eucher_data.awayTeamScore = 0;
		storage.save(eucher_storage_name, eucher_data);
	});

	$('.away-plus').on(isMobile() ? 'touchend' : 'click', function(){
		addAwayPoint(1);
	});

	$('.home-plus').on(isMobile() ? 'touchend' : 'click', function(){
		addHomePoint(1);
	});

	$('.away-minus').on(isMobile() ? 'touchend' : 'click', function(){
		minusAwayPoint();
	});

	$('.home-minus').on(isMobile() ? 'touchend' : 'click', function(){
		minusHomePoint();
	});

	$('.btn-expand').on(isMobile() ? 'touchend' : 'click', function(){
		$(this).find('.fa').toggleClass('fa-window-maximize');
		$(this).find('.fa').toggleClass('fa-window-minimize');
		$(this).parent().parent().toggleClass('modal-100');
	});
});
