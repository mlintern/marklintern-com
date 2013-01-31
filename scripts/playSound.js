/**
 * @author Alexander Manzyuk <admsev@gmail.com>
 * Copyright (c) 2012 Alexander Manzyuk - released under MIT License
 * https://github.com/admsev/jquery-play-sound
 * Usage: $.playSound('http://example.org/sound.mp3');
**/

(function($){
  
  $.extend({
    playSound: function(){
      $('embed').remove();
      return $("<embed src='"+arguments[0]+"' hidden='true' autostart='true' loop='false' class='playSound'>").appendTo('body');
    }
  });

})(jQuery);


$().ready(function() {
	function gunShot(){
	        $("body").append("<embed src='sounds/Gun-Shot.mp3' autostart='true' loop='false' width='2' height='0'></embed>");
	}
});

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sounds/Gun-Shot.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load()
    $.get();
    audioElement.addEventListener("load", function() {
    audioElement.play();
    }, true);

    $('.play').click(function() {
    audioElement.play();
    });

    $('.pause').click(function() {
    audioElement.pause();
    });
});