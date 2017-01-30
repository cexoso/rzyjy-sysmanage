import { AWebApp } from 'ts-react-app-web';
import { Factory as f } from '../Factory';
import { strHp } from '../../helper';

export class App extends AWebApp<tApp.initData, tApp.appConfig> {
    static readonly instance: App = new App();
    private constructor() {
        super();
    }

    get AppConfig() {
        if (!this._appConfig) {
            this._appConfig =
                {
                    token: '',
                    listViewPageSize: 20,
                    staticResourceFolderPath: './static/'
                };
        }
        return this._appConfig;
    }

    protected checkUpgrade() {
        return eCommon.checkUpgrade.noNew;
    }

    protected clearState() {
        f.Storage.remove(this.lastStateInStorageKey);
        f.Redux.changeState(f.Redux.action.appReset());
    }

    protected setInitData() {
        this.initData = {};
        return f.AsyncOperation.getResolve();
    }

    upgrade() {
        this.reset('即将进行版本更新！');
    }

    init() {
        window.onerror = (msg, url, num) => {
            f.ErrorHandler.hasPendingGlobalError = true;
            f.ErrorHandler.log({ msg: msg, url: url, lineNum: num });
            this.reset();
        }

        let isRefresh = false;
        window.onbeforeunload = () => {
            isRefresh = true;
        }

        window.onunload = () => {
            if (f.ErrorHandler.hasPendingGlobalError || isRefresh) {
                f.Storage.remove(this.lastStateInStorageKey);
                return
            }

            f.Storage.setValue(this.lastStateInStorageKey,
                JSON.stringify(
                    {
                        lastUnloadTime: new Date().getTime(),
                        state: f.Redux.getState()
                    }
                )
            );
        }

        const initState = () => {
            return this.setInitData().then(
                () => {
                    try {
                        if (!this.initData) {
                            return f.AsyncOperation.getReject();
                        }
                        const check = this.checkUpgrade();

                        if (check != eCommon.checkUpgrade.necessary) {
                            f.Redux.changeState(f.Redux.action.appInit(this.initData));

                            return f.AsyncOperation.getResolve();
                        }
                        else {
                            this.upgrade();
                            return f.AsyncOperation.getReject();
                        }
                    }
                    catch (e) {
                        f.ErrorHandler.log(e);
                        return f.AsyncOperation.getReject();
                    }
                }
            )
        };

        const lastUnLoadInfoStr = f.Storage.getValue(this.lastStateInStorageKey);

        try {
            if (lastUnLoadInfoStr) {
                const lastUnLoadInfo = strHp.toJson<tApp.lastUnLoadInfo>(lastUnLoadInfoStr);
                if (lastUnLoadInfo && lastUnLoadInfo.lastUnloadTime && lastUnLoadInfo.state && !this.isRefreshStateInStroage(lastUnLoadInfo.lastUnloadTime, 0)) {
                    lastUnLoadInfo.state.appGlobal.spinnerShow = false;
                    f.Redux.changeState(f.Redux.action.appRecoverByLastUnLoadState(lastUnLoadInfo.state));
                }
            }
        }
        catch (e) {
            f.ErrorHandler.log(e);
        }
        return initState();
    }

    spinnerShow(show: boolean) {
        f.Redux.changeState(f.Redux.action.appSpinnerShow({ show: show }));
    }

    getImageFullPath(imgName: string) {
        return this.AppConfig.staticResourceFolderPath + 'img/' + imgName;
    }
}