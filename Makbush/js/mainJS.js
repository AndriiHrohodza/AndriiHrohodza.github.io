$(document).ready(function(){
/*Back-wrapper*/
	$('li .opacity_dark').eq(0).addClass('active')
	/**/
	$('ul .slider-pagination__item').click(function(){
		var attr = $(this).find('img').attr('src')
		var index = $(this).index()
		$('.wrapper-back').css('background-image','url'+'('+ attr +')')
		$('li .opacity_dark').removeClass('active').eq(index).addClass('active')
	})

/*Front-wrapper*/
	$('li .opacity_dark').eq(0).addClass('active')
	/**/
	$('ul .slider-pagination__item').click(function(){
		var attr = $(this).find('img').attr('src')
		var index = $(this).index()
		$('.wrapper-back .wrapper-front').css('background-image','url'+'('+ attr +')')
		$('li .opacity_dark').removeClass('active').eq(index).addClass('active')
	})

})