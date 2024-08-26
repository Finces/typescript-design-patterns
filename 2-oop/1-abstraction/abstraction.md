# Abstraction  

Abstraction is one of the core principles that involves hiding the complex implementation details of a system and exposing only the essential features to the user. This helps in reducing complexity and allows the programmer to focus on interactions at a higher level without worrying about the intricate workings underneath.  

In many programming languages, abstraction is implemented through interfaces and abstract classes. These constructs define what methods a class should have, but not how those methods should be implemented. The implementation details are handled in concrete classes that inherit from the abstract class or implement the interface.  

---

In the `abstraction.example.ts` you can see three layers of code. 

The first one is an interface. This defines a set of functionalities that will be provided with an implementation. From that part we know that we will be able to add call `info()` and `error()` methods.  

```
interface LoggerInterface {
    info(message: string): void;
    error(message: string): void;
}
```


The second layer is an abstract class. It provides a common method `format()` that will be shared between all the implementations.

```
abstract class AbstractLogger implements LoggerInterface {
    protected format(message: string, type: LogType): string {
        if (type === LogType.INFO) {
            return `[INFO]: ${ message }`;
        }

        if (type === LogType.ERROR) {
            return `[ERROR]: ${ message }`;
        }

        return message;
    }

    abstract info(message: string): void;
    abstract error(message: string): void;
}
```

The third layer is an actual implementation of a logger. We are using `console.log` to print a message to the user. We know we have to implement `info()` and `error()` methods because we are extending an abstract class (and implementing an interface). But how we implement these methods - it's only important at this top level.

```
class ConsoleLogger extends AbstractLogger {
    info(message: string): void {
        console.log(this.format(message, LogType.INFO));
    }

    error(message: string): void {
        console.log(this.format(message, LogType.ERROR));
    }
}
```

We can have multiple logger implementations that will basically do the same thing - `info()` and `error()`, but in different ways. `ConsoleLogger` does that via `console.log()` functionality, we can also add for example an AWSLogger, that will upload logs to AWS, but it still will have the same interface - `info()` and `error()`.
