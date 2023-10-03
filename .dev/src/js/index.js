$(".types__slider").slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	prevArrow: $(".prev"),
	nextArrow: $(".next"),
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
})
