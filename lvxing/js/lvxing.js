$(function(){
    $(".lubo").lubo({});
})

window.jQuery(document).ready(function($) {
	init()
});
$('#dcbox #arriveTimeText').click(function(event) {
	/* Act on the event */
	console.log(1);
	$('input[name = "radioAirplane"]').eq(1).click();
	$('input[name = "radioAirplane"]').eq(1).attr('checked', 'checked');
	nRadiocheck();
});


$('.nRadio').click(function(event) {
	/* Act on the event */
	var name = $(this).attr('id');
	nRadiocheck(name);	
});

$('.plane_tab .change').click(function(event) {
	/* Act on the event */
	var temp = $(' .plane_tab #fromcity').val()
	console.log(temp);
	$('.plane_tab #fromcity').val($('.plane_tab #tocity').val())
	$('.plane_tab #tocity').val(temp);
});

$('.train_tab .change').click(function(event) {
	/* Act on the event */
	var temp = $('.train_tab #fromcity').val()
	$('.train_tab #fromcity').val($('.train_tab #tocity').val())
	$('.train_tab #tocity').val(temp);
});



function nRadiocheck(name='wf-text'){
	if(name == 'dc-text'){
		$('input[name = "radioAirplane"]').eq(0).attr('checked', 'checked');
		$('input[name = "radioAirplane"]').eq(1).attr("checked",false);
		$('#dcbox').css('display', 'block');
		$('#wfbox').css('display', 'none');
	}
	else{
		$('input[name = "radioAirplane"]').eq(0).attr("checked",false);
		$('input[name = "radioAirplane"]').eq(1).attr('checked', 'checked');
		$('#dcbox').css('display', 'none');
		$('#wfbox').css('display', 'block');
	}
}

function menuselect(index=0){
	$('.detail-tab').css('display', 'none');
	$('.detail-tab').eq(index).css('display', 'block');
	$('.search-menu li').children('.li_bg').css({
		background: 'transparent',
		opacity: '.7'
	});
	$('.search-menu li').eq(index).children('.li_bg').css({
		background: '#fff',
		opacity: '.8'
	});
}
function init(index = 0){
	menuselect();
	fill();
}

function fill(){
	var src=['url(img/lunbo1.jpg)','url(img/lunbo2.jpg)','url(img/lunbo3.jpg)','url(img/lunbo4.jpg)'];
	var lunboli = $('.lubo_box').children('li');
	for(var i=0;i<lunboli.length;++i){
			lunboli.eq(i).children('a').css('background', src[i]);
			// lunboli.children('a').eq(i).css('background-image', src[i]);
	}
	lunboli.eq(0).css('opacity', '1');
}

