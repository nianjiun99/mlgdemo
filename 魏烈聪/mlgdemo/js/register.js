 $(document).ready(function(){
	dropdownOpen();
	
	
	

	
	
	var na = document.getElementById("userna")
	var pwd = document.getElementById("pwd");
	var che = document.getElementById("password_check");
	var ema = document.getElementById("email2");
	na.onblur = function(){
		var $sp = $(".s1");
		var str = this.value;
		var re = /^[A-Za-z0-9]{6,12}/;
		if(re.test(str)){
			$sp.html("√").css("color","green");
			return true;
		}else{
			$sp.html("×").css("color","red");
			return false;
		}
	}
	pwd.onblur = function(){
		var $sp = $(".s2");
		var str = this.value;
		var re = /^\w{6,18}$/; 
		if(re.test(str)){
			$sp.html("√").css("color","green");
			return true;
		}else{
			$sp.html("×").css("color","red");
			return false;
		}
	}
	
	che.onblur = function(){
		var $spa = $(".s3"); 
		var sp = $("#pwd").val();
		var str = this.value;
		if(str != "" &&  sp == str){
			$spa.html("√").css("color","green");
				return true;
		}else{
			$spa.html("×").css("color","red");
			return false;
		}
		
	}
	ema.onblur = function(){
		var $sp = $(".s4");
		var str = this.value;
		var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		if(re.test(str)){
			$sp.html("√").css("color","green");
			return true;
		}else{
			$sp.html("×").css("color","red");
			return false;
		}
	}	
	
	

	
	
	
	var arr = [];
	for(var i = 1;i<100;i++){
		var cook = getCookie("uname"+i);
		arr.push(cook);
	}
	var str1 = "";
	var index = arr.indexOf(str1)+1;
	$("#btn").click(function(){
		
		if($(".s1").html()=="√"&& $(".s2").html()=="√" && $(".s3").html()=="√" && $(".s4").html()=="√"){
		setCookie("uname" + index,$("#userna").val(),3);
		setCookie("upwd" + index,$("#pwd").val(),3)
		index++;
		window.location.href="login.html";
		}else{
			alert("注册失败");
		}
		
	})
	/*登录注册*/
 /*	var na = document.getElementById("userna")
	var pwd = document.getElementById("pwd");
	var check = document.getElementById("password_check");
	var ema = document.getElementById("email2");
	var btn = document.getElementById("btn");
	var num = 0;
	var sp = $(".s");*/
	/*姓名*/
	/*na.onblur = function(){
		
		var str = this.value;
		var re = /^[A-Za-z0-9]{6,12}/;
		
		if(re.test(str)){
			$(".s").html("√").css("color","green");
			num++; 
			return true;
		}else{
			sp.html("×").css("color","red");
			return false;
		
		}
	}
	
	pwd.onblur = function(){
		
		var str = pwd.value;
		var re = /^\w{6,18}$/;
		if(re.test(str)){
			$(".s").html("√").css("color","green");
			num++;
			return true;
		}else{
			sp.html("×").css("color","red");
			return false;
		}
	}
	
	check.onblur = function(){
		var str = check.value;
		 if(pwd.value != check.value){
			sp.html("×").css("color","red");
			return true;
		}else{
			$(".s").html("√").css("color","green");
			num++;
			return false;
		}
		
	}
	ema.onblur = function(){
		var str = ema.value;
		var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		if(re.test(str)){
			$(".s").html("√").css("color","green");
			num++;
			return true;
		}else{
			sp.html("×").css("color","red");
			return true;
		}
	}
	btn.onclick = function(){
		if(num==3){
			alert("注册成功");
		}else{
			alert("注册失败，请完善信息")
		}
	}
	
	*/
	
	
});
function topp(){
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
   


     
	
	