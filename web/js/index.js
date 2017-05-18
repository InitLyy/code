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