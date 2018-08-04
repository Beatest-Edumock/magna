import React from 'react';
import {FeatureCard} from "./FeatureCard";


function MultipleFeature() {
    return (
        <div className="container-fluid no-gutters">
            <div className="row justify-content-center">

                <FeatureCard/>

                <FeatureCard/>

                <FeatureCard/>

                <FeatureCard/>
                {/*<FeatureCard/>*/}
                {/*<FeatureCard/>*/}
                {/*<FeatureCard/>*/}
                {/*<FeatureCard/>*/}
            </div>
        </div>

    )

}

export {MultipleFeature}
