import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import NavBar from '../Layout/NavBar/NavBar';
import NavBarLogoOnly from '../Layout/NavBarLogoOnly/NavBarLogoOnly';
import HomePage from '../HomePage/HomePage'
import ResendActivationForm from 'ResendActivationPage/ResendActivationForm/ResendActivationForm'
import StoryRouter from 'storybook-react-router';
import {Provider} from 'react-redux';


import {store} from 'index';

import {Button, Welcome} from '@storybook/react/demo';
import ResendActivationPage from "../ResendActivationPage/ResendActivationPage";


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
