import {Slide, ToastContainer} from 'react-toastify'
import React from 'react';

const MainToastContainer = () => (<ToastContainer autoClose={3500}
                                                  position={"top-left"}
                                                  transition={Slide}
                                                  hideProgressBar={true}/>);


export {MainToastContainer};


