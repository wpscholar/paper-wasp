import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {withKnobs, text} from '@kadira/storybook-addon-knobs';

import Grid from './component';

import './styles/component.scss';

storiesOf('Grid', module)
    .addDecorator(withKnobs)
    .addWithInfo('',
        '',
        () => (
            <Grid />
        )
    );
