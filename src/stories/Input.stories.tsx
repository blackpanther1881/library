import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Input}  from '../components/Input';
// @ts-ignore
import avax from "./assets/avax.svg";

export default {
    title: 'Library/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    logo:avax,
    inputText:'AVAX',
    availableBalance:'0.00',
};
