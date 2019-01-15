import React from 'react';
import {Table, Container, Row, Col} from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {StackedBarChart} from '../../Common/Visualization/StackedBarChart';
import {SimpleBarChart} from '../../Common/Visualization/SimpleBarChart';
import {StackedRadarChart} from '../../Common/Visualization/StackedRadarChart';
import {AreaChartUI} from '../../Common/Visualization/AreaChartUI';
import "react-tabs/style/react-tabs.css";
import colors from '../../Common/Visualization/ColorPalette';


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
    Correct: colors.green,
    Incorrect: colors.red,
    UnAttempted: colors.grey
};

const sectionAttemptData = [];

function sectionAttemptChartData(sectionName, correct, incorrect, totalQuestions) {
    let section = {
        name: sectionName,
        Correct: Math.round(((correct / totalQuestions) * 10000) / 100),
        Incorrect: Math.round(((incorrect / totalQuestions) * 10000) / 100),
        UnAttempted: Math.round(((totalQuestions - (correct + incorrect)) * 10000 / totalQuestions) / 100)
    };

    sectionAttemptData.push(section);
}

let scoreData = [];

const scoreColours = {
    Min: colors.red,
    You: colors.blue,
    Median: colors.yellow,
    Topper: colors.green
};

function scoreStatisticsChartData(scoreStatistics) {
    scoreData = [
        {name: 'Score', Min: scoreStatistics.min, You: scoreStatistics.score, Median: scoreStatistics.median, Topper: scoreStatistics.max,},
    ]
}

const sectionAttemptTimeColours = {
    "Time Spent": colors.red,
    "Total Time": colors.green
};

const sectionAttemptTime = [];
let maxSectionAttemptTime = 0;

function sectionAttemptTimeChartData(sectionAttempt) {
    let sectionAttemptTotalTimeInMins = sectionAttempt.section.total_time / 60;

    if (maxSectionAttemptTime < sectionAttemptTotalTimeInMins) {
        maxSectionAttemptTime = sectionAttemptTotalTimeInMins;
    }
    let attempt = {
        name: sectionAttempt.section.name,
        "Total Time": sectionAttemptTotalTimeInMins,
        "Time Spent": sectionAttempt.time_spent / 60,
    };

    sectionAttemptTime.push(attempt);
}

const overall = {attempts: 0, correct: 0, incorrect: 0, score: 0, accuracy: 0, total_questions: 0};


function prepareTimeSpentData(data) {
    const questionAttemptTimeSpentData = [];

    let sectionAttemptIdx;
    for (sectionAttemptIdx in data.section_attempts) {
        let questionAttemptIdx;
        for (questionAttemptIdx in data.section_attempts[sectionAttemptIdx].question_attempts) {
            const obj = data.section_attempts[sectionAttemptIdx].question_attempts[questionAttemptIdx];
            questionAttemptTimeSpentData.push(obj);

        }
    }

    return questionAttemptTimeSpentData;

}

function PerformancePageUI(props) {

    const sectionAttempts = props.data.section_attempts;
    const timeSpentData = prepareTimeSpentData(props.data);


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

            <Table striped condensed responsive hover bordered>
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
                            sectionAttemptTimeChartData(sectionAttempt);

                            if (index === (sectionAttempts.length - 1)) {
                                sectionAttemptChartData("Overall", overall.correct, overall.incorrect, overall.total_questions);
                                scoreStatisticsChartData(props.data);
                            }

                            return (
                                <React.Fragment key={index}>
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

            {/*Solutions Button Link*/}
            <button className="btn btn-primary" onClick={props.viewPerformanceClickHandler}>View Solutions</button>

            {/*Visualization Components*/}
            <Tabs style={{marginTop: '20px', marginBottom: '10px'}}>
                <TabList>
                    <Tab>Score Analysis</Tab>
                    <Tab>Time Analysis</Tab>
                    {/*<Tab>Topic Analysis</Tab>*/}
                </TabList>

                <TabPanel>
                    <Container fluid style={{marginTop: '20px'}}>
                        <Row>
                            <Col xs="12" sm="12" md="12" lg="6"><StackedBarChart data={sectionAttemptData} colors={sectionAttemptColors} title="Section Attempt Percentage"/></Col>
                            <Col xs="12" sm="12" md="12" lg="6"><SimpleBarChart data={scoreData} colors={scoreColours} title="Score Analysis"/></Col>
                        </Row>
                    </Container>
                </TabPanel>
                <TabPanel>
                    <Container fluid style={{marginTop: '20px'}}>
                        <Row style={{marginTop: '20px'}}>
                            <Col xs="12" sm="12" md="12" lg="6">
                                <h6>Sectional Time Spent (in minutes)</h6>
                                <StackedRadarChart data={sectionAttemptTime} colors={sectionAttemptTimeColours} title="Score Analysis" range={{min: 0, max: maxSectionAttemptTime}}/>
                            </Col>
                            <Col xs="12" sm="12" md="12" lg="6">
                                <AreaChartUI data={timeSpentData} label="Time Spent (Seconds) in each question" stroke={colors.red} />
                            </Col>
                        </Row>
                    </Container>
                </TabPanel>
                {/*<TabPanel>
                    <Container fluid style={{marginTop: '20px'}}>
                        <Row style={{marginTop: '20px'}}>
                            <Col lg="3"/>
                            <Col xs="12" sm="12" md="12" lg="6">
                                <AreaChartUI data={timeSpentData} stroke={colors.red} />
                            </Col>
                            <Col lg="3"/>
                        </Row>
                    </Container>
                </TabPanel>*/}
            </Tabs>

        </div>);


}


export {PerformancePageUI}