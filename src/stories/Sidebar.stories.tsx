import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from './Sidebar';
import {Icon} from "../elements/Icon";
// @ts-ignore
import logo from "./assets/logo.svg";
// import "./_sidebar.scss";

console.log(logo, "logologologo");
const snavList = [
    {
        name:'Staking',
        path:'/',
        icon: <Icon
            icon="staking"
            viewClass="staking"
        />
    },
    {
        name:'Defi',
        path:'/defi',
        icon: <Icon
            icon="defi"
            viewClass="defi"
        />
    },
    {
        name:'Transactions',
        path:'/transactions',
        icon:  <Icon
            icon="transactions"
            viewClass="transactios"
        />
    },
]

const list = [
    {
        name:'pstake.finance',
        path:'/',
        icon:
            <Icon
                icon="globe"
                viewClass="item"
            />,
    },
    {
        name:'Docs',
        path:'/',
        icon:<Icon
            icon="docs"
            viewClass="item"
        />,
    },
    {
        name:'Raise a Ticket',
        path:'/',
        icon:<Icon
            icon="bug"
            viewClass="item"
        />,
    },
    {
        name:'Testnet',
        path:'/',
        icon:<Icon
            icon="testnet"
            viewClass="item"
        />,
    },
    {
        name:'Analytics',
        path:'/',
        icon:<Icon
            icon="analytics"
            viewClass="item"
        />,
    },
    {
        name:'Governance',
        path:'/',
        icon:<Icon
            icon="governance"
            viewClass="item"
        />,
    },
]

const title = {
    title: 'More',
    icon: <Icon
        icon="right-arrow"
        viewClass="right-arrow m-0"
    />
}

const socialList = [
    {
        url: '',
        icon: 'twitter-logo',
    },
    {
        url: '',
        icon: 'telegram-plane',
    },
    {
        url:  '' ,
        icon: 'medium-m',
    }
];

export default {
    title: 'Library/Sidebar',
    component: Sidebar,
    // parameters: {
    //     // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    //     layout: 'fullscreen',
    // },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//     user: {
//         name: 'Jane Doe',
//     },
// };

export const SocialList = Template.bind({});
SocialList.args = {
    logo: logo,
    navList: snavList,
    socialList: socialList,
    moreListTitle: title,
    showMoreList: true,
    moreList: list,
    showMoreListDropdown:true,
    showSidebar: false,
};


export const Primary = Template.bind({});
Primary.args = {
    logo: logo,
    navList: snavList,
    socialList: socialList,
    moreListTitle: title,
    showMoreList: true,
    showMoreListDropdown:false,
    showSidebar: false,
};
