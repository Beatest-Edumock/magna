import React from 'react';

function QuestionButtonUI(props) {
    return (
        <button className='col-lg-2 col-sm-1 col-1 col-md-1 mx-1 my-1 btn btn-outline-primary px-0' onClick={props.questionFunc}>
            {props.id}
        </button>
    )
}

export {QuestionButtonUI}