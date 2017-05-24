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
        if ($('.aside-backtop').css('display')=='none') {
        	// $('.aside-blank').css('display','none');
            $('.aside-backtop').css('display','block');

        }  
    }  
    else {  
        if ($('.aside-backtop').css('display')=='block') {
        	// $('.aside-blank').css('display','block');   
            $('.aside-backtop').css('display','none'); 
        }  
    }
 }
 $('.aside-backtop').click(function(){
	scrollTo(0,0);
})
// $('.bar-tab-cart').click(function(){
// 	var cur=parseInt($('.shop-box2').css('right'));
// 	if(cur==35){
// 		$('.shop-box2').css('right','-205px');
// 		$('.bar-tab-cart').css('background','#5c5c5c');
// 		$('.bar-tab .bar-tab-cart .car-arrow').css('background-position',' -47px -464px');
// 	}
// 	else if(cur==-205){
// 		$('.shop-box2').css('right','35px');
// 		$('.bar-tab-cart').css('background','#343434');
// 		$('.bar-tab .bar-tab-cart .car-arrow').css('background-position',' -40px -464px');
// 	}
	
// })
// $('.close-box').click(function(){
// 	$('.shop-box2').css('right','-205px');
// 	$('.bar-tab-cart').css('background','#5c5c5c');
// 	$('.bar-tab .bar-tab-cart .car-arrow').css('background-position',' -47px -464px');
// })
$('.all-category h2').mouseover(function() {
	$('.category-ul').css('display','block');
	$('.gray_opacity').css('display','block');
	$('.all-category h2 span').css('background','url(img/category.png) repeat scroll -109px -435px');
});
$('.all-category h2').mouseout(function() {
	$('.category-ul').css('display','none');
	$('.gray_opacity').css('display','none');
	$('.all-category h2 span').css('background','url(img/category.png) repeat scroll -109px -420px');
});
$('.category-ul').mouseover(function() {
	$('.category-ul').css('display','block');
	$('.gray_opacity').css('display','block');
	$('.all-category h2 span').css('background','url(img/category.png) repeat scroll -109px -435px');
});
$('.category-ul').mouseout(function() {
	$('.category-ul').css('display','none');
	$('.gray_opacity').css('display','none');
	$('.all-category h2 span').css('background','url(img/category.png) repeat scroll -109px -420px');
});
$(function(){
    $('.slide').SlideImg({
    });
    $('.cir_box li:eq(0)').children('.text').append('冰洗空 清凉一夏');
    $('.cir_box li:eq(1)').children('.text').append('海尔品牌日');
    $('.cir_box li:eq(2)').children('.text').append('厨卫大电 低价钜惠');
    $('.left_btn').mouseover(function() {
		$('.back1').css('opacity','.3');
	});
	$('.left_btn').mouseout(function() {
		$('.back1').css('opacity','.1');
	});
	$('.right_btn').mouseover(function() {
		$('.back2').css('opacity','.3');
	});
	$('.right_btn').mouseout(function() {
		$('.back2').css('opacity','.1');
	});
})
$('.product_list_title li').mouseover(function() {
	$(this).addClass('cur');
})
$('.product_list_title li').mouseout(function() {
	if($(this).attr('class')!= 'now')
		$(this).removeClass('cur');
})
$('.product_list_title li').click(function() {
	$(this).addClass('now').siblings().removeClass('now').removeClass('cur');
	var num=$(this).attr('val');
	$('.group-products-list ul').css('display', 'none');
	$('#product_list_' + num).css('display', 'block');
})

function countdown() {
	$('.right_btn').after('<div class="rightTime"><div class="TopTime"><h2>还剩 <span id="RemainD">0</span> 天</h2><div><span class="time_djs_iteam" id="RemainH">00</span><span class="time_maohao">:</span><span class="time_djs_iteam" id="RemainM">00</span><span class="time_maohao">:</span><span class="time_djs_iteam" id="RemainS">00</span><span class="time_maohao">:</span><span class="time_djs_iteam" id="RemainMS"></span></div></div><div class="DownImg"><div class="slide2"><ul class="slide_box2"><li style="opacity: 1"><a href="" style="background:url(img/flashsale1.jpg) center top no-repeat;background-position: initial"></a></li></ul></div></div></div>');
}

var overDate = 1000 * 60 * 60 * 24 * 3; //截止时间:为当前计算机时间+3天
var NowTime = new Date();
var EndTime = new Date(NowTime.getTime() + overDate);

function GetRTime() {
    NowTime = new Date();

    var nMS = EndTime.getTime() - NowTime.getTime();
    var nD = Math.floor(nMS / (1000 * 60 * 60 * 24));
    var nH = Math.floor(nMS / (1000 * 60 * 60)) % 24;
    var nM = Math.floor(nMS / (1000 * 60)) % 60;
    var nS = Math.floor(nMS / 1000) % 60;
    var nMS = Math.floor(nMS / 100) % 10;

    function checkTime(i) {
		if (i<10) {
			i = "0" + i
		}
  		return i
	}

    if (nD >= 0) {
        document.getElementById('RemainD').innerHTML = checkTime(nD);
        document.getElementById('RemainH').innerHTML = checkTime(nH);
        document.getElementById('RemainM').innerHTML = checkTime(nM);
        document.getElementById('RemainS').innerHTML = checkTime(nS);
        document.getElementById('RemainMS').innerHTML = nMS;
	}
	else {

	}
	setTimeout('GetRTime()', 100);
}
window.onload = function() {
	countdown();
	GetRTime();
	$(function(){
	    $('.slide2').SlideImg2({
	    });
	    $('.slide2 .left_btn2').mouseover(function() {
			$('.slide2 .left_btn2').css('background','url(img/category.png) -271px -448px no-repeat');
			$('.slide2 .left_btn2').css('opacity', '1');
		});
		$('.slide2 .left_btn2').mouseout(function() {
			$('.slide2 .left_btn2').css('background','url(img/category.png) -271px -420px no-repeat');
			$('.slide2 .left_btn2').css('opacity', '.3');
		});
		$('.slide2 .right_btn2').mouseover(function() {
			$('.slide2 .right_btn2').css('background','url(img/category.png) -288px -448px no-repeat');
			$('.slide2 .right_btn2').css('opacity', '1');
		});
		$('.slide2 .right_btn2').mouseout(function() {
			$('.slide2 .right_btn2').css('background','url(img/category.png) -288px -420px no-repeat');
			$('.slide2 .right_btn2').css('opacity', '.3');
		});
	})
}
















