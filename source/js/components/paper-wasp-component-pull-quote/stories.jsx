import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {withKnobs, text} from '@kadira/storybook-addon-knobs';

import Pull Quote from './component';

import './component.scss';

storiesOf('Pull Quote', module)
    .addDecorator(withKnobs)
    .addWithInfo('',
        '',
        () => (
            <Pull Quote />
        )
    );
