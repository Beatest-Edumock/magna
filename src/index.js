/**
 * Entry point of the app.
 *
 * This page calls the setup scripts required
 * to get the entire app running.
 *
 *
 * Notably, it does the following:
 *
 * * Run setUp() to set up globals,config values,etc.
 * * Run initStore() to set up the redux store.
 * * Mount the react app in the root of the DOM.
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





import 'bootstrap/dist/css/bootstrap.min.css';

import './_CSS/fonts.css'
import './_CSS/custom.css'


setUpApp();
const store = initStore();


const App = (
    <React.Fragment>
        <MainToastContainer/>
        <Provider store={store}>
            <Routes history={BrowserRouter}/>
        </Provider>
    </React.Fragment>
);

ReactDOM.render(App,
    document.getElementById('root')
);


