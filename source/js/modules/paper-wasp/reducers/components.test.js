import {components} from './components';

test('components reducer with action REORDER_COMPONENTS', () => {

    const action = {
        orderedIds: [5, 4],
        type: 'REORDER_COMPONENTS',
    };

    const initialState = [
        {
            data: {},
            index: 0,
            parent: 0,
            type: 'page',
            uid: 1,
        },
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
        },
        {
            data: {
                src: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg'
            },
            index: 0,
            parent: 3,
            type: 'image',
            uid: 4,
        },
        {
            data: {
                text: 'Test Box'
            },
            index: 1,
            parent: 3,
            type: 'text',
            uid: 5,
        }
    ];

    const finalState = [
        {
            data: {},
            index: 0,
            parent: 0,
            type: 'page',
            uid: 1,
        },
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
        },
        {
            data: {
                src: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg'
            },
            index: 1,
            parent: 3,
            type: 'image',
            uid: 4,
        },
        {
            data: {
                text: 'Test Box'
            },
            index: 0,
            parent: 3,
            type: 'text',
            uid: 5,
        }
    ];

    const state = components(initialState, action);
    expect(state).toEqual(finalState);
});

test('components reducer with action UPDATE_COMPONENT_DATA', () => {

    const action = {
        data: {
            embed: '<iframe width="525" height="295" src="https://www.youtube.com/embed/6ljsfaxoguk?feature=oembed" frameborder="0" allowfullscreen></iframe>'
        },
        type: 'UPDATE_COMPONENT_DATA',
        uid: 1,
    };

    const initialState = [
        {
            data: {
                url: 'https://www.youtube.com/watch?v=6ljsfaxoguk'
            },
            index: 0,
            parent: 0,
            type: 'video',
            uid: 1,
        }
    ];

    const finalState = [
        {
            data: {
                embed: '<iframe width="525" height="295" src="https://www.youtube.com/embed/6ljsfaxoguk?feature=oembed" frameborder="0" allowfullscreen></iframe>',
                url: 'https://www.youtube.com/watch?v=6ljsfaxoguk'
            },
            index: 0,
            parent: 0,
            type: 'video',
            uid: 1,
        }
    ];

    const state = components(initialState, action);
    expect(state).toEqual(finalState);
});
