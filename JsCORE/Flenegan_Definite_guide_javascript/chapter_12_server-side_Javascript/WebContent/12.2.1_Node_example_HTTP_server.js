var http = require('http');
var fs=require('fs');

var server=new http.Server();
server.listen(8000);         // simple

server.on("request",function(request,response){ 
	
	console.log('request'); 
	
		var url=require('url').parse(request.url);
		
		
		//application/octet-stream: двоичный файл без указания формата (RFC 2046)[3]
		response.writeHead(200,{"Content-type":"application/octet-stream"	}); 
		 
		var filename=url.pathname.substring(1); // strip leading
		var type="" ;
		switch(filename.substring(filename.lastIndexOf('.')+1)){
		case "html":
		case "htm": type="text/html;charset=UTF-8"; break;
		case "js" :	type="application/javascript;charset=UTF-8"; break;
		case "css": type="text/css;charset=UTF-8"; break;
		case "txt": type="text/plain;charset=UTF-8"; break;
		defauls : 	type="application/octet-stream"; break;
		}
		
		fs.readFile(filename,function(err,content){
			if(err){
				//ENOENT error was being thrown from the "fs" module as it could not locate the file
				response.writeHead(404,{"Content-type":"text/plain"	}); 
				response.write(err.message);
				response.end();
			}else{
				response.writeHead(200,{"Content-type":type	}); 
				response.write(content);
				response.end();
			}
		});
	});

