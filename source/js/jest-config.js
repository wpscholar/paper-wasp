import React from 'react';
import jsdom from 'jsdom';

global.React = React;

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;
global.navigator = global.window.navigator;
