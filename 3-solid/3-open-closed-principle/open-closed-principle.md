# Open-Closed Principle

The Open/Closed Principle (OCP) is one of the SOLID principles in object-oriented design. It states that **software entities (such as classes, modules, functions, etc.) should be open for extension but closed for modification.** This means you should be able to add new functionality to a class or module without changing its existing code.

More detailed description:
- **Open for extension**: this means that the behavior of the software entity can be extended, that is, we should be able to add new features or behavior to it
- **Closed for modification**: this means that once the software entity is developed and it has been reviewed and tested, the code should not be touched (to correct the software behavior)

The idea behind the OCP is that it promotes greater flexibility in your code. When you need to add new behavior or features, instead of modifying existing code (and thus possibly introducing new bugs), you write new code that extends the old code.

## Code analysis

Let's say we want to write a code that calculates an area of different shapes. This is an example that violates OCP:

```
class BadAreaCalculator {
    calculateArea(shape: string, dimensions: number[]): number {
        switch (shape) {
            case 'circle':
                return Math.PI * Math.pow(dimensions[0], 2);
            default:
                throw new Error('Unknown shape');
        }
    }
}

const badAreaCalculator = new BadAreaCalculator();

console.log(`Bad circle area: ${ badAreaCalculator.calculateArea('circle', [5]) }`);
```

Now if we want to add a new shape, we have to modify the existing code instead of extending it. The bad example looks like this:

```
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

const badAreaCalculator = new BadAreaCalculator();

    
console.log(`Bad circle area: ${ badAreaCalculator.calculateArea('circle', [5]) }`);
console.log(`Bad rectangle area: ${ badAreaCalculator.calculateArea('rectangle', [3, 4]) }`);
```

It's easy to fix this code, let's start by defining an interface:

```
interface Shape {
    calculateArea(): number;
}
```

Now we can add a class that implements `Shape`:

```
class Circle implements Shape {
    constructor(
        private readonly radius: number
    ) { }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
```

Now if we want to add a new shape - we just create a new class that implements `Shape`:

```
class Rectangle implements Shape {
    constructor(
        private readonly width: number,
        private readonly height: number
    ) { }

    calculateArea(): number {
        return this.height * this.width;
    }
}
```

And we can have a class that knows `Shape` interface and uses it's method to return calculated area:

```
class AreaCalculator {
    calculate(shape: Shape): number {
        return shape.calculateArea();
    }
}
```

```
const goodAreaCalculator = new AreaCalculator();

const circle = new Circle(3);
const rectangle = new Rectangle(4, 5);

console.log(`Good circle area: ${ goodAreaCalculator.calculate(circle) }`);
console.log(`Good rectangle area: ${ goodAreaCalculator.calculate(rectangle) }`);
```

---

By using interfaces and ensuring that classes follow the Open/Closed Principle, the design becomes more flexible and easier to maintain. New functionality can be added without modifying existing code, thus adhering to best practices for robust software design.

## Benefits

- **Reduced Risk of Bugs**: since we aren't modifying existing code, we're not introducing the risk of breaking existing functionality. The code that was working before we added new features will continue to work
- **Increased Code Reusability**: by encouraging the development of code that is more modular, and thus more reusable. You can reuse components in different parts of your application, or even in different applications, if they're properly abstracted and closed to modifications. The Open-Closed Principle (OCP) encourages a greater degree of code reusability through its emphasis on creating components that are open for extension but closed for modification
- **Simplified Versioning and Patching**: since old, stable modules remain untouched, it's easier to create patches that consist of new modules, rather than having to distribute a new version of an existing module. The Open-Closed Principle (OCP) also plays a significant role in simplifying versioning and patching of software. By following this principle, existing, tested components don't need to be modified to add new features or behavior to the software. Instead, new functionality is added via extension, typically by adding new classes or modules. This separation has important implications for versioning and patching
