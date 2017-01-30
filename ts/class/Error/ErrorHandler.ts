import { AWebErrorHandler } from 'ts-react-app-web';

export class ErrorHandler extends AWebErrorHandler {
    static readonly instance: ErrorHandler = new ErrorHandler();
    private constructor() {
        super();
    }
}
