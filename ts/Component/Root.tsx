import * as React from 'react';
import { Router, Route, hashHistory } from 'react-router';
/*import { Factory as f } from '../class/Factory';*/
import { AWebComponent } from './base';
import SceneContainer from './SceneContainer';
import { Header } from './common';

type props = tCommon.reactProps;
type state = tCommon.reactState;

export default class Root extends AWebComponent<props, state> {
    render() {
        return (
            <div className={classNames.container}>
                <Header />
                <div className={classNames.main}>
                    <Router history={hashHistory}>
                        <Route path="/" component={SceneContainer} >

                        </Route>
                    </Router>
                </div>
            </div>
        )
    }
}

const classNames = {
    container: 'bodyContainer',
    main: 'main'
}

