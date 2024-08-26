abstract class Vehicle {
    constructor(
        protected readonly brand: string
    ) { }

    startEngine(): void {
        console.log(`Engine of ${ this.brand } started!`);
    }
}

class Car extends Vehicle {
    constructor(
        brand: string,
        private readonly model: string
    ) {
        super(brand);
    }

    startEngine(): void {
        console.log(`Engine of ${ this.brand } ${ this.model } started!`);
    }

    displayInfo(): void {
        console.log(`Car: ${ this.brand } ${ this.model }`);
    }
}

class Motorcycle extends Vehicle {
    constructor(
        brand: string,
        private readonly cc: number
    ) {
        super(brand);
    }

    startEngine(): void {
        console.log(`${ this.brand } motorcycle engine of ${ this.cc }cc started with a vroom.`);
    }

    displayInfo(): void {
        console.log(`Motorcycle: ${ this.brand } ${ this.cc }cc`);
    }
}

(() => {
    const car = new Car('Toyota', 'Camry');

    car.startEngine();
    car.displayInfo();

    const motorcycle = new Motorcycle('Kawasaki', 650);

    motorcycle.startEngine();
    motorcycle.displayInfo();
})();
