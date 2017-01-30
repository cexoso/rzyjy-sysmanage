import { AWebRedux } from 'ts-react-app-web';
import rootReducer from './reducers';
import * as action from './actions';
export class Redux extends AWebRedux<tApp.state, typeof action> {
    static readonly instance: Redux = new Redux();
    private constructor() {
        super(rootReducer)
    }
    action = action
}
