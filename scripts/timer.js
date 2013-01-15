//if (top.location != document.location) top.location = document.location;
var isAlarm = 0;
var doWarn;

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

var timer;
function countdown(targettime,label, reset){
	if (reset == true)clearInterval(timer);	
	var
		//notifier = document.getElementById("notifier"),
		countdown = document.getElementById("countdown")
		timer = setInterval( function () 
		{
			//countdown.innerHTML = Math.floor(targettime/60) + ":" + (targettime%60 < 10 ? "0": "") + targettime %60;
			
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
/*				else if (secondfield == 0) {
				document.k.src = c0.src;
				document.images.l.src = c0.src;
				}*/
				else {
				document.images.k.src = eval("c"+Math.floor(secondfieldForDisplay/10)+".src");
				document.images.l.src = eval("c"+(secondfieldForDisplay%10)+".src");
				}
			
			//if (label) { notifier.innerHTML = label; }
			var timerLabel = label;
			
			if (--targettime < 0 ) 
			{ 
				clearInterval(timer); 
				isAlarm = 1;
				window.alert("Done"); 
			}
			else
			{
				isAlarm = 0;
			}
			
		},1000);
	
}

function doMinuteTimer()
{
	if ($('#minutesSelect').val()!=="OFF")
	{
		countdown($('#minutesSelect').val(),true);
	}
	else
	{
		clearInterval(timer);
		document.images.h.src = c0.src;
		document.images.i.src = c0.src;
		document.images.k.src = c0.src;
		document.images.l.src = c0.src;
	}
}
function removeUnderline(linknumber)
{
var linkArray = [];
var i;
linkArray[0] = "lsmall";
linkArray[1] = "lmedium";
linkArray[2] = "llarge";
linkArray[3] = "lxlarge";

	for (i = 0; i <4; i++)
	{
		if(i==linknumber)
		{
			document.getElementById(linkArray[i]).style.textDecoration = "none";
			document.getElementById(linkArray[i]).style.fontWeight = "normal";
		}
		else
		{
			document.getElementById(linkArray[i]).style.textDecoration = "underline";
			document.getElementById(linkArray[i]).style.fontWeight = "bold";
		}
	}
}
function removeUnderline2(linknumber2)
{
var linkArray2 = [];
var j;
linkArray2[4] = "lblue";
linkArray2[5] = "lblack";
linkArray2[6] = "lsilver";
linkArray2[7] = "lgreen";
linkArray2[8] = "lorange";

	for (j = 4; j <9; j++)
	{
		if(j==linknumber2)
		{
			document.getElementById(linkArray2[j]).style.textDecoration = "none";
			document.getElementById(linkArray2[j]).style.fontWeight = "normal";
		}
		else
		{
			document.getElementById(linkArray2[j]).style.textDecoration = "underline";
			document.getElementById(linkArray2[j]).style.fontWeight = "bold";
		}
	}
}
function changeImageSize(widthA,heightA,widthB,heightB)
{
//numbers
document.getElementById("h").style.width=widthA;
document.getElementById("h").style.height=heightA; 

document.getElementById("i").style.width=widthA;
document.getElementById("i").style.height=heightA; 

document.getElementById("k").style.width=widthA;
document.getElementById("k").style.height=heightA; 

document.getElementById("l").style.width=widthA;
document.getElementById("l").style.height=heightA; 
//colon
document.getElementById("j").style.width=widthB;
document.getElementById("j").style.height=heightB; 
}
function changeBackground(color)
{
	document.bgColor=color;
	document.getElementById('countdownDisp').style.backgroundColor=color;
}

function addEvent(obj, evType, fn){ 
	if (obj.addEventListener){ 
		obj.addEventListener(evType, fn, false); 
		return true; 
	} else if (obj.attachEvent){ 
		var r = obj.attachEvent('on'+evType, fn); 
		return r; 
	} else { 
		return false; 
	} 
}

function KeepOnPage(e) 
{

	    if(!e)
	        e = window.event;
	        
	    if(!e)
	        return;
	
		if( (!$('#minutesSelect').val())||($('#minutesSelect').val())=="OFF"||isAlarm==1 )
		{
			doWarn = 0;
		}
		else
		{
			doWarn = 1;
		}
	        
	     // cancelled, so cancel the event 
		 if(doWarn==1)
		 {
	     	e.cancelBubble = true; 
	     	e.returnValue = 'OnlineClock says:\n\nYou have an timer set for: '+document.forms[0].minutesSelect.options[document.forms[0].minutesSelect.selectedIndex].text+'\n\nNavigating away from this page will delete your alarm.'; 
		 }
		   if(e.stopPropagation) 
	       e.stopPropagation();
}

addEvent(window, 'beforeunload', KeepOnPage);