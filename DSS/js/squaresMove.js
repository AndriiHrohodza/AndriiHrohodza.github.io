/*Right*/
$(document).ready(function() {
  $(".solution").mousemove(function(e) {
    var x = e.pageX / window.innerWidth;
    (x = x * -15), (y = e.pageY / window.innerHeight);
    (y = y * -15), (box = $("[data-right]"));

    TweenMax.to(box, 0.6, {
      x: x,
      y: y,
      ease: Power0.easeNone
    });
  });
  /*Left*/
  $(".solution").mousemove(function(e) {
    var x = e.pageX / window.innerWidth;
    (x = x * 15), (y = e.pageY / window.innerHeight);
    (y = y * 25), (box = $("[data-left]"));

    TweenMax.to(box, 0.6, {
      x: x,
      y: y,
      ease: Power0.easeNone
    });
  });
  /*Main*/
  $(".solution").mousemove(function(e) {
    var x = -e.pageX / window.innerWidth;
    (x = x * 10), (y = e.pageY / window.innerHeight);
    (y = y * 10),(box = $("[data-main]"));

    TweenMax.to(box, 0.6, {
      x: x,
      y: y,
      ease: Power4.easeOut
    });
  });
});
