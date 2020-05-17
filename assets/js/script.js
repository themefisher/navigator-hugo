	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	$(window).on("load", function () {
		$('#preloader').fadeOut('slow', function () {
			$(this).remove();
		});
	});

	(function ($) {
		"use strict";

		/* ========================================================================= */
		/*	Portfolio Filtering Hook
		/* =========================================================================  */
		$('.play-icon i').click(function () {
			var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
			$(this).replaceWith(video);
		});

		/* ========================================================================= */
		/*	Portfolio Filtering Hook
		/* =========================================================================  */
		setTimeout(function () {
			var filterizd = $('.filtr-container').filterizr({});
			//Active changer
			$('.filtr-control').on('click', function () {
				$('.filtr-control').removeClass("active");
				$(this).addClass("active");
			});
		}, 500);

		/* ========================================================================= */
		/*	Testimonial Carousel
		/* =========================================================================  */

		//Init the slider
		$('.testimonial-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});


		/* ========================================================================= */
		/*	Clients Slider Carousel
		/* =========================================================================  */

		//Init the slider
		$('.clients-logo-slider').slick({
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 5,
			slidesToScroll: 1,
		});




		/* ========================================================================= */
		/*	Company Slider Carousel
		/* =========================================================================  */
		$('.company-gallery').slick({
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 5,
			slidesToScroll: 1,
		});


		/* ========================================================================= */
		/*	Awars Counter Js
		/* =========================================================================  */
		$('.counter').each(function () {
			var $this = $(this),
				countTo = $this.attr('data-count');

			$({
				countNum: $this.text()
			}).animate({
					countNum: countTo
				},

				{
					duration: 1500,
					easing: 'linear',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
						//alert('finished');
					}

				});
		});


	})(jQuery);



	window.marker = null;

	function initialize() {
		var map;

		var latitude = $('#map').data('lat');
		var longitude = $('#map').data('long');
		var nottingham = new google.maps.LatLng(latitude, longitude);

		var style = [{
			"stylers": [{
				"hue": "#ff61a6"
			}, {
				"visibility": "on"
			}, {
				"invert_lightness": true
			}, {
				"saturation": 40
			}, {
				"lightness": 10
			}]
		}];

		var mapOptions = {
			// SET THE CENTER
			center: nottingham,

			// SET THE MAP STYLE & ZOOM LEVEL
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			zoom: 9,

			// SET THE BACKGROUND COLOUR
			backgroundColor: "#000",

			// REMOVE ALL THE CONTROLS EXCEPT ZOOM
			zoom: 17,
			panControl: false,
			zoomControl: true,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			overviewMapControl: false,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE
			}

		}
		map = new google.maps.Map(document.getElementById('map'), mapOptions);

		// SET THE MAP TYPE
		var mapType = new google.maps.StyledMapType(style, {
			name: "Grayscale"
		});
		map.mapTypes.set('grey', mapType);
		map.setMapTypeId('grey');

		//CREATE A CUSTOM PIN ICON
		var marker_image = $('#map').data('marker');
		var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(25, 33));

		marker = new google.maps.Marker({
			position: nottingham,
			map: map,
			icon: pinIcon,
			title: 'navigator'
		});
	}

	var map = $('#map');
	if (map.length != 0) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}