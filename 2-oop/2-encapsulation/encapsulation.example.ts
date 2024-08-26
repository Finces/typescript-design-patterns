enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

class Person {
    #firstname: string;
    #lastname: string;
    #age: number;
    #gender: Gender;

    constructor(
        firstname: string,
        lastname: string,
        age: number,
        gender: Gender
    ) {
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#age = age;
        this.#gender = gender;
    }

    get firstname(): string {
        return this.#firstname;
    }

    set firstname(firstname: string) {
        this.#firstname = firstname;
    }

    get lastname(): string {
        return this.#lastname
    }

    set lastname(lastname: string) {
        this.#lastname = lastname;
    }

    get age(): number {
        return this.#age;
    }

    set age(age: number) {
        if (age > 0) {
            this.#age = age;
        } else {
            console.log('Invalid age!');
        }
    }

    get gender(): Gender {
        return this.#gender;
    }

    set gender(gender: Gender) {
        this.#gender = gender;
    }
}

(() => {
    const person1 = new Person(
        'John',
        'Doe',
        10,
        Gender.MALE
    );

    console.log(person1.firstname);
    console.log(person1.lastname);
    console.log(person1.age);
    console.log(person1.gender);

    person1.age = 0;
})();
