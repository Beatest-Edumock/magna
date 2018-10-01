import React from 'react';

function SectionSubmitButtonUI(props) {

    const visibility = (props.shouldDisplay) ? "" : "d-none";
    const color = "btn-info";

    return (
        <div>
            <button className={`btn ${color}  w-100 ${visibility}`} onClick={props.submitSectionCallBack}>
                Submit Section
            </button>
        </div>
    )
}

export {SectionSubmitButtonUI}