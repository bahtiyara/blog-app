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
            <Route path='/blog-app/new' component={PostsNew} />
            <Route path='/blog-app/:id' component={PostsShow} />
            <Route path='/blog-app/' component={PostsIndex} />
        </Switch>
    </BrowserRouter>
</Provider>, document.querySelector('.container'));