import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Button}  from './Button';

export default {
    title: 'Library/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Primary',
    className:'button-primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary',
    className:'button-secondary'
};
