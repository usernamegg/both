$(function(){
	var  screenHeight =  document.body.scrollHeight;	
	//alert(screenHeight);
//������
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

//С��������
	$('.nav_xs .button').click(function(){
		$(this).next('.button_text').slideToggle();
	});
//
	$('.ico').css('margin-top',screenHeight-350 + 'px')

//banner�ֲ�
	$(function(){
		$('.carousel').carousel({
		 interval: 2000
		});
	});
	
//��Ƭ
	$('.title_content').click(function(){
		$(this).next('.item').slideToggle();
		$(this).parents('li').siblings('li').find('.item').slideUp();
	});
	
});