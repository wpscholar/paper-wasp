import {ImageEditor} from './component-editor';

const {
    paperWasp: {
        componentRegistry
    }
} = window;

if(componentRegistry) {
    componentRegistry.setProperty('image', 'classEditor', ImageEditor);
}
