# Single Responsibility Principle

The Single Responsibility Principle (SRP) is a principle of object-oriented programming that states that a class should only have one reason to change. This principle is part of the SOLID principles, a popular set of five principles for designing and organizing classes and methods in an object-oriented way that promotes long-term maintainability.

This principle suggests that a class should only do one thing and do it well. If a class has more than one responsibility, it becomes coupled, and a change to one responsibility can affect the others. This coupling can make the code more difficult to understand, modify, and maintain.

The goal is to minimize the impact of change by isolating it. If we have to change something, we should only need to update one class. If a class has too many responsibilities, a change in the requirements of one responsibility might affect the other responsibilities of the class.

SRP can be applied by breaking down large, complex classes into smaller, more manageable ones. Each of these smaller classes should have a single responsibility.

## Code analysis

This is an example of a code that does not follow SRP

```
class BadInvoice {
    constructor(
        private readonly recipient: string,
        private readonly sender: string,
        private readonly invoiceNumber: string,
        private readonly amount: number
    ) { }

    generatePDF(): void {
        console.log(`Let's assume this function generates PDF from BadInvoice`);
        console.log(`This is invoice number: ${ this.invoiceNumber }`);
        console.log(`This is an invoice from ${ this.sender } to ${ this.recipient }`);
        console.log(`The invoice is for amount: ${ this.amount }`);
    }

    sendAsEmail(): void {
        console.log(`Let's assume this function sends an email with BadInvoice`);
        console.log(`Title: ${ this.invoiceNumber }`);
        console.log(`To: ${ this.recipient }`);
        console.log(`From: ${ this.sender }`);
        console.log(`Amount: ${ this.amount }`);
    }
}
```

The class above has 3 reasons to change:
- **a change in invoice properties**
- **a change in pdf generation logic/library**
- **a change in email system**

So it holds 3 different responsibilites. We can transform this code into a better one by extracting core functionalities into separate classes. Let's write `Invoice` class like this:

```
class GoodInvoice {
    constructor(
        private readonly recipient: string,
        private readonly sender: string,
        private readonly invoiceNumber: string,
        private readonly amount: number
    ) { }

    getRecipient(): string {
        return this.recipient;
    }

    getSender(): string {
        return this.sender;
    }

    getInvoiceNumber(): string {
        return this.invoiceNumber;
    }

    getAmount(): number {
        return this.amount
    }
}
```
Now it only holds properties related to the invoice data. This is simple. Now if we want to generate a pdf from that invoice we can create a new class that will do that - and only that:

```
class GoodInvoicePdfGenerator {
    fromInvoice(invoice: GoodInvoice) {
        console.log(`Let's assume this function generates PDF from GoodInvoice`);
        console.log(`This is invoice number: ${ invoice.getInvoiceNumber() }`);
        console.log(`This is an invoice from ${ invoice.getSender() } to ${ invoice.getRecipient() }`);
        console.log(`The invoice is for amount: ${ invoice.getAmount() }`);
    }
}
```

And if we want to send an email - you know the drill. Just add a new class that will do ONE THING ONLY:

```
class GoodInvoiceEmailSender {
    send(invoice: GoodInvoice) {
        console.log(`Let's assume this function sends an email with GoodInvoice`);
        console.log(`Title: ${ invoice.getInvoiceNumber() }`);
        console.log(`To: ${ invoice.getRecipient() }`);
        console.log(`From: ${ invoice.getSender() }`);
        console.log(`Amount: ${ invoice.getAmount() }`);
    }
}
```

This way it's way easier to decouple login in classes and write clean, maintainable code.

## Benefits

- **Easier Maintenance**: When a class or module is only responsible for one aspect of system functionality, it's much easier to understand, maintain, and update. Changes for a specific feature or in response to a change in requirements should only affect a single class. You don't have to worry about a modification rippling out to other unrelated sections of your code.
- **Improved Understandability**: Code that follows SRP tends to be more readable and understandable. Each class has a single focus, and its purpose is generally clear to developers. This saves a lot of time in code comprehension, which is a big part of software development. By splitting large classes into smaller ones each with a single responsibility, the purpose of each class becomes more apparent.
- **Easier Testing**: It's generally easier to write unit tests for code that follows SRP. Each unit test should correspond to a single functionality or behaviour. If a class has a single responsibility, you can write focused tests that check whether that responsibility is being fulfilled correctly. In contrast, a class that handles multiple responsibilities can have complex interdependencies that make it harder to test.
- **Reduced Coupling**: The SRP helps reduce coupling between different parts of a system. If a class or module takes on too many responsibilities, changes to one area can inadvertently affect another, creating a fragile system where small changes can have large, unpredictable effects. By ensuring that each class has only one reason to change, you minimize the impact of changes and reduce the risk of creating bugs in unrelated features.
- **Increased Reusability**: Classes that do one thing and do it well are more likely to be reusable in different contexts. If a class combines multiple responsibilities, it's less likely to fit neatly into a new context where only some of its functionality is required. Following SRP can help you build a library of highly reusable components, increasing your codebase's flexibility and efficiency.
