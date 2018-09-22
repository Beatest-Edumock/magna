import React, {Component} from 'react';

function MCQUI(props) {


    return(

        <div className='form-check'>
            {
            props.choices.map((choice) => {
                const shouldChecked = (choice.id === props.currentChoice);

                console.log(choice.id + " : " + props.currentChoice + " -> " +shouldChecked);
                return (
                <div>
                <input className="form-check-input" name="choiceRadio" type="radio"
                       onChange={()=>props.mcqCallback(choice.id)}
                       id={choice.id} checked={shouldChecked}/>
                <label className="form-check-label"><div dangerouslySetInnerHTML={{__html: choice.html}}/></label>
                </div>
            )
        })
            }

        </div>
        )
}
export {MCQUI}