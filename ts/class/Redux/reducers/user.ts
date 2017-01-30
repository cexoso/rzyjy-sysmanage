import * as ac from '../actions';
import { objHp } from '../../../helper';

type art = tRedux.actionReturn;
type rht = tRedux.reducerHandler;


const userInfoDefault: tApp.user = {
    nowUser: undefined
}

const userInfoHandler: {
    [k: string]: rht
} = {
        [ac.app_reset]: () => {
            return objHp.cloneDeep(userInfoDefault)
        },
        [ac.app_recoverByLastUnLoadState]: (_state: tApp.user, newValue: ac.app_recoverByLastUnLoadState) => {
            return newValue.user;
        },

        [ac.app_init]: (state: tApp.user, _newValue: ac.app_init) => {
            const v = {

            }
            return Object.assign({}, state, v);
        },

        [ac.user_logout]: (state: tApp.user) => {
            return Object.assign({}, state, { nowUser: undefined });
        },
        [ac.user_login]: (state: tApp.user, newValue: ac.user_login) => {
            const v = {
                nowUser: newValue.nowUser
            }
            return Object.assign({}, state, v);
        },
        [ac.user_updateInfo]: (state: tApp.user, newValue: ac.user_updateInfo) => {
            if (!newValue) return state;
            const v = {
                nowUser: Object.assign({}, state.nowUser, newValue)
            }
            return Object.assign({}, state, v);
        },
    };

export const userInfo = (state = objHp.cloneDeep(userInfoDefault), action: art) => {
    const _handler = userInfoHandler[action.type];
    if (_handler) {
        return _handler(state, action.newValue);
    }

    return state;
}