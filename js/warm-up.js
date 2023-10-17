// Function to find the largest number in an array
// const findLargestNumber = (arr) => {
//     // validate and return early
//     // start a variable "largest" at 0
//     // loop through arr and replace "largest" if value is greater
//     // return largest
// };
//
// (() => {

    const findLargestNumber = (arr) => {
        if (arr.length === 0) {
            return undefined;
        }

        let largest = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }

        return largest;
    }

    // Sample array of numbers
    const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];
    // Call the function and display the result
    const result = findLargestNumber(numbers);
    console.log(result);
