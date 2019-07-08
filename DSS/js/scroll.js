/*Primary-slow-down Scroll*/
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

             	//Description-text animation
             	var ourScene = new ScrollMagic.Scene({
             		triggerElement: '#description-trigger',
             		reverse: true
             	})
             	.setClassToggle('#text-magic', 'text-animation')
             	/*.addIndicators()*/
             	.addTo(controller);

             //Description-img animation
             var ourScene2 = new ScrollMagic.Scene({
             	triggerElement: '#description-trigger',
             	reverse: true
             })
             .setClassToggle('#img-magic img', 'img-scale')
             /*.addIndicators()*/
             .addTo(controller);

             /*Scroll primary-bg*/
             var ourScene2 = new ScrollMagic.Scene({
                  triggerElement: '#description-trigger',
                  reverse: true,
                  triggerHook: 0.4
             })
             .setClassToggle('#wrap-trigger', 'wrap-bg')
             /*.addIndicators()*/
             .addTo(controller);

             /*Primary-btn none*/
             var ourScene2 = new ScrollMagic.Scene({
                  triggerElement: '#description-trigger',
                  reverse: true,
                  triggerHook: 0.4
             })
             .setClassToggle('#primary-button_trigger', 'button-none')
             .addIndicators()
             .addTo(controller);

             /*Primary-scroll-down none*/
             var ourScene2 = new ScrollMagic.Scene({
                  triggerElement: '#description-trigger',
                  reverse: true,
                  triggerHook: 0.4
             })
             .setClassToggle('#scroll-down-trigger', 'scroll-down-none')
             .addIndicators()
             .addTo(controller);

       });


