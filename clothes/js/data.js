$(initPage);

function initPage() {
    $.getJSON('web.json', function(data) {

        serve_dropdown = data.serve_dropdown;
        $('.serve-dropdown').prepend($('#serve-dropdown-data').render(serve_dropdown));

        mainshow_inside = data.mainshow_inside;
        $('.mainshow-inside').append($('#mainshow-inside-data').render(mainshow_inside));

        sitemap = data.sitemap;
        $('.sitemap-dropdown').append($('#tmp2').render(sitemap));
		$('.sitemap-dropdown dl').first().addClass('none');
		$('.sitemap-dropdown dl a:contains(国美定制)').after('<i class="new"></i>');
		$('.sitemap-dropdown dl a:contains(企业采购)').after('<i class="hot"></i>');

		mainnav = data.mainnav;
		$('.mainnav ul').append($('#mainnav_data').render(mainnav));

		keyword = data.keyword;
		$('.keyword').append($('#keyword-data').render(keyword));

		slide_box = data.slide_box;
		$('.slide_box').append($('#slide_box_data').render(slide_box));
		$('.slide_box li').first().css('opacity','1');

		limit_box = data.limit_box;
		$('.limit .box').prepend($('#limit_box_data').render(limit_box));
		$('.limit .box').children().eq(0).addClass('first');
		$('.limit .box').children().eq(1).addClass('second');

		contentbox = data.contentbox;
		$('.contentbox').prepend($('#contentbox-data').render(contentbox));
		for(var i=0;i<4;i++){
			$('.contentbox .leftbox').children().eq(i).addClass('leftbox'+i);
		}

		mrcd = data.mrcd;
		$('.mrcd').append($('#mrcd-data').render(mrcd));
		$('.mrcd .mrcd-main .mrcd-mainbox').first().css('display','block');
		$('.mrcd .mrcd-main .choose li').first().css('background','#333');
		$('.mrcd .mrcd-main .choose li').first().children().css('color','#fff');
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

		jxhd = data.jxhd;
		$('.jxhd').append($('#jxhd-data').render(jxhd));

		floor_a = data.floor_a;
		$('.floor-all').append($('#floor-data-a').render(floor_a));

		floor_b = data.floor_b;
		$('.floor-all').append($('#floor-data-b').render(floor_b));

		floor_a_a = data.floor_a_a;
		$('.floor-all').append($('#floor-data-a').render(floor_a_a));

		floor_b_b = data.floor_b_b;
		$('.floor-all').append($('#floor-data-b').render(floor_b_b));

		hot_main_box = data.hot_main_box;
		$('.hot-box .hot-main .box ul').append($('#hot_main_box').render(hot_main_box));

		box_content = data.box_content;
		$('.hot-box .hot-main .box').append($('#box_content').render(box_content));

		$('.hot-box .hot-main .box .box-content').first().css('display','block');
		$('.hot-box .hot-main .box ul li').first().css('background','#333');
		$('.hot-box .hot-main .box ul li').first().children().css('color','#fff');

		$('.hot-box .hot-main .box ul li').mouseenter(function(){
			$('.hot-box .hot-main .box ul li').css('background','transparent');
			$('.hot-box .hot-main .box ul li a').css('color','#5e5e5e');
			$(this).css('background','#333');
			$(this).children().css('color','#fff');
			var cnt=$(this).index();
			$('.box-content').css('display','none');
			var hotlist = document.getElementsByClassName('box-content');
			hotlist[cnt].style.display='block';
		})

		bottom_list = data.bottom_list;
		$('.bottom-area .main .box').append($('#bottom_list').render(bottom_list));
		$('.bottom-area .main .box').children().eq(0).children('ul').children().eq(6).children().addClass('red');
		$('.bottom-area .main .box').children().eq(0).children('ul').children().eq(8).children().addClass('red');

		$('.bottom-area .main .box').children().eq(1).children('ul').children().eq(0).children().addClass('red');
		$('.bottom-area .main .box').children().eq(1).children('ul').children().eq(3).children().addClass('red');
		$('.bottom-area .main .box').children().eq(1).children('ul').children().eq(8).children().addClass('red');

		$('.bottom-area .main .box').children().eq(2).children('ul').children().eq(0).children().addClass('red');
		$('.bottom-area .main .box').children().eq(2).children('ul').children().eq(3).children().addClass('red');
		$('.bottom-area .main .box').children().eq(2).children('ul').children().eq(11).children().addClass('red');

		$('.bottom-area .main .box').children().eq(3).children('ul').children().eq(0).children().addClass('red');
		$('.bottom-area .main .box').children().eq(3).children('ul').children().eq(2).children().addClass('red');
		$('.bottom-area .main .box').children().eq(3).children('ul').children().eq(9).children().addClass('red');

		$('.bottom-area .main .box').children().eq(4).children('ul').children().eq(0).children().addClass('red');
		$('.bottom-area .main .box').children().eq(4).children('ul').children().eq(4).children().addClass('red');
		$('.bottom-area .main .box').children().eq(4).children('ul').children().eq(9).children().addClass('red');

		$('.bottom-area .main .box').children().eq(5).children('ul').children().eq(3).children().addClass('red');
		$('.bottom-area .main .box').children().eq(5).children('ul').children().eq(8).children().addClass('red');
		$('.bottom-area .main .box').children().eq(5).children('ul').children().eq(11).children().addClass('red');

		gome_help_box = data.gome_help_box;
		$('.zwf-gome-help .gome-help-box').append($('#gome-help-box-data').render(gome_help_box));

		elevator = data.elevator;
		$('.elevator').append($('#elevator-data').render(elevator));

    });


}








