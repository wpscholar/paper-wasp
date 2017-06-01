import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';

import RichTextEditor from './component-editor';

storiesOf('Rich Text Editor', module)
    .addDecorator(withKnobs)
    .addWithInfo('default',
        `
            In the Action Logger tab, you can see everytime there is user input, the \`onEditorChange\` callback is fired.

            There is a small delay because TinyMCE has a \`setInterval\` listening for changes.
        `,
        () => (
            <RichTextEditor
                onEditorChange={action('editor changed')}
            />
        )
    )
    .addWithInfo('editor with content',
        ``,
        () => (
            <RichTextEditor
                onEditorChange={action('editor changed')}
                content={text('Content', '<h1>Existing H1 to be edited</h1>')}
            />
        )
    )
