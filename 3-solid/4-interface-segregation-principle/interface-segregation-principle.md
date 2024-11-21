# Interface Segregation Principle

This principle is all about reducing the side effects and frequency of required changes by splitting large, complex interfaces into smaller, more specific ones. If an interface is broken down into specific sets of methods, it will allow the client to only know about the methods that are of interest to them.

```
No client should be forced to depend on interfaces they do not use.
```

```
Don't add additional functionality to an existing interface by adding new methods. Instead, create a new interface.
```

## Code analysis

Let's take a look at the `BadPrinter` interface.

```
interface BadPrinter {
    print(document: ISP.Document): void;

    scan(): ISP.Document;

    fax(document: ISP.Document): void;
}
```

Why is it bad? Because it offers too much functionality and not all printers might be interested in scanning and faxing. When we have a simple machine that has no other functionality that printing documents, then we have to find a workaround for implementing the other functions from the interface.

```
scan(): string {
    throw new Error('Not supported!');
}

fax(document: string): void {
    throw new Error('Not supported!');
}
```

We can deconstruct `BadPrinter` interface into three separate interfaces: `Printer`, `Scanner`, `Fax`.

```
interface Printer {
    print(document: ISP.Document): void;
}

interface Scanner {
    scan(): ISP.Document;
}

interface Fax {
    fax(document: ISP.Document): void;
}
```

Now if we have a simple printer it can just implement the `Printer` interface and not worry about the rest.

```
class GoodSimplePrinter implements Printer {
    print(document: string): void {
        console.log(`Printing document...`);
    }
}
```

With more complex machine it's still simple - we just implement three interfaces instead of one.

```
class AllInOne implements Printer, Scanner, Fax {
    print(document: string): void {
        console.log(`Printing document...`);
    }

    scan(): ISP.Document {
        return 'Scanned document';
    }

    fax(document: string): void {
        console.log(`Faxing document...`);
    }
}
```

There is no drawback to this approach.

## Benefits

- **Improved maintainability**: ISP promotes smaller, well-defined interfaces. Smaller interfaces are easier to implement, leading to less complex code. They also make the system easier to understand, change, and maintain, since each interface has a clear and narrow responsibility
- **Reduced impact of changes**: since classes depend only on the interfaces they use, changes in one interface won't affect classes that don't depend on it. This reduces the impact of changes in the codebase, making it easier to modify or extend functionality with less risk of creating bugs in unrelated areas
- **Increased flexibility and reusability**: small, well-defined interfaces tend to be more focused around specific roles, which can be more easily combined in different ways to create new functionality. This makes components more reusable and the overall system more flexible
- **Stronger encapsulation**: by using interfaces to limit the exposure of classes to just the methods they need to know about, we strengthen the encapsulation of our system, leading to more robust and reliable code
- **Better testing**: smaller interfaces with less responsibility can be easier to mock for unit tests. This can improve the quality of your testing and lead to less brittle tests
