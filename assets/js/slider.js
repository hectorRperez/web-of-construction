const swiper = new Swiper('.home-slider', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	grabCursor: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
