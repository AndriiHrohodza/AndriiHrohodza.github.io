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


var controller = new ScrollMagic.Controller();

// build tween
	var tween = TweenMax.staggerFromTo(".features-content", 2, {left: 900}, {left: -window.innerWidth, ease: Back.easeOut}, 0.15);

	// build scene
	var scene = new ScrollMagic.Scene({
		triggerElement: "#scroll-trigger",
		duration: 1200,
		triggerHook: 0.7

	})
					.setTween(tween)
					/*.addIndicators({name: "staggering"}) // add indicators (requires plugin)*/
					/*.setPin('.features')*/
					.addTo(controller);

/*Scroll*/
/*function slowScroll(id) { 
               var offset = 0;
               $('html, body').animate({ 
                    scrollTop: $(id).offset().top - offset 
               }, 1000);
               return false; 
             }*/
             
             /*Slowdown Scroll*/
             $(document).ready(function(){
             	$("a").on('click', function(event) {
             		if (this.hash !== "") {
             			event.preventDefault();
             			var hash = this.hash;
             			$('html, body').animate({
             				scrollTop: $(hash).offset().top
             			}, 800, function(){
             				window.location.hash = hash;
             			});
             		} 
             	});

             	/*Animation*/
             	var controller = new ScrollMagic.Controller();
             	//text animation
             	var ourScene = new ScrollMagic.Scene({
             		triggerElement: '#trigger',
             		reverse: true
             	})
             	.setClassToggle('#scrollmagic', 'fade-in')
             	/*.addIndicators()*/
             	.addTo(controller);

             //img animation
             var ourScene2 = new ScrollMagic.Scene({
             	triggerElement: '#trigger',
             	reverse: true
             })
             .setClassToggle('#img-magic', 'img-scale')
             /*.addIndicators()*/
             .addTo(controller);

             //slider animation


           });

             
     