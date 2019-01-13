import React from 'react';
import {Table, Container, Row, Col} from 'reactstrap';
import {StackedBarChart} from '../../Common/Visualization/BarChart'


function calculateOverallAccuracy(sectionsObj) {

    const overall = {attempts: 0, correct: 0, incorrect: 0, score: 0, accuracy: 0};

    const accuracy = Object.keys(sectionsObj).map(sectionID => {

        overall.attempts += sectionsObj[sectionID].attempts;
        overall.score += sectionsObj[sectionID].attempts;
        overall.incorrect += sectionsObj[sectionID].incorrect;

        overall.score += sectionsObj[sectionID].score;


    })

}

const sectionAttemptColors = {
    correct: '#228B22',
    incorrect: '#DC143C',
    unattempted: '#708090'
};

const chartData = [];

function sectionAttemptChartData(sectionName, correct, incorrect, totalQuestions) {
    let section = {
        name: sectionName,
        correct: (correct / totalQuestions) * 100,
        incorrect: (incorrect / totalQuestions) * 100,
        unattempted: ((totalQuestions - (correct + incorrect)) / totalQuestions) * 100
    };

    chartData.push(section);
}

const overall = {attempts: 0, correct: 0, incorrect: 0, score: 0, accuracy: 0, total_questions: 0};

function PerformancePageUI(props) {

    const sectionAttempts = props.data.section_attempts;


    return (
        <div className="container   text-center">
            <div>
                <h2 className="my-5 text-monospace">{props.user.full_name}</h2>

                <div className="row my-5">
                    <h3 className="col text-monospace text-muted">{props.testDetails.name}</h3>
                    {/*<h4 className="col text-monospace">Rank: {props.data.rank}</h4>*/}
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


                {
                    sectionAttempts.map(((sectionAttempt, index) => {


                            const totalAttempts = sectionAttempt.correct_question_count + sectionAttempt.incorrect_question_count;


                            let accuracy = sectionAttempt.correct_question_count / totalAttempts;
                            accuracy = Math.round(accuracy * 10000) / 100
                            if (totalAttempts === 0) {
                                accuracy = "-"
                            }


                            overall.attempts += totalAttempts;
                            overall.correct += sectionAttempt.correct_question_count;
                            overall.incorrect += sectionAttempt.incorrect_question_count;
                            overall.score += sectionAttempt.score;
                            overall.accuracy = overall.correct / overall.attempts;
                            overall.accuracy = Math.round(overall.accuracy * 10000) / 100;
                            overall.total_questions += sectionAttempt.total_question_count;

                            sectionAttemptChartData(sectionAttempt.section.name, sectionAttempt.correct_question_count, sectionAttempt.incorrect_question_count, sectionAttempt.total_question_count);
                            if (index === (sectionAttempts.length - 1)) {
                                sectionAttemptChartData("Overall", overall.correct, overall.incorrect, overall.total_questions)
                            }

                            return (
                                <React.Fragment>
                                    <tr>
                                        <th scope="row">{sectionAttempt.section.name}</th>
                                        <td>{totalAttempts}</td>
                                        <td>{sectionAttempt.correct_question_count}</td>
                                        <td>{sectionAttempt.incorrect_question_count}</td>
                                        <td>{sectionAttempt.score}</td>
                                        <td>{accuracy}</td>
                                    </tr>
                                </React.Fragment>
                            );
                        }
                    ))

                }

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

            {/*Visualization Components*/}
            <Container fluid>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="6"><StackedBarChart data={chartData} colors={sectionAttemptColors} title="Section Attempt Percentage"/></Col>
                    <Col/>
                </Row>
            </Container>
        </div>);

}


export {PerformancePageUI}