$(function(){
	
	//导航菜单
//	$('div[topnav]').hover(function(){
//		console.log(2121212,$(this))
//		var it = $(this).attr('attr');
//		if(it === 'undefined') return false;
//		var heht = $(this).find('#' + it).height() + 300 + "px";
//		
//		$(this).find('.submnu').height(heht);
//		
//		$(this).stop().find('.submnu').animate({height:'show'},{
//			queue:false,
//			duration:500,
//			easing:'easeOutBounce'
//		});
//		
//		$(this).stop().attr('class', 'imenu_on').siblings().attr('class', 'imenu');
//		
//	},function(){
//		$(this).stop().find('.submnu').hide();
//		$(this).stop().attr('class', 'imenu');
//	});  

//	$('.submnu')[0].show()
$(".imenu a").click(function(){
	$(this).addClass('active')
	$('.submnu').hide()
	$(this).parent().children('.submnu').slideToggle()
})

});