import React from 'react';


function TestSubmitButtonUI(props) {
    const color = "btn-danger";
    const visibility = (props.shouldDisplay) ? "" : "d-none";

    return (
        <div>
            <button className={`btn ${color} w-100 ${visibility}`} onClick={props.testSubmitCallback}>
                Submit Test
            </button>
        </div>
    )
}

export {TestSubmitButtonUI}