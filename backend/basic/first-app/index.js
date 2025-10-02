let impsum = require("./largest/basic");
let larg = require("./temp/largofthree");
let str = require("./stringFunctions/stringFunctions");
const os = require("os");

impsum(6, 7);
console.log(larg(5, 8, 2));
console.log(str.strPalindrom("apple"));
console.log(str.strReverse("apple"));
console.log(os.platform());
console.log(os.freemem());
console.log(os.arch());
