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
    if (sTop >= 1102&&sTop<=3000) {  
        if ($('.elevator').css('visibility')=='hidden') {
            $('.elevator').css('visibility','visible');                       
        }  
    }  
    else {  
        if ($('.elevator').css('visibility')=='visible') {  
            $('.elevator').css('visibility','hidden');  
        }  
    }
 }
$('.fl_goto_top').click(function(){
	scrollTo(0,0);
})
$('.fl_goto_bottom').click(function(){
	scrollTo(0,3000);
})
$('.ele_pic #ele-0').click(function(){
	scrollTo(0,200);
})
$('.ele_pic #ele-1').click(function(){
	scrollTo(0,1500);
})
$('.ele_pic #ele-2').click(function(){
	scrollTo(0,1600);
})
$('.ele_pic #ele-3').click(function(){
	scrollTo(0,1700);
})
$('.ele_pic #ele-4').click(function(){
	scrollTo(0,1800);
})
$('.ele_pic #ele-5').click(function(){
	scrollTo(0,1900);
})
$('.ele_pic #ele-6').click(function(){
	scrollTo(0,2000);
})
$('.ele_pic #ele-7').click(function(){
	scrollTo(0,2100);
})
$('.ele_pic #ele-8').click(function(){
	scrollTo(0,2200);
})
$('.ele_pic #ele-9').click(function(){
	scrollTo(0,2300);
})

$('.aside-backtop').click(function(){
	scrollTo(0,0);
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