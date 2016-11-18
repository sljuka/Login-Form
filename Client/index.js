import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory} from 'react-router';
import routes from './routes';

import 'babel-polyfill';


import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';




const store = createStore(
    rootReducer,
    compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
    <Provider store={store}>
      <Router history = {browserHistory} routes = {routes}/>
    </Provider>,
    document.getElementById('app')
);
