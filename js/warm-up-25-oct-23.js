// Create a function that randomly pairs students into groups of 2.
// There can be groups of 3 if necessary.

// const createPairs = (students) => {
let names = ["Amanda", "Bianca", "Cameron", "Chris", "Dany", "David", "Diana", "Drew", "Evan", "Hassan", "Jack", "Jason", "John", "Jonathan", "Jordan", "Joshua", "Katie", "Luis"];

if (names.length % 2 != 0) {
    alert("You must have an even number of names. You currently have " + names.length + " names.");
} else {
    let arr1 = names.slice(), // copy array
        arr2 = names.slice(); // copy array again

    arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
    arr2.sort(function() { return 0.5 - Math.random();});

    while (arr1.length) {
        let name1 = arr1.pop(), // get the last value of arr1
            name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
        //        ^^ if the first value is the same as name1,
        //           get the last value, otherwise get the first

        console.log(name1 + ' and ' + name2);
    }


    // your code here
}

// const students = [
//     "Amanda",
//     "Bianca",
//     "Cameron",
//     "Chris",
//     "Dany",
//     "David",
//     "Diana",
//     "Drew",
//     "Evan",
//     "Hassan",
//     "Jack",
//     "Jason",
//     "John",
//     "Jonathan",
//     "Jordan",
//     "Joshua",
//     "Katie",
//     "Luis"
// ];

// console.log(createPairs(students));
// Expected output (pairs will be different each time):
/*
[
    [ 'Amanda', 'Bianca' ],
    [ 'Cameron', 'Chris' ],
    [ 'Dany', 'David' ],
    [ 'Diana', 'Drew' ],
    [ 'Evan', 'Hassan' ],
    [ 'Jack', 'Jason' ],
    [ 'John', 'Jonathan' ],
    [ 'Jordan', 'Joshua' ],
    [ 'Katie', 'Luis' ]
]
*/