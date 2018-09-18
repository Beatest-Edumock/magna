import Spinner from 'react-spinkit'
import React from 'react';


function LoadingSpinner(props) {

    return (
        <div className="d-flex justify-content-center text-center">
            <div style={{marginTop: "45%", marginBottom: "45%"}}>
                <Spinner name="line-scale" color="DodgerBlue" fadeIn={0}/>
            </div>
        </div>
    )
}


export {LoadingSpinner}
