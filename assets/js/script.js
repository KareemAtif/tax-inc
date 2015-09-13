/*
Version: 1.0
Date created: 27th June 2015
Author: Kareem Atif
Author URI: http://kareematif.me
Email: Kareematif@gmail.com | Twitter: @kareematif
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/
(function($){
	$(document).ready(function() {
		// Show Menu
		$('#show-menu').click(function(){
  		$('#menu-tab ul').fadeIn('fast').animate({'top':'0px'},300);
		});
		// Navigation Content
		$( '#menu-tab' ).tabs({
				collapsible:true,active:false,
				show: {
					effect:'blind',duration:300,
	 			},
				hide: {
					effect: 'blind',
				}
		});
		/*$('#menu-tab a').click(function(){
			$('.landing').toggle();
		});*/
		// Salary Slider
		$( '#slider' ).slider({
				value:1125,min:0,max:250000,range:'min',step:50,animate:true,
				slide : function( event, ui ) {
					$( '.salary' ).val( ui.value );
				},
				create: function( event, ui ) {
					calc( ui.value );
				},
				change: function( event, ui ) {
					calc( ui.value );
				}
	  // Plus - minus on slider
		}).sliderAccess({
		 touchonly : false,
	 	});
		$('.salary').change(function () {
    	var value = this.value.substring(1);
    	console.log(value);
    	$('#slider').slider('value', parseInt(value));
		});
		$( '.salary' ).val( $( '#slider' ).slider( 'value' ) );
	 	// Using Touch punch to drag slider
	 	$('#slider').draggable();
		// Edit Salary
		$('.edit i').click(function(){
			$('.salary').focus().prop('readonly', false);
		});
		// Run Calculations to get salary tax
		$('.result, .no-result').hide();
		function calc(){
			var salary = (document.getElementById('salary').value) * 12,
					deduction = 7000,
					tax = 0;
			/*		$('.result, .no-result').on('slider', function(){*/
			if (salary < 6500){
				$('.no-result').show().animate({'margin-top':'0'},300);
				$('.result').hide().animate({'margin-top':'-4em'});
				$('.sectors .wrap').hide().animate({'margin-top': '-30em'}, 500);

			}
			else if ( salary >= 6500 ){
				$('.result').show().animate({'margin-top': '0'},300);
				$('.sectors .wrap').show().animate({'margin-top': '0'}, 500);
				$('.no-result').hide().animate({'margin-top':'-4em'});
				salary = salary - deduction;
				if (salary <= 23500 ){tax = salary * 0.10;}
				else{tax = 23500 * 0.10;salary = salary - 23500;
					if ( salary <= 15000) {tax = tax + (salary * 0.15);}
					else{tax = tax + (15000 * 0.15);salary = salary - 15000;
							if ( salary <= 155000){tax = tax + (salary * 0.20);}
							else{tax = tax + (155000 * 0.20);salary = salary - 155000;tax = tax + (salary * 0.225);}
					}
				}
				tax =  Math.floor(tax/12); // Get monthly tax round
				document.getElementById('total').innerHTML = tax;
			}
			else{
			}
			// Define sector results
			document.getElementById('public-service').innerHTML = Math.floor((0.3712) * tax);
			document.getElementById('order-safety').innerHTML = Math.floor((0.0515) * tax);
			document.getElementById('economy').innerHTML = Math.floor((0.0483) * tax);
			document.getElementById('enviroment').innerHTML = Math.floor((0.0025) * tax);
			document.getElementById('housing').innerHTML = Math.floor((0.0292) * tax);
			document.getElementById('health').innerHTML = Math.floor((0.0519) * tax);
			document.getElementById('youth-culture').innerHTML = Math.floor((0.0354) * tax);
			document.getElementById('education').innerHTML = Math.floor((0.1148) * tax);
			document.getElementById('soc-sec').innerHTML = Math.floor((0.2448) * tax);
			document.getElementById('misc').innerHTML = Math.floor((0.05) * tax);


/*}, false);*/
		}
		// Show sectors information in overlay
		var overlay = '';

			for (var key in sector_data){
				overlay += '<div class="overlay-wrap ' + sector_data.id +
				'"><div class="inside"><div class="article"><div class="header"><span class="icon"></span><h3>' +
				sector_data.title + '</h3></div></div></div></div>' ;
			}


		// Packery for Result
		/*var $container = $('#sectors');
		$container.packery({
			 itemSelector:'figure',gutter:20,isOriginLeft: false,
		});*/

		// Show/close sectors overlay
		$('.show-overlay').click(function(){
  		$('.overlay').animate({'left':'0'},300);
      $('.pane-right').before('<div class="disabled"></div>').css('pointer-events', 'none');
    });
		function close(){
			$('.overlay').animate({'left':'-101%'},300);
			$('.disabled').remove();
			$('.pane-right').removeAttr('style');
		}
		$('.close').click(close);
		$(document).keydown(function(e){
			if (e.keyCode == 27) close(e);
		});
		// Icon and Overlay coloring
		var clr = ['#cebd7f','#38dd99','#ff6d76','#9dd2eb'];
		var i = 0;
    $('.sector .icon,.overlay .overlay-wrap').each(function(){
    	$(this).css('background-color', clr[i]);
			i = (i + 1 ) % clr.length;
		});
	});
})(jQuery);
