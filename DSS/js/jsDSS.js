/*const flightPath = {
	curviness: 1.25,
	autoRotate: true,
	values: [
	 {x:window.innerWidth, y: 0},
	 {x:0, y: 0},
	 {x:window.innerWidth, y: 0}
	]
};

const tween = new TimelineLite();

tween.add(
	TweenLite.to('.features-content', 1, {
		bezier: flightPath,
		ease: Power1.easeInOut,
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
.addTo(controller);*/

$(document).ready(function(){



// build tween
var tween = TweenMax.staggerFromTo(".features-content", 2, {left: 900}, {left: -900, easeInOut: Back.easeOut}, 0.15);

// pin 
var pinFeatureScene = new ScrollMagic.Scene({
	triggerElement: '#features-pin',
	triggerHook: 0.3,
	duration: '100%'
})
.setPin('#features-pin')
.setTween(tween)
.addIndicators({name: "pin"})
.addTo(controller);

var controller = new ScrollMagic.Controller();
	// build scene
	var scene = new ScrollMagic.Scene({
		triggerElement: "#scroll-trigger",
		duration: 700,
		triggerHook: 0.7
	})
	.setTween(tween)
	.addTo(controller);
});


	


