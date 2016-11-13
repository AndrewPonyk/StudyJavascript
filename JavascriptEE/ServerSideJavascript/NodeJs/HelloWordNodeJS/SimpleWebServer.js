/**
 * Created by andrii on 09.11.16.
 */
var http = require("http");
var fs = require("fs");

const port = 8181;

function handleRequest(request, response) {
    //console.dir(request);
    var someFileContent = fs.readFileSync("SimpleWebServer.js", "utf-8");
    response.end("Contant of 'SimpleWebServer.js' file : <br>" + someFileContent);
}

var server = http.createServer(handleRequest);

server.listen(port, function () {
    console.log("server started");
});