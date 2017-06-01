// @flow

import {connect} from 'react-redux';
import {Page} from 'paper-wasp-component-page';

import {getPage} from './selectors';

type Props = {
    data: Object,
    dispatch: Function,
    uid: number,
    index: number,
    parent: number,
    type: string,
};

function PaperWasp({dispatch, ...props}: Props) {
    return (
        <div className="paper-wasp">
            <Page {...props} />
        </div>
    );
}

const PaperWaspConnect = connect(
    state => ({...getPage(state)})
)(PaperWasp);

export default PaperWaspConnect;
