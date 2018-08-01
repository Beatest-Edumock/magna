import React from 'react';

import {storiesOf} from '@storybook/react';
import NavBar from '../Layout/NavBar/NavBar';
import NavBarLogoOnly from '../Layout/NavBarLogoOnly/NavBarLogoOnly';
import HomePage from '../HomePage/HomePage'
import StoryRouter from 'storybook-react-router';
import {Provider} from 'react-redux';


import ResendActivationPage from "../ResendActivationPage/ResendActivationPage";
import {initStore} from "../_Redux/initStore";

const store = initStore();

storiesOf('NavBar', module)
    .add('Logged In', () => <NavBar isLoggedIn={true}/>)
    .add('Not Logged In', () => <NavBar isLoggedIn={false}/>);

storiesOf('NavBar-LogoOnly', module)
    .addDecorator(StoryRouter())
    .add('demo', () => <NavBarLogoOnly/>)

storiesOf('HomePage', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .addDecorator(StoryRouter())
    .add("Demo", () => <HomePage/>);

storiesOf("Resend Activation Form")
    .addDecorator(StoryRouter())
    .add("Resend Activation Form", () => <ResendActivationPage/>);
