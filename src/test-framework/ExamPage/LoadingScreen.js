import Spinner from 'react-spinkit'
import React from 'react';


function LoadingScreen(props) {

    return (
        <div className="d-flex justify-content-center text-center">
            <div style={{marginTop: "45vh"}}>
                <Spinner name="line-scale" color="DodgerBlue" fadeIn={0}/>
            </div>
        </div>
    )
}


export {LoadingScreen}
