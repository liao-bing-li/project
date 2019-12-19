// 轮播图
$(function(){
	// 图片
	var index = 0;
	$('.header>div.btn>div.a').click(function(){
		if (index<0){
			 index=2;
		}
		index-=1;
		$('.img li').eq(index).show().siblings().hide();
	})
	$('.header>div.btn>div.b').click(function(){
		index++;
		if (index>3){
			 index=0;
		}
		$('.img li').eq(index).show().siblings().hide();
	})
	
})

// 今日特色
$(function(){
	// 移入
	$('.main_box>ul.tody>li>.tody_a').eq(0).mouseenter(function(){
		$('.main_box>ul.tody>li>.tody_a>div').eq(0).show(1000)
	})
	$('.main_box>ul.tody>li>.tody_a').eq(1).mouseenter(function(){
		$('.main_box>ul.tody>li>.tody_a>div').eq(1).show(1000)
	})
	$('.main_box>ul.tody>li>.tody_a').eq(2).mouseenter(function(){
		$('.main_box>ul.tody>li>.tody_a>div').eq(2).show(1000)
	})
	$('.main_box>ul.tody>li>.tody_d').eq(0).mouseenter(function(){
		$('.main_box>ul.tody>li>.tody_d>div').eq(0).show(1000)
	})
	$('.main_box>ul.tody>li>.tody_d').eq(1).mouseenter(function(){
		$('.main_box>ul.tody>li>.tody_d>div').eq(1).show(1000)
	})
	$('.main_box>ul.tody>li>.tody_d').eq(2).mouseenter(function(){
		$('.main_box>ul.tody>li>.tody_d>div').eq(2).show(1000)
	})
	// 移出
	$('.main_box>ul.tody>li>.tody_a').eq(0).mouseleave(function(){
		$('.main_box>ul.tody>li>.tody_a>div').eq(0).hide(1000)
	})
	$('.main_box>ul.tody>li>.tody_a').eq(1).mouseleave(function(){
		$('.main_box>ul.tody>li>.tody_a>div').eq(1).hide(1000)
	})
	$('.main_box>ul.tody>li>.tody_a').eq(2).mouseleave(function(){
		$('.main_box>ul.tody>li>.tody_a>div').eq(2).hide(1000)
	})
	$('.main_box>ul.tody>li>.tody_d').eq(0).mouseleave(function(){
		$('.main_box>ul.tody>li>.tody_d>div').eq(0).hide(1000)
	})
	$('.main_box>ul.tody>li>.tody_d').eq(1).mouseleave(function(){
		$('.main_box>ul.tody>li>.tody_d>div').eq(1).hide(1000)
	})
	$('.main_box>ul.tody>li>.tody_d').eq(2).mouseleave(function(){
		$('.main_box>ul.tody>li>.tody_d>div').eq(2).hide(1000)
	})
})


// 切换图片
$(function(){
	$('.main_two>.two_center>.two_box>.two_right>ul.icon>li').click(function(){
		console.log($(this).val())
		var sum=$(this).val()
		$('.main_two>.two_center>.two_box>.two_left>li').eq(sum).show(1000).siblings().hide(1000)
		$('.main_two>.two_center>.two_box>.two_right>ul.icon>li>p').css({color:'black'})
		$('.main_two>.two_center>.two_box>.two_right>ul.icon>li>p').eq(sum).css({color:'red'}).siblings()
	})
})




