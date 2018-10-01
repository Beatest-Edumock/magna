import React from 'react';
import {QuestionButton} from "./QuestionButton";
import PropTypes from 'prop-types';
import {SectionSubmitButton} from "../SubmitButtons/SectionSubmitButton/SectionSubmitButtonContainer";
import {TestSubmitButton} from "../SubmitButtons/TestSubmitButton/TestSubmitButtonContainer";

function QuestionPaletteUI(props) {

    return (
        <div>
        <div className=''>
            <div className='row text-center justify-content-center d-flex no-gutters flex-wrap'>

                {
                    props.questions.map((questionID, idx) =>
                        <QuestionButton key={questionID} id={idx + 1} questionID={questionID}/>
                    )
                }

            </div>

        </div>
            <div className="my-2" >
                <SectionSubmitButton/>
            </div>

            <div className="my-2">
                <TestSubmitButton/>
            </div>
        </div>

    )

}

QuestionPaletteUI.propTypes = {

    /**
     * list of question ids that are in the current section.
     */
    questions: PropTypes.arrayOf(PropTypes.string)

};


export {QuestionPaletteUI}