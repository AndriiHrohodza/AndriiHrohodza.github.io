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

	/*$(".slider-pagination").on("click", ".slider-pagination__item", function(e) {
            	e.preventDefault();
            	$(".slider-pagination__item").removeClass("active");
            	$(".js-primary-tabs").removeClass("show");
            	$(this).addClass("active");
            	$($(this).attr("href")).addClass("show");
            });*/


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



