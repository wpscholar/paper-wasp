import {Image} from './container';

const {
    paperWasp: {
        componentRegistry
    }
} = window;

if(componentRegistry) {
    componentRegistry.setProperty('image', 'class', Image);
}
