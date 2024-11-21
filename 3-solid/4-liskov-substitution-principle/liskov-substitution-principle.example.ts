abstract class PaymentProcessor {
    abstract process(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
    process(amount: number): void {
        console.log(`Processing payment by a credit card for amount of $${ amount }`);
    }
}

class DebitCardProcessor extends PaymentProcessor {
    process(amount: number): void {
        console.log(`Processing payment by a debit card for amount of $${ amount }`);
    }
}

class BlikProcessor extends PaymentProcessor {
    process(amount: number): void {
        console.log(`Processing payment by Blik for amount of $${ amount }`);
    }
}

//----------------

class PaymentService {
    processPayment(amount: number, processor: PaymentProcessor) {
        processor.process(amount);
    }
}
