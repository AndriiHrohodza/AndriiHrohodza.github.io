/*Features slider*/

const carouselSlide = document.querySelector('.js-features-slider');
const carouselImages = document.querySelectorAll('.features-slider__item');

const prevBtn = document.querySelector('#left-arrow');
const nextBtn = document.querySelector('#right-arrow');

let counter = 0;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
	if (counter >= carouselImages.length - 1) return;
	carouselSlide.style.transition = "transform 0.6s ease-in-out";
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
prevBtn.addEventListener('click', () => {
	if (counter <= 0) return;
	carouselSlide.style.transition = "transform 0.6s ease-in-out";
	counter--;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', () => {
	if (carouselImages[counter].id === 'lastClone') {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - 1;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if (carouselImages[counter].id === 'firstClone') {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - carouselImages.length;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
})

