import ComponentRegistry from 'component-registry';

import {registerColumn} from 'paper-wasp-component-column';
import {registerRichText} from 'paper-wasp-component-rich-text';
import {registerRow} from 'paper-wasp-component-row';

import {Grid, GridEditor} from 'paper-wasp-component-grid';
import {Image, ImageEditor} from 'paper-wasp-component-image';
import {ImageTile, ImageTileEditor} from 'paper-wasp-component-image-tile';

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
        class: ImageTile,
        classEditor: ImageTileEditor,
        group: 'tile',
        isDynamic: false,
        label: 'Image Tile',
        thumbnailUrl: '/assets/img/image.jpeg',
        type: 'image-tile',
    }
];

components.forEach(component => componentRegistry.set(component.type, component));
window.paperWasp.registry.forEach(component => componentRegistry.set(component.type, component));
