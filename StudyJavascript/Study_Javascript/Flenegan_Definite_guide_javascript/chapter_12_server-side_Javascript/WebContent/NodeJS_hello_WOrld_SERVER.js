
// HelloWorld web server
var http = require('http');
 
http.createServer(
  function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    var responseText="";
    for(var item in request){
    	if(item=="url")
    	responseText=responseText+ " "+request[item]+"\n";
    }
    
    response.end(responseText + ' Hello, world\n');
    	
  }
).listen(8000);
 
console.log('Server running at http://localhost:8000/');