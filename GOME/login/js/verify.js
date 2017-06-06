$('#frm .actin .btnnuw').click(function(){

    var info=new Array();
    info[0]=$('.login-item-name input').val();
    info[1]=$('.login-item-pwd input').val();
    if(info[0].length==0){
    	$('#err-tip p').text('请输入您的用户名');
    	$('#err-tip').css('display','block');

    }
    else if(info[1].length==0){
    	$('#err-tip p').text('请输入您的密码');
    	$('#err-tip').css('display','block');
    }
    else{
    	$('#err-tip').css('display','none');

        $.ajax({  
            url:'../php/login.php',
            data:{
                'info':info
            },  
            type:'get',  
            cache:false,  
            dataType:'json',  
            success:function(data) {
                if(data=='wronginput'){
                    $('#err-tip p').text('用户名不存在，请重新输入');
                    $('#err-tip').css('display','block');
                }
                else if(data=='wrongpwd'){
                    $('#err-tip p').text('用户名或密码不匹配，请重新输入');
                    $('#err-tip').css('display','block');
                }
                else if(data=='ok'){
                    window.location.href="../homepage/index.html";
                }
            },  
            error : function() {  
                alert("异常！");  
            }  
        })
	}
})