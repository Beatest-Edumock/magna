import axios from 'axios';
import {pushErrorAC} from "../../_Redux/ActionCreators/Test/Test-ActionCreator";
import {store} from "../../index";

const testFramAxios = axios.create({});

let errCount = 0;
//


let header = null;


let asUserID = (new URL(document.location)).searchParams.get("asUser");


testFramAxios.interceptors.request.use((config) => {

    config.headers['ping'] = header;

    if (asUserID !== null)
        config.headers['corporate_as_user'] = asUserID;


    return config;


}, (error) => {
    return Promise.reject(error);
});


// just set testFramAxios to
// Update local variable (which will be used by pinger)
testFramAxios.interceptors.response.use((response) => {

    if (response.headers.ping) {

        header = response.headers.ping;

    }

    return response;
});


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