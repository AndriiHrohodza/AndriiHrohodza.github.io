





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