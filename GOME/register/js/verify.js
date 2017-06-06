var flag=0;

// 用户名
$('.form-list .items-1 .i-text').focus(function(){
	$(this).css('border-color','#ccc');
	$('#nameTips').css('display','none');
	$('#nameFocusbox').css('display','inline-block');
	$('#nameSuc').css('display', 'none');
	$('#nameTips-2').css('display', 'none');
	$('#nameTips-1').css('display', 'none');
	$('#nameTips').css('display', 'none');


})
$('.form-list .items-1 .i-text').blur(function(){
	$('#nameFocusbox').css('display','none');

	var username=$(this).val();
	if(username.length==0){
		$(this).css('border-color','#FF5757');
		$('#nameTips').css('display','block');
		$('#nameTips').text('请输入用户名');
	}
	else{
		reg=/^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9_\u4E00-\u9FA5]{3,19}$/;
		if(username.length<4 || username.length>20){
			$('#nameTips').css('display', 'block');
			$('#nameTips-1').css('display', 'block');
			$(this).css('border-color','#FF5757');
		}
		else if(!reg.test(username)){
			$('#nameTips').css('display', 'block');
			$('#nameTips-1').css('display', 'block');
			$('#nameTips-1').text('用户名只能由中文、英文、数字及"-"、"_"组成');
			$(this).css('border-color','#FF5757');
		}
		else
		{
			var info=new Array();
	    	info[0]=username;
		    $.ajax({  
				url:'../php/userVerify.php',
				data:{
					'info':info
				},  
				type:'get',  
				cache:false,  
				dataType:'json',  
				success:function(data) {
					
					if(data=='ok'){
						$(this).css('border-color','#ccc');
						$('#nameSuc').css('display', 'block');
						flag+=1;
					}
		    		else if(data=='wrong'){
						$('#nameTips').css('display', 'block');
						$('#nameTips-2').css('display', 'block');
						$(this).css('border-color','#FF5757');
		    		}
				}
			})
			
		}
	}
})
// 输入密码
$('.form-list .items-2 .i-text').focus(function(){
	$(this).css('border-color','#ccc');
	$('#passwordFocusbox').css('display','inline-block');
	$('#passwordTips2').css('display','none');
	$('#capsLocked').css('display','none');
	$('#passwordSuc').css('display', 'none');

})
$('.form-list .items-2 .i-text').blur(function(){
	$('#passwordFocusbox').css('display','none');
	var pwd=$(this).val();
	reg=/^([A-Z]|[a-z]|[0-9]|[`~!@#$%^&*()+=|{}.<>~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]){6,20}$/;
	alpha=/^(\w)\1*$/;
	if(pwd.length==0){
		$(this).css('border-color','#FF5757');
		$('#passwordTips2').css('display','block');
		$('#passwordTips2').text('请输入密码');
	}
	else if(pwd.length<6 || pwd.length>20){
		$('#passwordTips2').css('display', 'block');
	}
	else if(!reg.test(pwd)){
		$('#passwordTips2').css('display','block');
		$('#passwordTips2').text('非法字符，请使用字母加数字或符号的组合，6-20个字符');

	}
	else if(alpha.test(pwd)){
		if(pwd[0]>='0' && pwd[0]<='9'){
			$('#passwordTips2').css('display','block');
			$('#passwordTips2').text('不能为同一数字');
		}
		else{
			$('#passwordTips2').css('display','block');
			$('#passwordTips2').text('不能为同一字母');
		}
	}
	else{
		
		$(this).css('border-color','#ccc');
		$('#passwordSuc').css('display', 'block');
		flag+=1;
	}

})
//监听大写
$('.form-list .items-2 .i-text').bind('input propertychange', function() {
   	var pwd=$(this).val();
    var len=pwd.length;
	if(pwd[len-1]>='A'&&pwd[len-1]<='Z'){
		$('#capsLocked').css('display','block');
	}
	else{
		$('#capsLocked').css('display','none');
	}
});
//监听密码强度
$('.form-list .items-2 .i-text').bind('input propertychange', function() {
   var pwd=$(this).val();
   if(pwd.length!=0){
   		$('#pwd-safe').css('display', 'block');

   		reg1=/^(?:\d+|[a-zA-Z]+|[!@#$%^&*+-]+)$/;
   		reg3=/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*+-]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*+-]+$)(?![\d!@#$%^&*+-]+$)[a-zA-Z\d!@#$%^&*+-]+$/;
   		
   		if(reg1.test(pwd)){
   			$('.pw-bar').css('width', '40px');

   		}
   		else if(reg3.test(pwd)){
   			$('.pw-bar').css('width', '122px');

   		}
   		else{
   			$('.pw-bar').css('width', '81px');
   		}
   }
   else{
   		$('#pwd-safe').css('display', 'none');
   }

});

// 确认密码
$('.form-list .items-3 .i-text').focus(function(){
	$(this).css('border-color','#ccc');
	$('#passwordTips').css('display','block');
	$('#confirmPasswordTips').css('display','none');
	$('#confirmPasswordSuc').css('display', 'none');
})

$('.form-list .items-3 .i-text').blur(function(){
	$('#passwordTips').css('display','none');
	var cnfpwd=$(this).val();
	if(cnfpwd.length==0){
		$(this).css('border-color','#FF5757');
		$('#confirmPasswordTips').css('display','block');
	}
	else{
		var pwd=$('.form-list .items-2 .i-text').val();
		if(cnfpwd!=pwd)
		{
			$(this).css('border-color','#FF5757');
			$('#confirmPasswordTips').css('display','block');
			$('#confirmPasswordTips').text('两次密码不一致');
		}
		else{
			$('#confirmPasswordSuc').css('display', 'block');
			flag+=1;
		}
		
	}

})

// 手机号码
$('.form-list .items-4 .i-text').focus(function(){
	$(this).css('border-color','#ccc');
	$('#checkMobileSucc').css('display', 'none');
	$('#checkMobileTipError1').css('display', 'none');
	$('#checkMobileTipError2').css('display', 'none');
	
})
$('.form-list .items-4 .i-text').blur(function(){
	var phone=$(this).val();
	reg=/^0?(13[0-9]|15[012356789]|18[01236789]|14[57])[0-9]{8}$/;
	if(phone.length==0){
		$(this).css('border-color','#FF5757');
		$('#checkMobileTipError1').css('display','inline-block');
		$('.rule-box-text').text('手机号码不能为空');
	}
	else if(!reg.test(phone)){
		$(this).css('border-color','#FF5757');
		$('#checkMobileTipError1').css('display','inline-block');
	}
	else{
		var info=new Array();
    	info[0]=phone;
	    $.ajax({  
			url:'../php/phoneVerify.php',
			data:{
				'info':info
			},  
			type:'get',  
			cache:false,  
			dataType:'json',  
			success:function(data) {
				if(data=='ok'){
					$('#checkMobileSucc').css('display', 'block');
					flag+=1;
				}
	    		else if(data=='wrong'){
					$('.form-list .items-4 .i-text').css('border-color','#FF5757');
	    			$('#checkMobileTipError2').css('display','inline-block');
	    		}
			}
		})
	}
})




//短信验证
$('.form-list .items-5 .i-text').focus(function(){
	$(this).css('border-color','#ccc');
	$('#verifyCodeMsgbox').css('display', 'none');
})
$('.form-list .items-5 .i-text').blur(function(){
	var mesg=$(this).val();
	if(mesg.length==0){
		$(this).css('border-color','#FF5757');
		$('#verifyCodeMsgbox').css('display', 'inline-block');
		$('#verifyCodeTips').css('display', 'block');
	}
	else if(mesg!=8888){
		$(this).css('border-color','#FF5757');
		$('#verifyCodeMsgbox').css('display', 'inline-block');
		$('#verifyCodeTips').css('display', 'block');
		$('#verifyCodeTips').text('验证码错误');
	}
	else{
		$('#checkSuc').css('display', 'block');
		flag+=1;
	}
})

// background-color: rgb(250, 255, 189);

$('.reg-btn').click(function(){
	if(flag==5){
		var info=new Array();
		info[0]=$('.form-list .items-1 .i-text').val();
    	info[1]=$('.form-list .items-2 .i-text').val();
    	info[2]=$('.form-list .items-4 .i-text').val();
	    $.ajax({  
			url:'../php/register.php',
			data:{
				'info':info
			},  
			type:'get',  
			cache:false,  
			dataType:'json',  
			success:function(data) {
				if(data=='ok')
	    			alert('注册成功');
	    		else
	    			alert('注册失败,数据库崩溃!');
			}
		})
	}
})