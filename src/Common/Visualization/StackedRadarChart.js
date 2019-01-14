import React from 'react';
import PropTypes from 'prop-types';
import {RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Label, ResponsiveContainer, Tooltip} from 'recharts';


function StackedRadarChart(props) {


    return (
        <ResponsiveContainer width="100%" aspect={1.5}>
            <RadarChart outerRadius={120}
                        width={730}
                        height={350}
                        margin={{top: 30, right: 40, left: 50, bottom: 35}}
                        padding={{left: 30, right: 20}}
                        data={props.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" tick={{fontSize: 12}}>
                    <Label value={props.title} offset={0} position="bottom"/>
                </PolarAngleAxis>
                <PolarRadiusAxis angle={30} domain={[props.range.min, props.range.max]}/>

                {/*Data Points for the Visualization*/}
                {
                    Object.keys(props.data[0]).map((key => {
                        if (key !== 'name') {
                            return (
                                <Radar name={key} dataKey={key} stroke={props.colors[key]} fill={props.colors[key]} fillOpacity={0.6}/>
                            )
                        }
                    }))
                }

                <Tooltip/>
                <Legend layout="vertical" verticalAlign="bottom" align="right" />
            </RadarChart>
        </ResponsiveContainer>
    )

}


export {StackedRadarChart}

StackedRadarChart.propTypes = {

    /** chart data that needs to be plotted */
    data: PropTypes.object,

    /** range of the radar. must have property min and max **/
    range: PropTypes.object,

    /** title of the chart that needs to be displayed */
    title: PropTypes.object,

    /** colors for the data point */
    colors: PropTypes.object

};