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
	setTimeout(scroll,3000);
}

function Slide() {
	$(".first-line").mouseover(function() {
		$("li.listtab").hide();
		var activeTab = $(this).attr('rel');
		$(".wrap-box").slideDown("slow");
		$("#" + activeTab).show();
	});
}

function Close() {
	$(".close-icon").click(function(){
		$(".wrap-box").slideUp("slow", function() {
			$(".listtab").hide();
		});
	});
}

function nav1() {
	var link1 = document.querySelectorAll(".tab");
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


$(document).ready(function() {
	$('.temp').html($('.scroll_li').html());
	x = $('.scroll_li');
	y = $('.temp');
	h = $('.scroll_li li').length * 40;
	setTimeout(scroll, 3000);
	Slide();
	nav1();
	nav2();
	nav4();
	Close();
})

$(function(){
    $(".lubo").lubo({
    });
})


	



	
	




