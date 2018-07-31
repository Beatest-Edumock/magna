import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import NavBar from '../Layout/NavBar/NavBar';
import NavBarLogoOnly from '../Layout/NavBarLogoOnly/NavBarLogoOnly';
import HomePage from '../HomePage/HomePage'

import {Button, Welcome} from '@storybook/react/demo';


storiesOf('NavBar', module)
    .add('Logged In', () => <div style={{backgroundColor: "green", background: "green"}}><NavBar isLoggedIn={true}/></div>)
    .add('Not Logged In', () => <NavBar isLoggedIn={false}/>);

storiesOf('NavBar-LogoOnly', module)
    .add('demo', () => <NavBarLogoOnly/>)

storiesOf('HomePage', module)
    .add("Demo", () => <HomePage/>)
