function postMessage(msg){
	var request=new XMLHttpRequest();
	request.open("POST", "/log.php");
	request.setRequestHeader("Content-Type", "text/plain,charset=UTF-8");
	request.send(msg);
}


