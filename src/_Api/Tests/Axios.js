import axios from 'axios';
import {store} from "../../index";
import {pushError} from "../../_Redux/ActionCreators/Test/Test-ActionCreator";

const testFramAxios = axios.create({});

//
testFramAxios.interceptors.response.use(null,
    function (error) {

        store.dispatch(pushError("", true));

        return Promise.reject(error);
    }
);

export {testFramAxios}