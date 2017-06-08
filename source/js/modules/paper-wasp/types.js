export type Component = {
    canAdd: boolean,
    canDrag: boolean,
    canDelete: boolean,
    canEdit: boolean,
    type: string,
    parent: number,
    index: number,
    data: Object,
    uid: number,
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
