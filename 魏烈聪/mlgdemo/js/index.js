   $(document).ready(function () {
    dropdownOpen();
    tab();   
    
    
    	/*ajax*/
	var deff = $.ajax({
		type:"get",
		url:"index.json",
		async:true
	});
	deff.done(function(json){
		var strCon = "";
		var title = "";
		
		for(var attr in json){
			title +=`
    		<li class="table-item " cname = '${attr}'><a href="javascript:;" class="active">${json[attr].name}</a></li>
			
    		`;
			for(var i =0;i<json[attr].list.length;i++){
				var pro = json[attr].list[i];
				strCon += 
				`<div>
				<div class = "b1">
				<dl>
				<dt>
				<a href="list.html"><img src="images/${pro.src}" alt = ""/></dt></a>
    				<dd>
    					<p><a href="">${pro.shop}</a><em>${pro.fanli1}</em></p>
    					<h2><a href="">${pro.fanli}</a></h2>
    					<h3><a href="">${pro.jianjie}</a></h3>
    					<p>${pro.jieshao}</p>
    					<span>${pro.plun} <em class="iconfont icon-zan">799</em> <em class="iconfont icon-zan">2</em></span>
    					<a href="list.html" class="zhida">
    						返利直达
    					<em class="iconfont icon-youjiantou"></em>
    					</a>
    				</dd>
    			</dl>
    			</div>
    			</div>`;
			}
		}
		$(".products").html(strCon);
		$(".tab").html(title);
		$(".tab li").click(function(){
			
			var cname = $(this).attr("cname");
			var str1 = "";
			for(var i = 0;i<json[cname].list.length;i++){
				var pro = json[cname].list[i];
				str1+=
				`<div>
				<div class = "b1">
				<dl>
				<dt>
				<img src="images/${pro.src}" alt = ""/></dt>
    				<dd>
    					<p><a href="">${pro.shop}</a><em>${pro.fanli1}</em></p>
    					<h2><a href="">${pro.fanli}</a></h2>
    					<h3><a href="">${pro.jianjie}</a></h3>
    					<p>${pro.jieshao}</p>
    					<span>${pro.plun} <em class="iconfont icon-zan">799</em> <em class="iconfont icon-zan">2</em></span>
    					<a href="" class="zhida">
    						返利直达
    					<em class="iconfont icon-youjiantou"></em>
    					</a>
    				</dd>
    			</dl>
    			</div>
    			</div>`;
			}
			$(".products").html(str1)
			
			
		})
	})
	
    
    
    
    
    
 
    
    
    
    
    
    
    
});
	//返回顶部
 var gotop = document.getElementById("rig");
	document.onscroll = function(){
		var h = document.body.scrollTop || document.documentElement.scrollTop;
		if(h > 100){
			gotop.style.display = "block";
		}else{
			gotop.style.display = "none";
		}
	}
	
	gotop.onclick = function(){
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		gotop.style.display = "none";
	}
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
//轮播图
$(function(){
		var timer = setInterval(auto,3000);
		var index = 0;
		function auto(){
			index++;
			if( index == $("ol li").size() ){
				index = 0;
			}
			$("ol li").eq(index).addClass("current").siblings().removeClass("current");
			$(".wrap1 li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		}
		$("ol li").mouseenter(function(){
			clearInterval(timer);
			index = $(this).index()-1;
			auto();
		})
		$("ol li").mouseout(function(){
			timer = setInterval(auto,3000);
		})
	})


	/*选项卡*/
	function tab(){
	var $list = $(".tab li");
	$cons = $(".products");
	$list.click(function(){
		
		$(this).addClass("active")
			    .siblings()
			    .removeClass("active");
	var index = $(this).index();
	$cons.eq(index)
		 .addClass("p2")
		 .siblings()
		 .removeClass("p2");
	})
	}
   
	