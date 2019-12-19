// 滑动效果
$(function(){
	$('.main_two>.two_center>.two_box>.two_a>li').mouseenter(function(){
		console.log($(this).val())
		var index=$(this).val();
		$('.main_two>.two_center>.two_box>.two_a>li>.two_b>a>div').eq(index).animate({top:'0px'},500);
		$('.main_two>.two_center>.two_box>.two_a>li>.two_b>a>div>h4').eq(index).animate({marginTop:'40px'},500);
	})
	$('.main_two>.two_center>.two_box>.two_a>li').mouseleave(function(){
		var index=$(this).val();
		$('.main_two>.two_center>.two_box>.two_a>li>.two_b>a>div').eq(index).animate({top:'110px'},500)
		$('.main_two>.two_center>.two_box>.two_a>li>.two_b>a>div>h4').eq(index).animate({marginTop:'1px'},500);
	})
})