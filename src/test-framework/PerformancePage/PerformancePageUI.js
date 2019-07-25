import React from 'react';
import _ from 'lodash';
import {Progress} from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {Col, Container, Row, Table} from 'reactstrap';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import {StackedBarChart} from '../../Common/Visualization/StackedBarChart';
import {SimpleBarChart} from '../../Common/Visualization/SimpleBarChart';
import {StackedRadarChart} from '../../Common/Visualization/StackedRadarChart';
import {AreaChartUI} from '../../Common/Visualization/AreaChartUI';
import {PieChartUI} from "../../Common/Visualization/PieChartUI";
import "./styles.css";
import {colors} from '../../Common/Visualization/ColorPalette';

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

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
    let sectionAttemptTotalTimeInMins = Math.round(sectionAttempt.section.total_time / 60);

    if (maxSectionAttemptTime < sectionAttemptTotalTimeInMins) {
        maxSectionAttemptTime = sectionAttemptTotalTimeInMins;
    }

    let attempt = {
        name: sectionAttempt.section.name,
        "Total Time": sectionAttemptTotalTimeInMins,
        "Time Spent": Math.round(sectionAttempt.time_spent / 60),
    };

    sectionAttemptTime.push(attempt);
}

const questionLodAttempt = [];
const questionTypeAttempt = [];
const questionTopicAttempt = [];

function prepareQuestionAttemptedData(data) {
    const topicAttemptedCount = {};
    const lodAttemptCount = {};
    const questionTypeAttemptCount = {};

    let sectionAttemptIdx;
    for (sectionAttemptIdx in data.section_attempts) {
        let questionAttemptIdx;
        for (questionAttemptIdx in data.section_attempts[sectionAttemptIdx].question_attempts) {
            let topic = data.section_attempts[sectionAttemptIdx].question_attempts[questionAttemptIdx].question.topic;
            let lod = data.section_attempts[sectionAttemptIdx].question_attempts[questionAttemptIdx].question.lod;
            let type = data.section_attempts[sectionAttemptIdx].question_attempts[questionAttemptIdx].question.type;

            if (topic !== null) {
                if (typeof topicAttemptedCount[topic] === 'undefined') {
                    topicAttemptedCount[topic] = 1;
                } else {
                    topicAttemptedCount[topic] += 1;
                }
            }

            if (lod !== null) {
                if (typeof lodAttemptCount[lod] === 'undefined') {
                    lodAttemptCount[lod] = 1;
                } else {
                    lodAttemptCount[lod] += 1;
                }
            }

            if (type !== null) {
                if (typeof questionTypeAttemptCount[type] === 'undefined') {
                    questionTypeAttemptCount[type] = 1;
                } else {
                    questionTypeAttemptCount[type] += 1;
                }
            }
        }
    }

    let lods = Object.keys(lodAttemptCount);

    for (let idx in lods) {
        let obj = {
            name: lods[idx],
            value: lodAttemptCount[lods[idx]],
            color: random_material_color()
        };

        questionLodAttempt.push(obj);
    }

    let types = Object.keys(questionTypeAttemptCount);

    for (let idx in types) {
        let obj = {
            name: types[idx],
            value: questionTypeAttemptCount[types[idx]],
            color: random_material_color()
        };

        questionTypeAttempt.push(obj);
    }

    let topics = Object.keys(topicAttemptedCount);

    for (let idx in topics) {
        let obj = {
            name: topics[idx],
            size: topicAttemptedCount[topics[idx]]
        };

        questionTopicAttempt.push(obj);
    }
}

function random_material_color() {
    /*let result;
    let count = 0;
    for (let prop in materialColors)
        if (Math.random() < 1 / ++count)
            result = prop;
    console.log(result);
    return result;*/

    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
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

    if (props.psychReport) {
        const personality = props.psychReport['personality_type'];
        const role = props.psychReport['role'];
        const strategy = props.psychReport['strategy'];

        delete props.psychReport['personality_type'];
        delete props.psychReport['role'];
        delete props.psychReport['strategy'];


    }

    const sectionAttempts = props.data.section_attempts;
    const timeSpentData = prepareTimeSpentData(props.data);

    prepareQuestionAttemptedData(props.data);

    return (
        <div style={{minHeight: "100%", minWidth: "100%"}} className="bg-light">
            <div className="container text-center  rounded ">
                <div>
                    <p className="h4 my-5 ">{props.user.full_name}</p>

                    <div className="row my-5">
                        <h3 className="col  text-muted">{props.testDetails.name}</h3>
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

                <h4 className="lead text-dark">For Coding questions, scores are shown based on number of test cases passed. An answer is marked correct in the table only when all
                    the
                    test cases pass. </h4>

                {/*Solutions Button Link*/}
                <button className="btn btn-primary" onClick={props.viewPerformanceClickHandler}>View Solutions</button>

                {/*Visualization Components*/}
                <Tabs style={{marginTop: '20px', marginBottom: '10px'}}>
                    <TabList>
                        <Tab>Score Analysis</Tab>
                        <Tab>Time Analysis</Tab>
                        <Tab>Question Analysis</Tab>
                    </TabList>

                    <TabPanel>
                        <Container fluid style={{marginTop: '20px'}}>

                            <Row>
                                <Col xs="12" sm="12" md="12" lg="6">
                                    <div className="card">

                                        <StackedBarChart data={sectionAttemptData} colors={sectionAttemptColors}
                                                         title="Section Attempt Percentage"/>
                                    </div>

                                </Col>
                                <Col xs="12" sm="12" md="12" lg="6">

                                    <div className="card">
                                        <SimpleBarChart data={scoreData} colors={scoreColours} title="Score Analysis"/>
                                    </div>


                                </Col>
                            </Row>
                        </Container>
                    </TabPanel>
                    <TabPanel>
                        <Container fluid style={{marginTop: '20px'}}>
                            <Row style={{marginTop: '20px'}}>
                                <Col xs="12" sm="12" md="12" lg="6">
                                    <h6>Sectional Time Spent (in minutes)</h6>
                                    <StackedRadarChart data={sectionAttemptTime} colors={sectionAttemptTimeColours} title="Score Analysis"
                                                       range={{min: 0, max: maxSectionAttemptTime}}/>
                                </Col>
                                <Col xs="12" sm="12" md="12" lg="6">
                                    <h6>Time spent in each Question(in seconds)</h6>
                                    <AreaChartUI data={timeSpentData} yAxisDataKey="time_spent" label="Time Spent (Seconds) in each question" stroke={colors.red}/>
                                </Col>
                            </Row>
                        </Container>
                    </TabPanel>
                    <TabPanel>
                        <Container fluid style={{marginTop: '20px'}}>
                            <Row style={{marginTop: '20px'}}>
                                <Col xs="12" sm="12" md="12" lg="4">
                                    <h6>Attempts by Level of Difficulty</h6>
                                    <PieChartUI data={questionLodAttempt} cx={120} cy={120} innerRadius={35} outerRadius={80}/>
                                </Col>
                                <Col xs="12" sm="12" md="12" lg="4"/>
                                <Col xs="12" sm="12" md="12" lg="4">
                                    <h6>Attempts by Question Type</h6>
                                    <PieChartUI data={questionTypeAttempt} cx={120} cy={120} innerRadius={35} outerRadius={80}/>
                                </Col>
                            </Row>
                        </Container>
                    </TabPanel>
                </Tabs>

                {props.testAttemptReport !== undefined &&
                <h3>Growth Potential</h3>
                }

                <div className="container">


                    {props.testAttemptReport !== undefined &&

                    Object.keys(props.testAttemptReport).map(key => {

                        const obj = props.testAttemptReport;


                        if (obj[key] != null) {


                            return (<div className="row">
                                    <div className="col-6 ">
                                        <h3 className="lead text-left">{toTitleCase(key).replace(/_/g, " ")}</h3>
                                    </div>
                                    <div className="col-6 my-2 ">
                                        <Progress

                                            theme={{
                                                success: {
                                                    symbol: ' ‍',
                                                    color: 'rgb(223, 105, 180)'
                                                },
                                                active: {
                                                    symbol: ' ',
                                                    color: '#fbc630'
                                                },
                                                default: {
                                                    symbol: ' ',
                                                    color: '#fbc630'
                                                }
                                            }}


                                            percent={
                                                (obj[key] * 100) -
                                                (obj[key] > .1 ? 10.0 : 0.0)
                                            }/>

                                    </div>

                                </div>
                            )


                        }

                    })

                    }


                    {props.tabChangeCount !== null && props.tabChangeCount !== undefined &&
                    <>
                        <div className="card my-5 py-5 ">
                            <p className="justify-content-start lead h5 font-weight-bold">Number of tab changes</p>
                            <h3 className="text-muted justify-content-center"> {props.tabChangeCount}</h3>
                        </div>
                    </>

                    }


                    {props.psychReport !== undefined &&
                    <>
                        <div className="card p-5 shadow-sm">
                            <p className="h5 font-weight-bold">Personality Analysis</p>


                            {
                                _.chunk(Object.keys(props.psychReport).sort(), 2).map((chunk, i) => {


                                    let leftText = null;
                                    let rightText = null;
                                    let description = "This trait determines how we interact with our environment.";


                                    if (i === 2) {

                                        leftText = "Extroverted";
                                        rightText = "Introverted";
                                        description = "This trait determines how we interact with our environment.";
                                    }
                                    else if (i === 0) {

                                        leftText = "Intuitive";
                                        rightText = "Observant";
                                        description = "This trait shows where we direct our mental energy.";
                                    }
                                    else if (i === 3) {

                                        leftText = "Thinking";
                                        rightText = "Feeling";
                                        description = "This trait determines how we make decisions and cope with emotions.";
                                    }
                                    else if (i === 4) {

                                        leftText = "Judging";
                                        rightText = "Prospecting";
                                        description = "This trait reflects our approach to work, planning and decision-making.";
                                    }
                                    else if (i === 1) {

                                        leftText = "Assertive";
                                        rightText = "Turbulent";
                                        description = "This trait underpins all others, showing how confident we are in our abilities and decisions.";

                                    }


                                    return (
                                        <div className="row my-5 no-gutters">
                                            <div className="col-6 ">
                                                <p className="h4 text-info  text-left">{toTitleCase(chunk[0]).replace(/_text/, "")}
                                                </p>
                                                <p className="text-left font-italic">{description}</p>

                                            </div>

                                            <div className="col my-2 ">
                                                <div>

                                                    <p style={{float: "right"}}>{leftText}</p>
                                                    <p style={{float: "left"}}>{rightText}</p>

                                                    <div className="">
                                                        <Progress

                                                            theme={{
                                                                success: {
                                                                    // symbol: ' ‍',
                                                                    color: 'rgb(223, 105, 180)'
                                                                },
                                                                active: {
                                                                    // symbol: ' ',
                                                                    color: '#fbc630'
                                                                },
                                                                default: {
                                                                    // symbol: ' ',
                                                                    color: '#fbc630'
                                                                }
                                                            }}


                                                            percent={props.psychReport[chunk[1]]}

                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <p className="text-left text-muted lead">{props.psychReport[chunk[0]]}</p>
                                        </div>

                                    );


                                })


                                // Object.keys(props.psychReport).map(key => {
                                //
                                //     const obj = props.psychReport;
                                //     if (obj[key] != null) {
                                //
                                //
                                //         return (<div className="row">
                                //                 <div className="col-6 ">
                                //                     <h3 className="lead text-left">{toTitleCase(key).replace(/_/g, " ").replace(/ value/g, "")}</h3>
                                //                 </div>
                                //                 <div className="col-6 my-2 ">
                                //                     <Progress
                                //
                                //                         theme={{
                                //                             success: {
                                //                                 symbol: ' ‍',
                                //                                 color: 'rgb(223, 105, 180)'
                                //                             },
                                //                             active: {
                                //                                 symbol: ' ',
                                //                                 color: '#fbc630'
                                //                             },
                                //                             default: {
                                //                                 symbol: ' ',
                                //                                 color: '#fbc630'
                                //                             }
                                //                         }}
                                //
                                //
                                //                         percent={obj[key]}/>
                                //
                                //                 </div>
                                //
                                //             </div>
                                //         )
                                //
                                //
                                //     }
                                //
                                // })


                            }


                        </div>
                    </>
                    }


                </div>


            </div>
        </div>);


}


export {PerformancePageUI}