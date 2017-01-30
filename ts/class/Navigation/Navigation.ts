import { AWebNavigation } from 'ts-react-app-web';

export class Navigation extends AWebNavigation {
    static readonly instance: Navigation = new Navigation();
    private constructor() {
        super();
    }
    checkPreChange() {
        return true;
    }
}
