import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ButtonComponent}  from './ButtonComponent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Library/Button',
    component: ButtonComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ButtonComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    content: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    content: 'Secondary',
};
