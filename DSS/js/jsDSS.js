const flightPath = {
	curviness: 1.25,
	autoRotate: true,
	values: [
	 {x: 100, y: 0},
	 {x: window.innerWidth, y: 0},
	]
};

const tween = new TimelineLite();

tween.add(
	TweenLite.to('.animation', 1, {
		bezier: flightPath,
		ease: Power1.easeInOut
	})
	);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
	triggerElement: '.about-company',
	duration: 1000,
	/*triggerHook: 0*/

})
.setTween(tween)
.addIndicators()
.setPin('.about-company')
.addTo(controller);