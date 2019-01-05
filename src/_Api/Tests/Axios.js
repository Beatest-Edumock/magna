import axios from 'axios';
import {pushErrorAC} from "../../_Redux/ActionCreators/Test/Test-ActionCreator";
import {store} from "../../index";

const testFramAxios = axios.create({});

let errCount = 0;
//
testFramAxios.interceptors.response.use(null,
    function (error) {

        if (error.response.data.error_code === "PF0253" || error.response.data.error_code === "PF666")
            errCount++;


        if (errCount > 2)
            store.dispatch(pushErrorAC("", true));

        return Promise.reject(error);
    }
);

export {testFramAxios}