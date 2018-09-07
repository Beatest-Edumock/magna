import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import {NavBarWithButtons} from "../Layout/NavBar/NavBarWithButtons/NavBarWithButtons";
import {initStore} from "../_Redux/initStore";
import {FeatureCard} from "../Common/FeatureCard/FeatureCard";


const store = initStore();
// setAddon(infoAddon);


storiesOf('NavBar-WithButtons', module)
    .addDecorator(StoryRouter())
    .add('Logged In', () => <NavBarWithButtons isUserLoggedIn={true}/>)
    .add('Logged Out', () => <NavBarWithButtons isUserLoggedIn={false}/>);
//
storiesOf('Card', module)
    .add("Feature Card", () => <FeatureCard label={"testing"}/>);

// storiesOf('Multiple Cards', module)
//     .add("Feature Card", MultipleFeature);
//
//
// storiesOf('Multiple Cards', module)
//     .add("Large Feature Card", LargeFeatureCard);
//
//
// storiesOf('Testing', module)
//     .add("Large Feature Card", ResendActivationForm);


// storiesOf('Button', module)
//     .add('with docgeninfo', () => (
//         <pre><code> {JSON.stringify(FeatureCard.__docgenInfo, null, 2)} </code></pre>
//     ));
