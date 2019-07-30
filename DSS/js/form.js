/*Popup*/
$(document).ready(function(){
  $('.popup-btn').on('click', function(event) {
    event.preventDefault();
    $('.form').fadeIn();
  });
  $('.popup-close').on('click', function(event) {
    event.preventDefault();
    $('.form').fadeOut();
  });

  

})


/**
 * @name Multi-step form - WIP
 * @description Prototype for basic multi-step form
 * @deps jQuery, jQuery Validate
 */



 var app = {

  init: function(){
    this.cacheDOM();
    this.setupAria();
    this.nextButton();
    this.prevButton();
    this.validateForm();
    this.startOver();
    this.editForm();
    this.killEnterKey();
    this.handleStepClicks();
  },

  cacheDOM: function(){
    if($(".multi-step-form").size() === 0){ return; }
    this.$formParent = $(".multi-step-form");
    this.$form = this.$formParent.find("form");
    this.$formStepParents = this.$form.find("fieldset"),

    this.$nextButton = this.$form.find(".btn-next");
    this.$prevButton = this.$form.find(".btn-prev");
    this.$editButton = this.$form.find(".btn-edit");
    this.$resetButton = this.$form.find("[type='reset']");

    this.$stepsParent = $(".steps");
    this.$steps = this.$stepsParent.find("button");
  },

  htmlClasses: {
    activeClass: "active",
    hiddenClass: "hidden",
    visibleClass: "visible",
    editFormClass: "edit-form",
    animatedVisibleClass: "animated fadeIn",
    animatedHiddenClass: "animated fadeOut",
    animatingClass: "animating"
  },

  setupAria: function(){

    // set first parent to visible
    this.$formStepParents.eq(0).attr("aria-hidden",false);

    // set all other parents to hidden
    this.$formStepParents.not(":first").attr("aria-hidden",true);

    // handle aria-expanded on next/prev buttons
    app.handleAriaExpanded();

  },

  nextButton: function(){

    this.$nextButton.on("click", function(e){

      e.preventDefault();

      // grab current step and next step parent
      var $this = $(this),
      currentParent = $this.closest("fieldset"),
      nextParent = currentParent.next();

          // if the form is valid hide current step
          // trigger next step
          if(app.checkForValidForm()){
            currentParent.removeClass(app.htmlClasses.visibleClass);
            app.showNextStep(currentParent, nextParent);
          }

        });
  },

  prevButton: function(){

    this.$prevButton.on("click", function(e){

      e.preventDefault();

      // grab current step parent and previous parent
      var $this = $(this),
      currentParent = $(this).closest("fieldset"),
      prevParent = currentParent.prev();

          // hide current step and show previous step
          // no need to validate form here
          currentParent.removeClass(app.htmlClasses.visibleClass);
          app.showPrevStep(currentParent, prevParent);

        });
  },

  showNextStep: function(currentParent,nextParent){

    // hide previous parent
    currentParent
    .addClass(app.htmlClasses.hiddenClass)
    .attr("aria-hidden",true);

    // show next parent
    nextParent
    .removeClass(app.htmlClasses.hiddenClass)
    .addClass(app.htmlClasses.visibleClass)
    .attr("aria-hidden",false);

    // focus first input on next parent
    nextParent.focus();

    // activate appropriate step
    app.handleState(nextParent.index());

    // handle aria-expanded on next/prev buttons
    app.handleAriaExpanded();

  },

  showPrevStep: function(currentParent,prevParent){

    // hide previous parent
    currentParent
    .addClass(app.htmlClasses.hiddenClass)
    .attr("aria-hidden",true);

    // show next parent
    prevParent
    .removeClass(app.htmlClasses.hiddenClass)
    .addClass(app.htmlClasses.visibleClass)
    .attr("aria-hidden",false);

    // send focus to first input on next parent
    prevParent.focus();

    // activate appropriate step
    app.handleState(prevParent.index());

    // handle aria-expanded on next/prev buttons
    app.handleAriaExpanded();

  },

  handleAriaExpanded: function(){

    /*
      Loop thru each next/prev button
      Check to see if the parent it conrols is visible
      Handle aria-expanded on buttons
      */
      $.each(this.$nextButton, function(idx,item){
        var controls = $(item).attr("aria-controls");
        if($("#"+controls).attr("aria-hidden") == "true"){
          $(item).attr("aria-expanded",false);
        }else{
          $(item).attr("aria-expanded",true);
        }
      });

      $.each(this.$prevButton, function(idx,item){
        var controls = $(item).attr("aria-controls");
        if($("#"+controls).attr("aria-hidden") == "true"){
          $(item).attr("aria-expanded",false);
        }else{
          $(item).attr("aria-expanded",true);
        }
      });

    },

    validateForm: function(){
     
    // jquery validate form validation
    $(function(){
     $('#regform').validate({
       rules: {
        name: "required",
        specialist: "required",
        business: "required",
        alarm: "required",
        country: "required",
        city: "required",
        phone: "required",
        email: "required",
       },
       messages: {
         name: {
           required: "Enter your name",

         },
         business: {
           required: "Enter your business",

         },
         specialist: {
           required: "What type of specialist do you need?",

         },
         phone: {
           required: "Enter your phone",
            
         },
         alarm: {
           required: "Alarm",
         },
         city: {
           required: "Where do you live?",  
         },
         country: {
           required: "Enter your location",
         },
         email: {
           required: "Enter your email address",   
         },
       },
       

     });
   }); 
  },

  checkForValidForm: function(){
    if(this.$form.valid()){
      return true;
    }
  },

  startOver: function(){

    var $parents = this.$formStepParents,
    $firstParent = this.$formStepParents.eq(0),
    $formParent = this.$formParent,
    $stepsParent = this.$stepsParent;

    this.$resetButton.on("click", function(e){

          // hide all parents - show first
          $parents
          .removeClass(app.htmlClasses.visibleClass)
          .addClass(app.htmlClasses.hiddenClass)
          .eq(0).removeClass(app.htmlClasses.hiddenClass)
          .eq(0).addClass(app.htmlClasses.visibleClass);

            // remove edit state if present
            $formParent.removeClass(app.htmlClasses.editFormClass);

            // manage state - set to first item
            app.handleState(0);

            // reset stage for initial aria state
            app.setupAria();

            // send focus to first item
            setTimeout(function(){
              $firstParent.focus();
            },200);

        }); // click

  },

  handleState: function(step){

    this.$steps.eq(step).prevAll().removeAttr("disabled");
    this.$steps.eq(step).addClass(app.htmlClasses.activeClass);

    // restart scenario
    if(step === 0){
      this.$steps
      .removeClass(app.htmlClasses.activeClass)
      .attr("disabled","disabled");
      this.$steps.eq(0).addClass(app.htmlClasses.activeClass)
    }

  },

  editForm: function(){
    var $formParent = this.$formParent,
    $formStepParents = this.$formStepParents,
    $stepsParent = this.$stepsParent;

    this.$editButton.on("click",function(){
      $formParent.toggleClass(app.htmlClasses.editFormClass);
      $formStepParents.attr("aria-hidden",false);
      $formStepParents.eq(0).find("input").eq(0).focus();
      app.handleAriaExpanded();
    });
  },

  killEnterKey: function(){
    $(document).on("keypress", ":input:not(textarea,button)", function(event) {
      return event.keyCode != 13;
    });
  },

  handleStepClicks: function(){

    var $stepTriggers = this.$steps,
    $stepParents = this.$formStepParents;

    $stepTriggers.on("click", function(e){

      e.preventDefault();

      var btnClickedIndex = $(this).index();

            // kill active state for items after step trigger
            $stepTriggers.nextAll()
            .removeClass(app.htmlClasses.activeClass)
            .attr("disabled",true);

            // activate button clicked
            $(this)
            .addClass(app.htmlClasses.activeClass)
            .attr("disabled",false)

            // hide all step parents
            $stepParents
            .removeClass(app.htmlClasses.visibleClass)
            .addClass(app.htmlClasses.hiddenClass)
            .attr("aria-hidden",true);

            // show step that matches index of button
            $stepParents.eq(btnClickedIndex)
            .removeClass(app.htmlClasses.hiddenClass)
            .addClass(app.htmlClasses.visibleClass)
            .attr("aria-hidden",false)
            .focus();

          });

  }

};

app.init();















/*$( document ).ready(function() {
     let data ={
      name:'',
      business:'',
      specialist:'',
      alarm:'',
      date:'',
      country:'',
      city:'',
      time:'',
      email:'',
    },
    name = $('#name')//name
    business = $('#business')//s_name
    specialist = $('#specialist')//email
    alarm = $('#alarm')//textarea
    date = $('#date')
    country = $('#country')
    city = $('#city')
    time = $('#time')
    email = $('#email')
    

    let nextSlideBtn = $('.swiper-button-next')

    var swiper = new Swiper('.swiper-container', {
      noSwiping: true,
      allowTouchMove:false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    */
    // 
  /*nextSlideBtn.hide()*/
 /* $('#submit').click(function(e){
    e.preventDefault()
  })*/
 
  /*nextSlideBtn.click(function(){
    
    if(swiper.isEnd) {
      
      $('.swiper-slide ul .name').text(data.name)
      $('.swiper-slide ul .business').text(data.business)
      $('.swiper-slide ul .specialist').text(data.specialist)
      $('.swiper-slide ul .alarm').text(data.alarm)
      $('.swiper-slide ul .date').text(data.date)
      $('.swiper-slide ul .country').text(data.country)
      $('.swiper-slide ul .city').text(data.city)
      $('.swiper-slide ul .time').text(data.time)
      $('.swiper-slide ul .email').text(data.email)
    }
  })
    name.change(function(){
      data.name = $(this).val()
      showNextStepBtn(data.name,true)
    })
    business.change(function(){
      data.business = $(this).val()
      showNextStepBtn(data.business,true)
    })
  specialist.change(function(){
      data.specialist = $(this).val()
      showNextStepBtn(data.specialist,true)

    })
  alarm.change(function(){
    data.alarm = $(this).val()
      showNextStepBtn(data.alarm,true)
    })
  date.change(function(){
    data.date = $(this).val()
      showNextStepBtn(data.date,true)
    })
  country.change(function(){
    data.country = $(this).val()
      showNextStepBtn(data.country,true)
    })
  city.change(function(){
    data.city = $(this).val()
      showNextStepBtn(data.city,true)
    })
  time.change(function(){
    data.time = $(this).val()
      showNextStepBtn(data.time,true)
    })
  email.change(function(){
    data.email = $(this).val()
      showNextStepBtn(data.email,true)
    })
    function showNextStepBtn (val,val2){
      if(!val2) {
      return
      } else {
        if(val.length) nextSlideBtn.show()
      else nextSlideBtn.hide()
      }
    }
});*/





/*var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("prevBtn").style.float = "left";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next +";
  }
  // ... and run a function that displays the correct step indicator:
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}*/






/*$(function() {
  $('input.getName').keyup("keyup", function() {
    $('.cName').html($('.getName').val());
  });
  $('.help').popover();
  //$('.progress-bar').css("width", "20%");
  $('.submit').click(function() {
    event.preventDefault();
    var darken = '<div class="darken" style="display:none;"></div>';
    $('body').prepend(darken);

    $(".darken").delay().show(0).animate({
      opacity: 0.8
    }, "fast");
    $('.thanks').removeClass('hide').addClass('fadeInDownBig');
  });
  var img_cnt = $('li.activate').index() + 1;

  var img_amt = $('li.form-group').length;
  $('.img_cnt').html(img_cnt);
  $('.img_amt').html(img_amt);
  var progress = ($('.img_cnt').text() / $('.img_amt').text()) * 100;
  $('.progress-bar').css("width", progress + "%");
  $('.form-control').keyup(function() {
    $('.nxt').removeClass("hide fadeOutDown").addClass("fadeInUp");
  })

  $('.nxt').click(function() {
    $('.nxt').removeClass("fadeInUp").addClass('fadeOutDown');

    if ($('.progress-form li').hasClass('activate')) {

      $('p.alerted').removeClass('fadeInLeft').addClass('fadeOutUp');

      var $activate = $('li.activate');
      var $inactive = $('li.inactive');
      $activate.removeClass("fadeInRightBig activate").addClass('fadeOutLeftBig');
      $inactive.removeClass("hide inactive").addClass("activate fadeInRightBig").next().addClass('inactive');

      var img_cnt = $('li.activate').index() + 1;

      var img_amt = $('li.form-group').length;
      $('.img_cnt').html(img_cnt);
      $('.img_amt').html(img_amt);
      var progress = ($('.img_cnt').text() / $('.img_amt').text()) * 100;
      $('.progress-bar').css("width", progress + "%");

      if ($('.img_cnt').html() == $('.img_amt').html()) {

        $('.count, .nxt').hide();
        $('.submit').removeClass("hide");

      }

    } //End Else

  });

});

$(function() {

  $('#q1').keyup(function() {
    var nameValue = $(this).val();
    $('.answer1').html(nameValue);
  });

  $('#q2').keyup(function() {
    var nameValue = $(this).val();
    $('.answer2').html(nameValue);
  });

  $('#q3').keyup(function() {
    var nameValue = $(this).val();
    $('.answer3').html(nameValue);
  });

  $('#q4').keyup(function() {
    var nameValue = $(this).val();
    $('.answer4').html(nameValue);
  });

  $('#q5').keyup(function() {
    var nameValue = $(this).val();
    $('.answer5').html(nameValue);
  });

});*/