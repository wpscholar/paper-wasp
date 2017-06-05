import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {withKnobs, text} from '@kadira/storybook-addon-knobs';

import ImageTile from './component';

import './styles/component.scss';

storiesOf('ImageTile', module)
    .addDecorator(withKnobs)
    .addWithInfo('',
        '',
        () => (
            <ImageTile />
        )
    );
