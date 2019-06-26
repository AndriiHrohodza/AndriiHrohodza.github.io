const carouselSlide = document.querySelector('.js-features-slider');
const carouselImages = document.querySelectorAll('.features-slider__item');

const prevBtn = document.querySelector('#left-arrow');
const nextBtn = document.querySelector('#right-arrow');

let counter = 0;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
prevBtn.addEventListener('click', () => {
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', () => {
	if (carouselImages[counter].id === 'lastClone') {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - 2;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if (carouselImages[counter].id === 'firstClone') {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - counter;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
})

/*const previousBtn = document.querySelector('#left-arrow')
const nextBtn = document.querySelector('#right-arrow')

const slides = document.querySelector('.js-features-slider')
const slidesNumber = slides.children.length

// Numbered from 0
let currentSlide = 0

const updateSlider = () => {
  const slideWidth = slides.clientWidth
  const offset = -currentSlide * slideWidth
  
  slides.setAttribute('style', `transform: translate(${offset}px)`)
}

previousBtn.addEventListener('click', () => {
  --currentSlide
  if (currentSlide < 0) currentSlide = slidesNumber - 1
  
  updateSlider()
})

nextBtn.addEventListener('click', () => {
  ++currentSlide
  if (currentSlide >= slidesNumber) currentSlide = 0
  
  updateSlider()
});*/




/*var sliderImages = document.querySelectorAll('.js-features-slider'), 
arrowLeft = document.querySelector('#left-arrow'),
arrowRight = document.querySelector('#right-arrow'),
current = 0;

function reset() {
	for (let i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = 'none';
	}
} 

function init() {
	reset();
	sliderImage[0].style.display = 'block';
}

function sliderLeft() {
	reset();
	sliderImages[current - 1].style.display = 'block';
	current--;
}

arrowLeft.addEventListener('click', function() {
	if (current === 0) {
		current = sliderImages.length;
	}
	slideLeft();
});

function slideRight() {
	reset();
	sliderImages[current + 1].style.display = 'block';
	current++;
}

arrowRight.addEventListener('click', function() {
	if (current === sliderImages.length - 1) {
		current = -1;
	}
	slideRight();
});

init();*/