import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {faCheck, faTimes} from "@fortawesome/fontawesome-free-solid"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from 'react';


function CorrectOutputDisplay({output}) {
    if (output !== null)
        output = output.replace(/\n/g, "⏎\n");

    return (
        <React.Fragment>
            <p className="lead  text-gray blockquote">Your Output <FontAwesomeIcon icon={faCheck} style={{color: 'green'}}/></p>
            <div className="">
                <p className="text-monospace alert-success p-2 rounded " style={{whiteSpace: "pre-line", overflow: "scroll", maxHeight: "150px"}}>{output}</p>
            </div>
        </React.Fragment>

    )

}

function IncorrectOutputDisplay({userOutput, correctOutput}) {


    if (userOutput !== null)
        userOutput = userOutput.replace(/\n/g, "⏎\n");

    if (correctOutput !== null)
        correctOutput = correctOutput.replace(/\n/g, "⏎\n");

    return (
        <React.Fragment>
            <p className="lead  text-gray blockquote">Your Output <FontAwesomeIcon icon={faTimes} style={{color: 'red'}}/></p>
            <div className="">
                <p className="text-monospace alert-danger p-2 rounded  " style={{whiteSpace: "pre-line", overflow: "scroll", maxHeight: "150px"}}>{userOutput}</p>
            </div>
            <br/>

            <p className="lead  text-gray blockquote">Expected Output</p>
            <div className="">
                <p className="text-monospace bg-gray-light p-2 rounded" style={{whiteSpace: "pre-line", maxHeight: "150px", overflow: "scroll"}}>{correctOutput}</p>
            </div>
        </React.Fragment>

    )

}

function CustomOutputDisplay({userOutput}) {

    if (userOutput !== null)
        userOutput = userOutput.replace(/\n/g, "⏎\n");

    return (
        <React.Fragment>
            <p className="lead  text-gray blockquote">Your Output</p>
            <div className="">
                <p className="text-monospace alert-success p-2 rounded " style={{whiteSpace: "pre-line", maxHeight: "150px", overflow: "scroll"}}>{userOutput}</p>
            </div>
            <br/>

            <p className="lead  text-gray blockquote">Expected Output</p>
            <div className="">
                <p className="text-monospace bg-gray-light p-2 rounded" style={{whiteSpace: "pre-line", maxHeight: "150px", overflow: "scroll"}}>
                    No Expected Output for Custom Test Case
                </p>
            </div>
        </React.Fragment>

    )

}

export const TestCaseDisplay = ({inputs, userOutputs, correctOutputs, isCustomInput, runTimes}) => {


    return (
        <Tabs>
            <TabList>
                {inputs.map((elem, index) => {

                    return <Tab>{`Test ${index + 1}`}</Tab>

                })

                }

            </TabList>

            {inputs.map((elem, index) => {


                return (
                    <TabPanel className="w-100  p-3 ">
                        <p className="lead  text-gray blockquote">Time Taken</p>
                        <p className="lead  text-dark blockquote">{runTimes[index]} seconds</p>

                        <p className="lead  text-gray blockquote">Input</p>
                        <p className="text-monospace bg-gray-light p-2 rounded"
                           style={{whiteSpace: "pre-line", maxHeight: "150px", overflow: "scroll"}}>{inputs[index].replace("/\n/g", "\n<br>")}</p>
                        <br/>

                        {isCustomInput &&
                        <CustomOutputDisplay userOutput={userOutputs[index]}/>
                        }
                        {!isCustomInput && userOutputs[index] === correctOutputs[index] &&

                        <CorrectOutputDisplay output={userOutputs[index]}/>
                        }
                        {!isCustomInput && userOutputs[index] !== correctOutputs[index] &&

                        <IncorrectOutputDisplay userOutput={userOutputs[index]}
                                                correctOutput={correctOutputs[index]}/>
                        }


                    </TabPanel>
                );

            })
            }


        </Tabs>
    )
};

