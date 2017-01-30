declare namespace tApp {
    type initData = {};
    type appConfig = {
        token: string,
        listViewPageSize: number,
        staticResourceFolderPath: string
    };
    type state = {
        appGlobal: appGlobal,
        user: user
    };
    type lastUnLoadInfo = {
        state: state,
        lastUnloadTime: number
    }
    type requestCallbackData = {
        state: boolean,
        dataList: tCommon.anyObject | [tCommon.anyObject],
        msg: string
    }
}

//state value
declare namespace tApp {
    type user = {
        nowUser: nowUser
    };
    type nowUser = tCommon.allowVoid<{
        id:string
    }>;
    type appGlobal = {
        spinnerShow: boolean
    }
}
