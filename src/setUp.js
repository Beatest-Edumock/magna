import axios from 'axios';

let asUserID = (new URL(document.location)).searchParams.get("asUser");

function setUpApp() {
    axios.defaults.baseURL = '/api/v0.1/';


    axios.interceptors.request.use((config) => {

        if (asUserID !== null)
            config.headers['corporate_as_user'] = asUserID;


        return config;


    }, (error) => {
        return Promise.reject(error);
    });

}

export {setUpApp};


