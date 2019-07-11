/*Features-horizontal-scroll */
$(document).ready(function(){
var controller = new ScrollMagic.Controller();
// pin 
var pinFeatureScene = new ScrollMagic.Scene({
	triggerElement: '#features-pin',
	triggerHook: 0.25,
	duration: '150%'
})
.setPin('#features-pin')
.setTween(TweenMax.staggerFromTo(".features-content", 2, {left: '50vw'}, {left: '-80vw', easeInOut: Back.easeOut}, 0.15))
/*.addIndicators({name: "pin"})*/
.addTo(controller);
});

/*Cursor*/
/*document.body.style.cursor = 'none';
function lerp(start, end, amt) {
   return (1 - amt) * start + amt * end;
}

var mouseX = window.innerWidth / 2;
var mouseY = window.innerHeight / 2;

var cursor = {
   $el: $(".cursor-container"),
   state: 0,
   speed: 0.2,
   moveToX: mouseX,
   moveToY: mouseY,
   moveTo: function(x, y) {
      this.moveToX = x;
      this.moveToY = y;
   },
   update: function() {
      let position = this.$el.position();
      let left = lerp(position.left, this.moveToX - this.$el.width() / 2, cursor.speed);
      let top = lerp(position.top, this.moveToY - this.$el.height() / 2, cursor.speed);

      this.$el.css({
         left : left,
         top : top
      });
   }
};

$(document).on("mousemove", function(e) {
   if (cursor.state == 0) {
      cursor.moveTo(e.pageX, e.pageY);
   }
});

$('[cursor-snap]').on("mouseenter", function() {
   cursor.state = 1;
   
   let position = $(this).offset();
   let offsetLeft = parseInt($(this).data("cursor-offset-x")) || -10;
   let offsetTop = parseInt($(this).data("cursor-offset-y")) || ($(this).outerHeight() - cursor.$el.height()) / 2;
   
   let anchorX = position.left + offsetLeft;
   let anchorY = position.top + offsetTop;
   
   cursor.moveTo(anchorX, anchorY);
});

$('[cursor-snap]').on("mouseleave", function() {
   cursor.state = 0;
});

function loop() {
   cursor.update();
}

setInterval(loop, 1000 / 60);*/

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {

	cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")

})

const dot = document.querySelector('.dot');

document.addEventListener('mousemove', e => {

	dot.setAttribute("style", "top: "+(e.pageY - 3.5)+"px; left: "+(e.pageX - 3.5)+"px;")

})

let btnBorderBlack = document.getElementById("primary-button_trigger");

btnBorderBlack.addEventListener("mouseover", () => {
	cursor.classList.add("cursor-bg_black");
})
btnBorderBlack.addEventListener("mouseleave", () => {
	cursor.classList.remove("cursor-bg_black");
})

let btnBorderWhite = document.getElementById("contacts-button_trigger");

btnBorderWhite.addEventListener("mouseover", () => {
	cursor.classList.add("cursor-bg_white");
})
btnBorderWhite.addEventListener("mouseleave", () => {
	cursor.classList.remove("cursor-bg_white");
})