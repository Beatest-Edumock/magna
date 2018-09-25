import React, {Component} from 'react';

function MCQUI(props) {


    return (

        <div>
            <div className="max-w-100-md scroll-x-auto">
                <div className="" dangerouslySetInnerHTML={{__html: props.questionHtml}}/>
            </div>
            <div className=''>
                {
                    props.choices.map((choice) => {
                        const shouldChecked = (choice.id === props.currentChoice);

                        console.log(choice.id + " : " + props.currentChoice + " -> " + shouldChecked);
                        return (
                            <div className="card rounded rounded-0 bg-light">
                                <div className="card-body mx-2 align-items-center d-flex d-inline">

                                    <input className="form-check-input " name="choiceRadio" type="radio"
                                           onChange={() => props.mcqCallback(choice.id)}
                                           id={choice.id} checked={shouldChecked}/>
                                    <label className="form-check-label">
                                        <div dangerouslySetInnerHTML={{__html: choice.html}}/>
                                    </label>

                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export {MCQUI}