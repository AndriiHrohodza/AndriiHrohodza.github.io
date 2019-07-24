/*Features-horizontal-scroll */
$(document).ready(function(){
var controller = new ScrollMagic.Controller();
// pin 
var pinFeatureScene = new ScrollMagic.Scene({
	triggerElement: '#features-pin',
	triggerHook: 0.3,
	duration: '150%'
})
.setPin('#features-pin')
.setTween(TweenMax.staggerFromTo(".features-content", 2, {left: '50rem'}, {left: '-220rem', easeInOut: Back.easeOut}, 0.15))// 50vw, -120vw
/*.addIndicators({name: "pin"})*/
.addTo(controller);
});

/*Nav*/
/*$('.toggle-button').click(function(){
$('.main-menu').toggleClass('toggle-active')
})
$('.toggle-button').click(function(){

$('.main-menu li').toggleClass('text-opacity')
})
$('.toggle-button').click(function(){

$('.main-menu:after').toggleClass('text-opacity')
})
$('.toggle-button').click(function(){

$('.main-menu:before').css('opacity', '1')
})*/

function toggleMenu() {
  $(".main-menu").fadeToggle(800);
}

$(".toggle-button").click(toggleMenu);
$("li.header-item a").click(toggleMenu);




/*$('.toggle-button').click(function(){
береш своє меню яке має випадати наприклад:
$('.main-menu').toggleClass('mob-animation')
})*/
$('.toggle-menu').click(function(){
if($('.toggle-menu').has('.active')){
$(this).text( 'close')
}else{
$(this).text( 'menu')
}
})






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


/*Cursor*/

/*

document.addEventListener('mousemove', e => {

	cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")

})

const dot = document.querySelector('.dot');

document.addEventListener('mousemove', e => {

	dot.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX)+"px;")

})*/


/*Cursor*/

$(document).ready(function(){
	var $c = $("[data-custom-cursor]");
   var $h = $("#primary-button_trigger");
   var $p = $("#contacts-button_trigger");

	$(window).on("mousemove",function(e){
		x = e.clientX;
		y = e.clientY;
		console.log(x,y);
		$c.css("transform","matrix(1, 0, 0, 1, "+x+","+y+")");
	});

   $h.on("mouseenter",function(e){
      $c.addClass("cursor_black");
   });

   $h.on("mouseleave",function(e){
      $c.removeClass("cursor_black");
   });

   $p.on("mouseenter",function(e){
      $c.addClass("cursor_white");
   });

   $p.on("mouseleave",function(e){
      $c.removeClass("cursor_white");
   });

});

$(document).ready(function(){
	var $c = $("[data-cursor_border]");
	var $h = $(".btn, button, a");

	$(window).on("mousemove",function(e){
		x = e.clientX;
		y = e.clientY;
		console.log(x,y);
		$c.css("transform","matrix(1, 0, 0, 1, "+x+","+y+")");
	});

	/*Cursor_hover*/
	$h.on("mouseenter",function(e){
		$c.addClass("cursor_hover");
	});

	$h.on("mouseleave",function(e){
		$c.removeClass("cursor_hover");
	});
});

/*Cursor-border_active*/
const cursor = document.querySelector('.cursor_border');

/*Cursor-bg_black*/
let btnBorderBlack = document.getElementById("primary-button_trigger");

btnBorderBlack.addEventListener("mouseover", () => {
   cursor.classList.add("cursor-bg_black");
})
btnBorderBlack.addEventListener("mouseleave", () => {
   cursor.classList.remove("cursor-bg_black");
})

/*Cursor-bg_white*/
let btnBorderWhite = document.getElementById("contacts-button_trigger");

btnBorderWhite.addEventListener("mouseover", () => {
   cursor.classList.add("cursor-bg_white");
})
btnBorderWhite.addEventListener("mouseleave", () => {
   cursor.classList.remove("cursor-bg_white");
})

/*Scroll = (
    function(){
          var x,y;
         function hndlr(){
            window.scrollTo(x,y);
            //return;
          }  
          return {

               disable : function(x1,y1){
                    x = x1;
                    y = y1;
                   if(window.addEventListener){
                       window.addEventListener("scroll",hndlr);
                   } 
                   else{
                        window.attachEvent("onscroll", hndlr);
                   }     

               },
               enable: function(){
                      if(window.removeEventListener){
                         window.removeEventListener("scroll",hndlr);
                      }
                      else{
                        window.detachEvent("onscroll", hndlr);
                      }
               } 

          }
    })();
 //for disabled scroll bar.
Scroll.disable(0,document.body.scrollTop);
//for enabled scroll bar.
Scroll.enable();*/