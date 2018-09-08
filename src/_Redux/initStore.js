/*
All setup related to redux is done here.

This like setting the initial state, combining reducers,etc.
 */

import {applyMiddleware, createStore, combineReducers} from 'redux'
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


    const store = createStore(combined, composeWithDevTools(applyMiddleware(thunk)));


    GetUserDetailsApi().then(({data}) => {
            store.dispatch(addUserAC(data));
        }
    ).catch(() => {
    });


    return store;
}


export {initStore};
