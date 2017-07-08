// @flow
import {render} from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise';
import {components as componentsReducer} from 'paper-wasp/reducers';

import {getCurrentComponent} from './selectors';
import type {State} from './types';

class App {

    initialState: Object;

    store: Object;

    constructor(initialState: State) {

        const defaultState = {
            components: [],
            container: {},
        };

        const defaultContainer = {
            allowedAttributes: {},
            allowedTags: [],
            componentRegistry: {},
            componentRenderMap: (mode, componentRegistry, component) => component,
            postId: 0,
            restBase: '',
            restNonce: '',
            userId: 0,
        };

        const container = Object.assign(defaultContainer, initialState.container || {});
        this.initialState = Object.assign(defaultState, initialState, {container});


        const middleware = [promise];

        if (process.env.NODE_ENV !== 'production') {
            middleware.push(createLogger({collapsed: () => true}));
        }

        // eslint-disable-next-line no-underscore-dangle
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        this.store = createStore(
            combineReducers({
                components: componentsReducer,
                container: (state = {}) => state,
            }),
            this.initialState,
            composeEnhancers(applyMiddleware(...middleware))
        );
    }

    render() {

        const state = this.store.getState();
        const {componentRegistry} = state.container;

        Array.from(window.document.querySelectorAll('[data-pw-uid]')).forEach((el) => {
            const uid = el.getAttribute('data-pw-uid');
            if (uid) {
                const component = getCurrentComponent(state, {uid});
                if (component) {
                    render(
                        <Provider store={this.store}>
                            {componentRegistry.renderComponent(component.type, component)}
                        </Provider>,
                        el
                    );
                }
            }
        });
    }

}

export default App;
