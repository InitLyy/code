/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-20 15:25:51
 * @version $Id$
 */
var guessPage=0;
var hotuser=0;
$(document).ready(function(){
	initGuess();
	initUnderImg();
	inithot();
});


function initGuess(){
	var items=$('.ui-guess ul');
	items.eq(1).css('display', 'none');
	items.eq(2).css('display', 'none');
	var right=$('.ui-main .ui-title-change_btn-nex').eq(0);
	$(right).on('click',function(){
			items.eq(guessPage).fadeOut(300);
			guessPage=(guessPage+1)%items.length;
			items.eq(guessPage).fadeIn(300)
			;
	});
	var left=$('.ui-main .ui-title-change_btn-pre').eq(0);
	$(left).on('click',function(){
		items.eq(guessPage).fadeOut(300);
		guessPage=(guessPage+items.length-1)%items.length;
		items.eq(guessPage).fadeIn(300);
	})
}

function inithot() {
	var items=$('.ui-hot-right-shai ul');
	items.eq(1).css('display', 'none');
	items.eq(2).css('display', 'none');
	var right=$('.ui-hot-right .ui-title-change_btn-nex').eq(0);
	$(right).on('click',function(){
			items.eq(hotuser).fadeOut(300);
			hotuser=(hotuser+1)%items.length;
			items.eq(hotuser).fadeIn(300)
			;
	});
	var left=$('.ui-hot-right .ui-title-change_btn-pre').eq(0);
	$(left).on('click',function(){
		items.eq(hotuser).fadeOut(300);
		hotuser=(hotuser+items.length-1)%items.length;
		items.eq(hotuser).fadeIn(300);
	})
}

function initUnderImg(){
	var items=$('.under-img');
	items.each(function(){
		$(this).on('mouseenter',function(){
			$(this).animate({opacity:.8}, 40);
			var thisobj=$(this);
			setTimeout(function(){
				$(thisobj).animate({opacity:1}, 300);
			},500);
		})
	});


}
