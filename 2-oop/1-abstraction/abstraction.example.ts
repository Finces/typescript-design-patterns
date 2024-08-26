enum LogType {
    INFO = 'info',
    ERROR = 'error',
}

interface LoggerInterface {
    info(message: string): void;
    error(message: string): void;
}

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

class ConsoleLogger extends AbstractLogger {
    info(message: string): void {
        console.log(this.format(message, LogType.INFO));
    }

    error(message: string): void {
        console.log(this.format(message, LogType.ERROR));
    }
}

(() => {
    const logger = new ConsoleLogger();

    logger.info('This is an example of an info message log');
    logger.error('This is an example of an error message log');
})();
