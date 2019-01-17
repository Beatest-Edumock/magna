import React from 'react';
import PropTypes from 'prop-types';
import {Treemap, ResponsiveContainer} from 'recharts';


function SimpleTreemapUI(props) {


    return (
        <ResponsiveContainer width="100%" aspect={1.5}>
            <Treemap width={400}
                     height={200}
                     data={props.data}
                     margin={{top: 30, right: 20, left: 35, bottom: 35}}
                     padding={{left: 30, right: 20}}
                     dataKey="size"
                     ratio={4/3}
                     stroke="#fff"
                     fill="#8884d8"/>
        </ResponsiveContainer>
    )

}


export {SimpleTreemapUI}

SimpleTreemapUI.propTypes = {

    /** chart data that needs to be plotted */
    data: PropTypes.array,

    /** title of the chart that needs to be displayed */
    title: PropTypes.string,

    /** colors for the data point */
    colors: PropTypes.object

};