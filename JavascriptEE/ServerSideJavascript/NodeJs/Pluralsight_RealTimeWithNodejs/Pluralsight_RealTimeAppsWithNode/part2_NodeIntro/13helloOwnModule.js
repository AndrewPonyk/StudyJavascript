//Sync read
function say(fileName){
    var contents = fs.readFileSync(fileName, "utf-8");
    return contents;
}



var fs = require("fs");
module.exports.say = say;
// module.exports - is public api