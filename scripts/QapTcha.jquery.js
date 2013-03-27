/************************************************************************
*************************************************************************
@Name :       	QapTcha - jQuery Plugin
@Revison :    	4.2
@Date : 		06/09/2012  - dd/mm/YYYY
@Author:     	 ALPIXEL Agency - (www.myjqueryplugins.com - www.alpixel.fr)
@License :		 Open Source - MIT License : http://www.opensource.org/licenses/mit-license.php

**************************************************************************
*************************************************************************/
jQuery.QapTcha = {
	build : function(options)
	{
        var defaults = {
			txtLock : 'Locked : form can\'t be submited',
			txtUnlock : 'Unlocked : form can be submited',
			disabledSubmit : true,
			autoRevert : true,
			PHPfile : 'php/Qaptcha.jquery.php',
			autoSubmit : false
        };

		if(this.length>0)
		return jQuery(this).each(function(i) {
			/** Vars **/
			var
				opts = $.extend(defaults, options),
				$this = $(this),
				form = $('form').has($this),
				Clr = jQuery('<div>',{'class':'clr'}),
				bgSlider = jQuery('<div>',{'class':'bgSlider'}),
				Slider = jQuery('<div>',{'class':'Slider'}),
				TxtStatus = jQuery('<div>',{'class':' TxtStatus dropError',text:opts.txtLock}),
				inputQapTcha = jQuery('<input>',{name:generatePass(32),value:generatePass(7),type:'hidden'});

			/** Construct DOM **/
			bgSlider.appendTo($this);
			Clr.insertAfter(bgSlider);
			TxtStatus.insertAfter(Clr);
			inputQapTcha.appendTo($this);
			Slider.appendTo(bgSlider);
			$this.show();

			Slider.draggable({
				revert: function(){
					if(opts.autoRevert)
					{
						if(parseInt(Slider.css("left")) > (bgSlider.width()-Slider.width()-2)) return false;
						else return true;
					}
				},
				containment: bgSlider,
				axis:'x',
				stop: function(event,ui){
					if(ui.position.left > (bgSlider.width()-Slider.width()-2))
						{
						Slider.draggable('disable').css('cursor','default');
						inputQapTcha.val('');
						TxtStatus.text(opts.txtUnlock).addClass('dropSuccess').removeClass('dropError');
						
						$('<div>').attr({
						    id: 'wtp-submit',
						    style: 'margin:0 auto;width:110px;'
						})
						.append(
						$('<input>').attr({
						    name: 'Submit',
						    type: 'submit',
						    value: 'Share your Story'
						})).appendTo('form');
												
						$('.QapTcha').hide();
						}
				}
			});

			function generatePass(nb) {
		        var chars = 'azertyupqsdfghjkmwxcvbn23456789AZERTYUPQSDFGHJKMWXCVBN_-#@';
		        var pass = '';
		        for(i=0;i<nb;i++){
		            var wpos = Math.round(Math.random()*chars.length);
		            pass += chars.substring(wpos,wpos+1);
		        }
		        return pass;
		    }

		});
	}
}; jQuery.fn.QapTcha = jQuery.QapTcha.build;

$(document).ready(function(){
    $('.QapTcha').QapTcha();
  });