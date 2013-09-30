var editor,statusline,savebutton,idletimer;

window.onload=function(){
	//alert("onload");
	if(localStorage.note==null) localStorage.note="";
	if(localStorage.lastModified==null) localStorage.lastModified=0;
	if(localStorage.lastSaved==null) localStorage.lastSaved=0;
	
	
	editor=document.getElementById("editor");
	statusline=document.getElementById("statusline");
	savebutton=document.getElementById("savebutton");
	
	editor.value=localStorage.note;
	editor.disabled=true;
	
	
};