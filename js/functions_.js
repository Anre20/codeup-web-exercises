const sayHello = (name) => {
    return `Hello, ${name}`;
}
sayHello("Anre");

let helloMessage = sayHello("Anre");
    console.log(helloMessage)
line one is the function, line two returns the function, line six is where the variable is stored,
line seven logs it into the console

const random = Math.floor((Math.random() * 3) + 1);

const isTwo = (number) => {
    let result = number === 2;
    return result;
 }
console.log(isTwo(random))

const calculateTip = (price, percentage) => {
    let result = parseFloat(price)*parseFloat(percentage);
    return result;
}
console.log(calculateTip(10, .50))

var price = prompt("What was the total cost of your meal?");
console.log(`The user entered: ${price}`);
var percentage = prompt("How much would you like to tip?");
console.log(`The user entered: ${percentage}`);

let totalPay = (parseFloat(price) + (parseFloat(price) * parseFloat(percentage)))

alert(`The total cost of your meal, including tip is: ${totalPay.toLocaleString("en-US", {style:"currency", currency:"USD"})}`)

const applyDiscount = (price, discount) => {
return (1 - discount) * price; };

const discount = applyDiscount(45.99, 0.12);

console.log(discount)