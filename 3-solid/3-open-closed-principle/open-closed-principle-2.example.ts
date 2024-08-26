interface BonusPolicy {
    calculate(salary: number): number;
}

class StandardBonus implements BonusPolicy {
    calculate(salary: number): number {
        return salary * .1;
    }
}

class ManagerBonus implements BonusPolicy {
    calculate(salary: number): number {
        return salary * .15;
    }
}

class ExecutiveBonus implements BonusPolicy {
    calculate(salary: number): number {
        return salary * .2137;
    }
}

// This we can add in the future
class InternBonus implements BonusPolicy {
    calculate(salary: number): number {
        return salary * .0000000001;
    }
}



class Employee {
    constructor(
        private readonly salary: number,
        private readonly bonusPolicy: BonusPolicy,
    ) { }

    calculateBonus(): number {
        return this.bonusPolicy.calculate(this.salary);
    }
}

