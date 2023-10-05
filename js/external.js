console.log("Hello from external Javascript!")




alert("Welcome to my Website!")
//
//var userInput = prompt("What's your favorite color?");
//
//console.log(`The user entered: ${userInput}`);
//
//alert(`Great! ${userInput} is my favorite color too!`)

//Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
//When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//Use an alert to show the results of each problem.

//var theLittleMermaidRentPeriod = prompt("How many days will you be renting The Little Mermaid?")
//console.log(`The user entered: ${theLittleMermaidRentPeriod}`);
//var brotherBearRentPeriod = prompt("How many days will you be renting Brother Bear?")
//console.log(`The user entered: ${brotherBearRentPeriod}`);
//var herculesRentPeriod = prompt("How many days will you be renting Hercules?")
//console.log(`The user entered: ${herculesRentPeriod}`);
//
//const pricePerMoviePerDay = 3
//
//console.log(pricePerMoviePerDay)
//
//console.log((theLittleMermaidRentPeriod * pricePerMoviePerDay) + (brotherBearRentPeriod * pricePerMoviePerDay) + (herculesRentPeriod * pricePerMoviePerDay));
//
//let totalCost = (theLittleMermaidRentPeriod * pricePerMoviePerDay) + (brotherBearRentPeriod * pricePerMoviePerDay) + (herculesRentPeriod * pricePerMoviePerDay)
//
//alert(`The total cost of your movies will be $${totalCost}`)

var googlePayRate = prompt("How much will Google be paying you per hour?");
console.log(`The user entered: ${googlePayRate}`);
var googleTimeWorked = prompt("How many hours did you work for Google?");
console.log(`The user entered: ${googleTimeWorked}`);
var amazonPayRate = prompt("How much will Amazon be paying you per hour?");
console.log(`The user entered: ${amazonPayRate}`);
var amazonTimeWorked = prompt("How many hours did you work for Amazon?");
console.log(`The user entered: ${amazonTimeWorked}`);
var facebookPayRate = prompt("How much will Facebook be paying you per hour?");
console.log(`The user entered: ${amazonPayRate}`);
var facebookTimeWorked = prompt("How many hours did you work for Facebook?");
console.log(`The user entered: ${facebookTimeWorked}`);

console.log((googlePayRate * googleTimeWorked) + (amazonPayRate * amazonTimeWorked) + (amazonPayRate * facebookTimeWorked));

let totalPay = (googlePayRate * googleTimeWorked) + (amazonPayRate * amazonTimeWorked) + (amazonPayRate * facebookTimeWorked);

alert(`The total pay you will receive is: ${totalPay.toLocaleString("en-US", {style:"currency", currency:"USD"})}`)







