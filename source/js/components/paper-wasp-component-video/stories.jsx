import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, select, boolean } from '@kadira/storybook-addon-knobs';

import Video from './component';

const videoTypes = {
    'youtube': 'Youtube',
    'vimeo': 'Vimeo',
    'wp-upload': 'WP Upload',
    'mp4': 'MP4'
}
storiesOf('Video', module)
    .addDecorator(withKnobs)
    .addWithInfo('with Youtube',
        ``,
        () => (
            <Video
                allowFullScreen={boolean('Allow Full Screen', true)}
                className={text('Class Name', '')}
                type={select('Video Type', videoTypes, 'youtube')}
                videoID={text('Video ID', 'dQw4w9WgXcQ')}
            />
        )
    )
    .addWithInfo('with Vimeo',
        ``,
        () => (
            <Video
                allowFullScreen={boolean('Allow Full Screen', true)}
                className={text('Class Name', '')}
                type={select('Video Type', videoTypes, 'vimeo')}
                videoID={text('Video ID', '45196609')}
            />
        )
    )
