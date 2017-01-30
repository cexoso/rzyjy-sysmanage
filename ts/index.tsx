/// <reference path="./declare/index.d.ts" />

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './Component/Root';
import { Factory as f } from './class/Factory';
import '../less/common/reset.less';
import '../less/common/main.less';

f.App.init().then(
  () => {
    try {
      const rootElement = document.getElementById('container');
      render(
        <Provider store={f.Redux.Store}>
          <Root />
        </Provider>,
        rootElement!
      );
    }
    catch (e) {
      f.ErrorHandler.hasPendingGlobalError = true;
      f.ErrorHandler.log(e);
      f.App.reset();
    }
  },
  () => { }
)
