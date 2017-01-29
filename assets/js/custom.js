$(function($){
	
	"use strict";
		
	/*-----------------------------------------------------------
	   Masonary Initilize
	--------------------------------------------------------------*/
	
		var $container = $('.masonary-two-column-container');
		$container.imagesLoaded(function(){
			$container.masonry({
				columnWidth: 0,
				itemSelector : '.masonary-item-two-column'
			});
		});
	 
	/*-------------------------------------------
		Sticky Nav
	-------------------------------------------*/

	$("#sticker").sticky({topSpacing:0});

	/*-------------------------------------------
		Responsive Expandable Navigation
	-------------------------------------------*/
		
		$( ".has-sub-menu" ).append("<button class='plus'>+</button><button class='minus'>-</button>");
		$( ".has-sub-menu > .minus" ).hide();
		if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
			$( ".has-sub-menu > .sub-menu" ).hide();
		}
		
		$('.has-sub-menu > .plus').each(function() {
			$(this).on('click',function() {
				$(this).parent().children(".sub-menu").toggleClass( "res-nav" );
				$(this).parent().children(".sub-menu").slideToggle( "slow", function() {
					$(this).parent().children( ".plus" ).hide();
					$(this).parent().children( ".minus" ).show();
				});
			});
		});
		
		$('.has-sub-menu > .minus').each(function() {
			$(this).on('click',function() {
				$(this).parent().children(".sub-menu").toggleClass( "res-nav" );
				$(this).parent().children(".sub-menu").slideToggle( "slow", function() {
					$(this).parent().children( ".minus" ).hide();
					$(this).parent().children( ".plus" ).show();
				});
			});
		});
		
	/*-----------------------------------------------------------
		Instagram Slider Settings
	--------------------------------------------------------------*/
		
		$('.carousel-instagram').owlCarousel({
			nav: false,
			dots: false,
			autoPlay: true,
			margin: 0,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},

				481: {
					items: 2
				},
				768: {
					items: 3
				},
				1200: {
					items: 8
				}
			}
		});
		
	/*-----------------------------------------------------------
		Revolution Slider Settings
	--------------------------------------------------------------*/
	
	var revapi;	
	revapi = $("#rev_slider_1").revolution({
		sliderType:"standard",
		sliderLayout:"auto",
		fullScreenOffsetContainer:"#topbar",
		responsiveLevels:[4096,1366,992,768],
		delay:9000,
		navigation: {
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false,
				tmp:''
			},
			arrows:{enable:true},
			bullets:{
				enable:false
			}			
		},			
		gridwidth:[1140,930,720,300],
		gridheight:[504,504,500,400]		
	});
	
	var revapi;	
	revapi = $("#rev_slider_2").revolution({
		sliderType:"standard",
		sliderLayout:"auto",
		fullScreenOffsetContainer:"#topbar",
		responsiveLevels:[4096,1366,992,768],
		delay:9000,
		navigation: {
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false,
				tmp:''
			},
			arrows:{enable:true},
			bullets:{
				enable:false
			}			
		},			
		gridwidth:[1140,930,720,300],
		gridheight:[504,504,500,400]		
	});
	
}(jQuery));