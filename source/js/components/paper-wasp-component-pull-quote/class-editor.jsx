import {PullQuoteEditor} from './component-editor';

const {
    paperWasp: {
        componentRegistry
    }
} = window;

if(componentRegistry) {
    componentRegistry.setProperty('paper-wasp-pull-quote', 'classEditor', PullQuoteEditor);
}
