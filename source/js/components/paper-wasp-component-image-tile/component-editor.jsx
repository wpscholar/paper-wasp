// @flow

import {ImageEditor} from 'paper-wasp-component-image';

type Props = {
    data: Object,
    onChange: Function
};

function ImageTileEditor({data, onChange}: Props) {
    return (
        <ImageEditor data={data} onChange={onChange} />
    );
}

export {ImageTileEditor};
