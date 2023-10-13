// todo:
// Create an array of months for printing dates
let postDate = new Date();
// console.log(postDate);

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

console.log("Month => ", months[postDate.getMonth()]);
console.log("Day => ", postDate.getDate());
console.log("Year => ", postDate.getFullYear());


// todo:
// Create the date corresponding to your birthday using the JavaScript Date object.
let anreBirthday = new Date(1987, 6, 22)

console.log(anreBirthday);

let birthday2 = new Date("July 22, 1987");

console.log(birthday2)
// // todo:
// // Log your birthday in the format: January 1, 2014 using the JavaScript Date object.
// // See link below for methods needed:
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Getter
// console.log('Here is my birthday using JavaScript: ');