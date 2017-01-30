
export type app_exit = { lastUnloadTime: number };
export const app_exit = 'app_exit';
export function appExit(newValue: app_exit) {
    return {
        type: app_exit,
        newValue
    }
}

export const app_reset = 'app_reset';
export function appReset() {
    return {
        type: app_reset
    }
}

export type app_init = tApp.initData;
export const app_init = "app_init";
export function appInit(newValue: app_init) {
    return {
        type: app_init,
        newValue
    }
}

export type app_recoverByLastUnLoadState = tApp.state;
export const app_recoverByLastUnLoadState = "app_recoverByLastUnLoadState";
export function appRecoverByLastUnLoadState(newValue: app_recoverByLastUnLoadState) {
    return {
        type: app_recoverByLastUnLoadState,
        newValue
    }
}

export type app_spinner_show = { show: boolean };
export const app_spinner_show = "app_spinner_show";
export function appSpinnerShow(newValue: app_spinner_show) {
    return {
        type: app_spinner_show,
        newValue
    }
}



