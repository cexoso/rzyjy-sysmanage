import * as React from 'react';
import { AWebComponent } from './base';
import { LoadingSpinner } from './common';
import { connect } from 'react-redux';
import { Factory as f } from '../class/Factory';

type props = {
    spinnerShow: boolean
};
type state = tCommon.reactState;

class SceneContainer extends AWebComponent<props, state> {
    render() {
        const {spinnerShow} = this.props;
        return (
            <div className={classNames.container}>
                {this.props.children}
                <LoadingSpinner show={spinnerShow} imgSrc={f.App.getImageFullPath('loading.gif')} />
            </div>
        )
    }
}

const classNames = {
    container: 'bodyContainer'
}

function select(state: tApp.state) {
    return {
        spinnerShow: state.appGlobal.spinnerShow
    }
}

export default connect(select)(SceneContainer);