// @flow

import {HTML} from 'html';

type Props = {
    className: string,
    data: {
        align: string,
        color: string,
        text: string
    },
    id: string
};

function Text({className = '', data: {align = 'left', color, text = ''}, id}: Props) {

    const classes = ['paper-wasp-text', `paper-wasp-text--${align}`, className].join(' ').trim();

    return <HTML className={classes} html={text} id={id} style={color ? {color} : {}} />;
}

export {Text};
