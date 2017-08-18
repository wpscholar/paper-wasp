import {ImageEditor} from './component-editor';

const {
    paperWasp: {
        componentRegistry
    }
} = window;

if(componentRegistry) {
    componentRegistry.setProperty('paper-wasp-image', 'classEditor', ImageEditor);
}
