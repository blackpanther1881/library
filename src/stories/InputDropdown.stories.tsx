import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {InputDropdown}  from '../components/InputDropdown';
// @ts-ignore
import pLogo from "./assets/xprt_logo.svg";
// @ts-ignore
import atom from "./assets/atom.svg";

export default {
    title: 'Library/InputDropdown',
    component: InputDropdown,
} as ComponentMeta<typeof InputDropdown>;

const Template: ComponentStory<typeof InputDropdown> = (args) => <InputDropdown {...args} />;

export const Primary = Template.bind({});

const list = [
    {
        coinImageUrl:atom,
        coinDenom:'ATOM',
        balance: {
            amount:'0.001',
        }
    }
]

Primary.args = {
    token:{
        icon:pLogo,
        name:'XPRT',
        denom:'XPRT'
    },
    availableBalance:'0.00',
    dropDownList:list,
};
