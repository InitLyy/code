
	 var height=[];
	  for(var i = 0;i<10;++i){
 		height[i] = 1950+541*i;
	 }



$('.search-box input').focus(function(){
	$(this).val('');
	$(this).css('color','#5E5E5E');
})
$('.search').click(function(){
	$('.search-box input').css('color','#5E5E5E');
})
$('.search').click(function(){
	var cur=parseInt($('.search-box input').val());
	var tmp=cur;
	var len=tmp.toString().length;
	$('.brand').css('width',20 + 6 * len - 6 + 'px');
	$('.brand').text(cur);
})

$('.user-icon-next').click(function(){
	var cur=parseInt($('.rollintro ul').css('left'));
	if(cur-240>=-480)
		cur=cur-240;
	$('.rollintro ul').css('left',cur+'px');
})
$('.user-icon-prev').click(function(){
	var cur=parseInt($('.rollintro ul').css('left'));
	if(cur+240<=0)
		cur=cur+240;
	$('.rollintro ul').css('left',cur+'px');
})

$(togseabar);
$(window).bind('scroll', togseabar);
function togseabar(e) {
	console.log($('.elevator'));	

 	var sTop = $(window).scrollTop();  
    var sTop = parseInt(sTop);  
    if (sTop >= 621) {  
        if ($('.navbar-fixed-top').css('visibility')=='hidden') {
            $('.navbar-fixed-top').css('visibility','visible');                       
        }
        if ($('.aside-backtop').css('display')=='none') {
        	$('.aside-blank').css('display','none');
            $('.aside-backtop').css('display','block');

        }  
    }  
    else {  
        if ($('.navbar-fixed-top').css('visibility')=='visible') {  
            $('.navbar-fixed-top').css('visibility','hidden');  
        } 
        if ($('.aside-backtop').css('display')=='block') {
        	$('.aside-blank').css('display','block');   
            $('.aside-backtop').css('display','none');  
        }  
    }
    if (sTop >= height[0]&&sTop<=height[9]) {  
        if ($('.elevator').css('visibility')=='hidden') {
            $('.elevator').css('visibility','visible');
             $('.elevator').css('top','135px');                      
        }  
    }  
    else {  
        if ($('.elevator').css('visibility')=='visible') {  
            $('.elevator').css('visibility','hidden');  
        }  
    }
    var cnt  = Math.floor((sTop-height[0])/541);	
    if(cnt<=10){
    	$('.ele_pic').children('li').children('.eti').css('display', 'none');
    	$('.ele_pic').children('li').eq(cnt).children('.eti').css('display', 'block');
    }
 }
var height=[];
 	for(i=0;i<10;++i){
 		height[i] = 1950+541*i;
	 }
$('.fl_goto_top').click(function(){
	$('body').animate({'scrollTop':0}, 800);
})
$('.fl_goto_bottom').click(function(){
	$('body').animate({'scrollTop':height[9]}, 800);
})
var len=$('.ele_pic li').length;
for(var i =0;i<len;i++){
	$('.ele_pic').children('li').eq(i).click(function() {
		/* Act on the event */
		var cnt=$(this).index();
		$('.ele_pic').children('li').children('.eti').css('display', 'none');
		$('.ele_pic').children('li').eq(cnt).children('.eti').css('display', 'block');
		$('body').animate({'scrollTop':height[cnt]}, 800);
	});
}





window.onresize = function(){
	var width = $(window).width();
	var sTop = $(window).scrollTop();  
    var sTop = parseInt(sTop);  
	console.log(width);
	if(width<500){
		$('.elevator').css('display', 'none');
		console.log($('.elevator'));
	}
	else
	{	console.log($('.elevator'));	
		$('.elevator').css('display', 'block');
		var left = width/2-600-60-30;
		console.log(left);
		$('.elevator').css('left', left+'px');
	}
}
// $('.ele_pic #ele-0').click(function(){
// 	$('body').animate({'scrollTop':height[9]}, 800);
// })
// $('.ele_pic #ele-1').click(function(){
// 	$('body').animate({'scrollTop':height[9]}, 800);
// })
// $('.ele_pic #ele-2').click(function(){
// 	$('body').animate({'scrollTop':height[9]}, 800);
// })
// $('.ele_pic #ele-3').click(function(){
// 	$('body').animate({'scrollTop':height[9]}, 800);
// })
// $('.ele_pic #ele-4').click(function(){
// 	$('body').animate({'scrollTop':height[9]}, 800);
// })
// $('.ele_pic #ele-5').click(function(){
// 	scrollTo(0,height[5]);
// })
// $('.ele_pic #ele-6').click(function(){
// 	scrollTo(0,height[6]);
// })
// $('.ele_pic #ele-7').click(function(){
// 	scrollTo(0,height[7]);
// })
// $('.ele_pic #ele-8').click(function(){
// 	scrollTo(0,height[8]);
// })
// $('.ele_pic #ele-9').click(function(){
// 	scrollTo(0,height[9]);
// })

$('.aside-backtop').click(function(){
	$('body').animate({'scrollTop':0}, 800);
})

$('.bar-tab-cart').click(function(){
	var cur=parseInt($('.shop-box2').css('right'));
	if(cur==35){
		$('.shop-box2').css('right','-205px');
		$('.bar-tab-cart').css('background','#5c5c5c');
		$('.bar-tab .bar-tab-cart .car-arrow').css('background-position',' -47px -464px');
	}
	else if(cur==-205){
		$('.shop-box2').css('right','35px');
		$('.bar-tab-cart').css('background','#343434');
		$('.bar-tab .bar-tab-cart .car-arrow').css('background-position',' -40px -464px');
	}
	
})
$('.close-box').click(function(){
	$('.shop-box2').css('right','-205px');
	$('.bar-tab-cart').css('background','#5c5c5c');
	$('.bar-tab .bar-tab-cart .car-arrow').css('background-position',' -47px -464px');
})
// function runTopos(cur,aim){
// 	currentPosition-=10;
// 	if(currentPosition>0)
// 	{
// 		window.scrollTo(0,currentPosition);
// 	}
// 	else
// 	{
// 		window.scrollTo(0,0);
// 		clearInterval(timer);
// 	}
// }