import React from 'react';

function QuestionButtonUI(props) {
    return (
        <button className='col-lg-3 col-xl-2 py-xl-2 col-sm-1 col-2 py-3 py-md-2  col-md-1 py-md-3 mx-1 py-lg-2 p my-1 btn btn-outline-primary py-sm-3 px-0' onClick={props.questionCallback}>
            {props.id}
        </button>
    )
}

export {QuestionButtonUI}