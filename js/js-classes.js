// const createCar = (make, model, color, year) => {
//     let result = {
//         make,
//         model,
//         color,
//         year,
//     }
// };
class Car {
    constructor(make, model, color, year, used) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year;
        this.used = used;
    }
    honk(){
        console.log(`${this.make} just honked!`)
    }
    drivesWell() {
        console.log(`The ${this.make}s drive particularly well`);
    }

    goesFast() {
        console.log(`The ${this.color} ${this.model} is incredibly fast!`)
    }
}
let car1 = new Car("Chevy", "Silverado", "Silver", 2013);
car1.honk();

class Corvette extends Car {
    constructor(make, model, color, year,) {
        super(make, model, color, year,);
    }
}

let car2 = new Corvette("Chevy", "Corvette", "Red", 2020);
car2.goesFast()