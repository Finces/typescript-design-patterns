// Because there is a conflict with the native type of Document
namespace ISP {
    export type Document = string;
}

interface BadPrinter {
    print(document: ISP.Document): void;

    scan(): ISP.Document;

    fax(document: ISP.Document): void;
}

class SimplePrinter implements BadPrinter {
    print(document: string): void {
        console.log(`Printing document...`);
    }

    scan(): string {
        throw new Error('Not supported!');
    }

    fax(document: string): void {
        throw new Error('Not supported!');
    }
}

//--------

interface Printer {
    print(document: ISP.Document): void;
}

interface Scanner {
    scan(): ISP.Document;
}

interface Fax {
    fax(document: ISP.Document): void;
}

class GoodSimplePrinter implements Printer {
    print(document: string): void {
        console.log(`Printing document...`);
    }
}

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
