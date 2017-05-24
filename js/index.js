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
 }
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

 $('.btntoshow').click(function(){
 	if(parseInt($('.btntoshow').css('top'))==270){
 		$('.btntoshow').css('background-position','-60px -68px');
 		$('.btntoshow').css('top','370px');
 		$('.rightbox-mall').css('bottom','-100px');
 		$('.rightbox .logo6').css('display','block');
 		$('.rightbox .logo7').css('display','block');
	}
	else if(parseInt($('.btntoshow').css('top'))==370){
 		$('.btntoshow').css('background-position','-10px -68px');
 		$('.btntoshow').css('top','270px');
 		$('.rightbox-mall').css('bottom','0');
 		$('.rightbox .logo6').css('display','none');
 		$('.rightbox .logo7').css('display','none');
	}
 })



$(function(){
    $('.slide').SlideImg({
    });
})





$('.mrcd-main .choose .choose0').mouseenter(function(){
	$('.mrcd-main .choose li').css('background','transparent');
	$('.mrcd-main .choose li a').css('color','#5e5e5e');
	$('.mrcd-main .choose .choose0').css('background','#333');
	$('.mrcd-main .choose .choose0 a').css('color','#fff');

	$('.mrcd-mainbox-box0 a').css('background','url(img/mrcd-0-0.jpeg)no-repeat center');
	$('.mrcd-mainbox-box1 .pic').css('background','url(img/mrcd-0-1.jpeg)no-repeat center');
	$('.mrcd-mainbox-box2 .pic a').css('background','url(img/mrcd-0-2.jpeg)no-repeat center');
	$('.mrcd-mainbox-box3 .pic').css('background','url(img/mrcd-0-3.jpeg)no-repeat center');
	$('.mrcd-mainbox-box4 .pic').css('background','url(img/mrcd-0-4.jpeg)no-repeat center');
	$('.mrcd-mainbox-box5 a').css('background','url(img/mrcd-0-5.jpeg)no-repeat center');

	$('.mrcd-mainbox-box1 .mrcd-price1 a i').text("49.00");
	$('.mrcd-mainbox-box1 .mrcd-protitle1 a ').text("男士皮肤衣");
	$('.mrcd-mainbox-box2 .intro .pri a i').text("228.00");
	$('.mrcd-mainbox-box2 .intro .mrcd-protitle2 a').text("吴亦凡同款");
	$('.mrcd-mainbox-box3 .intro a').text("85折起");
	$('.mrcd-mainbox-box3 .pri a i').text("1880.00");
	$('.mrcd-mainbox-box4 .intro a').text("单肩包斜跨小包");
	$('.mrcd-mainbox-box4 .pri a i').text("69.00");
})

$('.mrcd-main .choose .choose1').mouseenter(function(){
	$('.mrcd-main .choose li').css('background','transparent');
	$('.mrcd-main .choose li a').css('color','#5e5e5e');
	$('.mrcd-main .choose .choose1').css('background','#333');
	$('.mrcd-main .choose .choose1 a').css('color','#fff');

	$('.mrcd-mainbox-box0 a').css('background','url(img/mrcd-1-0.jpeg)no-repeat center');
	$('.mrcd-mainbox-box1 .pic').css('background','url(img/mrcd-1-1.jpeg)no-repeat center');
	$('.mrcd-mainbox-box2 .pic a').css('background','url(img/mrcd-1-2.jpeg)no-repeat center');
	$('.mrcd-mainbox-box3 .pic').css('background','url(img/mrcd-1-3.jpeg)no-repeat center');
	$('.mrcd-mainbox-box4 .pic').css('background','url(img/mrcd-1-4.jpeg)no-repeat center');
	$('.mrcd-mainbox-box5 a').css('background','url(img/mrcd-1-5.jpeg)no-repeat center');
	
	$('.mrcd-mainbox-box1 .mrcd-price1 a i').text("49.00");
	$('.mrcd-mainbox-box1 .mrcd-protitle1 a ').text("商务休闲更有型");
	$('.mrcd-mainbox-box2 .intro .pri a i').text("78.00");
	$('.mrcd-mainbox-box2 .intro .mrcd-protitle2 a').text("复古绅士");
	$('.mrcd-mainbox-box3 .intro a').text("超薄简约皮带");
	$('.mrcd-mainbox-box3 .pri a i').text("719.00");
	$('.mrcd-mainbox-box4 .intro a').text("下单减5元");
	$('.mrcd-mainbox-box4 .pri a i').text("179.00");
})

$('.mrcd-main .choose .choose2').mouseenter(function(){
	$('.mrcd-main .choose li').css('background','transparent');
	$('.mrcd-main .choose li a').css('color','#5e5e5e');
	$('.mrcd-main .choose .choose2').css('background','#333');
	$('.mrcd-main .choose .choose2 a').css('color','#fff');

	$('.mrcd-mainbox-box0 a').css('background','url(img/mrcd-2-0.jpeg)no-repeat center');
	$('.mrcd-mainbox-box1 .pic').css('background','url(img/mrcd-2-1.jpeg)no-repeat center');
	$('.mrcd-mainbox-box2 .pic a').css('background','url(img/mrcd-2-2.jpeg)no-repeat center');
	$('.mrcd-mainbox-box3 .pic').css('background','url(img/mrcd-2-3.jpeg)no-repeat center');
	$('.mrcd-mainbox-box4 .pic').css('background','url(img/mrcd-2-4.jpeg)no-repeat center');
	$('.mrcd-mainbox-box5 a').css('background','url(img/mrcd-2-5.jpeg)no-repeat center');
	
	$('.mrcd-mainbox-box1 .mrcd-price1 a i').text("109.00");
	$('.mrcd-mainbox-box1 .mrcd-protitle1 a ').text("满99减5");
	$('.mrcd-mainbox-box2 .intro .pri a i').text("79.00");
	$('.mrcd-mainbox-box2 .intro .mrcd-protitle2 a').text("冰冰同款抢先购");
	$('.mrcd-mainbox-box3 .intro a').text("新店上新");
	$('.mrcd-mainbox-box3 .pri a i').text("539.00");
	$('.mrcd-mainbox-box4 .intro a').text("牛皮女包");
	$('.mrcd-mainbox-box4 .pri a i').text("275.00");
})

$('.mrcd-main .choose .choose3').mouseenter(function(){
	$('.mrcd-main .choose li').css('background','transparent');
	$('.mrcd-main .choose li a').css('color','#5e5e5e');
	$('.mrcd-main .choose .choose3').css('background','#333');
	$('.mrcd-main .choose .choose3 a').css('color','#fff');

	$('.mrcd-mainbox-box0 a').css('background','url(img/mrcd-3-0.jpeg)no-repeat center');
	$('.mrcd-mainbox-box1 .pic').css('background','url(img/mrcd-3-1.jpeg)no-repeat center');
	$('.mrcd-mainbox-box2 .pic a').css('background','url(img/mrcd-3-2.jpeg)no-repeat center');
	$('.mrcd-mainbox-box3 .pic').css('background','url(img/mrcd-3-3.jpeg)no-repeat center');
	$('.mrcd-mainbox-box4 .pic').css('background','url(img/mrcd-3-4.jpeg)no-repeat center');
	$('.mrcd-mainbox-box5 a').css('background','url(img/mrcd-3-5.jpeg)no-repeat center');
	
	$('.mrcd-mainbox-box1 .mrcd-price1 a i').text("499.00");
	$('.mrcd-mainbox-box1 .mrcd-protitle1 a ').text("经典飞行员系列");
	$('.mrcd-mainbox-box2 .intro .pri a i').text("49.00");
	$('.mrcd-mainbox-box2 .intro .mrcd-protitle2 a').text("户外登山双肩包");
	$('.mrcd-mainbox-box3 .intro a').text("送备用皮表");
	$('.mrcd-mainbox-box3 .pri a i').text("2488.00");
	$('.mrcd-mainbox-box4 .intro a').text("万向轮拉杆箱");
	$('.mrcd-mainbox-box4 .pri a i').text("559.00");
})


$('.hot-box .hot-main .box ul li').mouseenter(function(){
	$('.hot-box .hot-main .box ul li').css('background','transparent');
	$('.hot-box .hot-main .box ul li a').css('color','#5e5e5e');
	$(this).css('background','#333');
	$(this).children().css('color','#fff');
})