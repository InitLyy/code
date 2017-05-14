function GetRTime(){
    var EndTime= new Date('2017/06/01 00:00:00');
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
        h = "0" + h; 
    } 
    if(m < 10){ 
        m = "0" + m; 
    } 
    if(s < 10){
        s = "0" + s; 
    }
    document.getElementById("time_h").innerHTML = h ;
    document.getElementById("time_m").innerHTML = m ;
    document.getElementById("time_s").innerHTML = s ;
    }
setInterval(GetRTime,0);

GetRTime();

$("#p_name_1").mouseenter(function(){
  $("#p_name_1").css("color","#e3101e");
});
 $("#p_name_1").mouseleave(function(){
  $("#p_name_1").css("color", "#5e5e5e");
});


$("#p_name_2").mouseenter(function(){
  $("#p_name_2").css("color","#e3101e");
});
 $("#p_name_2").mouseleave(function(){
  $("#p_name_2").css("color", "#5e5e5e");
});

$("#p_name_3").mouseenter(function(){
  $("#p_name_3").css("color","#e3101e");
});
 $("#p_name_3").mouseleave(function(){
  $("#p_name_3").css("color", "#5e5e5e");
});

$("#p_name_4").mouseenter(function(){
  $("#p_name_4").css("color","#e3101e");
});
 $("#p_name_4").mouseleave(function(){
  $("#p_name_4").css("color", "#5e5e5e");
});

$("#bigimg_1-1").mouseenter(function(){
  $("#bigimg_1-1").animate({opacity:'0.8'});
  setTimeout(function(){
  	$("#bigimg_1-1").animate({opacity:'1.0'});
  }, 500);
});

$("#bigimg_2-1").mouseenter(function(){
  $("#bigimg_2-1").animate({opacity: "0.8"});
  setTimeout(function(){
  	$("#bigimg_2-1").animate({opacity: "1.0"});
  }, 400);
});

$("#bigimg_2-2").mouseenter(function(){
  $("#bigimg_2-2").animate({opacity: "0.8"});
  setTimeout(function(){
  	$("#bigimg_2-2").animate({opacity: "1.0"});
  }, 400);
});

$("#midimg_2-1").mouseenter(function(){
  $("#midimg_2-1").animate({opacity: "0.8"});
  setTimeout(function(){
  	$("#midimg_2-1").animate({opacity: "1.0"});
  }, 400);
});

$("#midimg_2-2").mouseenter(function(){
  $("#midimg_2-2").animate({opacity: "0.8"});
  setTimeout(function(){
  	$("#midimg_2-2").animate({opacity: "1.0"});
  }, 400);
});

$("#midimg_2-3").mouseenter(function(){
  $("#midimg_2-3").animate({opacity: "0.8"});
  setTimeout(function(){
  	$("#midimg_2-3").animate({opacity: "1.0"});
  }, 400);
});

$("#midimg_2-4").mouseenter(function(){
  $("#midimg_2-4").animate({opacity: "0.8"});
  setTimeout(function(){
  	$("#midimg_2-4").animate({opacity: "1.0"});
  }, 400);
});

$("#midimg_2-5").mouseenter(function(){
  $("#midimg_2-5").animate({opacity: "0.8"});
  setTimeout(function(){
  	$("#midimg_2-5").animate({opacity: "1.0"});
  }, 400);
});

$("#midimg_2-6").mouseenter(function(){
  $("#midimg_2-6").animate({opacity: "0.8"});
  setTimeout(function(){
  	$("#midimg_2-6").animate({opacity: "1.0"});
  }, 400);
});



/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-09 18:01:07
 * @version $Id$
 */

