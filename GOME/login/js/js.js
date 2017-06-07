/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-20 15:25:51
 * @version $Id$
 */



  $(".more").click(moreClickEvent());

$('.logintop-left').click(function(){
	/* Act on the event */
	$('.loginbox-zh').css('display', 'none');
	$('.loginbox-saoma').css('display', 'block');
	$('.logintop-left a').css('color', '#e3101e');
	$('.logintop-right a').css('color', '#5e5e5e');
	
});
$('.logintop-right').click(function() {
	/* Act on the event */
	$('.loginbox-saoma').css('display', 'none');
	$('.loginbox-zh').css('display', 'block');
	$('.logintop-left a').css('color', '#5e5e5e');
	$('.logintop-right a').css('color', '#e3101e');
});
// 


function moreClickEvent(){
	var num=-1;
	return function(){
		  	$(".more").css('background-position', '0 '+num*25+'px');
		  	$("#tail2").toggle();
		  	if(num==-1)
		  		num=0;
		  	else
		  		num=-1;
  		}		
}
function checkforlogin(){
	if(parseInt($('.qrcode-main').css('left'))==0){
		$('.qrcode-help').css('opacity','1');
	}
	else{
		$('.qrcode-help').css('opacity','0');
	}
	console.log(parseInt($('.qrcode-main').css('left')));
}
setInterval(checkforlogin,8);
