/*
All setup related to redux is done here.

This like setting the initial state, combining reducers,etc.
 */

import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {addUserAC} from './ActionCreators/User/User-ActionCreator'

import userReducer from '_Redux/reducers/User/User-Reducers'
import {GetUserDetails} from "../_Api/User";


function initStore() {

    const initState = {user: null};


    const store = createStore(userReducer, initState, composeWithDevTools(applyMiddleware(thunk)));


    GetUserDetails().then(({data}) => {
            store.dispatch(addUserAC(data));
        }
    );
    return store;
}


export {initStore};
