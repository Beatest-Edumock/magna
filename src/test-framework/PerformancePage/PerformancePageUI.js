import React from 'react';
import {Table} from 'reactstrap';


function calculateOverallAccuracy(sectionsObj) {

    const overall = {attempts: 0, correct: 0, incorrect: 0, score: 0, accuracy: 0};

    const accuracy = Object.keys(sectionsObj).map(sectionID => {

        overall.attempts += sectionsObj[sectionID].attempts;
        overall.score += sectionsObj[sectionID].attempts;
        overall.incorrect += sectionsObj[sectionID].incorrect;

        overall.score += sectionsObj[sectionID].score;


    })

}

function PerformancePageUI(props) {

    const sections = props.data.sections;

    const overall = {attempts: 0, correct: 0, incorrect: 0, score: 0, accuracy: 0};


    return (
        <div className="container   text-center">
            <div>
                <h2 className="my-5 text-monospace">{props.user.full_name}</h2>

                <div className="row my-5">
                    <h3 className="col text-monospace text-muted">{props.testDetails.name}</h3>
                    <h4 className="col text-monospace">Rank: {props.data.rank}</h4>
                    <h4 className="col text-monospace">Percentile: {props.data.percentile}</h4>
                </div>
            </div>

            <Table striped>
                <thead>
                <tr>
                    <th>Section</th>
                    <th>Attempts</th>
                    <th>Correct Questions</th>
                    <th>Incorrect Questions</th>
                    <th>Score</th>
                    <th>Accuracy</th>
                </tr>
                </thead>

                <tbody>
                {Object.keys(sections).map((sectionID) => {


                    const section = sections[sectionID];

                    overall.attempts += section.attempt_count;
                    overall.correct += section.correct_qtn_count;
                    overall.incorrect += section.incorrect_qtn_count;
                    overall.score += section.score;

                    overall.accuracy = 100 * overall.correct / overall.attempts;


                    return (
                        <React.Fragment>
                            <tr>
                                <th scope="row">{section.name}</th>
                                <td>{section.attempt_count}</td>
                                <td>{section.correct_qtn_count}</td>
                                <td>{section.incorrect_qtn_count}</td>
                                <td>{section.score}</td>
                                <td>{section.accuracy * 100}</td>
                            </tr>
                        </React.Fragment>
                    )
                })}

                <tr>
                    <th> Overall</th>
                    <td>{overall.attempts}</td>
                    <td>{overall.correct}</td>
                    <td>{overall.incorrect}</td>
                    <td>{overall.score}</td>
                    <td>{overall.accuracy}</td>

                </tr>

                </tbody>


            </Table>
            <button className=" btn btn-primary" onClick={props.viewPerformanceClickHandler}>View Solutions</button>
        </div>);

}


export {PerformancePageUI}