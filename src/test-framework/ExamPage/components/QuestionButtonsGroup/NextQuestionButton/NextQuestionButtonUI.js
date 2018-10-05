import React from 'react';

function NextQuestionButtonUI(props) {

    let text = "Save";

    let color = "btn-primary";


    return (<button className={`btn w-100 ${color}`} onClick={props.onClickHandler}>{text}</button>);

}

export {NextQuestionButtonUI};