// @flow

import Image from 'paper-wasp-component-image/component';

type Props = {
    className: string,
    data: Object,
    id: string
};

function ImageTile({className, data, id}: Props) {
    return (
        <div className={['paper-wasp-image-tile', className].join(' ').trim()} id={id}>
            <Image {...data} />
        </div>
    );
}

export {ImageTile};
