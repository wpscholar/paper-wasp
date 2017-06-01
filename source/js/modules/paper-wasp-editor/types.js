// @flow
import {ComponentCollection, Context} from 'paper-wasp';

export type Container = {
    allowedAttributes: Object,
    allowedTags: Array<string>,
    componentRegistry: Object,
    componentRenderMap: Function,
    postId: number,
    restBase: string,
    restNonce: string,
    userId: number
};

export type State = {
    activeComponent: number,
    components: ComponentCollection,
    container: Container,
    context: Context
};
