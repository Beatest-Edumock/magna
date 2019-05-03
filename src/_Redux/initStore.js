/*
All setup related to redux is done here.

This like setting the initial state, combining reducers,etc.
 */

import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {addUserAC} from './ActionCreators/User-ActionCreator'

import userReducer from '_Redux/reducers/User/User-Reducers'
import {getUserDetailsApi} from "../_Api/User";
import {testReducer} from "./reducers/Tests/Reducer-Entry";
import React from 'react';
import {setReiviewModeAC} from "./ActionCreators/Test/Test-ActionCreator";


function initStore() {


    const combined = combineReducers(
        {
            user: userReducer,
            test: testReducer
        }
    );


    let middleware;


    if (process.env.NODE_ENV !== 'production') {
        // const {whyDidYouUpdate} = require('why-did-you-update');
        // whyDidYouUpdate(React);
        middleware = composeWithDevTools(applyMiddleware(require('redux-immutable-state-invariant').default(), thunk))
    }
    else {
        middleware = applyMiddleware(thunk);

    }


    const store = createStore(combined, middleware);


    getUserDetailsApi().then(({data}) => {
            store.dispatch(addUserAC(data));
        }
    ).catch(() => {
    });


    let asUserID = (new URL(document.location)).searchParams.get("asUser");
    let magic = (new URL(document.location)).searchParams.get("magic");
    if (asUserID !== null) {
        store.dispatch(setReiviewModeAC(magic));

    }


    return store;
}


export {initStore};
