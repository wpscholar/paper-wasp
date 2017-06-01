import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import Quote from './component';

storiesOf('Quote', module)
    .addDecorator(withKnobs)
    .addWithInfo('',
        ``,
        () => (
            <Quote
                author={text('Author', 'Albert Einstein')}
                className={text('Class Name', '')}
                quote={text('Quote', 'The difference between stupidity and genius is that genius has its limits.')}
            />
        )
    )
