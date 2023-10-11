
//     // body
// }
//
//
//
//
//
//
//
//
//
//
//
//
let numGiven = parseFloat(prompt("Please input an odd number between 1 and 50"))
for (let i = 1; i < 51 ; i++) {
    console.log('Loop counter is: ' + i);

    if (i === numGiven) {

        console.log("Yikes! skipping number " + i)
        continue;
        console.log('We have reached the stopping point: break!');
        break;

        // use the break keyword to exit from the while loop

    }}