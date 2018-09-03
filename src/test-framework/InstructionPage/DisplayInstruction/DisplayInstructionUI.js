// Author @ Kyaw Khant Nyar
// Last Edit: Sept 1, 2018

// imports
import React, {Component} from 'react'

/**
 * DisplayInstructionUI renders the Instructions and Start Test button
 * @param props: instruction: raw html instruction for the test
 * @returns {*}: instructions and a start button
 */
function DisplayInstructionUI(props) {

    // return a loading UI while the instructions is being loaded
    if(props.instructions === '') {
        return (
            <h3>
                Loading
            </h3>
        )
    }
    return (
        <div className='container my-4'>

            <div className='my-4'>
            <h3 className='alert-primary text-center'>
                {props.name}
            </h3>
            </div>

            {/*Set the HTML from RAW HTML*/}
            <div dangerouslySetInnerHTML={{__html: props.instructions}} />

            <div>
                <StartTestButton startfunc={props.startfunc}/>
            </div>

        </div>
    )

}


// TODO: add functionality, update comments
/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function StartTestButton(props) {
    return (
        <div className='container'>
            <div className='row'>
            <button className="btn btn-primary col-lg-4 offset-4 col-4 offset-4 my-5" onClick={props.startfunc}>
                Start Test
            </button>
            </div>
        </div>
    )

}


export {DisplayInstructionUI}