import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';

import Heading from './component';

storiesOf('Heading', module)
    .addDecorator(withKnobs)
    .addWithInfo('',
        ``,
        () => (
            <Heading
                className={text("Class Name", "")}
                headline={text("Headline", "Narwhal Digital")}
                Tag={select("Tag", ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])}
            />
        )
    )
