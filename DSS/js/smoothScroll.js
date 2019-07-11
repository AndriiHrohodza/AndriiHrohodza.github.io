var _win = $(window),
   _rAF = window.requestAnimationFrame,
   _cAF = window.cancelAnimationFrame,
   _AF = undefined,
   _log = $('.log'),
   _scroll_time = 550,
   _isMac = /Mac/i.test(navigator.userAgent),
   _scroll_distance = 150;

console.log(_isMac);

function smoothScroll(){
   _win.on('mousewheel DOMMouseScroll', function(e){
      e.preventDefault();
      // console.log(e);
      e = e.originalEvent.wheelDelta / 50 || -e.originalEvent.detail / 3;

      e = -parseInt(_scroll_distance * e);
      log(e);

      scrollToAnimation(_win, _scroll_time, {
         distance: e,
         linear: 'linear'
      });
   });
}
// !_isMac && smoothScroll();
smoothScroll();

function scrollToAnimation(o, time, opt){
   var st = o.scrollTop(),
      dis = opt.distance,
      start = (new Date()).getTime();
   
   time ? void(0) : time = 500;
   _cAF(_AF);
   animate();
   function animate(){
      var  now = (new Date()).getTime(),
         elapsed = now - start,
         fraction = elapsed / time;
         
      if(fraction < 1){
         var final = st + dis*Math.sin(fraction*Math.PI/2);
         o.scrollTop(final);
         // setTimeout(animate, Math.min(25, time - elapsed));
         _AF = _rAF(animate);
      }else{
         log('Complete Scroll...');
      }
   }
   
}
// _rAF(scrollToAnimation);

function log(e){
   _log.text(e);
}