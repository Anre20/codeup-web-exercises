// Instructions:
// 1. Write the FizzBuzz logic within the fizzBuzz function.
// 2. Use conditional statements and loops to determine if a number is divisible by 3, 5, or both.

// Function to implement FizzBuzz for a given range
const fizzBuzz = (start, end) => {
    for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");

    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
        fizzBuzz(1, 100);
    }
}

    // Write your FizzBuzz logic here
    // Loop through numbers from start to end
    // Check if the current number is divisible by 3
    // console.log "Fizz" if it is divisible by 3
    // Check if the current number is divisible by 5
    // console.log "Buzz" if it is divisible by 5
    // If the number is not divisible by 3 or 5, console.log the number itself
};

// Call the function to perform FizzBuzz for a specific range
