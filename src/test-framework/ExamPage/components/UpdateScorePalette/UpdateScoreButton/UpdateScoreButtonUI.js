import React from 'react';

function UpdateScoreButtonUI(props) {


    return (

        <div>


            <button className={`btn btn-primary w-100 `} onClick={props.updateScoreCallback}>
                Update Score
            </button>


        </div>

    )
}

export {UpdateScoreButtonUI}