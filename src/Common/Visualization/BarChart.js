import React from 'react';
import PropTypes from 'prop-types';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer} from 'recharts';


function StackedBarChart(props) {


    return (
        <ResponsiveContainer width="100%" aspect={1.5}>
            <BarChart data={props.data}
                      margin={{top: 30, right: 20, left: 35, bottom: 35}}
                      padding={{left: 30, right: 20}}
                      layout="vertical">
                <CartesianGrid strokeDasharray="3 3"/>

                <XAxis type="number">
                    <Label value={props.title} offset={35} position="bottom"/>
                </XAxis>
                <YAxis type="category" dataKey="name" textAnchor="end" tick={{fontSize: 12}}/>

                <Tooltip/>
                <Legend align="center"/>

                {/*Data Points for the Visualization*/}
                {
                    Object.keys(props.data[0]).map((key => {

                        console.log(key);

                        if (key !== 'name') {
                            return (
                                <Bar dataKey={key} stackId="a" fill={props.colors[key]} animationBegin={0}/>
                            )
                        }
                    }))
                }

            </BarChart>
        </ResponsiveContainer>
    )

}


export {StackedBarChart}

StackedBarChart.propTypes = {

    /** chart data that needs to be plotted */
    data: PropTypes.object,

    /** title of the chart that needs to be displayed */
    title: PropTypes.object,

    /** colors for the data point */
    colors: PropTypes.object

};