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
	cur=Math.round(cur/240)*240;
	// console.log(cur);
	$('.rollintro ul').css('left',cur+'px');
})
$('.user-icon-prev').click(function(){
	var cur=parseInt($('.rollintro ul').css('left'));
	if(cur+240<=0)
		cur=cur+240;
	cur=Math.round(cur/240)*240;
	// console.log(cur);
	$('.rollintro ul').css('left',cur+'px');
})


$(togseabar);
$(window).bind('scroll', togseabar);
function togseabar(e) {
 	var sTop = $(window).scrollTop();  
    var sTop = parseInt(sTop);  
    if (sTop >= 131) {  
        if ($('.aside-backtop').css('display')=='none') {
        	$('.aside-blank').css('display','none');
            $('.aside-backtop').css('display','block');

        }  
    }  
    else {  
        if ($('.aside-backtop').css('display')=='block') {
        	$('.aside-blank').css('display','block');   
            $('.aside-backtop').css('display','none');  
        }  
    }
    if (sTop >= 1410&&sTop<=7265) {  
        if ($('.elevator').css('visibility')=='hidden') {
            $('.elevator').css('visibility','visible');                       
        }  
    }  
    else {  
        if ($('.elevator').css('visibility')=='visible') {  
            $('.elevator').css('visibility','hidden');  
        }  
    }
    var fr=(sTop-2049)/677;
    // console.log(fr);
    if(fr>=0){
    	for(var i=0;i<$('.elevator ul li').length;i++){
		    $('.elevator ul').children().eq(i).children().eq(0).css('display','block');
	    	$('.elevator ul').children().eq(i).children().eq(1).css('display','none');
	    	$('.elevator ul').children().eq(i).children().eq(1).css('background','#cc2743');
	    	$('.elevator ul').children().eq(i).children().eq(1).css('color','#fff');
		}
	    $('.elevator ul').children().eq(Math.round(fr)).children().eq(0).css('display','none');
	    $('.elevator ul').children().eq(Math.round(fr)).children().eq(1).css('display','block');
	    $('.elevator ul').children().eq(Math.round(fr)).children().eq(1).css('background','transparent');
	    $('.elevator ul').children().eq(Math.round(fr)).children().eq(1).css('color','#c81623');
	}
 }
 $('.aside-backtop').click(function(){
	$('body').animate({'scrollTop':0},800);
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


$(function(){
    $('.slide').SlideImg({
    });
})

$('.mrcd-main .choose li').mouseenter(function(){
	$('.mrcd-main .choose li').css('background','transparent');
	$('.mrcd-main .choose li a').css('color','#5e5e5e');
	$(this).css('background','#333');
	$(this).children().css('color','#fff');
	var cnt=$(this).index();
	$('.mrcd-mainbox').css('display','none');
	var mrcd = document.getElementsByClassName('mrcd-mainbox');
	mrcd[cnt].style.display='block';
})

$('.limit .box .limit-btn').click(function(){
	if(parseInt($('.limit .box .first').css('left'))==0){
		$('.limit .box .first').css('left','-200px');
		$('.limit .box .second').css('left','0px');
		$('.limit .box .limit-btn p i').text('返回');
	}
	else{
		$('.limit .box .first').css('left','0px');
		$('.limit .box .second').css('left','200px');
		$('.limit .box .limit-btn p i').text('下一个');
	}
})

function GetRTime(){
	var Endtime_first = new Date('2017/06/08 00:00:00');
	var Nowtime = new Date();
	var t0=Endtime_first.getTime() - Nowtime.getTime();
	if(t0>=0){
		h0=Math.floor(t0/1000/60/60);
		m0=Math.floor(t0/1000/60%60);
		s0=Math.floor(t0/1000%60);
	}
	else{
		h0=0;
		m0=0;
		s0=0;
		$('.limit .box .first .sign').css('background-position','-51px -1px');
		if(!$('.limit .box .first').hasClass('grey')){
			$('.limit .box .first').addClass('grey');
		}
		if($('.limit .box .first .end').length==0){
			$('.limit .box .first').append('<div class="end"></div>');
		}
	}
	if(h0<10){
		h0='0'+h0;
	}
	if(m0<10){
		m0='0'+m0;
	}
	if(s0<10){
		s0='0'+s0;
	}
	$('.limit .box .first .time').children().eq(0).text(h0);
	$('.limit .box .first .time').children().eq(1).text(m0);
	$('.limit .box .first .time').children().eq(2).text(s0);
	var now0=99;
	var tot0=200;
	var rest0=now0/tot0*100;
	$('.limit .box .first .buynum span').text(now0);
	$('.limit .box .first .probar .colorpic').css('width',rest0+'%');



	var Endtime_second = new Date('2017/05/25 00:00:00');
	var Nowtime = new Date();
	var t1=Endtime_second.getTime() - Nowtime.getTime();
	if(t1>=0){
		h1=Math.floor(t1/1000/60/60);
		m1=Math.floor(t1/1000/60%60);
		s1=Math.floor(t1/1000%60);
	}
	else{
		h1=0;
		m1=0;
		s1=0;
		$('.limit .box .second .sign').css('background-position','-51px -1px');
		if(!$('.limit .box .second').hasClass('grey')){
			$('.limit .box .second').addClass('grey');
		}
		if($('.limit .box .second .end').length==0){
			$('.limit .box .second').append('<div class="end"></div>');
		}
	}
	if(h1<10){
		h1='0'+h1;
	}
	if(m1<10){
		m1='0'+m1;
	}
	if(s1<10){
		s1='0'+s1;
	}
	$('.limit .box .second .time').children().eq(0).text(h1);
	$('.limit .box .second .time').children().eq(1).text(m1);
	$('.limit .box .second .time').children().eq(2).text(s1);
	var now1=8;
	var tot1=50;
	var rest1=now1/tot1*100;
	$('.limit .box .second .buynum span').text(now1);
	$('.limit .box .second .probar .colorpic').css('width',rest1+'%');
}
setInterval(GetRTime,100);


$(ele);
function ele() {
	var len=$('.elevator ul li').length;
	for(var i=0;i<len;i++){
		$('.elevator ul').children().eq(i).click(function(){
			var cur = $(this).index();
		 	$('body').animate({'scrollTop':2049+677*cur},800);
		})
	}
	$('.rightbox').children().eq(6).css('display','none');
	$('.rightbox').children().eq(7).css('display','none');
	$('.btntoshow').click(function(){
	 	if(parseInt($('.btntoshow').css('top'))==270){
	 		$('.btntoshow').css('background-position','-60px -68px');
	 		$('.btntoshow').css('top','370px');
	 		$('.rightbox-mall').css('bottom','-100px');
	 		$('.rightbox').children().eq(6).css('display','block');
	 		$('.rightbox').children().eq(7).css('display','block');
		}
		else if(parseInt($('.btntoshow').css('top'))==370){
	 		$('.btntoshow').css('background-position','-10px -68px');
	 		$('.btntoshow').css('top','270px');
	 		$('.rightbox-mall').css('bottom','0');
	 		$('.rightbox').children().eq(6).css('display','none');
	 		$('.rightbox').children().eq(7).css('display','none');
		}
	 })
}

function suitself() {
	var width = $(window).width();
	var sTop = $(window).scrollTop();  
    var sTop = parseInt(sTop);  
	if(width<1000){
		$('.elevator').css('display', 'none');
	}
	else
	{	
		$('.elevator').css('display', 'block');
		var left = width/2-600-60;
		// console.log(left);
		$('.elevator').css('left', left+'px');
	}

}
window.onresize =  suitself;
suitself();

var logoboxlist=$('.floor .floor-main .floor-content .floor-leftbox .logobox').children().length;
for(var i=0;i<logoboxlist;i++){
	if(i%3==0)
		$('.floor .floor-main .floor-content .floor-leftbox .logobox').children().eq(i).addClass('addonepx');
}





