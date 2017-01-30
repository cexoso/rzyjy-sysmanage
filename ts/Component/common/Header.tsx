import * as React from 'react';
/*import { Factory as f } from '../class/Factory';*/
import { AWebComponent } from '../base';

type props = tCommon.reactProps;
type state = tCommon.reactState;

export class Header extends AWebComponent<props, state> {
    render() {
        return (
            <div className={classNames.container}>

            </div>
        )
    }
}

const classNames = {
    container: 'header'
}