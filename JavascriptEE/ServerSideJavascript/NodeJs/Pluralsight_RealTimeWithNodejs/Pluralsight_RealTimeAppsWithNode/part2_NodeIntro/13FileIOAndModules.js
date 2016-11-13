#!/usr/bin/env nodejs

var helloModule = require("./13helloOwnModule.js");
var args = require("minimist")(process.argv.slice(2));
if(args.help || !args.file){
    printHelp();
    process.exit(1);
}
console.log(helloModule.say(args.file));


function printHelp(){
    console.log("13FileIOAndModules.js (c) Copyright");
    console.log("usage:");
    console.log("--help             print this help");
    console.log("--file={NAME}      read the content of {NAME} and display it")
    console.log("")
}