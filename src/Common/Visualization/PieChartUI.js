import React from 'react';
import PropTypes from 'prop-types';
import {Legend, ResponsiveContainer, Tooltip, PieChart, Pie, Cell, Label, PolarAngleAxis} from 'recharts';


function PieChartUI(props) {

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <ResponsiveContainer width="100%" aspect={1.5}>
            <PieChart width={800} height={800}
                      padding={{left: 30, right: 20}}
                      margin={{top: 5, right: 20, left: 20, bottom: 5}}>
                <Pie data={props.data}
                     cx={props.cx}
                     cy={props.cy}
                     innerRadius={props.innerRadius}
                     outerRadius={props.outerRadius}
                     fill={props.fill}
                     labelLine={false}
                     label={renderCustomizedLabel}
                     isAnimationActive={true}>
                    {
                        props.data.map(entry => <Cell fill={entry.color}/>)
                    }
                </Pie>
                <Tooltip/>
                <Legend layout="vertical" verticalAlign="bottom" align="right" />
            </PieChart>
        </ResponsiveContainer>
    )

}


export {PieChartUI};
