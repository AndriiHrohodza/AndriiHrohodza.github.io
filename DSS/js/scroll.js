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

             	//Text animation
             	var ourScene = new ScrollMagic.Scene({
             		triggerElement: '#trigger',
             		reverse: true
             	})
             	.setClassToggle('#text-magic', 'fade-in')
             	/*.addIndicators()*/
             	.addTo(controller);

             //Img animation
             var ourScene2 = new ScrollMagic.Scene({
             	triggerElement: '#trigger',
             	reverse: true
             })
             .setClassToggle('#img-magic img', 'img-scale')
             /*.addIndicators()*/
             .addTo(controller);
           });