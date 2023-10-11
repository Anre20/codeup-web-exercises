//const username = "Anre";
//
//if (true) {
//    console.log("The condition is true!");
//} else {
//    console.log("The condition is false!");
//}
//
//console.log("THIS IS AFTER THE CONDITIONAL STATEMENT!");
//

//TODO:
// * Create a function named `analyzeColor` that accepts a string that is a color
// * name as input. This function should return a message which relates to the
// * color stated in the argument of the function. For colors you do not have
// * responses written for, return a string stating so
// *
// * Example:
// *  > analyzeColor('blue') // returns "blue is the color of the sky"
// *  > analyzeColor('red') // returns "Strawberries are red"
// *
// *
// *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
// *
// * You should use an if-else-if-else block to return different messages.
// *
// * Test your function by passing various string literals to it and
// * console.logging the function's return value
// */
//

// var analyzeColor = prompt("What's your favorite color?").toLowerCase()
//
// if (analyzeColor === 'red')
// 	alert("Strawberries are red");
// else if (analyzeColor === 'orange') {
// 	alert("Oranges are orange");
// } else if (analyzeColor === 'yellow') {
// 	alert("bananas are yellow");
// } else if (analyzeColor === 'green') {
// 	alert("grass is green");
// } else if (analyzeColor === 'blue') {
// 	alert("the ocean is blue");
// } else {
// 	alert("I don't know anything by that color");
// }

//// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//const randomColor = colors[Math.floor(Math.random() * colors.length)];
///**
// * TODO:
// * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
// * You should see a different message every time you refresh the page
// */
//
///**
// * TODO:
// * Comment out the code above, and refactor your function to use a switch-case statement
// */
// var colors = prompt("What's your favorite color?").toLowerCase()
// switch(colors) {
//    case "blue":
//    alert("The ocean is blue")
//    break;
//    case "red":
//    alert("Strawberries are red")
//    break;
//    case "green":
//    alert("Grass is green")
//    break;
//    case "yellow":
//    alert("Bananas are yellow")
//    break;
//    case "orange":
//    alert("Oranges are orange")
//    break;
//    default: alert("I don't know anything by that color")
//    }

///**
// * TODO:
// * Prompt the user for a color when the page loads, and pass the input from the
// * user to your `analyzeColor` function. Alert the return value from your
// * function to show it to the user.
// */
//
///* ########################################################################## */
//
///**
// * TODO:
// * Suppose there's a promotion in Walmart, each customer is given a randomly
// * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
// * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
// * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
// * everything for free!.
// *
// * Write a function named `calculateTotal` which accepts a lucky number and total
// * amount, and returns the discounted price.
// *



// const getRandomInt = (max) => {
// return Math.floor(Math.random() * max)
// }
// let calculateTotal = getRandomInt(6);
// if (calculateTotal === 0)
// 	alert("Unfortunately, you did not receive a discount");
//  else if (calculateTotal === 1) {
// 	alert("Congratulations! You have received a 10% discount!");
// } else if (calculateTotal === 2) {
// 	alert("Congratulations! You have received a 25% discount!");
// } else if (calculateTotal === 3) {
// 	alert("Congratulations! You have received a 35% discount!");
// } else if (calculateTotal === 4) {
// 	alert("Congratulations! You have received a 50% discount!");
// } else if (calculateTotal === 5) {
//     alert("Congratulations! You will get everything for free!");
// } else {
// 	alert("error");
// 	}



// * Example:
// * calculateTotal(0, 100) // returns 100
// * calculateTotal(4, 100) // returns 50
// * calculateTotal(5, 100) // returns 0
// *
// * Test your function by passing it various values and checking for the expected
// * return value.
// */
//
///**
// * TODO:
// * Uncomment the line below to generate a random number between 0 and 5.
// * (In this line of code, 0 is inclusive, and 6 is exclusive)
// * Prompt the user for their total bill, then use your `calculateTotal` function
// * and alerts to display to the user what their lucky number was, what their
// * price before the discount was, and what their price after the discount is.
// */
//// Generate a random number between 0 and 6
//// const luckyNumber = Math.floor(Math.random() * 6);
//
// var billTotal = prompt("What's your bill total?")
// const getRandomInt = (max) => {
// return Math.floor(Math.random() * max)
// }
// let calculateTotal = getRandomInt(6);
// if (isNaN(billTotal)) {
//    alert(`Please insert your bill total correctly (in digits)`);
//
// } else if (calculateTotal === 0) {
// 	alert(`Your lucky number was 0, this does not apply a discount`);
//     alert(`Your total before the discount was ${billTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}`);
//     alert(`Your grand total after the discount is $${billTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}`);
// } else if (calculateTotal === 1) {
// 	alert(`Your lucky number was 1, this applies a 10% discount!`);
// 	alert(`Your total before the discount was $${billTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}`);
// 	alert(`Your grand total after the discount is ${((billTotal) - (billTotal * .10)).toLocaleString("en-US", {style:"currency", currency:"USD"})}`);
// } else if (calculateTotal === 2) {
// 	alert(`Your lucky number was 2, this applies a 25% discount!`);
// 	alert(`Your total before the discount was $${billTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}`);
//     alert(`Your grand total after the discount is ${((billTotal) - (billTotal * .25)).toLocaleString("en-US", {style:"currency", currency:"USD"})}`);
//
// } else if (calculateTotal === 3) {
// 	alert(`Your lucky number was 3, this applies a 35% discount!`);
// 	alert(`Your total before the discount was $${billTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}`);
//     alert(`Your grand total after the discount is ${((billTotal) - (billTotal * .35)).toLocaleString("en-US", {style:"currency", currency:"USD"})}`);
//
// } else if (calculateTotal === 4) {
// 	alert(`Your lucky number was 4, this applies a $50 discount!`);
// 	alert(`Your total before the discount was $${billTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}`);
//     alert(`Your grand total after the discount is ${((billTotal) - (billTotal * .50)).toLocaleString("en-US", {style:"currency", currency:"USD"})}`);
//
// } else if (calculateTotal === 5) {
//     alert(`Your lucky number was 5, this applies a 100% discount!`);
//     alert(`Your total before the discount was $${billTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}`);
//     alert(`That means everything is free and your grand total after the discount is $0!`);
//  } else {
// 	alert("error");
//
// }

///**
// * TODO:
// * Write some JavaScript that uses a `confirm` dialog to ask the user if they
// * would like to enter a number. If they click 'Ok', prompt the user for a
// * number, then use 3 separate alerts to tell the user:
// *
// * - whether the number is even or odd
// * - what the number plus 100 is
// * - if the number is negative or positive
// *
// * Do *NOT* display any of the above information
// * if the user enters a value that is not of the number data type.
// * Instead, use an alert to inform them of the incorrect input data type.
// *
if (window.confirm("Would you like to enter a number?")) {
var numGiven = prompt("Please enter a number")
var numPlusOneHundred = (parseFloat(numGiven) + 100)
if (isNaN(numGiven)) {
    alert(`Please insert your number in digits`); }
else if (numGiven % 2 == 0) {
alert("Your number is even");
alert("Your number plus 100 is " + numPlusOneHundred) }
else if (numGiven % 2 !== 0) {
alert(`Your number is odd`)
alert("Your number plus 100 is " + numPlusOneHundred) }
if (parseInt(numGiven) >= 0)
alert("Your number is positive");
else if (parseInt(numGiven) < 0)
alert("Your number is negative");
}


// *
// * Can you refactor your code to use functions?
// * HINT: The way we prompt for a value could be improved