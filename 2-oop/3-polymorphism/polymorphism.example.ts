enum SalaryTaxRate {
    FULL_TIME = 0.20,
}

interface Employee {
    calculateSalary(): number;
}

class FullTimeEmployee implements Employee {
    #salary: number;

    constructor(
        salary: number
    ) {
        this.#salary = salary;
    }

    calculateSalary(): number {
        return this.#salary * (1 - SalaryTaxRate.FULL_TIME);
    }
}

class PartTimeEmployee implements Employee {
    #hourlyRate: number;
    #hoursWorked: number;

    constructor(
        hourlyRate: number,
        hoursWorked: number
    ) {
        this.#hourlyRate = hourlyRate;
        this.#hoursWorked = hoursWorked;
    }

    calculateSalary(): number {
        return this.#hourlyRate * this.#hoursWorked;
    }
}

class ContractEmployee implements Employee {
    #contractAmount: number;

    constructor(
        contractAmount: number
    ) {
        this.#contractAmount = contractAmount;
    }

    calculateSalary(): number {
        return this.#contractAmount;
    }
}

(() => {
    const employees: Employee[] = [
        new FullTimeEmployee(10000),
        new PartTimeEmployee(175, 168),
        new ContractEmployee(25000),
    ];

    employees.forEach(employee => console.log(employee.calculateSalary()));
})();
