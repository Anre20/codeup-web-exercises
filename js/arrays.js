const fruits = ["orange", "strawberry", "kiwi", "tomato", "banana"];

const firstFruit = fruits[0];
const nmrOfFruits = fruits.length;
for(let i = 0; i < fruits.length; i++){
    const fruit = fruits[i];
    console.log(fruit);
}

/*for of loop
 */

for (let fruit of fruits) {
    if (fruit.includes("berry")) {
        console.log(fruit);
    }
}

/* forEach method */

fruits.forEach((item, index, array) => {


});

/* the Spread Operator (...)

 */

const products = [
    ...fruits,
    ...saladDressings,
    "Watermelon"
];