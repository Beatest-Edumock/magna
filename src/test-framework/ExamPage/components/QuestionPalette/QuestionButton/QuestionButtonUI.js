import React from 'react';

function QuestionButtonUI(props) {

    let primary = props.isCurrent ? 'btn-primary' : 'btn-outline-primary';
    primary = props.isCurrent ? 'btn-indigo' : 'btn-outline-primary';


    return (
        <button
            className={`col-lg-3 col-xl-2 py-xl-2 col-sm-1 col-2 py-3 py-md-2  col-md-1 py-md-3 mx-1 py-lg-2 p my-1 btn  py-sm-3 px-0 ${primary}`}
            onClick={props.questionCallback}>
            {props.id}
        </button>
    )
}

export {QuestionButtonUI}