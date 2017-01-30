import { AWebPrompt } from 'ts-react-app-web';

export class Prompt extends AWebPrompt {
    static readonly instance: Prompt = new Prompt();
    private constructor() {
        super();
    }

    createPopUp(_title: string, _msg: string, _type: eCommon.popUp,
        _okCallBack?: tCommon.anyFun,
        _cancelCallBack?: tCommon.anyFun) {

    }

    createToast(_msg: string, _onShow?: tCommon.anyFun, _onHide?: tCommon.anyFun) { 

    }
}
