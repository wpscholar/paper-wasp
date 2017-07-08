// @flow
import type {Component, Context} from 'paper-wasp/types';
import {createFactory} from 'react';
import {moveComponent, reorderComponents} from 'paper-wasp/action-creators';
import {PaperWaspComponent, PaperWaspComponentEditor} from 'paper-wasp-component';
import {PaperWaspComponentSelector} from 'paper-wasp-component-selector';

import {openModal, setActiveComponent, setModalContent} from './action-creators';

// TODO - Include polyfill for el.closest() - see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

/**
 * The component render map is responsible for wrapping the view components for editing.
 *
 * @param {Context} context The context for rendering.
 * @param componentRegistry {Object} The registry for components.
 * @param component {Component} The original component to be rendered.
 * @returns {Component}
 */
export function componentRenderMap(
    context: Context,
    componentRegistry: Object,
    component: { props: Component }
) {

    const {uid, type} = component.props;

    // If we are rendering for display (i.e. behind the scenes to generate markup)
    if (context === 'view') {

        // If component is dynamic, just create a placeholder
        if (componentRegistry.getProperty(type, 'isDynamic', false)) {
            return <div data-pw-type={type} data-pw-uid={uid} key={uid} />;
        }

        // Otherwise, return the actual component
        return component;
    }

    // If we are rendering for edit, wrap (or replace) the components in the appropriate editor.
    const componentDecorator = (props, children) => {
        return createFactory(PaperWaspComponent)(props, children);
    };

    const decorate = componentRegistry.getProperty(type, 'decorator', componentDecorator);

    const props = Object.assign({}, component.props, {key: uid});

    return decorate(props, component);
}

/**
 * Helper function for triggering the component editing modal.
 *
 * @param dispatch {Function} The dispatch function from the store.
 * @param uid {int} The ID of the component to be edited.
 */
export function editComponent(dispatch: Function, uid: string) {
    dispatch(setActiveComponent(uid));
    dispatch(setModalContent(<PaperWaspComponentEditor uid={uid} />));
    dispatch(openModal());
}

/**
 * Handler for the dragstart event. Ensures that dragging only happens with a handle.
 *
 * @param e {Object} Event
 */
export function onDragStart(e: Object) {
    // Don't trigger multiple events for a single drag.
    e.stopPropagation();
    const el = window.document.elementFromPoint(e.clientX, e.clientY);
    if (el.hasAttribute('data-pw-drag-handle')) {
        // The clicked element is a handle, so allow the drag
        window.paperWasp.dragAndDrop = {
            clone: e.target.cloneNode(true),
            el: e.target,
            type: el.getAttribute('data-pw-drag-handle')
        };
    } else {
        // Otherwise, cancel the drag
        e.preventDefault();
    }
}

/**
 * Handler for the drag event. Allows scrolling when dragging to extreme top or bottom of window.
 *
 * @param e {Object} Event
 */
export function onDrag(e: Object) {
    if (e.clientY < 150) {
        window.scrollBy(0, -10);
    } else if (e.clientY > window.outerHeight - 150) {
        window.scrollBy(0, 10);
    }
}

/**
 * Handler for dragover event.
 *
 * @param e {Object} Event
 */
export function onDragOver(e: Object) {
    const {clone, el, type} = window.paperWasp.dragAndDrop;
    const dropTarget = e.target.closest(`[data-pw-drop-zone="${type}"]`);
    if (dropTarget) {
        e.preventDefault(); // Prevent default allows a drop in this case
        e.dataTransfer.dropEffect = 'copy';
        const hoverEl = window.document.elementFromPoint(e.clientX, e.clientY).closest(`[data-pw-component-type="${type}"]`);
        if (hoverEl && hoverEl.parentNode === dropTarget) {
            // If we are hovering over the component we are dragging
            if (hoverEl.getAttribute('data-pw-uid') === el.getAttribute('data-pw-uid')) {
                el.style.display = 'none';
            }
            const coords = hoverEl.getBoundingClientRect();
            if (type === 'column') {
                const isLeft = e.clientX - coords.left < coords.width / 2;
                if (isLeft) {
                    (hoverEl: Object).parentNode.insertBefore(clone, hoverEl);
                } else {
                    (hoverEl: Object).parentNode.insertBefore(clone, hoverEl.nextSibling);
                }
            } else {
                const isTop = e.clientY - coords.top < coords.height / 2;
                if (isTop) {
                    (hoverEl: Object).parentNode.insertBefore(clone, hoverEl);
                } else {
                    (hoverEl: Object).parentNode.insertBefore(clone, hoverEl.nextSibling);
                }
            }
        } else {
            dropTarget.appendChild(clone);
        }
    }
}

/**
 * Hander for ondrop event.
 *
 * @param e {Object}
 * @param dispatch {Function}
 */
export function onDrop(e: Object, dispatch: Function) {
    // Don't trigger multiple drop events for a single drop.
    e.stopPropagation();
    const {el, type} = window.paperWasp.dragAndDrop;
    const target = e.target.closest(`[data-pw-drop-zone="${type}"]`);
    const uid = el.getAttribute('data-pw-uid');
    const parent = target.getAttribute('data-pw-uid');
    const orderedIds = [];
    [].forEach.call(target.childNodes, (node) => {
        if (node !== el) {
            orderedIds.push(node.getAttribute('data-pw-uid'));
        }
    });
    // Do clean up, in case dragend event doesn't fire.
    onDragEnd();
    // Dispatch our actions to update global state
    dispatch(moveComponent(uid, parent));
    dispatch(reorderComponents(orderedIds));
}

/**
 * Handler for dragend event. Cleans up drag and drop state and DOM elements.
 */
export function onDragEnd() {
    const {clone, el} = window.paperWasp.dragAndDrop;
    // Remove element from DOM, if present
    if (clone && clone.parentNode) {
        clone.parentNode.removeChild(clone);
    }
    // Restore original element styles
    if (el) {
        el.style.display = '';
    }
    // Clear reference to element so JS will garbage collect
    window.paperWasp.dragAndDrop = {};
}

/**
 * Helper function for triggering the component selector.
 *
 * @param dispatch {Function} The dispatch function from the store.
 * @param uid {int} The ID of the parent to which children will be added.
 * @param group {string} The type of items to show in the selector (e.g. component, tile, etc.)
 */
export function renderComponentSelector(dispatch: Function, uid: number, group: string = 'component') {
    dispatch(setActiveComponent(uid));
    dispatch(setModalContent(<PaperWaspComponentSelector group={group} />));
    dispatch(openModal());
}
