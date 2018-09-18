/**
 * Entry point of the app.
 *
 * This page calls the setup scripts required
 * to get the entire app running.
 *
 *
 * Notably, it does the following:
 *
 * 1. Run setUp() to set up globals,config values,etc.
 * 2. Run initStore() to set up the redux store.
 * 3. Mount the react app in the root of the DOM.
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'


import Routes from './routes'
import {setUpApp} from "./setUp";
import {MainToastContainer} from "./Common/ToastContainer";
import {initStore} from "./_Redux/initStore";
import 'core-js/fn/array/find';
import 'core-js/fn/array/from';


import 'bootstrap/dist/css/bootstrap.min.css';

import './_CSS/fonts.css'
import './_CSS/index.css'
import './_CSS/bootstrap-extended.css'


setUpApp();
const store = initStore();


const App = (
    <React.Fragment>
        <MainToastContainer/>
        <Provider store={store}>
            <Routes/>
        </Provider>
    </React.Fragment>
);

ReactDOM.render(App,
    document.getElementById('root')
);


