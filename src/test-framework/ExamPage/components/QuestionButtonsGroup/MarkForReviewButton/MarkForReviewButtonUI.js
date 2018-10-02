import React from 'react';

function MarkForReviewButtonUI(props) {

    let text = "Mark for review";

    let color = "btn-indigo";

    if (props.marked) {
        text = "Unmark";
        color = "btn-warning";
    }

    return (<button className={`btn w-100 ${text} ${color}`} onClick={props.onClickHandler}>{text}</button>);

}

export {MarkForReviewButtonUI};