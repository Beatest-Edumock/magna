import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk';
import user_action_create from './_Redux/ActionCreators/User/User-ActionCreator'


import axios from 'axios';
import add_user from "./_Redux/reducers/User/User-Reducers";


import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.css';
import './CSS/theme.css'

axios.defaults.baseURL = 'https://beatest.in/api/v0.1/';

const initState = {user: null};

const store = createStore(add_user, initState, applyMiddleware(thunk));


const App = (
    <Provider store={store}>
        <Routes history={BrowserRouter}/>
    </Provider>
);

ReactDOM.render(App,
    document.getElementById('root')
);
