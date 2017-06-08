title: 国美在线web小组答辩
speaker: 林阳阳
url: https://github.com/lyyweb/code
transition: slide3
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: moon
usemathjax: yes

[slide]
# 国美在线web小组答辩
## 演讲者:林阳阳
[slide]
# 小组成员
----
> 组长:林阳阳  组员:李豪、陈颖兰、陈金才、张伟芳 	
[slide]
## 项目简介
----
* 模仿国美在线一系列网站，实现页面布局、事件交互、数据加载 {:&.rollIn}
[slide]
# 恨不得外包
----
* 上课基本操作(html css js) {:&.rollIn}
* 一些插件
* 数据库

[slide]

# 出来吧网站们
----
* 国美在线官网 {:&.rollIn} 
* 国美服装网
* 国美旅行网
* 国美折扣活动网
* 登录注册界面
* 手机购买界面
[slide]
# 被解决的困难也就不是困难了
[slide]

# 多
# 如牛毛 {:&.rollIn}
[slide]
[magic data-transition="fadeIn"]
<p style="font-size: 60px;">搜索栏</p>
========
<img src="/img/search.png" alt="">
[/magic]

[slide]
[magic data-transition="fadeIn"]
<p style="font-size: 60px;">正则表达式</p>
<pre><code class="javascript">
	reg1=/^(?:\d+|[a-zA-Z]+|[!@#$%^&*+-]+)$/;

   	reg3=/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*+-]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*+-]+$)(?![\d!@#$%^&*+-]+$)[a-zA-Z\d!@#$%^&*+-]+$/;
</code></pre>

# 静悄悄的多好


[slide]
[magic data-transition="fadeIn"]
<div class="column">
	<p>电梯导航<p>
	<img src="/img/ele.png" alt="" >
</div>
	
========
<div class="column-2">
	<h2>垂直方向</h2>
	<pre><code class="javascript">if (sTop >= height[0]&&sTop<=height[9]) {  
        if ($('.elevator').css('visibility')=='hidden') {
            $('.elevator').css('visibility','visible');
        }  
    }  
    else {  
        if ($('.elevator').css('visibility')=='visible') {  
            $('.elevator').css('visibility','hidden');  
        }  
    }
	var cnt  = Math.floor((sTop-height[0]+100)/541);	
    if(cnt<=10){
    	$('.ele_pic').children('li').children('.eti').css('display', 'none');
    	$('.ele_pic').children('li').eq(cnt).children('.eti').css('display', 'block');
    }
}
var len=$('.ele_pic li').length;
			for(var i =0;i< len;i++){
			$('.ele_pic').children('li').eq(i).click(function() {
			/* Act on the event */
			var cnt=$(this).index();
			$('.ele_pic').children('li').children('.eti').css('display', 'none');
			$('.ele_pic').children('li').eq(cnt).children('.eti').css('display', 'block');
			$('body').animate({'scrollTop':height[cnt]}, 800);
		});W
		}

    </code></pre>
</div>



==========
<div class="column-2">
	<h2>水平方向</h2>
	<pre><code class="javascript">
	function suitself() {
		var width = $(window).width();
		var sTop = $(window).scrollTop();  
	    var sTop = parseInt(sTop);  
		if(width< 1000){
			$('.elevator').css('display', 'none');
		}
		else
		{	
			$('.elevator').css('display', 'block');
			var left = width/2-600-60-15;
			$('.elevator').css('left', left+'px');
		}
	}
	</code></pre>
</div>
[/magic]
[slide]
[magic data-transition="fadeIn"]
<p style="font-size: 60px;">助我一臂之力</p>
========
<p style="font-size: 40px;">轮播图</p>
<img src="/img/lunbo.jpg" alt="">
========
<pre><code class="javascript">
	return this.each(function(){
			var _lubo=$(this);
			var _box=_lubo.children('.lubon_box');
			var cirlen=$('.lunbo_box').children(Li).length;
</code></pre>
========
<pre><code class="javascript">
	return this.each(function(){
			var _lubo=$(this);
			var _box=_lubon.children('.lubon_box');
			var cirlen=_box.children(Li).length;
</code></pre>
[/magic]
[slide]
[magic]
# 互通有无
## 连接后端数据库
=========
* 
* 
* 
[/magic]
[slide]
[magic]
<h1>代码变短,技术渐长</h1>
========
<span class="text-warning" style="font-size: 110px;">14351</span>
===========
<span class="text-success" style="font-size: 110px;">1980</span>
[/magic]
[slide]
[magic]
<p class="header">总结</p>
===========
<p class="header">简洁至上</p>
==========
<p class="header">巧借东风</p>
==========
<p class="header">交流沟通</p>
[/magic]
[slide]
# Thank You