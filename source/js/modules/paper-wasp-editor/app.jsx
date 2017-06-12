// @flow
import {render} from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise';
import modal from 'modal/reducer';
import {components as componentsReducer} from 'paper-wasp/reducers';
import defaultChildren from 'paper-wasp-default-children-middleware';
import defaultData from 'paper-wasp-default-data-middleware';
import insert from 'paper-wasp-insert-middleware';

import {activeComponent, context} from './reducers';
import PaperWaspActionBar from './components/action-bar';
import PaperWaspEditor from './component';
import PaperWaspModal from './components/modal';
import {componentRenderMap} from './functions';
import type {State} from './types';

class App {

    initialState: Object;

    constructor(initialState: State) {

        const defaultState = {
            activeComponent: 0,
            components: [],
            container: {},
            context: 'edit'
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
        container.componentRenderMap = componentRenderMap;
        this.initialState = Object.assign(defaultState, initialState, {container});
    }

    render(el: Object) {

        const {componentRegistry} = this.initialState.container;

        const middleware = [
            defaultData(componentRegistry),
            defaultChildren(componentRegistry),
            insert(),
            promise
        ];

        if (process.env.NODE_ENV !== 'production') {
            middleware.push(createLogger({collapsed: () => true}));
        }

        // eslint-disable-next-line no-underscore-dangle
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        const store = createStore(
            combineReducers({
                activeComponent,
                components: componentsReducer,
                container: (state = {}) => state,
                context,
                modal
            }),
            this.initialState,
            composeEnhancers(applyMiddleware(...middleware))
        );

        render(
            <Provider store={store}>
                <div>
                    <PaperWaspEditor />
                    <PaperWaspActionBar />
                    <PaperWaspModal />
                </div>
            </Provider>,
            el
        );
    }

}

export default App;
