import React from 'react';

function TITAKeyPad(props) {


    return (

            <div>
                <input type="text" className="form-control col-lg-12" readOnly={true} value={props.localValue} placeholder={props.tita_choice}/>
                <div className='row text-center justify-content-center d-flex no-gutters flex-wrap'>


                {
                    Array(9).fill().map((_, i) =>
                         <button type="button" className="col-lg-3 col-xl-2 py-xl-2 col-sm-1 col-2 py-3 py-md-2 btn  col-md-1 py-md-3 mx-1 py-lg-2 p my-1 btn  py-sm-3 px-0 btn btn-outline-black" onClick={()=> props.handleValueUpdate(i +1)}> {i +1}</button>

                    )
                }
                    <button type="button" className="col-lg-3 col-xl-2 py-xl-2 col-sm-1 col-2 py-3 py-md-2 btn  col-md-1 py-md-3 mx-1 py-lg-2 p my-1 btn  py-sm-3 px-0 btn btn-outline-black" onClick={()=> props.handleValueUpdate(".")}> . </button>
                    <button type="button" className="col-lg-3 col-xl-2 py-xl-2 col-sm-1 col-2 py-3 py-md-2 btn  col-md-1 py-md-3 mx-1 py-lg-2 p my-1 btn  py-sm-3 px-0 btn btn-outline-black" onClick={()=> props.handleValueUpdate(0)}> {0}</button>
                    <button type="button" className="col-lg-3 col-xl-2 py-xl-2 col-sm-1 col-2 py-3 py-md-2 btn  col-md-1 py-md-3 mx-1 py-lg-2 p my-1 btn  py-sm-3 px-0 btn btn-outline-success" onClick={()=> props.handleSubmit()}>Submit</button>
                    <button type="button" className="col-lg-3 col-xl-2 py-xl-2 col-sm-1 col-2 py-3 py-md-2 btn  col-md-1 py-md-3 mx-1 py-lg-2 p my-1 btn  py-sm-3 px-0 btn btn-outline-danger" onClick={()=> props.handleBackSpace()}> Delete </button>


                </div>
            </div>


    )
}

export {TITAKeyPad}