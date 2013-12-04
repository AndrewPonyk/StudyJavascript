function getHymnOfUkraineJS(){
			var request=new XMLHttpRequest();
			
			// !!!!!!!!!! we want from *.somee.com invoke ajax from *.luxlv.lviv.ua
			
			
			/*
			 * DOESN'T WORK THIS VERSION IN IE
			 * request.onreadystatechange=function()
			  {
				
				
			  if (request.readyState==4 && request.status==200)
			    {
			  	  document.getElementById("div1").innerHTML=request.responseText;
			    	
			    }
			  };*/
			
			// IE
		//	The XDomainRequest object is a safe, reliable, and lightweight data service that allows script on any document to anonymously connect to any server and exchange data. Developers can use the XDomainRequest object when cross-site security is not an issue.
			if (window.XDomainRequest) 
			    {
			        request=new XDomainRequest();
			        request.onload = function() {
				        document.getElementById("div1").innerHTML=request.responseText;	 
				        
			         };
			    }
		    else if (window.XMLHttpRequest)
		        request=new XMLHttpRequest();
		    else
		        request=new ActiveXObject("Microsoft.XMLHTTP");
		request.onreadystatechange=function()
		    {
		         alert("here");
		        if (request.readyState==4 && request.status==200)
		           {
			        document.getElementById("div1").innerHTML=request.responseText;
					    	
		         }
		    }

			request.open("GET","http://my.luxlv.lviv.ua/ajax/getHymnOfUkraine.php",false);
			request.send();
			
		}				