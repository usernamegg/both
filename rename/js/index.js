$(function(){
	var  screenHeight =  document.body.scrollHeight;	
	//alert(screenHeight);
//µ¼º½À¸
	$('.borrow').mouseover(function(){
		$(this).children('ul').show();
		$(this).children('a.title').css('border-bottom','1px solid #fff');
		});
	$('.borrow').mouseout(function(){
		$(this).find('ul').hide();
		$(this).children('a.title').css('border-bottom','none');
		});
	
	$('.borrow_border').mouseover(function(){
		$(this).children('a.title').css('border-bottom','1px solid #000');
		});
	$('.borrow_border').mouseout(function(){
		$(this).children('a.title').css('border-bottom','none');
		});

//Ð¡ÆÁµ¼º½À¸
	$('.nav_xs .button').click(function(){
		$(this).next('.button_text').slideToggle();
	});
//
	$('.ico').css('margin-top',screenHeight-350 + 'px')

//bannerÂÖ²¥
	$(function(){
		$('.carousel').carousel({
		 interval: 2000
		});
	});
	
//¿¨Æ¬
	$('.title_content').click(function(){
		$(this).next('.item').slideToggle();
		$(this).parents('li').siblings('li').find('.item').slideUp();
	});
	
});