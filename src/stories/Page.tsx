import React, {useState} from 'react';
//
// import { Header } from './Header';
import {Sidebar} from "./Sidebar";
import {Icon} from "../elements/Icon";
// @ts-ignore
import logo from "./assets/logo.svg";
import {Tab} from "../components/Tab";
22
type User = {
    name: string;
};
const navList = [
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

export const Page: React.VFC = () => {
    const [moreList , setMoreList] = useState([{}]);
    const [moreDropdown ,setMoreDropdown] = useState(false);

    const handl = () => {
        setMoreDropdown(!moreDropdown);
        if(!moreDropdown){
            setMoreList(list);
        }else {
            setMoreList([]);
        }
    }

    return (
        <div className="app-layout">
            <Sidebar
                logo={logo}
                navList={navList}
                showMoreList={true}
                moreListTitle={title}
                moreList={moreList}
                showSidebar={true}
                socialList={socialList}
                showMoreListDropdown={moreDropdown}
                showMoreListDropdownHandler={handl}
                />
            <div className="main-container">
                <Tab activeKey={"Stake"} tabList={tabList}/>
            </div>

        </div>
    );
};
