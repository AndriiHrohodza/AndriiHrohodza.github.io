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

/*Counts*/
$('.count').each(function() {
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



