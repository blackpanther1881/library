import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Button}  from '../elements/Button';
import {Icon} from "../elements/Icon";

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

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Secondary',
    className:'button-tertiary'
};

export const IconButton = Template.bind({});
IconButton.args = {
    label: 'Icon Button',
    className:'button-primary icon-button',
    icon:<Icon
        icon="arrow-redirect-white"
        viewClass="redirect"
    />
};
