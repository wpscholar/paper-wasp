import ComponentRegistry from 'component-registry';

import {Column, ColumnEditor} from 'paper-wasp-component-column';
import {Grid, GridEditor} from 'paper-wasp-component-grid';
import {Row, RowEditor} from 'paper-wasp-component-row';
import {Image, ImageEditor} from 'paper-wasp-component-image';
import {ImageTile, ImageTileEditor} from 'paper-wasp-component-image-tile';
import {Text, TextEditor} from 'paper-wasp-component-text';
import {PullQuote, PullQuoteEditor} from 'paper-wasp-component-pull-quote';
import {Quote, QuoteEditor} from 'paper-wasp-component-quote';
import {RichText, RichTextEditor} from 'paper-wasp-component-rich-text';
import {Heading, HeadingEditor} from 'paper-wasp-component-heading';
import {Button, ButtonEditor} from 'paper-wasp-component-button';
import {Video, VideoEditor} from 'paper-wasp-component-video';

const {paperWasp: {componentRegistry = ComponentRegistry}} = window;

window.paperWasp.componentRegistry = componentRegistry;

const components = [
    {
        canAdd: false,
        canDelete: true,
        canEdit: true,
        class: Column,
        classEditor: ColumnEditor,
        isComponent: true,
        isDynamic: false,
        isSection: false,
        label: 'Column',
        type: 'column',
    },
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: Grid,
        classEditor: GridEditor,
        isComponent: true,
        isDynamic: false,
        isSection: false,
        label: 'Grid',
        type: 'grid',
    },
    {
        canAdd: false,
        canDelete: true,
        canEdit: true,
        class: Row,
        classEditor: RowEditor,
        isComponent: false,
        isDynamic: false,
        isSection: false,
        label: 'Row',
        type: 'row'
    },
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: Text,
        classEditor: TextEditor,
        isComponent: true,
        isDynamic: false,
        isSection: false,
        label: 'Text',
        thumbnailUrl: '/assets/img/text.png',
        type: 'text',
    },
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: Image,
        classEditor: ImageEditor,
        isComponent: true,
        isDynamic: false,
        isSection: false,
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
        isComponent: true,
        isDynamic: false,
        isSection: false,
        label: 'Image Tile',
        thumbnailUrl: '/assets/img/image.jpeg',
        type: 'image-tile',
    },
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: RichText,
        classEditor: RichTextEditor,
        isComponent: true,
        isDynamic: false,
        isSection: false,
        label: 'Rich Text',
        thumbnailUrl: '/assets/img/rich-text.png',
        type: 'rich-text',
    },
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: Heading,
        classEditor: HeadingEditor,
        isComponent: true,
        isDynamic: false,
        isSection: false,
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
        isComponent: true,
        isDynamic: false,
        isSection: false,
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
        isComponent: true,
        isDynamic: false,
        isSection: false,
        label: 'Pull Quote',
        type: 'pull-quote',
    },
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: Quote,
        classEditor: QuoteEditor,
        isComponent: true,
        isDynamic: false,
        isSection: false,
        label: 'Quote',
        type: 'quote',
    },
    {
        canAdd: true,
        canDelete: true,
        canEdit: true,
        class: Video,
        classEditor: VideoEditor,
        isComponent: true,
        isDynamic: false,
        isSection: false,
        label: 'Video',
        thumbnailUrl: '/assets/img/video.png',
        type: 'video',
    }
];

components.forEach(component => componentRegistry.set(component.type, component));
