/**
 * 注意，react-router4 的路由是组件
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AppContainer from './appContainer';

import store from './redux_store';

// import * as OfflinePluginRuntime from 'offline-plugin/runtime';
// OfflinePluginRuntime.install();

import './assets/css/base.css';

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
    <Component/>
  </Provider>, document.getElementById('app'),);
};

render(AppContainer);
