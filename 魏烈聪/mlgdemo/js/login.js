$(document).ready(function(){
	dropdownOpen();
})



var btn = $("#btn");
btn.click(function(){
	
	var uname = $("#userna").val();
	var pwd = $("#pwd").val();
	var arr = [];
	var ary = [];
	for(var i =1;i<100;i++){
		var cookN = getCookie("uname"+i);
		var cookP = getCookie("upwd"+i);
		arr.push(cookN);
		ary.push(cookP);
	}
	if(arr.indexOf(uname) != -1 && uname!=""){
		if(ary[arr.indexOf(uname)]==pwd){
			window.location.href = "public.html";
		}else{
			alert("用户名或密码错误")
		}
	}
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
   