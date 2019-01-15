import React from 'react';
import PropTypes from 'prop-types';
import {ComposedChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer} from 'recharts';


function SimpleBarChart(props) {


    return (
        <ResponsiveContainer width="100%" aspect={1.5}>
            <ComposedChart data={props.data}
                      margin={{top: 30, right: 20, left: 35, bottom: 35}}
                      padding={{left: 30, right: 20}}>
                <CartesianGrid stroke='#f5f5f5'/>

                <XAxis dataKey="name" tick={{fontSize: 12}}>
                    <Label value={props.title} offset={35} position="bottom"/>
                </XAxis>
                <YAxis />

                <Tooltip/>
                <Legend align="center"/>
                <ReferenceLine y={0} stroke='#000'/>

                {/*Data Points for the Visualization*/}
                {
                    Object.keys(props.data[0]).map(((key, index) => {
                        if (key !== 'name') {
                            return (
                                <Bar key={index} dataKey={key} maxBarSize={35} fill={props.colors[key]} animationBegin={0}/>
                            )
                        }
                    }))
                }

            </ComposedChart>
        </ResponsiveContainer>
    )

}


export {SimpleBarChart}

SimpleBarChart.propTypes = {

    /** chart data that needs to be plotted */
    data: PropTypes.array,

    /** title of the chart that needs to be displayed */
    title: PropTypes.string,

    /** colors for the data point */
    colors: PropTypes.object

};