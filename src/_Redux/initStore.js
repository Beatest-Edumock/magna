/*
All setup related to redux is done here.

This like setting the initial state, combining reducers,etc.
 */

import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {addUserAC} from './ActionCreators/User-ActionCreator'

import userReducer from '_Redux/reducers/User-Reducers'
import {GetUserDetailsApi} from "../_Api/User";


function initStore() {

    const initState = {user: null};


    const store = createStore(userReducer, initState, composeWithDevTools(applyMiddleware(thunk)));


    GetUserDetailsApi().then(({data}) => {
            store.dispatch(addUserAC(data));
        }
    );
    return store;
}


export {initStore};
