import React from 'react';
import "./styles.css"
import {LoadingSpinner} from "../../LoadingSpinner";
import PropTypes from 'prop-types';
import {MCQ} from "./Workshop/MCQ/MCQContainer";
import {RC} from "./Workshop/RC/RCContainer";
import {TITA} from "./Workshop/TITA/TITAContainer";
import {Coding} from "./Workshop/Coding";

function QuestionContentUI(props) {

    if (props.question.html == null) {
        return (
            <LoadingSpinner/>
        )
    }


    return (
        <div className="my-5 my-md-0 py-lg-2 ">
            <div>
                {(() => {
                    switch (props.question.type) {
                        case "MCQ":
                            return <MCQ question={props.question}/>;
                        case "RC":
                            return <RC question={props.question}/>;
                        case "TITA":
                            return <TITA/>;
                        case "CODING":
                            return <Coding question={props.question}/>;
                        default:
                            break;

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
