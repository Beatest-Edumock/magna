import React from 'react';
import "./styles.css"
import {LoadingSpinner} from "../../LoadingSpinner";
import PropTypes from 'prop-types';
import {MCQ} from "./Workshop/MCQ/MCQContainer";
import {RC} from "./Workshop/RC/RCContainer";

function QuestionContentUI(props) {

    if (props.question.html == null) {
        return <LoadingSpinner/>
    }


    return (
        <div className="my-5 my-md-0 py-lg-2" id="question-content-wrapper">
            <div>
                {(()=> {
                    switch (props.question.type) {
                        case "MCQ": return <MCQ question={props.question}/>;
                        case "RC": return <RC question={props.question}/>;
                        case "TITA": return <h1>TITA</h1>;
                    }
                })()
                }
            </div>

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
