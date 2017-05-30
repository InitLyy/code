/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-14 13:56:16
 * @version $Id$
 */

var luboTimeId=null;


 $(function(){
    $(".main_warp .lubo").lubo({});
})






var ct_temp = $('.ct_temp');
var ctlen = ct_temp.length;

var color =[
	{background:'#94a3e4',leadcolor:'#8a9be4'},
	{background:'#6ebcee',leadcolor:'#5cbde5'},
	{background:'#788cdc',leadcolor:'#8a9be4'},
	{background:'#3bc6b1',leadcolor:'#25af9b'},
	{background:'#d08e73',leadcolor:'#c17e60'},
	{background:'#ff7a6c',leadcolor:'#ea6356'},
	{background:'#5acd98',leadcolor:'#45ba84'},
	{background:'#cf8f79',leadcolor:'#c17e60'},
	{background:'#bb81df',leadcolor:'#b276d8'},	
];

$('.ct_temp').each(function() {
	var ctindex = $(this).index();




	var mc_t = $(this).children('.main').children('.mc_t');
	var main_r = mc_t.children('.main_r');
	var main_warp = main_r.children('.main_warp');
	var lubo = main_warp.children('.lubo');
	var brand = lubo.children('.lubo_box').children('li').children('.brand_slider');
	var list = main_warp.children('.list');
	var list_item = list.children('.list-item');
	var main_inner = main_r.children('.main-inner');
	var list_item_inner = main_inner.children('.list-item');
	var mt = $(this).children('.mt');
	var tab = mt.children('.tab');
	var tabli = tab.children('li');
	var next_btn = list.children('.next_btn');
	var mc =  $(this).children('.main').children('.mc')
	var mc_img = mc.children('.mc-img');
	var channel  = $(this).children('.main').children('.mc').children('.keyAll').children('.channel');
	var channel_inner = channel.children('.channel_inner');
	var keywords =  $(this).children('.main').children('.mc').children('.keyAll').children('.keywords');
    var tabli_chosen = tab.children('.tabli_chosen');
    var keyAll = mc.children('.keyAll');
    var mcimg = mc_img.children('.mcimg');
    	channel.css('background-color', color[ctindex].leadcolor);
    	keywords.css('background-color', color[ctindex].background);
    	tabli_chosen.css('background', color[ctindex].background);
    	$(this).children('.main').css('border-top', 'solid 1px'+ color[ctindex].background);
    	if(ctindex ==3||ctindex==5||ctindex==6||ctindex==8){
    		channel.css('width', '120px');
    		channel_inner.css('height', '32px');
    		channel_inner.css({
    			height: '32px',
    			width: '120px'
    		});
    		channel_inner.children('li').children('a').css('font-size', '14px');
    		mc.css('width', '120px');
    		main_warp.css('width', '1080px');
    		lubo.css('width', '479px');
    		mc_img.css('height', '214px');
    		main_inner.css('width', '1080px');
    		list_item_inner.css('width', '216px');
    		keywords.css({
    			width: '120px',
    			height: '160px'
    		});
    		keyAll.css({
    			width: '120px',
    			height: '232px'
    		});
    		mcimg.css({
    			width: '130px',
    			height: '214px'
    		});
    		brand.children('ul').children('li').css('width', '114px');
    		brand.children('ul').children('li').children('a').children('.brand_img').css('width', '100px');	
    	}
    	if(ctindex ==4){
    		channel_inner.css('height', '32px');
    		channel_inner.css('line-height', '32px');
    		channel_inner.children('li').children('a').css('font-size', '14px');
    		mcimg.css('height', '245px');
    		mc_img.css('height', '245px');
    		keywords.css('height', '161px');
    	}
	tabli.each(function() {
		tabli.mouseenter(function(event) {
			/* Act on the event */
			var index = $(this).index();
			
			tabli.css({
				background: 'white',
				color: '#5e5e5e'
			});
			$(this).css({
				color: 'white',
				background: color[ctindex].background
			});
			tabli.removeClass('tabli_chosen');
			$(this).addClass('tabli_chosen');
			main_r.css('display', 'none');
			main_r.eq(index).css('display', 'block');
		});
	});



	var lubo_box = lubo.children('.lubo_box');
	lubo.mouseenter(function(event) {
	/* Act on the event */
		luboTimeId=setTimeout(function(){
			lubo_box.animate({opacity:0.8});
			setTimeout(function(){
					lubo_box.animate({opacity:1.0});
				},100);
		},200);
	});
	lubo.mouseout(function(event) {
			clearTimeout(luboTimeId);
	});

	
	var mc_img = $(this).children('.main').children('mc').children('.mc-img');
	mc_img.mouseenter(function(event) {
		/* Act on the event */
		mc_img.animate({opacity:0.8});
	    setTimeout(function(){
	    	mc_img.animate({opacity:1.0})
	    },100);
	});
	list.hover(function() {
	/* Stuff to do when the mouse enters the element */

		list_item.mouseenter(function(event) {
	 // Act on the event 
		$(this).animate({opacity:0.8});
		setTimeout(function(){
			list_item.animate({opacity:1.0}, 100);
		});
		});
	
		next_btn.css('display','block');
	}, function() {
	/* Stuff to do when the mouse leaves the element */
		next_btn.css('display', 'none');
	});


	var next_btn_inner = main_inner.children('.next_btn');

	main_inner.hover(function() {
			next_btn_inner.css('display','block');
		}, function() {
		/* Stuf  to do when the mouse leaves the element */
			next_btn_inner.css('display', 'none');
	});	

	next_btn.click(function(event) {
				/* Act on the event */
			var tabli_chosen = tab.children('.tabli_chosen');
			var num = tabli_chosen.index();
			tabli.css({
				color: '#5e5e5e',
					background: 'white'
			});
			main_r.eq(num).css('display', 'none');
			var now = (num+1)%6;
				tabli.eq(now).css({
				color: 'white',
				background: color[ctindex].background
			});
			tabli.removeClass('tabli_chosen');
			tabli.eq(now).addClass('tabli_chosen');
			main_r.eq(now).css('display', 'block');
	});
	next_btn_inner.click(function(event) {
				/* Act on the event */
			var length = tabli.length;
			var tabli_chosen = tab.children('.tabli_chosen');
			var num = tabli_chosen.index();
			tabli.css({
				color: '#5e5e5e',
					background: 'white'
			});
			main_r.eq(num).css('display', 'none');
			var now = (num+1)%length;
				tabli.eq(now).css({
				color: 'white',
				background: color[ctindex].background
			});
			tabli.removeClass('tabli_chosen');
			tabli.eq(now).addClass('tabli_chosen');
			main_r.eq(now).css('display', 'block');
	});		
});