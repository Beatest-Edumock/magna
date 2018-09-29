import React from 'react';
import PropTypes from 'prop-types';


function SectionButtonUI(props) {


    let disabled = props.disabled ? "disabled btn-warning" : "btn-outline-secondary";


    disabled = props.isCompleted ? "disabled btn-secondary" : disabled;


    return (

        <button id={`section-button-${props.sectionID}`}
                disabled={props.disabled && !props.isTestComplete}
                className={` offset-md-2  col-md-8 col-lg-3 btn py-3 rounded-0 rounded mx-1 my-2  ${disabled}`}
                onClick={() => props.sectionCallBack(props.sectionID)}>
            {props.sectionName}
        </button>
    );

}

SectionButtonUI.propTypes = {
    disabled: PropTypes.bool.isRequired,
    sectionID: PropTypes.number.isRequired,
    sectionName: PropTypes.string.isRequired


};
export {SectionButtonUI};
