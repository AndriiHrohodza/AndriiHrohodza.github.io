 /*footer animation*/
 var controller1 = new ScrollMagic.Controller();
                  var ourScene7 = new ScrollMagic.Scene({
                       triggerElement: '#c-trigger',
                       reverse: true,
                       triggerHook: 0.75
                  })
                  .setClassToggle('#contacts-text-trigger', 'text-animation')
                  .addIndicators({name: "footer"})
                  .addTo(controller1);