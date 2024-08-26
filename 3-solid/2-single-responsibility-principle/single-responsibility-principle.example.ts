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

class GoodInvoicePdfGenerator {
    fromInvoice(invoice: GoodInvoice) {
        console.log(`Let's assume this function generates PDF from GoodInvoice`);
        console.log(`This is invoice number: ${ invoice.getInvoiceNumber() }`);
        console.log(`This is an invoice from ${ invoice.getSender() } to ${ invoice.getRecipient() }`);
        console.log(`The invoice is for amount: ${ invoice.getAmount() }`);
    }
}

class GoodInvoiceEmailSender {
    send(invoice: GoodInvoice) {
        console.log(`Let's assume this function sends an email with GoodInvoice`);
        console.log(`Title: ${ invoice.getInvoiceNumber() }`);
        console.log(`To: ${ invoice.getRecipient() }`);
        console.log(`From: ${ invoice.getSender() }`);
        console.log(`Amount: ${ invoice.getAmount() }`);
    }
}

(() => {
    const badInvoice = new BadInvoice(
        'Deadpool',
        'Wolverine',
        'IN/JGH/2137',
        420
    );

    badInvoice.generatePDF();
    badInvoice.sendAsEmail();

    const goodInvoice = new GoodInvoice(
        'Deadpool',
        'Wolverine',
        'IN/JGH/2137',
        420
    );

    const pdfGenerator = new GoodInvoicePdfGenerator();
    const emailSender = new GoodInvoiceEmailSender();

    pdfGenerator.fromInvoice(goodInvoice);
    emailSender.send(goodInvoice);
})();
