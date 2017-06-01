// @flow

import type {ReactChildren} from 'react-flow-types';

type Props = {
    children: ReactChildren
};

function Page({children}: Props) {
    return (
        <div className="paper-wasp-page">
            {children}
        </div>
    );
}

export default Page;
