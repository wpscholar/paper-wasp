/* eslint-disable */

import {
    addComponent,
    findTopLevelComponentIds,
    generateUniqueId,
    getComponentBranch,
    getNextIndex,
    insertComponents
} from './functions';

describe('addComponent', () => {

    const state = [
        {
            data: {},
            index: 0,
            parent: 0,
            type: 'page',
            uid: generateUniqueId(),
        }
    ];

    const action = {
        componentType: 'row',
        type: 'ADD_COMPONENT',
        uid: generateUniqueId(),
    };

    const expectedState = [
        ...state,
        {
            data: {},
            index: 1,
            parent: 0,
            type: action.componentType,
            uid: action.uid,
        }
    ];

    const finalState = addComponent(state, action);

    it('should add a new component', () => {
        expect(finalState).toEqual(expectedState);
    });

});

describe('findTopLevelComponentIds', () => {

    const components = [
        {
            parent: 1,
            type: 'row',
            uid: 2,
        },
        {
            parent: 2,
            type: 'column',
            uid: 3,
        }
    ];

    const result = findTopLevelComponentIds(components);

    it('should return a collection of top level ids', () => {
        expect(result).toEqual([2]);
    });
});

describe('getComponentBranch', () => {

    const mockComponents = [
        {
            uid: 1498668514000,
            type: 'page',
            parent: 0,
            index: 0,
            data: {}
        },
        {
            uid: 1498668518225,
            type: 'row',
            parent: 1498668514000,
            index: 0,
            data: {}
        },
        {
            uid: 1498668518226,
            type: 'column',
            parent: 1498668518225,
            index: 0,
            data: {}
        },
        {
            uid: 1498668521742,
            type: 'pindrop-footer-asymmetric-grid',
            parent: 1498668518226,
            index: 0,
            data: {}
        },
        {
            uid: 1498668521745,
            type: 'pindrop-wrapper',
            parent: 1498668521742,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__main'
        },
        {
            uid: 1498668521746,
            type: 'pindrop-wrapper',
            parent: 1498668521745,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__column-primary'
        },
        {
            uid: 1498668521747,
            type: 'pindrop-wrapper',
            parent: 1498668521746,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__inner'
        },
        {
            uid: 1498668521748,
            type: 'pindrop-heading',
            parent: 1498668521747,
            index: 0,
            data: {
                tag: 'h3',
                text: 'Lorem Ipsum'
            },
            className: 'pindrop-footer-asymmetric-grid__heading'
        },
        {
            uid: 1498668521749,
            type: 'pindrop-heading',
            parent: 1498668521747,
            index: 1,
            data: {
                tag: 'h2',
                text: 'Lorem ipsum dolor sit amet'
            },
            className: 'pindrop-footer-asymmetric-grid__sub-heading'
        },
        {
            uid: 1498668521750,
            type: 'pindrop-button',
            parent: 1498668521747,
            index: 2,
            data: {
                align: 'left',
                link: '#',
                text: 'Read More →'
            },
            className: 'pindrop-footer-asymmetric-grid__button'
        },
        {
            uid: 1498668521751,
            type: 'pindrop-wrapper',
            parent: 1498668521745,
            index: 1,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__column-secondary'
        },
        {
            uid: 1498668521752,
            type: 'pindrop-wrapper',
            parent: 1498668521751,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__row pindrop-footer-asymmetric-grid__row-first'
        },
        {
            uid: 1498668521753,
            type: 'pindrop-wrapper',
            parent: 1498668521752,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__column'
        },
        {
            uid: 1498668521754,
            type: 'pindrop-wrapper',
            parent: 1498668521753,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__inner'
        },
        {
            uid: 1498668521755,
            type: 'pindrop-heading',
            parent: 1498668521754,
            index: 0,
            data: {
                tag: 'h3',
                text: 'Lorem Ipsum'
            },
            className: 'pindrop-footer-asymmetric-grid__heading'
        },
        {
            uid: 1498668521756,
            type: 'pindrop-heading',
            parent: 1498668521754,
            index: 1,
            data: {
                tag: 'h2',
                text: 'Lorem ipsum dolor sit amet'
            },
            className: 'pindrop-footer-asymmetric-grid__sub-heading'
        },
        {
            uid: 1498668521757,
            type: 'pindrop-button',
            parent: 1498668521754,
            index: 2,
            data: {
                align: 'left',
                link: '#',
                text: 'Read More →'
            },
            className: 'pindrop-footer-asymmetric-grid__button'
        },
        {
            uid: 1498668521758,
            type: 'pindrop-wrapper',
            parent: 1498668521752,
            index: 1,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__column'
        },
        {
            uid: 1498668521759,
            type: 'pindrop-wrapper',
            parent: 1498668521758,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__inner'
        },
        {
            uid: 1498668521760,
            type: 'pindrop-heading',
            parent: 1498668521759,
            index: 0,
            data: {
                tag: 'h3',
                text: 'Lorem Ipsum'
            },
            className: 'pindrop-footer-asymmetric-grid__heading'
        },
        {
            uid: 1498668521761,
            type: 'pindrop-heading',
            parent: 1498668521759,
            index: 1,
            data: {
                tag: 'h2',
                text: 'Lorem ipsum dolor sit amet'
            },
            className: 'pindrop-footer-asymmetric-grid__sub-heading'
        },
        {
            uid: 1498668521762,
            type: 'pindrop-button',
            parent: 1498668521759,
            index: 2,
            data: {
                align: 'left',
                link: '#',
                text: 'Read More →'
            },
            className: 'pindrop-footer-asymmetric-grid__button'
        },
        {
            uid: 1498668521763,
            type: 'pindrop-wrapper',
            parent: 1498668521751,
            index: 1,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__row'
        },
        {
            uid: 1498668521764,
            type: 'pindrop-wrapper',
            parent: 1498668521763,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__column'
        },
        {
            uid: 1498668521765,
            type: 'pindrop-wrapper',
            parent: 1498668521764,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__inner'
        },
        {
            uid: 1498668521766,
            type: 'pindrop-heading',
            parent: 1498668521765,
            index: 0,
            data: {
                tag: 'h3',
                text: 'Lorem Ipsum'
            },
            className: 'pindrop-footer-asymmetric-grid__heading'
        },
        {
            uid: 1498668521767,
            type: 'pindrop-heading',
            parent: 1498668521765,
            index: 1,
            data: {
                tag: 'h2',
                text: 'Lorem ipsum dolor sit amet'
            },
            className: 'pindrop-footer-asymmetric-grid__sub-heading'
        },
        {
            uid: 1498668521768,
            type: 'pindrop-button',
            parent: 1498668521765,
            index: 2,
            data: {
                align: 'left',
                link: '#',
                text: 'Read More →'
            },
            className: 'pindrop-footer-asymmetric-grid__button'
        },
        {
            uid: 1498668521769,
            type: 'pindrop-wrapper',
            parent: 1498668521763,
            index: 1,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__column'
        },
        {
            uid: 1498668521770,
            type: 'pindrop-wrapper',
            parent: 1498668521769,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__inner'
        },
        {
            uid: 1498668521771,
            type: 'pindrop-heading',
            parent: 1498668521770,
            index: 0,
            data: {
                tag: 'h3',
                text: 'Lorem Ipsum'
            },
            className: 'pindrop-footer-asymmetric-grid__heading'
        },
        {
            uid: 1498668521772,
            type: 'pindrop-heading',
            parent: 1498668521770,
            index: 1,
            data: {
                tag: 'h2',
                text: 'Lorem ipsum dolor sit amet'
            },
            className: 'pindrop-footer-asymmetric-grid__sub-heading'
        },
        {
            uid: 1498668521773,
            type: 'pindrop-button',
            parent: 1498668521770,
            index: 2,
            data: {
                align: 'left',
                link: '#',
                text: 'Read More →'
            },
            className: 'pindrop-footer-asymmetric-grid__button'
        },
        {
            uid: 1498668521774,
            type: 'pindrop-wrapper',
            parent: 1498668521742,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__footer'
        },
        {
            uid: 1498668521775,
            type: 'pindrop-heading',
            parent: 1498668521774,
            index: 0,
            data: {
                tag: 'h3',
                text: 'Lorem Ipsum'
            },
            className: 'pindrop-footer-asymmetric-grid__footer-heading'
        },
        {
            uid: 1498668521776,
            type: 'pindrop-wrapper',
            parent: 1498668521774,
            index: 1,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__footer-logo-list-grid pindrop-logo-list-grid pindrop-logo-list-grid__cols-4'
        },
        {
            uid: 1498668521777,
            type: 'image-tile',
            parent: 1498668521776,
            index: 0,
            data: {
                src: 'http://via.placeholder.com/300x150'
            },
            canDelete: false,
            canDrag: false,
            canDrop: false
        },
        {
            uid: 1498668521778,
            type: 'image-tile',
            parent: 1498668521776,
            index: 1,
            data: {
                src: 'http://via.placeholder.com/300x150'
            },
            canDelete: false,
            canDrag: false,
            canDrop: false
        },
        {
            uid: 1498668521779,
            type: 'image-tile',
            parent: 1498668521776,
            index: 2,
            data: {
                src: 'http://via.placeholder.com/300x150'
            },
            canDelete: false,
            canDrag: false,
            canDrop: false
        },
        {
            uid: 1498668521780,
            type: 'image-tile',
            parent: 1498668521776,
            index: 3,
            data: {
                src: 'http://via.placeholder.com/300x150'
            },
            canDelete: false,
            canDrag: false,
            canDrop: false
        }
    ];

    const mockChildren = [
        {
            uid: 1498668521742,
            type: 'pindrop-footer-asymmetric-grid',
            parent: 1498668518226,
            index: 0,
            data: {}
        },
        {
            uid: 1498668521745,
            type: 'pindrop-wrapper',
            parent: 1498668521742,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__main'
        },
        {
            uid: 1498668521746,
            type: 'pindrop-wrapper',
            parent: 1498668521745,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__column-primary'
        },
        {
            uid: 1498668521747,
            type: 'pindrop-wrapper',
            parent: 1498668521746,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__inner'
        },
        {
            uid: 1498668521748,
            type: 'pindrop-heading',
            parent: 1498668521747,
            index: 0,
            data: {tag: 'h3', text: 'Lorem Ipsum'},
            className: 'pindrop-footer-asymmetric-grid__heading'
        },
        {
            uid: 1498668521749,
            type: 'pindrop-heading',
            parent: 1498668521747,
            index: 1,
            data: {tag: 'h2', text: 'Lorem ipsum dolor sit amet'},
            className: 'pindrop-footer-asymmetric-grid__sub-heading'
        },
        {
            uid: 1498668521750,
            type: 'pindrop-button',
            parent: 1498668521747,
            index: 2,
            data: {align: 'left', link: '#', text: 'Read More →'},
            className: 'pindrop-footer-asymmetric-grid__button'
        },
        {
            uid: 1498668521751,
            type: 'pindrop-wrapper',
            parent: 1498668521745,
            index: 1,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__column-secondary'
        },
        {
            uid: 1498668521752,
            type: 'pindrop-wrapper',
            parent: 1498668521751,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__row pindrop-footer-asymmetric-grid__row-first'
        },
        {
            uid: 1498668521753,
            type: 'pindrop-wrapper',
            parent: 1498668521752,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__column'
        },
        {
            uid: 1498668521754,
            type: 'pindrop-wrapper',
            parent: 1498668521753,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__inner'
        },
        {
            uid: 1498668521755,
            type: 'pindrop-heading',
            parent: 1498668521754,
            index: 0,
            data: {tag: 'h3', text: 'Lorem Ipsum'},
            className: 'pindrop-footer-asymmetric-grid__heading'
        },
        {
            uid: 1498668521756,
            type: 'pindrop-heading',
            parent: 1498668521754,
            index: 1,
            data: {tag: 'h2', text: 'Lorem ipsum dolor sit amet'},
            className: 'pindrop-footer-asymmetric-grid__sub-heading'
        },
        {
            uid: 1498668521757,
            type: 'pindrop-button',
            parent: 1498668521754,
            index: 2,
            data: {align: 'left', link: '#', text: 'Read More →'},
            className: 'pindrop-footer-asymmetric-grid__button'
        },
        {
            uid: 1498668521758,
            type: 'pindrop-wrapper',
            parent: 1498668521752,
            index: 1,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__column'
        },
        {
            uid: 1498668521759,
            type: 'pindrop-wrapper',
            parent: 1498668521758,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__inner'
        },
        {
            uid: 1498668521760,
            type: 'pindrop-heading',
            parent: 1498668521759,
            index: 0,
            data: {tag: 'h3', text: 'Lorem Ipsum'},
            className: 'pindrop-footer-asymmetric-grid__heading'
        },
        {
            uid: 1498668521761,
            type: 'pindrop-heading',
            parent: 1498668521759,
            index: 1,
            data: {tag: 'h2', text: 'Lorem ipsum dolor sit amet'},
            className: 'pindrop-footer-asymmetric-grid__sub-heading'
        },
        {
            uid: 1498668521762,
            type: 'pindrop-button',
            parent: 1498668521759,
            index: 2,
            data: {align: 'left', link: '#', text: 'Read More →'},
            className: 'pindrop-footer-asymmetric-grid__button'
        },
        {
            uid: 1498668521763,
            type: 'pindrop-wrapper',
            parent: 1498668521751,
            index: 1,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__row'
        },
        {
            uid: 1498668521764,
            type: 'pindrop-wrapper',
            parent: 1498668521763,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__column'
        },
        {
            uid: 1498668521765,
            type: 'pindrop-wrapper',
            parent: 1498668521764,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__inner'
        },
        {
            uid: 1498668521766,
            type: 'pindrop-heading',
            parent: 1498668521765,
            index: 0,
            data: {tag: 'h3', text: 'Lorem Ipsum'},
            className: 'pindrop-footer-asymmetric-grid__heading'
        },
        {
            uid: 1498668521767,
            type: 'pindrop-heading',
            parent: 1498668521765,
            index: 1,
            data: {tag: 'h2', text: 'Lorem ipsum dolor sit amet'},
            className: 'pindrop-footer-asymmetric-grid__sub-heading'
        },
        {
            uid: 1498668521768,
            type: 'pindrop-button',
            parent: 1498668521765,
            index: 2,
            data: {align: 'left', link: '#', text: 'Read More →'},
            className: 'pindrop-footer-asymmetric-grid__button'
        },
        {
            uid: 1498668521769,
            type: 'pindrop-wrapper',
            parent: 1498668521763,
            index: 1,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__column'
        },
        {
            uid: 1498668521770,
            type: 'pindrop-wrapper',
            parent: 1498668521769,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__inner'
        },
        {
            uid: 1498668521771,
            type: 'pindrop-heading',
            parent: 1498668521770,
            index: 0,
            data: {tag: 'h3', text: 'Lorem Ipsum'},
            className: 'pindrop-footer-asymmetric-grid__heading'
        },
        {
            uid: 1498668521772,
            type: 'pindrop-heading',
            parent: 1498668521770,
            index: 1,
            data: {tag: 'h2', text: 'Lorem ipsum dolor sit amet'},
            className: 'pindrop-footer-asymmetric-grid__sub-heading'
        },
        {
            uid: 1498668521773,
            type: 'pindrop-button',
            parent: 1498668521770,
            index: 2,
            data: {align: 'left', link: '#', text: 'Read More →'},
            className: 'pindrop-footer-asymmetric-grid__button'
        },
        {
            uid: 1498668521774,
            type: 'pindrop-wrapper',
            parent: 1498668521742,
            index: 0,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__footer'
        },
        {
            uid: 1498668521775,
            type: 'pindrop-heading',
            parent: 1498668521774,
            index: 0,
            data: {tag: 'h3', text: 'Lorem Ipsum'},
            className: 'pindrop-footer-asymmetric-grid__footer-heading'
        },
        {
            uid: 1498668521776,
            type: 'pindrop-wrapper',
            parent: 1498668521774,
            index: 1,
            data: {},
            className: 'pindrop-footer-asymmetric-grid__footer-logo-list-grid pindrop-logo-list-grid pindrop-logo-list-grid__cols-4'
        },
        {
            uid: 1498668521777,
            type: 'image-tile',
            parent: 1498668521776,
            index: 0,
            data: {src: 'http://via.placeholder.com/300x150'},
            canDelete: false,
            canDrag: false,
            canDrop: false
        },
        {
            uid: 1498668521778,
            type: 'image-tile',
            parent: 1498668521776,
            index: 1,
            data: {src: 'http://via.placeholder.com/300x150'},
            canDelete: false,
            canDrag: false,
            canDrop: false
        },
        {
            uid: 1498668521779,
            type: 'image-tile',
            parent: 1498668521776,
            index: 2,
            data: {src: 'http://via.placeholder.com/300x150'},
            canDelete: false,
            canDrag: false,
            canDrop: false
        },
        {
            uid: 1498668521780,
            type: 'image-tile',
            parent: 1498668521776,
            index: 3,
            data: {src: 'http://via.placeholder.com/300x150'},
            canDelete: false,
            canDrag: false,
            canDrop: false
        }
    ];

    it('should return a collection of child components', () => {
        expect(getComponentBranch({components: mockComponents}, 1498668521742), mockChildren)
    });

});

describe('getNextIndex', () => {

    const parent = 0;

    const components = [
        {
            data: {},
            index: 0,
            parent,
            type: 'page',
            uid: 1,
        }
    ];

    const index = getNextIndex(components, parent);

    it('should return the next available index given a parent', () => {
        expect(index).toEqual(1);
    });

});

describe('insertComponents', () => {

    const initialState = [
        {
            data: {},
            index: 0,
            parent: 0,
            type: 'page',
            uid: 1,
        }
    ];

    const components = [
        {
            parent: 1,
            type: 'row',
            uid: 2,
        },
        {
            parent: 2,
            type: 'column',
            uid: 3,
        }
    ];

    const expectedState = [
        ...initialState,
        {
            data: {},
            index: 0,
            parent: 1,
            type: 'row',
            uid: 2,
        },
        {
            data: {},
            index: 0,
            parent: 2,
            type: 'column',
            uid: 3,
        }
    ];

    const state = insertComponents(initialState, {components});

    it('should add new components to the state', () => {
        expect(state.length).toEqual(initialState.length + components.length);
    });

    it('should not alter pre-existing components', () => {
        expect(state[0]).toEqual(initialState[0]);
    });

    for (let i = 1; i <= expectedState.length - 1; i++) {
        it(`should insert component ${i} into the correct place in the hierarchy`, () => {

            // We have no idea what the new id will be, so just make them match.
            expectedState[i].uid = state[i].uid;

            // Parent should match the previously added component
            expectedState[i].parent = state[i - 1].uid;

            expect(state[i]).toEqual(expectedState[i]);
        });
    }

});