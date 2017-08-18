import {HeadingEditor} from './component-editor';

const {
    paperWasp: {
        componentRegistry
    }
} = window;

if(componentRegistry) {
    componentRegistry.setProperty('paper-wasp-heading', 'classEditor', HeadingEditor);
}
