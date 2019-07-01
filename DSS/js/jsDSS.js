const flightPath = {
	curviness: 1.25,
	autoRotate: true,
	values: [
	 {x:950, y: 0},
	 {x:1290, y: 0}
	]
};

const tween = new TimelineLite();

tween.add(
	TweenLite.to('.features-content', 1, {
		bezier: flightPath,
		ease: Power1.easeInOut
	})
	);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
	triggerElement: '.features',
	duration: 1000,
	triggerHook: 0.2

})
.setTween(tween)
.addIndicators()
.setPin('.features')
.addTo(controller);