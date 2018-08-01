import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk';
import {add_user_action} from '_Redux/ActionCreators/User/User-ActionCreator'
import userReducer from '_Redux/reducers/User/User-Reducers'
import {composeWithDevTools} from 'redux-devtools-extension';


import axios from 'axios';


import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.css';
import './CSS/theme.css'
import {Slide, ToastContainer} from 'react-toastify'

axios.defaults.baseURL = 'api/v0.1/';

const initState = {user: null};

const store = createStore(userReducer, initState, composeWithDevTools(applyMiddleware(thunk)));


const CustomToastContainer = () => (<ToastContainer autoClose={3500}
                                                    position={"top-left"}
                                                    transition={Slide}
                                                    hideProgressBar={true}/>);

axios.get('user').then(({data}) => {
        store.dispatch(add_user_action(data));
    }
);

const App = (
    <React.Fragment>
        <CustomToastContainer/>
        <Provider store={store}>
            <Routes history={BrowserRouter}/>
        </Provider>
    </React.Fragment>
);

ReactDOM.render(App,
    document.getElementById('root')
);


export {store};
