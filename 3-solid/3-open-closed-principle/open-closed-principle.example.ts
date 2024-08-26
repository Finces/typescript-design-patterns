class BadAreaCalculator {
    calculateArea(shape: string, dimensions: number[]): number {
        switch (shape) {
            case 'circle':
                return Math.PI * Math.pow(dimensions[0], 2);
            case 'rectangle':
                return dimensions[0] * dimensions[1];
            default:
                throw new Error('Unknown shape');
        }
    }
}

interface Shape {
    calculateArea(): number;
}

class Circle implements Shape {
    constructor(
        private readonly radius: number
    ) { }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle implements Shape {
    constructor(
        private readonly width: number,
        private readonly height: number
    ) { }

    calculateArea(): number {
        return this.height * this.width;
    }
}

class AreaCalculator {
    calculate(shape: Shape): number {
        return shape.calculateArea();
    }
}

(() => {
    const badAreaCalculator = new BadAreaCalculator();

    console.log(`Bad circle area: ${ badAreaCalculator.calculateArea('circle', [5]) }`);
    console.log(`Bad rectangle area: ${ badAreaCalculator.calculateArea('rectangle', [3, 4]) }`);

    const goodAreaCalculator = new AreaCalculator();

    const circle = new Circle(3);
    const rectangle = new Rectangle(4, 5);

    console.log(`Good circle area: ${ goodAreaCalculator.calculate(circle) }`);
    console.log(`Good rectangle area: ${ goodAreaCalculator.calculate(rectangle) }`);
})();
