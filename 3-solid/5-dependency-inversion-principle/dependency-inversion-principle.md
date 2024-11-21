# Dependency Inversion Principle

```
High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions
```

This principle is primarily concerned with reducing dependencies among the code modules, which leads to more decoupled and easily maintainable systems.

Let's break it down a bit further:
- **High-level modules should not depend on low-level modules. Both should depend on abstractions**: this is suggesting that the high-level modules ( modules that implement business logic or use cases) should not directly depend on or interact with the low-level modules (modules that perform basic, low-level functions like writing to a database or handling HTTP requests). Both should interact through abstractions (like interfaces or abstract classes)

- **Abstractions should not depend on details. Details should depend on abstractions**: this means the abstraction does not know about the underlying implementation. It's the responsibility of the underlying detail (i.e., the classes implementing the interface) to adhere to the contract defined by the abstraction

## Code Analysis

We have `MySQLDatabase` class, it doesn't implement any interface, there is no abstraction here. Any class that decides to use this one cannot operate on an interface because all we have is an implementation.

```
class MySQLDatabase {
    save(user: User): void {
        console.log(`Saving user: "${ user }" to a MySQL database`);
    }
}
```

Class `UserService` uses this low-level class to persist an user in a database.

```
class UserService {
    constructor(
        private readonly database: MySQLDatabase,
    ) { }

    createUser(username: string): void {
        // simulate creating a user
        const user = username;

        this.database.save(user);
    }
}
```

Let's say now we have to change our database to MongoDB. The only way to achieve that is to also modify the code in `UserService`. This should not be necessary, because the higher-level class should not worry about how saving a user is done.

**Dependency Inversion Principle** allows us to separate those concepts. `GoodUserService` operates on an interface `Database` to persist a user.

```
class GoodUserService {
    constructor(
        private readonly database: Database,
    ) { }

    createUser(username: string): void {
        // simulate creating a user
        const user = username;

        this.database.save(user);
    }
}
```

Now when we have to change the database that is being used by our application - all we have to do is to create a new class that will implement the `Database` interface and no changes will be required in the high-level class that is `GoodUserService`. Now it doesn't care how saving a user is achieved - all it wants and needs to know that is being done.

## Benefits

- **Decoupling of Code**: by depending on abstractions rather than on concrete implementations, modules in the system are less interlinked. This reduces the risk that changes in one module will affect others
- **Ease of Modification and Extension**: because modules depend on abstractions, you can easily introduce new functionality or change existing functionality by creating new implementations of those abstractions
- **Improved Testability**: testing becomes easier because you can provide mock implementations of your abstractions during the testing phase. This means you can test components in isolation, without needing to set up and coordinate complex real versions of all their dependencies
- **System Scalability**: by structuring the codebase in such a way that lower-level details depend on high-level strategies, it becomes easier to scale up the system in the future. For example, you might start with a simple data store like a file system, and then later swap it out for a full database without changing the high-level code
