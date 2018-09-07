import React from 'react';
import {QuestionButton} from "./QuestionButton/QuestionButton";

function QuestionPaletteUI(props) {

    return (
        <div className='col-lg-3 col-md-12 float-right'>
            <div className='row text-center justify-content-center'>

            {
                props.questions.map ((questionID) =>
                    <QuestionButton id = {questionID}/>
                )
            }

            </div>
        </div>

    )

}



export {QuestionPaletteUI}