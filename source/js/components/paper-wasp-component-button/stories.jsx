import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';

import Button from './component';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addWithInfo('',
        ``,
        () => (
            <Button
                className={text('Class Name', '')}
                link={text('Link', 'https://narwhal.digital')}
                title={text('Title', 'Visit')}
            />
        )
    )
