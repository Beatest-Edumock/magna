import React from 'react';
import "./styles.css"
import {LoadingSpinner} from "../../LoadingSpinner";
import PropTypes from 'prop-types';


function QuestionContentUI(props) {

    if (props.question.html == null) {
        return <LoadingSpinner/>
    }


    return (
        <div className="my-5 my-md-0" id="question-content-wrapper">
            <div id="question-content" dangerouslySetInnerHTML={{__html: props.question.html}}/>
        </div>
    );
}


QuestionContentUI.propTypes = {

    /**
     * Current question object
     */
    question: PropTypes.shape({
        html: PropTypes.string
    })
};
export {QuestionContentUI}
