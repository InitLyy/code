function GetRTime(){
    var EndTime= new Date('2017/07/01 00:00:00');
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();
    var h=0;
    var m=0;
    var s=0;
    if(t>=0){
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
    }
    if(h < 10){ 
        h = '0' + h; 
    } 
    if(m < 10){ 
        m = '0' + m; 
    } 
    if(s < 10){
        s = '0' + s; 
    }
    document.getElementById('time_h').innerHTML = h ;
    document.getElementById('time_m').innerHTML = m ;
    document.getElementById('time_s').innerHTML = s ;
}

setInterval(GetRTime,1000);

GetRTime();

$('#p_name_1').mouseenter(function(){
    $('#p_name_1').css('color','#e3101e');
});

$('#p_name_1').mouseleave(function(){
    $('#p_name_1').css('color', '#5e5e5e');
});


$('#p_name_2').mouseenter(function(){
    $('#p_name_2').css('color','#e3101e');
});
$('#p_name_2').mouseleave(function(){
    $('#p_name_2').css('color', '#5e5e5e');
});

$('#p_name_3').mouseenter(function(){
    $('#p_name_3').css('color','#e3101e');
});
$('#p_name_3').mouseleave(function(){
    $('#p_name_3').css('color', '#5e5e5e');
});

$('#p_name_4').mouseenter(function(){
    $('#p_name_4').css('color','#e3101e');
});
$('#p_name_4').mouseleave(function(){
    $('#p_name_4').css('color', '#5e5e5e');
});

var items=$('.zwf-gome-second img');
    items.each(function(){
    $(this).on('mouseenter',function(){
        $(this).animate({opacity:.8}, 40);
        var thisobj=$(this);
        setTimeout(function(){
            $(thisobj).animate({opacity:1}, 300);
        },500);
    })
});


