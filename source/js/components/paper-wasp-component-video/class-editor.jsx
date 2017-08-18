import {VideoEditor} from './component-editor';

const {
    paperWasp: {
        componentRegistry
    }
} = window;

if(componentRegistry) {
    componentRegistry.setProperty('paper-wasp-video', 'classEditor', VideoEditor);
}