
/*Features-scroll */
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


	


