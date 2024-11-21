type User = string;

class MySQLDatabase {
    save(user: User): void {
        console.log(`Saving user: "${ user }" to a MySQL database`);
    }
}

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

//-------------------

interface Database {
    save(user: User): void;
}

class PostgreSQLDatabase implements Database {
    save(user: string): void {
        console.log(`Saving user: "${ user }" to a PostgreSQL database`);
    }
}

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
