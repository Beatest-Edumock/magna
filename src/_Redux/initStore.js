/*
All setup related to redux is done here.

This like setting the initial state, combining reducers,etc.
 */

import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {addUserAC} from './ActionCreators/User-ActionCreator'

import userReducer from '_Redux/reducers/User-Reducers'
import {GetUserDetailsApi} from "../_Api/User";
import {testReducer} from "./reducers/Tests/Test-Reducers";


function initStore() {


    const combined = combineReducers(
        {
            user: userReducer,
            test: testReducer
        }
    );


    let middleware;


    if (process.env.NODE_ENV !== 'production') {
        middleware = composeWithDevTools(applyMiddleware(require('redux-immutable-state-invariant').default(), thunk))
    }
    else {
        middleware = applyMiddleware(thunk);

    }


    const store = createStore(combined, middleware);


    GetUserDetailsApi().then(({data}) => {
            store.dispatch(addUserAC(data));
        }
    ).catch(() => {
    });


    return store;
}


export {initStore};
