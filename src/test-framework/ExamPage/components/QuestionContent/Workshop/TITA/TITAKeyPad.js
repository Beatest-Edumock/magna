import React from 'react';

function TITAKeyPad(props) {


    const keyPadMaxNum = 9;

    const display = (props.isComplete) ? props.titaAnswer : props.tita_choice;

    return (

        <div>
            <input type="text" className="form-control col-lg-12" readOnly={true} value={props.localValue} placeholder={display}/>
            <div className='row text-center justify-content-center d-flex no-gutters flex-wrap'>

                {
                    Array(keyPadMaxNum).fill().map((_, i) =>
                        <button type="button" className="my-1 col-4 btn btn btn-outline-black" onClick={() => props.handleValueUpdate(i + 1)}> {i + 1}</button>
                    )
                }
                <button type="button" className="my-1 col-4 btn btn-outline-black" onClick={() => props.handleValueUpdate(".")}> .</button>
                <button type="button" className="my-1 col-4 btn btn-outline-black" onClick={() => props.handleValueUpdate(0)}> {0}</button>
                <button type="button" className="my-1 col-4 btn btn-outline-success " onClick={() => props.handleSubmit()}>Submit</button>
                <button type="button" className="my-1 col-4 btn btn-outline-danger" onClick={() => props.handleBackSpace()}> Delete</button>


            </div>
        </div>


    )
}

export {TITAKeyPad}