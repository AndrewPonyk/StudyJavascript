console.log('hello Node');


// fs - is File System
// methods whose name ends with Sync - is a blocking method , than returns a value or throws exception
// 
//methods that do not ends with Sync - are nonblocking methods that pass their results to the callback

var fs=require('fs');


setTimeout(function() {
	console.log('after 3 second');
}, 3000);


// process is interesting global object


// defining event
process.on("exit",function (){console.log('goodbye'); });


//read Sync
var text = fs.readFileSync("d:\\error.log","utf8");
console.log(text);

// ready Async
var text = fs.readFile("d:\\error.log",function (err,buffer){
	console.log("\n\n"+buffer);
});

// similar methods writeFile and writeFileSync


//The functions shown above treat the contents of the file as a single string or Buffer.
//Node also defines a streaming API for reading and writing files. The function below
//copies one file to another:
// File copy with streaming API.
// Pass a callback if you want to know when it is done
function fileCopy(filename1, filename2, done) {
    var input = fs.createReadStream(filename1);          // Input stream
    var output = fs.createWriteStream(filename2);        // Output stream
    
    input.on("data", function(d) { output.write(d); });  // Copy in to out
    input.on("error", function(err) { throw err; });     // Raise errors
    input.on("end", function() {                         // When input ends
        output.end();                                    // close output
        if (done) done();                                // And notify callback
    });
};


//The “fs” module also includes a number of methods for listing directories, querying
//file attributes, and so on. The Node program below uses synchronous methods to list
//the contents of a directory, along with file size and modification date:
//#! /usr/local/bin/node
var fs = require("fs"), path = require("path");     // Load the modules we need
var dir = process.cwd();                            // Current directory
if (process.argv.length > 2) dir = process.argv[2]; // Or from the command line
var files = fs.readdirSync(dir);                    // Read directory contents
process.stdout.write("Name\tSize\tDate\n");         // Output a header
files.forEach(function(filename) {                  // For each file name
    var fullname = path.join(dir,filename);         // Join dir and name 
    var stats = fs.statSync(fullname);              // Get file attributes
    if (stats.isDirectory()) filename += "/";       // Mark subdirectories
    process.stdout.write(filename + "\t" +          // Output file name plus
                         stats.size + "\t" +        //   file size plus
                         stats.mtime + "\n");       //   modification time
});