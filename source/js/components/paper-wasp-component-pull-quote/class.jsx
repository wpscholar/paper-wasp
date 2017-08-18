import {PullQuote} from './component';

const {
    paperWasp: {
        componentRegistry
    }
} = window;

if(componentRegistry) {
    componentRegistry.setProperty('paper-wasp-pull-quote', 'class', PullQuote);
}
