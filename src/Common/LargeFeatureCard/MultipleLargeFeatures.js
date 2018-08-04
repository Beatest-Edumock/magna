import React from 'react';
import {LargeFeatureCard} from "./LargeFeatureCard";


function MultipleLargeFeatures() {
    return (
        <div className="">
            <div className="row justify-content-center">
                <LargeFeatureCard/>
                <LargeFeatureCard/>
                <LargeFeatureCard/>
                <LargeFeatureCard/>
                <LargeFeatureCard/>

            </div>
        </div>

    )

}

export {MultipleLargeFeatures}
