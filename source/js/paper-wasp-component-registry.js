import ComponentRegistry from 'component-registry';

import {registerColumn} from 'paper-wasp-component-column';
import {registerRichText} from 'paper-wasp-component-rich-text';
import {registerRow} from 'paper-wasp-component-row';

import {Grid, GridEditor} from 'paper-wasp-component-grid';
import {Image, ImageEditor} from 'paper-wasp-component-image';
import {ImageTile, ImageTileEditor} from 'paper-wasp-component-image-tile';
import {PullQuote, PullQuoteEditor} from 'paper-wasp-component-pull-quote';
import {Quote, QuoteEditor} from 'paper-wasp-component-quote';
import {Heading, HeadingEditor} from 'paper-wasp-component-heading';
import {Button, ButtonEditor} from 'paper-wasp-component-button';
import {Video, VideoEditor} from 'paper-wasp-component-video';

const {paperWasp: {componentRegistry = ComponentRegistry}} = window;

window.paperWasp.componentRegistry = componentRegistry;

const components = [
    registerColumn,
    registerRichText,
    registerRow,
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: Grid,
        classEditor: GridEditor,
        group: 'component',
        isDynamic: false,
        label: 'Grid',
        type: 'grid',
    },
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: Image,
        classEditor: ImageEditor,
        group: 'component',
        isDynamic: false,
        label: 'Image',
        thumbnailUrl: '/assets/img/image.jpeg',
        type: 'image',
    },
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: ImageTile,
        classEditor: ImageTileEditor,
        group: 'tile',
        isDynamic: false,
        label: 'Image Tile',
        thumbnailUrl: '/assets/img/image.jpeg',
        type: 'image-tile',
    },
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: Heading,
        classEditor: HeadingEditor,
        group: 'component',
        isDynamic: false,
        label: 'Heading',
        thumbnailUrl: '/assets/img/heading.png',
        type: 'heading',
    },
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: Button,
        classEditor: ButtonEditor,
        group: 'component',
        isDynamic: false,
        label: 'Button',
        thumbnailUrl: '/assets/img/button.png',
        type: 'button',
    },
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: PullQuote,
        classEditor: PullQuoteEditor,
        group: 'component',
        isDynamic: false,
        label: 'Pull Quote',
        type: 'pull-quote',
    },
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: Quote,
        classEditor: QuoteEditor,
        group: 'component',
        isDynamic: false,
        label: 'Quote',
        type: 'quote',
    },
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: Video,
        classEditor: VideoEditor,
        group: 'component',
        isDynamic: false,
        label: 'Video',
        thumbnailUrl: '/assets/img/video.png',
        type: 'video',
    }
];

components.forEach(component => componentRegistry.set(component.type, component));
