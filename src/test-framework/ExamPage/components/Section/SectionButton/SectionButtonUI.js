import React, {Component} from 'react';


function SectionButtonUI(props) {
        var disabled = props.disabled ? "disabled btn-warning" : "btn-outline-secondary";
        disabled = props.isCompleted?  "disabled btn-secondary" : disabled;
        return (

            <button id={`section-button-${props.sectionID}`}
                    disabled={props.disabled}
                    className={` offset-md-2  col-md-8 col-lg-3 btn py-3 rounded-0 rounded mx-1 my-2  ${disabled}`}
                    onClick={()=>props.sectionCallBack(props.sectionID)}>
                {props.sectionName}
            </button>
        );

}
export {SectionButtonUI};
