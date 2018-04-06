$(document).ready(function () {

	// Slick slider is here
	$('.directions-blocks').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}
		]
	});

	// Rules for navigation is here
	$('.top-nav_btn').on('click', function (event) {
		event.preventDefault();
		$('.top-nav_menu').slideToggle("slow");
	});

	$('.left-sidebar_btn').on('click', function (event) {
		event.preventDefault();
		$('.left-sidebar_menu').slideToggle("slow");
	});
})
