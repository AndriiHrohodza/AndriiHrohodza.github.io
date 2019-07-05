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
             	.setClassToggle('#text-magic', 'text-animation')
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

             /*Scroll bg*/
             var ourScene2 = new ScrollMagic.Scene({
                  triggerElement: '#trigger',
                  reverse: true,
                  triggerHook: 0.4
             })
             .setClassToggle('#wrap-trigger', 'wrap-bg')
             .addIndicators()
             .addTo(controller);

             /*Buttom none*/
             var ourScene2 = new ScrollMagic.Scene({
                  triggerElement: '#trigger',
                  reverse: true,
                  triggerHook: 0.4
             })
             .setClassToggle('#button-trigger', 'button-none')
             .addIndicators()
             .addTo(controller);

             /*Scroll-down none*/
             var ourScene2 = new ScrollMagic.Scene({
                  triggerElement: '#trigger',
                  reverse: true,
                  triggerHook: 0.4
             })
             .setClassToggle('#scroll-down-trigger', 'scroll-down-none')
             .addIndicators()
             .addTo(controller);

       });


