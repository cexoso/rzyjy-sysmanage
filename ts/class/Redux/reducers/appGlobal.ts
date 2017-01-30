import * as ac from '../actions';
import { objHp } from '../../../helper';

type art = tRedux.actionReturn;
type rht = tRedux.reducerHandler;


const appGlobalDefault: tApp.appGlobal = {
    spinnerShow: false
}

const appGlobalHandler: {
    [k: string]: rht
} = {
        [ac.app_reset]: () => {
            return objHp.cloneDeep(appGlobalDefault)
        },
        [ac.app_recoverByLastUnLoadState]: (_state: tApp.appGlobal, newValue: ac.app_recoverByLastUnLoadState) => {
            return newValue.appGlobal;
        },


        [ac.app_exit]: (state: tApp.appGlobal, newValue: ac.app_exit) => {
            return Object.assign({}, state, newValue);
        },
        [ac.app_init]: (state: tApp.appGlobal, _newValue: ac.app_init) => {
            const v = {
                
            }
            return Object.assign({}, state, v);
        },
        [ac.app_spinner_show]: (state: tApp.appGlobal, newValue: ac.app_spinner_show) => {
            const v = {
                spinnerShow: newValue.show
            }
            return Object.assign({}, state, v);
        }
    };

export const appGlobal = (state = objHp.cloneDeep(appGlobalDefault), action: art) => {
    const _handler = appGlobalHandler[action.type];
    if (_handler) {
        return _handler(state, action.newValue);
    }

    return state;
}
