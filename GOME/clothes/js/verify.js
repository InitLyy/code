$(function(){
	$.ajaxSetup({
      async:false
    });
	$.getJSON("../php/getUserInfo.php",function(data){
		$('.gome-top-bar ul .user .user-box span').html('Hi,&nbsp'+data.nickname+'<em></em>'+'<i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i>');
		var jmz = {};
		jmz.GetLength = function(str) {
		  return str.replace(/[\u0391-\uFFE5]/g,"aa").length;
		};
		var cnt=jmz.GetLength(data.nickname);
		$('.gome-top-bar ul .user').css('width',110+cnt*5+'px');
		$('.gome-top-bar ul .login').html('<a href="../login/index.html">退出</a>');
		$('.user-name-word').css('display','none');
		$('.user-name-login').css('display','block');
		$('.user-name-login>p>strong>a').text(data.nickname);
		$('.user-name-pic').css('background','none');
		$('.user-name-pic').html('<img src="img/head.png">');
		$('.user-icon span p').html('我的<ins style="color:#c00;">3</ins>项特权');
		$('.rollintro li').eq(1).children('a').children('i').addClass('redwords');
		$('.rollintro li').eq(2).children('a').children('i').addClass('redwords');
		$('.rollintro li').eq(3).children('a').children('i').addClass('redwords');
		$('.mygome-dropdown strong').html('<a href="">'+data.nickname+'的国美'+'</a>')
	})



 	$.ajax({  
        url:'../php/getUserInfo.php',
        data:{
        	
        },  
        type:'get',  
        cache:false,  
        dataType:'json',  
        success:function(data) {
            $('.gome-top-bar ul .user .user-box span').html('Hi,&nbsp'+data.nickname+'<em></em>'+'<i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i>');
			var jmz = {};
			jmz.GetLength = function(str) {
			  return str.replace(/[\u0391-\uFFE5]/g,"aa").length;
			};
			var cnt=jmz.GetLength(data.nickname);
			$('.gome-top-bar ul .user').css('width',110+cnt*5+'px');
			$('.gome-top-bar ul .login').html('<a href="../login/index.html">退出</a>');
			$('.user-name-word').css('display','none');
			$('.user-name-login').css('display','block');
			$('.user-name-login>p>strong>a').text(data.nickname);
			$('.user-name-pic').css('background','none');
			$('.user-name-pic').html('<img src="img/head.png">');
			$('.user-icon span p').html('我的<ins style="color:#c00;">3</ins>项特权');
			$('.rollintro li').eq(1).children('a').children('i').addClass('redwords');
			$('.rollintro li').eq(2).children('a').children('i').addClass('redwords');
			$('.rollintro li').eq(3).children('a').children('i').addClass('redwords');
        }
    })


	$('.gome-top-bar ul .login a').click(function(){
		if($(this).text()=='退出'){
			$.getJSON("../php/logout.php",function(data){
			})
		}
	})

	

})
