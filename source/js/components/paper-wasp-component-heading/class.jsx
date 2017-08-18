import {Heading} from './component';

const {
    paperWasp: {
        componentRegistry
    }
} = window;

if(componentRegistry) {
    componentRegistry.setProperty('paper-wasp-heading', 'class', Heading);
}
