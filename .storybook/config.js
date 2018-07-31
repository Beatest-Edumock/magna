import {configure} from '@storybook/react';

import {addDecorator} from '@storybook/react';

import backgroundColor from 'react-storybook-decorator-background';

addDecorator(backgroundColor(['#ffffff', '#000000']));

function loadStories() {
    require('../src/stories');
}

configure(loadStories, module);
