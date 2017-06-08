function scroll() {	
	t = parseInt(x.css('top'));
	y.css('top', '40px');	
	x.animate({top: t - 40 + 'px'}, 'slow');
	if(Math.abs(t) == h - 40) {
		y.animate({top:'0px'}, 'slow');
		z=x;
		x=y;
		y=z;
	}
	t=setTimeout('scroll()',3000);
}

function Slide() {
	$(".first-line").mouseover(function() {
		$("li.listtab").hide();
		$(".ser_cur").hide();
		var activeTab = $(this).attr('rel');
		var left = $(this).attr('value');
		$(".wrap-box").slideDown("slow");
		$(".ser_cur").css("left",left);
		$(".ser_cur").show();
		$("#" + activeTab).show();
	});
}

function Close() {
	$(".close-icon").click(function(){
		$(".wrap-box").slideUp("slow", function() {
			$(".listtab").hide();
		});
	});
	$(".ser_cur").hide();
}

function nav1() {
	var link1 = document.querySelectorAll("._tab");
	var list1 = document.querySelectorAll(".tab-con");
	for (var i=0; i<link1.length; i++) {
    link1[i].index=i;
    link1[i].onclick=function () {
    	for (var k=0; k<i; k++)
    		link1[k].classList.remove("selected");
    	for (var k=i+1; k<link1.length; k++)
    		link1[k].classList.remove("selected");
		for (var j=0; j<list1.length; j++) {
		list1[j].style.display="none";
		}
		list1[(this.index)].style.display="block";
		this.classList.add("selected");
    }
  }
}

function nav2() {
	var link2 = document.querySelectorAll(".tab2");
	var list2 = document.querySelectorAll(".list2");
	for (var i=0; i<link2.length; i++) {
    link2[i].index=i;
    link2[i].onmouseover=function () {
    	for (var k=0; k<i; k++)
    		link2[k].classList.remove("selected");
    	for (var k=i+1; k<link2.length; k++)
    		link2[k].classList.remove("selected");
		for (var j=0; j<list2.length; j++) {
		list2[j].style.display="none";
		}
		list2[(this.index)].style.display="block";
		this.classList.add("selected");
    }
  }
}

function nav4() {
	var link4 = document.querySelectorAll(".tab4");
	var list4 = document.querySelectorAll(".list4");
	for (var i=0; i<link4.length; i++) {
    link4[i].index=i;
    link4[i].onmouseover=function () {
    	for (var k=0; k<i; k++)
    		link4[k].classList.remove("selected");
    	for (var k=i+1; k<link4.length; k++)
    		link4[k].classList.remove("selected");
		for (var j=0; j<list4.length; j++) {
		list4[j].style.display="none";
		}
		list4[(this.index)].style.display="block";
		this.classList.add("selected");
    }
  }
}

function radio() {
	var radio=document.querySelectorAll(".radio");
	for (var i=0; i<radio.length; i++) {
		radio[i].index=i;
		radio[i].onclick=function() {
			for (var j=0; j<radio.length; j++)
				radio[j].classList.remove("checked");
			this.classList.add("checked");
		}
	}
}

function selgame() {
	$("#sel-game").click(function() {
		$(".datalist1").toggle();
	})
}

function sel1() {
	$(".datalist1 li").click(function() {
		var info=$(this).attr('title');
		$(".td-sel1").attr('value', info);
		$(".datalist1").hide();
	})
}

function selgame2() {
	$("#val-sel").click(function() {
		$(".datalist2").toggle();
	})
}

function sel2() {
	$(".datalist2 li").click(function() {
		var info=$(this).text();
		$(".val-sel").attr('value', info);
		var value=$(this).attr('title');
		$(".value span").empty();
		$(".value span").append(value);
		$(".datalist2").hide();
	})
}

function selgame3() {
	$(".dp_1").click(function() {
		$("#price").toggle();
	})
}

function sel3() {
	$("#price li").click(function() {
		var info=$(this).text();
		$("#price1").attr('value', info);
		var value=$(this).attr('data-pri');
		$("#money1").empty();
		$("#money1").append(value);
		$("#price").hide();
	})
}


$(document).ready(function() {
	$('.temp').html($('.scroll_li').html());
	x = $('.scroll_li');
	y = $('.temp');
	h = $('.scroll_li li').length * 40;
	t = setTimeout(scroll, 3000);
	$(".up").click(function(){
		clearTimeout(t);
		t = parseInt(x.css('top'));
		y.css('top', '40px');	
		x.animate({top: t - 40 + 'px'}, 'slow');
		if(Math.abs(t) == h - 40) {
			y.animate({top:'0px'}, 'slow');
			z=x;
			x=y;
			y=z;
		}
		setTimeout(scroll, 3000);
	});
	$(".down").click(function(){
		clearTimeout(t);
		t = parseInt(x.css('top'));
		y.css('top', '40px');	
		x.animate({top: t + 40 + 'px'}, 'slow');
		if(Math.abs(t) == h - 120) {
			y.animate({top:'-80px'}, 'slow');
			z=x;
			x=y;
			y=z;
		}
		setTimeout(scroll, 3000);
	});
	Slide();
	nav1();
	nav2();
	nav4();
	radio();
	selgame();
	sel1();
	selgame2();
	sel2();
	selgame3();
	sel3();
	Close();
});
	



	
	




