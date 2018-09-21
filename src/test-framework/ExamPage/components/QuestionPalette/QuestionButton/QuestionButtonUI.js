import React from 'react';
import PropTypes from 'prop-types';

function QuestionButtonUI(props) {

    let primary = props.isCurrent ? 'btn-primary' : 'btn-outline-primary';
    primary = props.isCurrent ? 'btn-primary' : 'btn-outline-primary';

    let rounded = "";

    if (props.html != null) {
        rounded = "rounded rounded-0"

    }


    return (
        <button
            className={`col-lg-3 col-xl-2 py-xl-2 col-sm-1 ${rounded} col-2 py-3 py-md-2 btn  col-md-1 py-md-3 mx-1 py-lg-2 p my-1 btn  py-sm-3 px-0 ${primary}`}
            onClick={props.questionCallback}>
            {props.id}
        </button>
    );
}

QuestionButtonUI.propTypes = {
    /**
     * Indicates the loaded status of the button.
     */
    html: PropTypes.string,


    /**
     * The function to call when the button is pressed.
     *
     * The function should dispatch an action to the redux store
     * to change the current question
     *
     */
    questionCallback: PropTypes.func.isRequired

};


export {QuestionButtonUI}