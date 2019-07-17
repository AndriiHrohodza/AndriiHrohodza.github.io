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

/*$(function(){
	$('ul.slider-pagination li:first').addClass('active');
	$('.primary .js-primary-tabs').hide();
	$('.primary .js-primary-tabs:first').show();
	$('ul.slider-pagination li').on('click',function(){
		$('ul.slider-pagination li').removeClass('active');
		$(this).addClass('active')
		$('.primary .js-primary-tabs').hide();
		var activeTab = $(this).find('a').attr('href');
		$(activeTab).show();
		return false;
	});
})*/



