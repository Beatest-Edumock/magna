import axios from 'axios';

const testFramAxios = axios.create( {

})

//
testFramAxios.interceptors.request.use( null,
    function (error) {

        return Promise.reject(error);
    }
);

export {testFramAxios}