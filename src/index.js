import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers/index';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(<Provider store = {createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
            <Route path='/new' component={PostsNew} />
            <Route path='/:id' component={PostsShow} />
            <Route path='/' component={PostsIndex} />
        </Switch>
    </BrowserRouter>
</Provider>, document.querySelector('.container'));