import React from 'react';
import PropTypes from 'prop-types'

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


                        let bg = choice.is_correct ? "alert-success" : "bg-light";

                        if (shouldChecked && !choice.is_correct && props.isComplete) {
                            bg = "alert-danger"
                        }

                        return (
                            <div key={choice.id} className={"card rounded rounded-0 " + bg}>
                                <div className="card-body mx-2 align-items-center d-flex d-inline">

                                    <input className="form-check-input " name="choiceRadio" type="radio"
                                           onChange={() => props.mcqCallback(choice.id)}
                                           id={choice.id}
                                           checked={shouldChecked}/>

                                    <label className="form-check-label">
                                        <div dangerouslySetInnerHTML={{__html: choice.html}}/>
                                    </label>

                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    )
}


MCQUI.propTypes = {
    choices: PropTypes.array.isRequired,
    currentChoice: PropTypes.number,
    mcqCallback: PropTypes.func.isRequired,
    questionHtml: PropTypes.string.isRequired,
};


export {MCQUI}