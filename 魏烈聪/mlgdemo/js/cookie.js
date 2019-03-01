function setCookie(name,val,day){
	var d = new Date();
	d.setDate(d.getDate() + day);
	document.cookie = name + "=" + val + ";expires=" +  d;
}

function getCookie(name){
	var cook = document.cookie;
	var arr = cook.split("; ");
	for(var i = 0 ; i < arr.length ; i++){
		var cur = arr[i].split("=");
		if(cur[0] == name){
			return cur[1];
		}
	}
	return "";
}

function removeCookie(name){
	setCookie(name,"",-1)
}