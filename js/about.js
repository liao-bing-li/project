// 滑动效果
$(function(){
	$('.main_three>.three_center>.three_box>li').mouseenter(function(){
		console.log($(this).val())
		var index=$(this).val();
		$('div.wrap>.main>.main_three>.three_center>.three_box>li>.three_img').eq(index).slideUp(500);
		
	})
	$('.main_three>.three_center>.three_box>li').mouseleave(function(){
		var index=$(this).val();
		$('div.wrap>.main>.main_three>.three_center>.three_box>li>.three_img').eq(index).slideDown(500);
	})
})

