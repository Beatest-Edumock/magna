import React from 'react';

const MCQ = 'MCQ';
const RC = 'RC';
const TITA = 'TITA';


function createHTML(html) {
    return {__html: html}

}

function QuestionContentUI(props) {


    return (
        <p dangerouslySetInnerHTML={createHTML(props.question.html)}/>
    )
}


export {QuestionContentUI}
