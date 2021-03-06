import Spinner from 'react-spinkit'
import React from 'react';

/**
 * Displays a Loading spinner
 * This will be displayed at the center of the parent
 *
 * @returns {*}
 * @constructor
 */
function LoadingSpinner(props) {


    return (
        <div className="d-flex justify-content-center text-center" style={{height: "100%", minHeight: "100%"}}>

            <div style={{paddingTop: "25%", paddingBottom: "25%",position:"absolute"}}>
                <Spinner name="line-scale-pulse-out-rapid" color="DodgerBlue"/>
            </div>

        </div>
    )
}


export {LoadingSpinner}
