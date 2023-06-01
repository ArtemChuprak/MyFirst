let swiper;
let init = false;

function swiperCard() {
	if (window.innerWidth <= 760) {
		if (!init) {
			init = true;

			swiper = new Swiper(".swiper", {
				loop: true,
				pagination: {
					el: ".swiper-pagination",
				},
				// slidesPerView: 1.2,
				// spaceBetween: 5,

				slidesPerView: 1.2,
				spaceBetween: 16,

			});
		}
	} else if (init) {
		if (typeof swiper !== "undefined") {
			swiper.destroy();
		}

		init = false;
	}
}



swiperCard();
window.addEventListener("resize", swiperCard);



