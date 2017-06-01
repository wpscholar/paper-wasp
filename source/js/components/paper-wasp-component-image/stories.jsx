import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {withKnobs, text} from '@kadira/storybook-addon-knobs';

import {Image} from './component';

import './styles.scss';

storiesOf('Image', module)
    .addDecorator(withKnobs)
    .addWithInfo('',
        '',
        () => (
            <Image
                alt={text('Image Alt', '')}
                caption={text('Caption', 'Narwhal')}
                className={text('Class Name', '')}
                link={text('Link', 'https://narwhal.digital')}
                src={text('Image Source', 'http://bit.ly/2oqPeqy')}
                title={text('Title', 'Not a unicorn')}
            />
        )
    );
