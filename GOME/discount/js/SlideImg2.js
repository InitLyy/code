;(function($){
	
	$.fn.SlideImg2=function(options){
		
		// var defaults={

		// }
	
		// //通过覆盖来传参数
		// var options=$.extend(defaults,options);
		
		return this.each(function(){

			var _slide=jQuery('.slide2');

			var _box=jQuery('.slide_box2');

			var _this=jQuery(this); // 

			var slideHei=_box.height();

			var Over='mouseover';

			var Out='mouseout';

			var Click='click';

			var Li="li";

			var _cirBox='.cir_box2';

			var cirOn='cir_on';

			var _cirOn='.cir_on';

			var cirlen=_box.children(Li).length; //圆点的数量  图片的数量

			var slideTime=6000; //轮播时间

			var switchTime=400;//图片切换时间

			cir();

			Btn();

		//根据图片的数量来生成圆点

			function cir(){

				_slide.append('<ul class="cir_box2"></ul>');

				var cir_box=jQuery('.cir_box2');

				for(var i=0; i<cirlen;i++){

					cir_box.append('<li style="" value="'+i+'"><span class="bg2"></span></li>');
				}

				var cir_dss=cir_box.width();

				// cir_box.css({

				// 	left:'0',

				// 	marginRight: '1px',

				// 	bottom:'0' 

				// });

				cir_box.children(Li).eq(0).addClass(cirOn);
				var now=jQuery(_cirOn);
				now.children('.bg2').addClass('CirOn');

			}

		//生成左右按钮

			function Btn(){

				_slide.append('<div class="slide_btn2"></div>');

				var _btn=jQuery('.slide_btn2');

				_btn.append('<div class="left_btn2"></div><div class="right_btn2"></div>');

				var leftBtn=jQuery('.left_btn2');

				var rightBtn=jQuery('.right_btn2');

			//点击左面按钮

				leftBtn.bind(Click,function(){

				var cir_box=jQuery(_cirBox);

			 	var onLen=jQuery(_cirOn).val();	

				_box.children(Li).eq(onLen).stop(false,false).animate({

					opacity:0

				},switchTime);

				if(onLen==0){

			 		onLen=cirlen;

			 	}

				_box.children(Li).eq(onLen-1).stop(false,false).animate({

					opacity:1

				 },switchTime);
				
				cir_box.children(Li).eq(onLen-1).addClass(cirOn).siblings().removeClass(cirOn);
				var now=jQuery(_cirOn);
				now.children('.bg2').addClass('CirOn');
				now.siblings().children('.bg2').removeClass('CirOn');
				})

			//点击右面按钮

				rightBtn.bind(Click,function(){

				var cir_box=jQuery(_cirBox);

			 	var onLen=jQuery(_cirOn).val();	

				_box.children(Li).eq(onLen).stop(false,false).animate({

					opacity:0

				},switchTime);

				if(onLen==cirlen-1){

				 		onLen=-1;

				 	}

				_box.children(Li).eq(onLen+1).stop(false,false).animate({

					opacity:1

				 },switchTime);
				
				cir_box.children(Li).eq(onLen+1).addClass(cirOn).siblings().removeClass(cirOn);
				var now=jQuery(_cirOn);
				now.children('.bg2').addClass('CirOn');
				now.siblings().children('.bg2').removeClass('CirOn');
				})
			}

		//定时器

			 int=setInterval(clock,slideTime);

			 function clock(){

			 	var cir_box=jQuery(_cirBox);

			 	var onLen=jQuery(_cirOn).val();	

				_box.children(Li).eq(onLen).stop(false,false).animate({

					opacity:0

				},switchTime);

				if(onLen==cirlen-1){

				 		onLen=-1;

				 	}

				_box.children(Li).eq(onLen+1).stop(false,false).animate({

					opacity:1

				 },switchTime);
				
				cir_box.children(Li).eq(onLen+1).addClass(cirOn).siblings().removeClass(cirOn);	
				var now=jQuery(_cirOn);
				now.children('.bg2').addClass('CirOn');
				now.siblings().children('.bg2').removeClass('CirOn');		 
			}

		// 鼠标在图片上 关闭定时器
			
			_slide.bind(Over,function(){

				clearTimeout(int);

			});

			_slide.bind(Out,function(){

				int=setInterval(clock,slideTime);

			});

		//鼠标划过圆点 切换图片

			jQuery(_cirBox).children(Li).bind(Over,function(){

				var inde = jQuery(this).index();

				jQuery(this).addClass(cirOn).siblings().removeClass(cirOn);
				var now=jQuery(_cirOn);
				now.children('.bg2').addClass('CirOn');
				now.siblings().children('.bg2').removeClass('CirOn');

				_box.children(Li).stop(false,false).animate({

					opacity:0

				},switchTime);

				_box.children(Li).eq(inde).stop(false,false).animate({

					opacity:1

				},switchTime);

			});


		});

	}
	
})(jQuery);


/*调用*/

// <script type="text/javascript">

// $(function(){

//     $(".lubo").lubo({

//     });

// })

// </script>



/*css样式*/

// <style type="text/css">
//   *{ margin:0; padding:0; }
//   img{ display: block; border:none;}
//   ul,li{ list-style: none;}
//   .lubo{ width: 100%;clear: both; position: relative; height:368px;}
//   .lubo_box{ position: relative; width: 100%; height:368px; }
//   .lubo_box li{ float: left;position: absolute; top: 0; left: 0; width: 100%; height:368px; opacity: 0;filter:alpha(opacity=0);}
//   .lubo_box li img{ width: 100%; height: 368px;}

//   /*圆点*/
//   .cir_box{ overflow: hidden; position: absolute; z-index: 100;}
//   .cir_box li{ float: left; width: 30px; height: 5px; margin:0 5px; cursor: pointer; background: #fff; opacity: 0.8;filter:alpha(opacity=80);}
//   .cir_on{ background: #000 !important;}

//   /*按钮*/
//   .lubo_btn{ position: absolute; width: 100%; top: 140px;}
//   .left_btn, .right_btn{ width: 30px; height: 80px; background: #000;opacity: 0.8;filter:alpha(opacity=80); cursor: pointer; color: #fff; line-height: 80px; font-size: 30px; text-align: center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
//   .left_btn{ float: left;}
//   .right_btn{ float: right;}
// </style>

/*html*/
// <div class="lubo">
//   <ul class="lubo_box">
//     <li style=" opacity: 1;filter:alpha(opacity=100);"><a href=""><img src="1.jpeg"></a></li>
//     <li><a href=""><img src="2.jpeg"></a></li>
//     <li><a href=""><img src="3.jpeg"></a></li>
//     <li><a href=""><img src="4.jpeg"></a></li>
//     <li><a href=""><img src="5.jpeg"></a></li>
//     <li><a href=""><img src="2.jpeg"></a></li>
//     <li><a href=""><img src="3.jpeg"></a></li>
//     <li><a href=""><img src="4.jpeg"></a></li>
//     <li><a href=""><img src="5.jpeg"></a></li>
//   </ul>
// </div>



