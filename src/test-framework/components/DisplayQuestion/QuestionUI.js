import React from 'react';

const MCQ = 'MCQ';
const RC = 'RC';
const TITA = 'TITA';

function QuestionComponentUI(props) {


    switch (props.type) {
        case RC:
            return (<RC/>);
        case TITA:
            return (<TITA/>);
        case MCQ:
            return (<MCQ/>);
        default:
            return

        
    }


}


function MCQ(props) {
    return()
}

function RC(props) {

}

function TITA(props) {

}


