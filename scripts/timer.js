c1 = new Image(); c1.src = "numerals/c1.gif";
c2 = new Image(); c2.src = "numerals/c2.gif";
c3 = new Image(); c3.src = "numerals/c3.gif";
c4 = new Image(); c4.src = "numerals/c4.gif";
c5 = new Image(); c5.src = "numerals/c5.gif";
c6 = new Image(); c6.src = "numerals/c6.gif";
c7 = new Image(); c7.src = "numerals/c7.gif";
c8 = new Image(); c8.src = "numerals/c8.gif";
c9 = new Image(); c9.src = "numerals/c9.gif";
c0 = new Image(); c0.src = "numerals/c0.gif";
cb = new Image(); cb.src = "numerals/cb.gif";
onePix = new Image(); onePix.src = "numerals/clear.gif";

var ms = 0;
var state = 0;
var first = 0;
var refreshIntervalId;
var targettime = 0;

function showtime() {
	targettime = ms/1000;
	minutefield = Math.floor(targettime/60);
	secondfield = (targettime%60 < 10 ? "0": "") + targettime %60;
	secondfieldForDisplay = targettime %60; 

	if (minutefield <= 9) {
	document.images.h.src = c0.src;
	document.images.i.src = eval("c"+minutefield+".src");
	}
	else {
	document.images.h.src = eval("c"+Math.floor(minutefield/10)+".src");
	document.images.i.src = eval("c"+(minutefield%10)+".src");
	}
	if (secondfield <= 9) {
	document.k.src = c0.src;
	document.images.l.src = eval("c"+secondfieldForDisplay+".src");
	}
	else {
	document.images.k.src = eval("c"+Math.floor(secondfieldForDisplay/10)+".src");
	document.images.l.src = eval("c"+(secondfieldForDisplay%10)+".src");
	}
}

function startstop() {
if (state == 0) {
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
		if (ms == 0){
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