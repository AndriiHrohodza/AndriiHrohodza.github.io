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



$( document ).ready(function() {
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
    
    // 
  /*nextSlideBtn.hide()*/
 /* $('#submit').click(function(e){
    e.preventDefault()
  })*/
 
  nextSlideBtn.click(function(){
    
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
});





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