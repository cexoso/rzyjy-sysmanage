import { AWebRequest } from 'ts-react-app-web'
import { Factory as f } from '../Factory';

const debug = false;

const hostUrl = debug ? 'http://ycytest.5fengshou.com' : 'http://weixin.4008268365.com';

export class Request extends AWebRequest {
    static readonly instance: Request = new Request();
    private constructor() {
        super();
        this.setHostUrl(hostUrl);
    }
    protected sealPostData(postData?: tCommon.anyObject) {
        if (!postData) return { token: f.App.AppConfig.token };
        let _data = postData;
        _data["token"] = f.App.AppConfig.token;
        return _data;
    }
    postGlobalHandler(url: string, postData?: tCommon.anyObject) {
        const error = this.createError();
        error.postData = postData;

        return this.post<tApp.requestCallbackData>(url, postData)
            .then(
            (data?: any) => {
                error.returnData = data;

                if (!data || data.state == null) {
                    error.message = '返回的数据结构或数据类型错误！';
                    if (data && data.msg) {
                        error.message = data.msg;
                    }
                    error.state = eCommon.requestErrorState.dataError;
                    f.ErrorHandler.log(error);
                    f.Prompt.promptToast('请求超时！请稍后再试！');
                    return f.AsyncOperation.getReject(error);
                }

                if (data.msg == "token_error") {
                    f.Redux.changeState(f.Redux.action.userLogout());
                    f.Navigation.toLogin(true);
                    error.message = '会话状态超时！';
                    error.state = eCommon.requestErrorState.globalError;
                    f.ErrorHandler.log(error);
                    f.Prompt.promptToast(error.message);
                    return f.AsyncOperation.getReject(error);
                }

                if (!data.state) {
                    error.message = data.msg ? data.msg : '操作失败！';
                    f.Prompt.failPopUp(error.message);
                    return f.AsyncOperation.getReject(error);
                }

                return f.AsyncOperation.getResolve(data.dataList);
            },
            (e) => {
                error.message = '通信异常！';
                error.returnData = e;
                error.state = eCommon.requestErrorState.requestFail;
                f.ErrorHandler.log(error);
                f.Prompt.promptToast('请求超时！请稍后再试！');
                return f.AsyncOperation.getReject(error);
            }
            );
    }
}



