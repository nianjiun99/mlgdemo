   $(document).ready(function(){
   	dropdownOpen()
   })
   function dropdownOpen() {
    var $dropdownLi = $('li.dropdown');
    $dropdownLi.mouseenter(function () {
        $(this).find("ul").css("display","block");
        
    }).mousedown(function(){
    	
    }).mouseleave(function(){
        $(this).find("ul").css("display","none");
    });
}
   




/*ajax*/
var deff = $.ajax({
	type:"get",
	url:"list.json",
	async:true
});
deff.done(function(json){
	var str = "";
	for(var attr in json){
		for(var i =0;i<json[attr].list.length;i++){
			var lis = json[attr].list[i];
			str +=
			`
			<div class="li1">
		<dl>
    				<dt><a href="shop.html"><img src="images/${lis.src}"/></a></dt>
    				<dd>
    					<h2><a href="">${lis.jianjie1}</a></h2>
    					<p><a href="">${lis.jianjie2}</a> </p>
    					<span><a href="">海淘超市</a></span>
    					<h3>${lis.price}</h3>
    					<h4>中国</h4>
    					<h5>包邮</h5>
    					<h6><a href="shop.html">加入购物车</a></h6>
    				</dd>
    			</dl>
    		</div>
		`
		
		}
		
		$(".list_wrap").html(str);
	}
})
