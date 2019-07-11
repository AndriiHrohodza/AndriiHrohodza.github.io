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
      let controller = new ScrollMagic.Controller();

      /*Description Animation*/
      //Description-text animation
      let descriptionTextScene = new ScrollMagic.Scene({
      	triggerElement: '#description-trigger',
      	reverse: true
      })
      .setClassToggle('#text-magic', 'text-animation')
      /*.addIndicators({name: "des"})*/
      .addTo(controller);

      // Description-text animation FadeInUp
      let descriptionTextFadeInScene = new ScrollMagic.Scene({
            triggerElement: '#description-trigger',
            reverse: true
      })
      .setClassToggle('#text-magic_fade', 'fadeInUp')
      /*.addIndicators({name: "des"})*/
      .addTo(controller);

      //Description-img animation
      let descriptionImgScene = new ScrollMagic.Scene({
            triggerElement: '#description-trigger',
            reverse: true
      })
      .setClassToggle('#img-magic img', 'img-scale')
      /*.addIndicators()*/
      .addTo(controller);

      /*Digital-sourcing*/
      let digitalSourcingScene = new ScrollMagic.Scene({
           triggerElement: '#digital-sourcing-trigger',
           reverse: true,
           triggerHook: 0.7
      })
      .setClassToggle('#text-digital-magic', 'text-digital-sourcing-animation')
      /*.addIndicators({name: "contacts"})*/
      .addTo(controller);

      /*Contacts animation*/
      // Contacts-text animation
      let contactsTextScene = new ScrollMagic.Scene({
           triggerElement: '#contacts-trigger',
           reverse: true,
           triggerHook: 0.7
      })
      .setClassToggle('#contacts-text-magic', 'text-contacts-animation')
      /*.addIndicators({name: "contacts"})*/
      .addTo(controller);

      // Contacts-text_fade animation FadeInUp
      let contactsTextFadeScene = new ScrollMagic.Scene({
            triggerElement: '#contacts-trigger',
            reverse: true
      })
      .setClassToggle('#contacts-text_fade', 'fadeInUp')
      /*.addIndicators({name: "des"})*/
      .addTo(controller);

      // Contacts-button animation FadeInUp
      let contactsButtonScene = new ScrollMagic.Scene({
            triggerElement: '#contacts-trigger',
            reverse: true
      })
      .setClassToggle('#contacts-button_trigger', 'fadeInUp')
      /*.addIndicators({name: "des"})*/
      .addTo(controller);
                  
             

      /*Scroll-Changing Primary bg opacity zero*/
      let scrollChangingPrimaryBgScene = new ScrollMagic.Scene({
           triggerElement: '#description-trigger',
           reverse: true,
           triggerHook: 0.4
      })
      .setClassToggle('#wrapper-primary-trigger', 'wrapper-primary-bg_opacity-zero')
      /*.addIndicators()*/
      .addTo(controller);

      /*Primary-btn none*/
      let primaryBtnNoneScene = new ScrollMagic.Scene({
           triggerElement: '#description-trigger',
           reverse: true,
           triggerHook: 0.4
      })
      .setClassToggle('#primary-button_trigger', 'primary-button_none')
      /*.addIndicators()*/
      .addTo(controller);

      /*Primary-scroll-down none*/
      let primaryScrollDownNoneScene = new ScrollMagic.Scene({
           triggerElement: '#description-trigger',
           reverse: true,
           triggerHook: 0.4
      })
      .setClassToggle('#scroll-down-trigger', 'scroll-down_none')
      /*.addIndicators()*/
      .addTo(controller);

      /*Scroll-Changing Features bg white*/
      let scrollChangingFeaturesBgScene = new ScrollMagic.Scene({
           triggerElement: '#digital-sourcing-trigger',
           reverse: true,
           triggerHook: 1
      })
      .setClassToggle('#wrapper-description-digital', 'digital-sourcing-bg_white')
      /*.addIndicators()*/
      .addTo(controller);

});


