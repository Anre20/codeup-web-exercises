const targetNumber = Math.floor(Math.random() * 100) + 1
//
// let attempts = 0
//
// function checkGuess() {
//
    const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

// const getRandomInt = (max) => {
// return Math.floor(Math.random() * max)

// let calculateTotal = getRandomInt(100);
if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
   alert(`Please insert a number between 1 and 100`);

} else if (userGuess === targetNumber) {
    alert(`Congratulations! You have won!`);

} else {
    alert(`Unfortunately, that was the wrong number`);

    let attempts = 5;

    for (let i = 1; i < 100; i++) {

        console.log('Loop counter is: ' + i);

        if (i === attempts) {
            console.log('We have reached the stopping point: break!');
            // use the break keyword to exit from the while loop
            break;
        }
    }

    console.log(targetNumber)


}

// checkGuess() }