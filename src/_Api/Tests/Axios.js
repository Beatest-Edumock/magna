import axios from 'axios';

const testFramAxios = axios.create({});

//
testFramAxios.interceptors.response.use(null,
    function (error) {

        // store.dispatch(pushErrorAC("", true));

        return Promise.reject(error);
    }
);

export {testFramAxios}