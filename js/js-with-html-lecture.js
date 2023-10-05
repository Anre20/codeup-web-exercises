console.log("Testing");
let easyMath = 2 + 2;
console.log(easyMath);
let x = 1;
x -= 1;
// Unary Operators
//let y = 5;
//y++;
//y = y + 1;
//y--;
//
//
//console.log(y)
//
//console.log(x);

//method to turn number into string
//let pi = 3.14;
//let piString = pi.toString()
//console.log(piString);
//
//let numberOfStudents = "19";
//numberOfStudents = parseInt(numberOfStudents);
//console.log(numberOfStudents)

//let bankAccount = "19.23656";
//bankAccount = parseFloat(bankAccount);
//console.log(bankAccount);

let x = "griffin";
let xNumber = Number(x); //NaN's happen when running number
let isReallyEqual = isNan(xNumber);
console.log("isNaN function => ", isReallyEqual);

let emptyString = "" == false;
console.log"emptyString => ", emptyString);
let zero = 0 == false;
console.log("zero =>", zero);

//string methods
// let username = "Justino(Nova)";
// let guildName;
// //get the length of the string
// let nameLength = username.length;
// console.log("nameLength =>), nameLength):
// //find the index of the "(" character
// let guildNameStart = username.indexOf("(");
// console.log("guildNameStart => ", guildNameStart);
// // get the index before the closing )
// let guildNameEnd = nameLength - 1;
// guildName = username.substring(guildName)

// STRING METHODS
let username = "Justino (Nova)";
let guildName;

// get the length of the string
let nameLength = username.length;
console.log("nameLength => ", nameLength);
// find the index of the "(" character
let guildNameStart = username.indexOf("(");
console.log("guildNameStart => ", guildNameStart);
// get the index before the closing ")"
let guildNameEnd = nameLength - 1;
guildName = username.substring(guildNameStart + 1, guildNameEnd);
console.log("guildName => ", guildName);
// we want to remove the guild name from the username now
let guildNameWithParenthesis = "(" + guildName + ")";
username = username.replace(guildNameWithParenthesis, "");
username = username.trim();
console.log("username => ", username);

//template strings
let channelMessage = "username  from the guildName guild has logged in";
channelMessage = username + " from the " + guildName + " guild has logged in ";
channelMessage = `$(username) from the $(guildName) guild has logged in.``
console.log(channelMessage);
