import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from './SidebarComponent';
import {IconComponent} from "../IconComponent";
// import logo from "./assets/logo.svg";
// import "./_sidebar.scss";

const snavList = [
    {
        name:'Staking',
        path:'/',
        icon: <IconComponent
            icon="staking"
            viewClass="staking"
        />
    },
    {
        name:'Defi',
        path:'/defi',
        icon: <IconComponent
            icon="defi"
            viewClass="defi"
        />
    },
    {
        name:'Transactions',
        path:'/transactions',
        icon:  <IconComponent
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
            <IconComponent
                icon="globe"
                viewClass="item"
            />,
    },
    {
        name:'Docs',
        path:'/',
        icon:<IconComponent
            icon="docs"
            viewClass="item"
        />,
    },
    {
        name:'Raise a Ticket',
        path:'/',
        icon:<IconComponent
            icon="bug"
            viewClass="item"
        />,
    },
    {
        name:'Testnet',
        path:'/',
        icon:<IconComponent
            icon="testnet"
            viewClass="item"
        />,
    },
    {
        name:'Analytics',
        path:'/',
        icon:<IconComponent
            icon="analytics"
            viewClass="item"
        />,
    },
    {
        name:'Governance',
        path:'/',
        icon:<IconComponent
            icon="governance"
            viewClass="item"
        />,
    },
]

const title = {
    title: 'More',
    icon: <IconComponent
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
    title: 'Example/Sidebar',
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
    logo: '/logo.svg',
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
    logo: '/logo.svg',
    navList: snavList,
    socialList: socialList,
    moreListTitle: title,
    showMoreList: true,
    showMoreListDropdown:false,
    showSidebar: false,
};
