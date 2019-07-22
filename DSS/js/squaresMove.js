$(document).ready(function() {
  $(".solution").mousemove(function(e) {
    var x = e.pageX / window.innerWidth;
    (x = x * -10), (y = e.pageY / window.innerHeight);
    (y = y * -10), (box = $("[data-right]"));

    TweenMax.to(box, 0.3, {
      x: x,
      y: y,
      ease: Power0.easeNone
    });
  });
  $(".solution").mousemove(function(e) {
    var x = e.pageX / window.innerWidth;
    (x = x * 10), (y = e.pageY / window.innerHeight);
    (y = y * 10), (box = $("[data-left]"));

    TweenMax.to(box, 0.3, {
      x: x,
      y: y,
      ease: Power0.easeNone
    });
  });
});
