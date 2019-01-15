import React from 'react';
import PropTypes from 'prop-types';
import {Legend, ResponsiveContainer, Tooltip, CartesianGrid, AreaChart, XAxis, YAxis, Area} from 'recharts';


function AreaChartUI(props) {


    return (
        <ResponsiveContainer width="100%" aspect={1.5}>
            <AreaChart width={500} height={300} data={props.data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <defs>
                    <linearGradient id="areaColour" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={props.stroke} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={props.stroke} stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis name="Questions"/>
                <YAxis name="Time Spent (Seconds)"/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend/>
                <Area type="monotone" name={props.label} dataKey="time_spent" stroke={props.stroke} fillOpacity={1} fill="url(#areaColour)" />
            </AreaChart>
        </ResponsiveContainer>
    )

}


export {AreaChartUI};
