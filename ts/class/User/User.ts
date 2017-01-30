import { AWebUser } from 'ts-react-app-web';
import { Factory as f } from '../Factory';
export class User extends AWebUser<tApp.nowUser> {
    static readonly instance: User = new User();
    private constructor() {
        super();
    }

    getUser() {
        return f.Redux.getState().user.nowUser;
    }

    isLogin() {
        const user = this.getUser();

        if (!user || !user.id) {
            return false
        }

        return true
    }
}
