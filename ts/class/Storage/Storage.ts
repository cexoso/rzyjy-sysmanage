import { AWebStorage } from 'ts-react-app-web';

export class Storage extends AWebStorage {
    static readonly instance: Storage = new Storage();
    private constructor() {
        super();
    }
}
