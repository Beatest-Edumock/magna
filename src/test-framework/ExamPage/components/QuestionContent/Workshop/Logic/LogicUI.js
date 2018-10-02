import React from 'react';

function LogicUI(props) {


    return (
        <div className="max-w-100-md scroll-x-auto">
            <br/>
            <h4>Explanation</h4>
            <div className="border scroll-x-auto max-w-100-md " dangerouslySetInnerHTML={{__html: props.logic}}/>
        </div>
    )

}


export {LogicUI}