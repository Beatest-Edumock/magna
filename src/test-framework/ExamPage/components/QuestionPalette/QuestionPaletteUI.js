import React from 'react';
import {QuestionButton} from "./QuestionButton/QuestionButton";

function QuestionPaletteUI(props) {

    return (
        <div className=''>
            <div className='row text-center justify-content-center'>

                {
                    props.questions.map((questionID, idx) =>
                        <QuestionButton id={idx + 1}/>
                    )
                }

            </div>
        </div>

    )

}


export {QuestionPaletteUI}