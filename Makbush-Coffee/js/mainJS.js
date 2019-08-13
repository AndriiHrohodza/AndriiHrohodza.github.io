$(document).ready(function(){
/*Back-wrapper*/
	$('li .opacity_dark').eq(0).addClass('active')
	$('li .js-primary-tabs').eq(0).addClass('show')
	/**/
	$('ul .slider-pagination__item').click(function(){
		var attr = $(this).find('img').attr('src')
		var index = $(this).index()
		$('.wrapper-back').css('background-image','url'+'('+ attr +')')
		$('li .opacity_dark').removeClass('active').eq(index).addClass('active')
		$('li .js-primary-tabs').removeClass('show').eq(index).addClass('show')
	})

/*Front-wrapper*/
	$('li .opacity_dark').eq(0).addClass('active')
	$('li.js-primary-tabs').eq(0).addClass('show')
	/**/
	$('ul .slider-pagination__item').click(function(){
		var attr = $(this).find('img').attr('src')
		var index = $(this).index()
		$('.wrapper-back .wrapper-front').css('background-image','url'+'('+ attr +')')
		$('li .opacity_dark').removeClass('active').eq(index).addClass('active')
		$('li.js-primary-tabs').removeClass('show').eq(index).addClass('show')
	})

})

/*Primary animation*/

/*var app = new PIXI.Application(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);

app.stage.interactive = true;
var posX, displacementSprite, displacementFilter, bg, vx;
var container = new PIXI.Container();
app.stage.addChild(container);

PIXI.loader.add("../img/") .add("")*/







/*var lFollowX = 0,
	lFollowY = 0,
	x = 0,
	y = 0,
	friction = 1 / 30;

function moveBackground() {
	x += (lFollowX - x) * friction;
	y += (lFollowY - y) * friction;

	translate = "translate(" + x + "px, " + y + "px) scale(1.1)";

	$(".wrapper-front").css({
		"-webit-transform": translate,
		"-moz-transform": translate,
		transform: translate
	});

	window.requestAnimationFrame(moveBackground);
}

$(window).on("mousemove click", function(e) {
	var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
	var lMouseY = Math.max(
		-100,
		Math.min(100, $(window).height() / 2 - e.clientY)
	);
	lFollowX = 20 * lMouseX / 100; // 100 : 12 = lMouxeX : lFollow
	lFollowY = 10 * lMouseY / 100;
});

moveBackground();
*/



/*Scroll Magic*/
/*let controller = new ScrollMagic.Controller();*/

/*Description Animation*/
//Description-text animation
/*let descriptionTextScene = new ScrollMagic.Scene({
	triggerElement: '#features',
	reverse: true,
	triggerHook: 0.7
})
.setClassToggle('#text-magic', 'number')
.addIndicators({name: "num"})
.addTo(controller);*/


/*let descriptionTextCountScene = new ScrollMagic.Scene({
	triggerElement: '#features',
	reverse: true,
	triggerHook: 0.7
})
.setClassToggle('#text-count-magic', 'count')
.addIndicators({name: "count"})
.addTo(controller);*/



/*Counts*/
/*$('.count').each(function() {
	$(this).prop('number', 0).animate({
		number:$(this).text()
	}, {
		duration: 4000,
		easing: 'swing',
		step:function(now) {
			$(this).text(Math.ceil(now))
		}
	});
});
*/

/*Scroll Magic*/

/*Achivments Animation*/
let controller = new ScrollMagic.Controller();

/*Coffee*/
let coffeeScene = new ScrollMagic.Scene({
	triggerElement: '#coffee',
	reverse: true,
	triggerHook: 0.9
})
.setClassToggle('#coffee', 'fadeInDownSubHead')
/*.addIndicators({name: "coffee"})*/
.addTo(controller);

/*Exclusive*/
let exclusiveScene = new ScrollMagic.Scene({
	triggerElement: '#exclusive',
	reverse: true,
	triggerHook: 0.9
})
.setClassToggle('#exclusive', 'fadeInDownSubHead')
/*.addIndicators({name: "exclusive"})*/
.addTo(controller);

/*GMO*/
let GMOScene = new ScrollMagic.Scene({
	triggerElement: '#GMO',
	reverse: true,
	triggerHook: 0.9
})
.setClassToggle('#GMO', 'fadeInDownSubHead')
/*.addIndicators({name: "GMO"})*/
.addTo(controller);

/*Inovation*/
let inovationScene = new ScrollMagic.Scene({
	triggerElement: '#inovation',
	reverse: true,
	triggerHook: 0.9
})
.setClassToggle('#inovation', 'fadeInDownSubHead')
/*.addIndicators({name: "inovation"})*/
.addTo(controller);

/*Modern*/
let modernScene = new ScrollMagic.Scene({
	triggerElement: '#modern',
	reverse: true,
	triggerHook: 0.9
})
.setClassToggle('#modern', 'fadeInDownSubHead')
/*.addIndicators({name: "modern"})*/
.addTo(controller);

/*Desition*/
let desitionScene = new ScrollMagic.Scene({
	triggerElement: '#desition',
	reverse: true,
	triggerHook: 0.9
})
.setClassToggle('#desition', 'fadeInDownSubHead')
/*.addIndicators({name: "desition"})*/
.addTo(controller);


/*Team*/
//Head-text
let headTextScene = new ScrollMagic.Scene({
	triggerElement: '#price',
	reverse: true,
	triggerHook: 1
})
.setClassToggle('#price-head-text', 'fadeInDownSubHead')
/*.addIndicators({name: "desition"})*/
.addTo(controller);

// Main Text
let mainTextScene = new ScrollMagic.Scene({
	triggerElement: '#price',
	reverse: true,
	triggerHook: 1
})
.setClassToggle('#price-main-text', 'fadeInDownSub')
/*.addIndicators({name: "desition"})*/
.addTo(controller);

//Price Btn
let priceBtnScene = new ScrollMagic.Scene({
	triggerElement: '#price',
	reverse: true,
	triggerHook: 1
})
.setClassToggle('#price-btn', 'fadeInDownSubBtn')
/*.addIndicators({name: "team"})*/
.addTo(controller);

//Price Img
let priceImgScene = new ScrollMagic.Scene({
	triggerElement: '#price',
	reverse: true,
	triggerHook: 1
})
.setClassToggle('#price-img', 'fadeInRightImg')
/*.addIndicators({name: "team"})*/
.addTo(controller);




/*Form Open and Close*/
$(document).ready(function(){
	$('.form-open').on('click', function(event) {
		event.preventDefault();
		$('.form').fadeIn();
	});
	$('.form-close').on('click', function(event) {
		event.preventDefault();
		$('.form').fadeOut();
	});
})

/*Scroll-off From*/
$(document).ready(function(){
	$('.form-open').click(function(){
		$('html').addClass('scroll-off')
	})

	$('.form-close').click(function(){
		$('html').removeClass('scroll-off');
	});
})





/*BLur*/
$( document ).ready(function() {

	$('.form-open').click(function(){
		$('.wrapper-back, .features, .goods, .partners, .achievments, .about, .team, .price, .footer').addClass('blur')
	})
	$('.form-close').click(function(){
		$('.wrapper-back, .features, .goods, .partners, .achievments, .about, .team, .price, .footer').removeClass('blur');  
	})
});