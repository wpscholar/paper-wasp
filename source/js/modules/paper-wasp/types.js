export type Component = {
    uid: number,
    type: string,
    parent: number,
    index: number,
    data: Object,
};

export type ComponentCollection = Array<Component>;

export type Context = 'view' | 'edit';

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
    components: ComponentCollection,
    container: Container,
    context: Context
};
