
	$(document).ready(function(){
		
		dropdownOpen();

		//二级菜单
   function dropdownOpen() {
    var $dropdownLi = $('li.dropdown');
    $dropdownLi.mouseenter(function () {
        $(this).find("ul").css("display","block");
        
    }).mousedown(function(){
    	
    }).mouseleave(function(){
        $(this).find("ul").css("display","none");
    });
}

	
	var small = document.getElementById("small");
	var big = document.getElementById("big");
	var bigImg = document.getElementById("bigImg");
	var smallImg = document.getElementById("smallImg");
	var mask = document.getElementById("mask");
	var box = document.getElementById("box");
	
	small.onmouseover = function(){
		big.style.display = "block";
		mask.style.display = "block";
	}
	
	small.onmouseout = function(){
		big.style.display = "none";
		mask.style.display = "none";
	}
	
	small.onmousemove = function(e){
		var e = e || event;
		//求 mask的left值   top值
		var x = e.pageX - box.offsetLeft - mask.offsetWidth / 2;
		var y = e.pageY - box.offsetTop - mask.offsetHeight / 2;
		var maxL = small.offsetWidth - mask.offsetWidth;  //mask 最大的left
		var maxT = small.offsetHeight - mask.offsetHeight; //mask 最大的top
		//边界处理
		x = x < 0 ? 0 : x > maxL ? maxL : x;
		y = y < 0 ? 0 : y > maxT ? maxT : y;
		
		//大图的left  
		bigImg.style.left = -x * (bigImg.offsetWidth - big.offsetWidth) / (small.offsetWidth) +"px";
		bigImg.style.top = -y *(bigImg.offsetHeight - big.offsetHeight) / (small.offsetHeight - mask.offsetHeight)+"px";
		mask.style.left = x+"px";
		mask.style.top = y+"px";
	
	}
	

	})
	

