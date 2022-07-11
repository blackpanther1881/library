import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Tab}  from '../components/Tab';
// @ts-ignore
import avax from "./assets/avax.svg";

export default {
    title: 'Library/Tab',
    component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Primary = Template.bind({});

const tabList = [
    {
        eventKey:'Stake',
        title:'Stake',
        tabContent:"stake content"
    },
    {
        eventKey:'UnStake',
        title:'UnStake',
        tabContent:'unstake content'
    }
]

Primary.args = {
    tabList: tabList,
    activeKey:'Stake'
};
