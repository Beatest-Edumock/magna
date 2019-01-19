import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {faCheck, faTimes} from "@fortawesome/fontawesome-free-solid"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from 'react';


function CorrectOutputDisplay({output}) {
    if (output !== null)
        output = output.replace("\n", "⏎\n");

    return (
        <React.Fragment>
            <p className="lead  text-gray blockquote">Your Output <FontAwesomeIcon icon={faCheck} style={{color: 'green'}}/></p>
            <div className="">
                <p className="text-monospace alert-success p-2 rounded " style={{whiteSpace: "pre-line"}}>{output}</p>
            </div>
        </React.Fragment>

    )

}

function IncorrectOutputDisplay({userOutput, correctOutput}) {


    if (userOutput !== null)
        userOutput = userOutput.replace("\n", "⏎\n");

    if (correctOutput !== null)
        correctOutput = correctOutput.replace("\n", "⏎\n");

    return (
        <React.Fragment>
            <p className="lead  text-gray blockquote">Your Output <FontAwesomeIcon icon={faTimes} style={{color: 'red'}}/></p>
            <div className="">
                <p className="text-monospace alert-danger p-2 rounded " style={{whiteSpace: "pre-line"}}>{userOutput}</p>
            </div>
            <br/>

            <p className="lead  text-gray blockquote">Expected Output</p>
            <div className="">
                <p className="text-monospace bg-gray-light p-2 rounded" style={{whiteSpace: "pre-line"}}>{correctOutput}</p>
            </div>
        </React.Fragment>

    )

}

export const TestCaseDisplay = ({inputs, userOutputs, correctOutputs}) => {


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
                        <p className="lead  text-gray blockquote">Input</p>
                        <p className="text-monospace bg-gray-light p-2 rounded" style={{whiteSpace: "pre-line"}}>{inputs[index].replace("\n", "\n<br>")}</p>
                        <br/>


                        {userOutputs[index] === correctOutputs[index] &&

                        <CorrectOutputDisplay output={userOutputs[index]}/>
                        }
                        {userOutputs[index] !== correctOutputs[index] &&

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

