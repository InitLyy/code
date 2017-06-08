/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-27 13:03:34
 * @version $Id$
 */
$('#slide_list').mouseover(function(){
	$('.slidenav').css('display', 'block');
});
$('.slidenav').mouseleave(function(){
	$('.slidenav').css('display', 'none');
});

var DataOfnSearchWarp = [
	{
		'plink': '',
		'ptitle': '三星(SAMSUNG) Galaxy S8(G9500) 全网通 手机 谜夜黑 4G',
		'pdata-code': '',
		'imgpath': 'img_zwf/sj1.jpg',
		'nlink': '',
		'ntitle': '三星(SAMSUNG) Galaxy S8(G9500) 全网通 手机 谜夜黑 4G',
		'ndata-code': '',
		'model': '三星(SAMSUNG) Galaxy S8(G9500) 全网通 手机 谜夜黑 4G',
		'price': '¥5688.00',
		'blink': '',
		'bdata-code': ''
	},{
		'plink': '',
		'ptitle': '国美 (GOME) K1 4GB+64GB 移动联通电信 手机 虹膜解锁 墨韵灰',
		'pdata-code': '',
		'imgpath': 'img_zwf/sj2.jpg',
		'nlink': '',
		'ntitle': '国美 (GOME) K1 4GB+64GB 移动联通电信 手机 虹膜解锁 墨韵灰',
		'ndata-code': '',
		'model': '国美 (GOME) K1 4GB+64GB 移动联通电信 手机 虹膜解锁 墨韵灰',
		'price': '¥2699.00',
		'blink': '',
		'bdata-code': ''
	},{
		'plink': '',
		'ptitle': '华为畅享7 Plus（TRT-AL00）3GB+32GB香槟金',
		'pdata-code': '',
		'imgpath': 'img_zwf/sj3.jpg',
		'nlink': '',
		'ntitle': '华为畅享7 Plus（TRT-AL00）3GB+32GB香槟金',
		'ndata-code': '',
		'model': '华为畅享7 Plus（TRT-AL00）3GB+32GB香槟金',
		'price': '¥1499.00',
		'blink': '',
		'bdata-code': ''
	},{
		'plink': '',
		'ptitle': 'OPPO R9s 双卡双待4G+64G全网通版 黑色',
		'pdata-code': '',
		'imgpath': 'img_zwf/sj4.jpg',
		'nlink': '',
		'ntitle': 'OPPO R9s 双卡双待4G+64G全网通版 黑色',
		'ndata-code': '',
		'model': 'OPPO R9s 双卡双待4G+64G全网通版 黑色',
		'price': '¥2799.00',
		'blink': '',
		'bdata-code': ''
	}
];
var templates = $.templates("#contentarea");
var htmlOutput = templates.render(DataOfnSearchWarp);
$('#hot-list').html(htmlOutput);

$('#fc-common-show').click(
	function(){
  		$('#fc-common-show').hide();
		$('#fc-common-hide').css({
			'display': 'inline-block'
		});
		$('.fc-hide').css({
			'display': 'block'
		})
	}
);
$('#fc-common-hide').click(
	function(){
  		$('#fc-common-show').show();
		$('#fc-common-hide').css({
			'display': 'none'
		});
		$('.fc-hide').css({
			'display': 'none'
		})
	}
);

var DataOfdpjx = [
	{
		'plink_1': '',
		'imgpath_1': 'img_zwf/dpjx-1.jpg',
		'price_1': '153.0',
		'nlink_1': '',
		'name_1': '天语（K-Touch）N1移动/联通2G老年老人手机 直板按键老人机 双卡双待(香槟金)',
		
		'plink_2': '',
		'imgpath_2': 'img_zwf/sj1.jpg',
		'price_2': '5688.0',
		'nlink_2': '',
		'name_2': '三星(SAMSUNG) Galaxy S8(G9500) 全网通 手机 谜夜黑 4G',
		'introduce_2': '三星S8！ 全视曲面屏！突破所限，大有可能！'
	}
];
var dpjx = $.templates("#contentarea-dpjx");
var dpjxOutput = dpjx.render(DataOfdpjx);
$('#prdRight-1').html(dpjxOutput);


var DataOflist = [
	data0 = [
	{
		'istrue': '1',
		one: '单件',
		two: '2件套',
		three: '3件套',
		'href': '',
		'title': 'Apple iPhone7 32G 黑色 移动联通电信4G手机',
		'alt': 'Apple iPhone7 32G 黑色 移动联通电信4G手机',
		'imgpath': 'img_zwf/b-list_1_s-1.jpg',
		'isone': '0',
		'smallimgpath_1': 'img_zwf/list_1_s-1.jpg',
		'smallimgpath_2': 'img_zwf/list_1_s-2.jpg',
		'smallimgpath_3': 'img_zwf/list_1_s-3.jpg',
		'price': '¥4888',
		title: 'Apple iPhone7 32G 黑色 移动联通电信4G手机',
		"p": '采用iOS 10系统，配置A10芯片。图像防抖功能，配置了4-LED',
		'ahref': '',
		'data': '17',

		'title_1': '百利威iPhone7(32G)黑套装',
		'alt_1': '百利威iPhone7(32G)黑套装',
		'imgpath_1': 'img_zwf/list_1-2.jpg',
		'price_1': '¥5020.00',
		title_1: '百利威iPhone7(32G)黑套装',
		"p_1": 'Apple手机iPhone7(32G)黑+百利威iPhone7',
		'ahref_1': '',
		'data_1': '0',

		'title_2': 'iPhone7 32G 黑色+黑客手机壳膜套装',
		'alt_2': 'iPhone7 32G 黑色+黑客手机壳膜套装',
		'imgpath_2': 'img_zwf/list_1-3.jpg',
		'price_2': '¥5008.00',
		title_2: 'iPhone7 32G 黑色+黑客手机壳膜套装',
		"p_2": 'Apple iPhone7 32G 黑色 移动联通电信4G手机',
		'ahref_2': '',
		'data_2': '0'
	},{
		'istrue': '0',
		'href': '',
		'title': '三星(SAMSUNG)Galaxy S8(G9500)',
		'alt': '三星(SAMSUNG)Galaxy S8(G9500)',
		'imgpath': 'img_zwf/b-list_2_s-1.jpg',
		'isone': '0',
		'smallimgpath_1': 'img_zwf/list_2_s-1.jpg',
		'smallimgpath_2': 'img_zwf/list_2_s-2.jpg',
		'smallimgpath_3': 'img_zwf/list_2_s-3.jpg',
		'price': '¥5688',
		title: '三星(SAMSUNG)Galaxy S8(G9500)',
		"p": '三星S8雾屿蓝！全网首销！全视曲面',
		'ahref': '',
		'data': '24'
	},{
		'istrue': '0',
		'href': '',
		'title': '魅族手机魅蓝5S(M612Q)月光银3G+32G',
		'alt': '魅族手机魅蓝5S(M612Q)月光银3G+32G',
		'imgpath': 'img_zwf/b-list_3_s-1.jpg',
		'isone': '0',
		'smallimgpath_1': 'img_zwf/list_3_s-1.jpg',
		'smallimgpath_2': 'img_zwf/list_3_s-2.jpg',
		'smallimgpath_3': 'img_zwf/list_3_s-3.jpg',
		'price': '¥999',
		title: '魅族手机魅蓝5S(M612Q)月光银3G+32G',
		"p": '金属一体化机身 18W高速快充 八核处理器',
		'ahref': '',
		'data': '641'
	},{
		'istrue': '0',
		'href': '',
		'title': '华为 HUAWEI nova 4GB+64GB版 全网通',
		'alt': '华为 HUAWEI nova 4GB+64GB版 全网通',
		'imgpath': 'img_zwf/b-list_4_s-1.jpg',
		'isone': '0',
		'smallimgpath_1': 'img_zwf/list_4_s-1.jpg',
		'smallimgpath_2': 'img_zwf/list_4_s-2.jpg',
		'smallimgpath_3': 'img_zwf/list_4_s-3.jpg',
		'price': '¥2199',
		title: '华为 HUAWEI nova 4GB+64GB版 全网通',
		"p": '“我的手机我漂亮”5英寸显示屏 实时美妆',
		'ahref': '',
		'data': '706'
	}],
	data1 = [
	{
		'istrue': '0',
		'href': '',
		'title': '魅族 魅蓝Note5全网通公开版 32GB 星辰黑',
		'alt': '魅族 魅蓝Note5全网通公开版 32GB 星辰黑',
		'imgpath': 'img_zwf/b-list_5_s-1.jpg',
		'isone': '0',
		'smallimgpath_1': 'img_zwf/list_5_s-1.jpg',
		'smallimgpath_2': 'img_zwf/list_5_s-2.jpg',
		'smallimgpath_3': 'img_zwf/list_5_s-3.jpg',
		'price': '¥1099.00',
		title: '魅族 魅蓝Note5全网通公开版 32GB 星辰黑',
		"p": '赠：奔腾电吹风*1钢化膜*1硅胶套*1.5',
		'ahref': '',
		'data': '2351'
	},{
		'istrue': '0',
		'href': '',
		'title': '荣耀8（FRD-AL10）4GB+64GB全网通',
		'alt': '荣耀8（FRD-AL10）4GB+64GB全网通',
		'imgpath': 'img_zwf/b-list_6_s-1.jpg',
		'isone': '0',
		'smallimgpath_1': 'img_zwf/list_6_s-1.jpg',
		'smallimgpath_2': 'img_zwf/list_6_s-2.jpg',
		'smallimgpath_3': 'img_zwf/list_6_s-3.jpg',
		'price': '¥2299.00',
		title: '荣耀8（FRD-AL10）4GB+64GB全网通',
		"p": '“双镜头/双2.5D玻璃/双功能指纹”麒零950处理器',
		'ahref': '',
		'data': '2273'
	},{
		'istrue': '0',
		'href': '',
		'title': '索尼(SONY)Xperia Z5 E6683移动联通',
		'alt': '索尼(SONY)Xperia Z5 E6683移动联通',
		'imgpath': 'img_zwf/b-list_7_s-1.jpg',
		'isone': '1',
		'smallimgpath_1': 'img_zwf/list_7_s-1.jpg',
		'price': '¥2299.00',
		title: '索尼(SONY)Xperia Z5 E6683移动联通',
		"p": '端午放假三天，送暴风VR眼镜，货票同行',
		'ahref': '',
		'data': '186'
	},{
		'istrue': '0',
		'href': '',
		'title': '小米 红米 4X 全网通版 2GB+16GB 香槟金',
		'alt': '小米 红米 4X 全网通版 2GB+16GB 香槟金',
		'imgpath': 'img_zwf/b-list_8_s-1.jpg',
		'isone': '1',
		'smallimgpath_1': 'img_zwf/list_8_s-1.jpg',
		'price': '¥2299.00',
		title: '小米 红米 4X 全网通版 2GB+16GB 香槟金',
		"p": '5英寸屏幕，4100毫安大电池长续航！',
		'ahref': '',
		'data': '3268'
	}],
	data2 = [
	{
		'istrue': '0',
		'href': '',
		'title': 'MI手机红米Note4X全网通版3GB+32GB香槟金-4G',
		'alt': 'MI手机红米Note4X全网通版3GB+32GB香槟金-4G',
		'imgpath': 'img_zwf/b-list_9_s-1.jpg',
		'isone': '1',
		'smallimgpath_1': 'img_zwf/list_9_s-1.jpg',
		'price': '¥1038.00',
		title: 'MI手机红米Note4X全网通版3GB+32GB香槟金-4G',
		"p": '',
		'ahref': '',
		'data': '607'
	},{
		'istrue': '0',
		'href': '',
		'title': '乐视（Le）乐2爵迹版（X620）32GB',
		'alt': '乐视（Le）乐2爵迹版（X620）32GB',
		'imgpath': 'img_zwf/b-list_10_s-1.jpg',
		'isone': '1',
		'smallimgpath_1': 'img_zwf/list_10_s-1.jpg',
		'price': '¥1049.00',
		title: '乐视（Le）乐2爵迹版（X620）32GB',
		"p": '十核处理器 5.5英寸 1600万像素摄像头',
		'ahref': '',
		'data': '9962'
	},{
		'istrue': '0',
		'href': '',
		'title': '华为荣耀（honor）荣耀V9 全网通版 移动联通电信4G手机',
		'alt': '华为荣耀（honor）荣耀V9 全网通版 移动联通电信4G手机',
		'imgpath': 'img_zwf/b-list_11_s-1.jpg',
		'isone': '1',
		'smallimgpath_1': 'img_zwf/list_11_s-1.jpg',
		'price': '¥2678.00',
		title: '华为荣耀（honor）荣耀V9 全网通版 移动联通电信4G手机',
		"p": '货票同行，下单赠送钢化膜+保护壳+高清膜',
		'ahref': '',
		'data': '298'
	},{
		'istrue': '0',
		'href': '',
		'title': '华为（Huawei）荣耀8青春版 全网通4G',
		'alt': '华为（Huawei）荣耀8青春版 全网通4G',
		'imgpath': 'img_zwf/b-list_12_s-1.jpg',
		'isone': '1',
		'smallimgpath_1': 'img_zwf/list_12_s-1.jpg',
		'price': '¥1148.00',
		title: '华为（Huawei）荣耀8青春版 全网通4G',
		"p": '货票同行，下单赠送钢化膜+保护壳+高清膜',
		'ahref': '',
		'data': '375'
	}]
];
/*var list = $.templates("#contentarea-list");
var listOutput = list.render(DataOflist[0]);
$('#product-box').html(listOutput);*/
var list = $.templates('#contentarea-list');
var listOutput= list.render(DataOflist[0]);
$('#product-box').html(listOutput);

var page=document.getElementsByClassName('page');
for(var i=0;i<page.length;i++){
	page[i].onclick=function(){
		listOutput = list.render(DataOflist[$(this).index()-1]);
		$('#product-box').html(listOutput);
		$(this).parent().children().removeClass('cur');
		$(this).addClass('cur');
		var item_1=document.getElementsByClassName('product-item');
		for(var i=0;i<item_1.length;i++){
			var num = $(item_1[i]).find('.icon-li');
			for(var j=0;j<num.length;j++){
				num[j].onclick=function(){
					var tables=$(this).parent().parent().parent().prev().find('img');
				 	$(this).parent().children().removeClass('current');
					$(this).addClass('current');
					var arr = $(this).find('img').attr("src").split('/');
					$(tables).attr('src', arr[0] + '/b-' + arr[1] );
				}
			}
		}
		var item=document.getElementsByClassName('product-item');
			for(var i=0;i<item.length;i++){
				var num = $(item[i]).find('.arbitrage-num');
				//console.log($(num[i]));
				for(var j=0;j<num.length;j++){
					num[j].onmouseover=function(){
						var tables=$(this).parent().next().children('div');
					 	$(this).parent().children().removeClass('arbitrage-cur');
						$(this).addClass('arbitrage-cur');
						$(tables).css('display','none');
						//console.log($(this).index());
						$(tables).eq($(this).index()-1).css('display', 'block');
					}
				}
			}
	}
}



var item=document.getElementsByClassName('product-item');
for(var i=0;i<item.length;i++){
	var num = $(item[i]).find('.arbitrage-num');
	//console.log($(num[i]));
	for(var j=0;j<num.length;j++){
		num[j].onmouseover=function(){
			var tables=$(this).parent().next().children('div');
		 	$(this).parent().children().removeClass('arbitrage-cur');
			$(this).addClass('arbitrage-cur');
			$(tables).css('display','none');
			//console.log($(this).index());
			$(tables).eq($(this).index()-1).css('display', 'block');
		}
	}
}

var item_1=document.getElementsByClassName('product-item');
for(var i=0;i<item_1.length;i++){
	var num = $(item_1[i]).find('.icon-li');
	for(var j=0;j<num.length;j++){
		num[j].onclick=function(){
			var tables=$(this).parent().parent().parent().prev().find('img');
		 	$(this).parent().children().removeClass('current');
			$(this).addClass('current');
			var arr = $(this).find('img').attr("src").split('/');
			$(tables).attr('src', arr[0] + '/b-' + arr[1] );
		}
	}
}


var DataOftgsp = [
	{
		'href': '',
		'imgpath': 'img_zwf/tuiguang-1.jpg',
		'price': '¥3378.0',
		'name': '苹果（Apple）iPhone6S/iPhone6S Plus16G/32G/64G/128G版 移动联通电信4G手机(玫瑰金 iPhone6S)',
		'p': '货票同行，下单赠送钢化膜+保护壳+高清膜+绕线器+手机支架+店内保修两年服务！'
	},{
		'href': '',
		'imgpath': 'img_zwf/tuiguang-2.jpg',
		'price': '¥3899.0',
		'name': '华为 HUAWEI Mate 9 4GB+64GB 全网通版 黑色',
		'p': '麒麟960芯片，第二代徕卡双摄镜头，2倍双摄变焦，4000mAh大电池'
	},{
		'href': '',
		'imgpath': 'img_zwf/tuiguang-3.jpg',
		'price': '¥5788.0',
		'name': 'Apple iPhone 7 Plus 32G 黑色 移动联通电信4G手机',
		'p': '采用iOS 10系统，配置A10芯片。图像防抖功能，配置了4-LED True Tone 闪光灯'
	},{
		'href': '',
		'imgpath': 'img_zwf/tuiguang-4.jpg',
		'price': '¥2583.0',
		'name': '苹果/APPLE iPhone6 16G 32G 64G移动联通电信4G手机 苹果6(金色)',
		'p': '【机打发票】顺丰速发！购机即送手机壳+手机膜+厂商联保+店铺延保两年'
	},{
		'href': '',
		'imgpath': 'img_zwf/tuiguang-5.jpg',
		'price': '¥2599.0',
		'name': 'OPPO R9s 双卡双待4G+64G全网通版 玫瑰金',
		'p': '前后1600万像素，3010mAh大电池'
	},{
		'href': '',
		'imgpath': 'img_zwf/tuiguang-6.jpg',
		'price': '¥3499.0',
		'name': 'OPPO手机R9s Plus 全网通6G+64GB 黑',
		'p': '6.0英寸大屏，前后1600万像素！光学防抖！这一刻，更清晰！'
	}
];
var tgsp = $.templates("#contentarea-tgsp");
var tgspOutput = tgsp.render(DataOftgsp);
$('#dsp_bottomTuiGuang').html(tgspOutput);

$('.priceRange-input').click(function(){
  $('.filter-priceRange-box').addClass('filter-priceRange-click');
});
$('.filter-priceRange-box').mouseleave(function(){
   $('.filter-priceRange-box').removeClass('filter-priceRange-click');
});
// var list=document.getelementsbyclassName('');
// for(int i=0;i<list.length;i++){
// 	if(list[i].style.display==block){
// 		list[i].style.display=none;
// 		list[i+1].style.display=block;
// 		break;
// 	}
// }
// $('').css('display','none');
// list[cnt].style.display='block';
