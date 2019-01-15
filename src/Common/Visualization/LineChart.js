import React from 'react';
import PropTypes from 'prop-types';
import {RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Label, ResponsiveContainer, Tooltip, CartesianGrid, LineChart, XAxis, YAxis, Line} from 'recharts';


function LineChartUI(props) {


    return (
        <ResponsiveContainer width="100%" aspect={1.5}>
            <LineChart width={500} height={300} data={props.data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis name="Questions"/>
                <YAxis name="Time Spent (Seconds)"/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" name="Time Spent (Seconds) in each question" dataKey="time_spent" stroke={props.stroke} activeDot={{r: 8}}/>
            </LineChart>
        </ResponsiveContainer>
    )

}


export {LineChartUI};
