// const randomNum = (min, max) => {
//     return parseInt(Math.random() * max - min) + min);
//
// }

let conesLeft = randomNum(50, 100);
do {
    const conesToSell = randomNum(1, 5);
    if(conesLeft >= conesToSell) {
        console.log(`${conesToSell}` cones sold.`);
        conesLeft = conesLeft - conesToSell;
    } else {
        console.log(`I don`t have that many cones. I only have ${conesLeft} cones`)

        conesLeft = 0;
        console.log(`Yay! I have sold all of the cones`);
    }
    while(conesLeft) > 0);
    }
}