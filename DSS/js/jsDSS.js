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

/*Animation Scroll*/
$(document).ready(function(){
var controller = new ScrollMagic.Controller();
// pin 
var pinFeatureScene = new ScrollMagic.Scene({
	triggerElement: '#features-pin',
	triggerHook: 0.25,
	duration: '150%'
})
.setPin('#features-pin')
.setTween(TweenMax.staggerFromTo(".features-content", 2, {left: '50vw'}, {left: '-80vw', easeInOut: Back.easeOut}, 0.15))
/*.addIndicators({name: "pin"})*/
.addTo(controller);
});

/**/


	


