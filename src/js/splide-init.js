import '@splidejs/splide/css';
import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

function createSplide(selector, speed = 1) {
	const splide = new Splide(selector, {
		type: 'loop',
		drag: false,
		direction: 'ttb',
        perPage: 3,
		height: '100%',
		pagination: false,
		arrows: false,
		autoScroll: {
			speed,
			autoStart: true,
			pauseOnHover: true,
			rewind: false,
		},
	});

	splide.mount({ AutoScroll });
}

createSplide('#vertical-swiper-1', 0.6);
createSplide('#vertical-swiper-2', -0.6);
createSplide('#vertical-swiper-3', 0.6);
createSplide('#vertical-swiper-4', -0.6);
