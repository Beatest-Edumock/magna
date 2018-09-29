import axios from 'axios';
import {pushErrorAC} from "../../_Redux/ActionCreators/Test/Test-ActionCreator";
import {store} from "../../index";

const testFramAxios = axios.create({});

//
testFramAxios.interceptors.response.use(null,
    function (error) {

        store.dispatch(pushErrorAC("", true));

        return Promise.reject(error);
    }
);

export {testFramAxios}