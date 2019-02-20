import axios from 'axios';
import {pushErrorAC} from "../../_Redux/ActionCreators/Test/Test-ActionCreator";
import {store} from "../../index";

const rexAxios = axios.create({});
rexAxios.defaults.baseURL = '/api/rex/';

export {rexAxios};