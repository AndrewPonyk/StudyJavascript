#!/usr/bin/env nodejs

// first parameter is 'nodejs', second parameter is path to js file which is executed,
// next are passed parameters
console.log("Hello world," + process.argv[2]);  // simple way to get command line parameters

// minimist - it library to parse argument options., you should first install it
var args = require("minimist")(process.argv.slice(2));
console.log(args.name + " " + args.email);


/*
* Put '#!/usr/bin/env nodejs' on the first line
    Next: allow js file to be executed by command : 'chmod 700 HelloAndPrintPARAMETER.js'

    Result : you can run js file like that : './HelloAndPrintPARAMETER.js --name=Andrii --email=myemail@ukr.net'
 *
* */