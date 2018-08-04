import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import {NavBarWithButtons} from "../Layout/NavBarWithButtons/NavBarWithButtons";
import {initStore} from "../_Redux/initStore";
import {FeatureCard} from "../Common/FeatureCard/FeatureCard";
import {MultipleFeature} from "../Common/FeatureCard/MultipleFeatures";
import {LargeFeatureCard} from "../Common/LargeFeatureCard/LargeFeatureCard";

const store = initStore();

// storiesOf('NavBar', module)
//     .add('Logged In', () => <NavBar isLoggedIn={true}/>)
//     .add('Not Logged In', () => <NavBar isLoggedIn={false}/>);

storiesOf('NavBar-WithButtons', module)
    .addDecorator(StoryRouter())
    .add('Logged In', () => <NavBarWithButtons isUserLoggedIn={true}/>)
    .add('Logged Out', () => <NavBarWithButtons isUserLoggedIn={false}/>);

storiesOf('Card', module)
    .add("Feature Card", FeatureCard);

storiesOf('Multiple Cards', module)
    .add("Feature Card", MultipleFeature);


storiesOf('Multiple Cards', module)
    .add("Large Feature Card", LargeFeatureCard);

// storiesOf('HomePage', module)
//     .addDecorator(story => <Provider store={store}>{story()}</Provider>)
//     .addDecorator(StoryRouter())
//     .add("Demo", () => <HomePage/>);
//
// storiesOf("Resend Activation Form")
//     .addDecorator(StoryRouter())
//     .add("Resend Activation Form", () => <ResendActivationPage/>);
