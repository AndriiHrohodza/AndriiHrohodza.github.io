/*var container = document.getElementById('cards');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;
var seeds = document.getElementsByClassName('seeds')[0];

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;
  
  seeds.style.top = 50 - scrollPercent*window.innerWidth*0.00018 + 'px';
  
});
*/



$(function () { // wait for document ready
		var flightpath = {
			entry : {
				curviness: 1.25,
				autoRotate: false,
				values: [
						{x: 0,	y: 20},
						{x: 0,	y: 160}
					]
			},
			leave : {
				curviness: 1.25,
				autoRotate: false,
				values: [
						{x: 0,	y: 220},
						{x: 0,	y: 330}
					]
			}
		};
		// init controller
		var controller = new ScrollMagic.Controller();

		// create tween
		var tween = new TimelineMax()
			.add(TweenMax.to($("#seeds"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#seeds"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#goods", duration: 750})
						/*.setPin("#target")*/
						.setTween(tween)
						.addIndicators() // add indicators (requires plugin)
						.addTo(controller);
	})

/*seed1*/
$(function () { // wait for document ready
		var flightpath = {
			entry : {
				curviness: 1.25,
				autoRotate: false,
				values: [
						{x: 0,	y: 20},
						{x: -60,	y: 160}
					]
			},
			leave : {
				curviness: 1.25,
				autoRotate: false,
				values: [
						{x: -100,	y: 220},
						{x: -510,	y: 330}
					]
			}
		};
		// init controller
		var controller = new ScrollMagic.Controller();

		// create tween
		var tween = new TimelineMax()
			.add(TweenMax.to($("#seeds1"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#seeds1"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#goods", duration: 750})
						/*.setPin("#target")*/
						.setTween(tween)
						.addIndicators() // add indicators (requires plugin)
						.addTo(controller);
	})
