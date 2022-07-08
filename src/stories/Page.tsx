import React, {useState} from 'react';
//
// import { Header } from './Header';
import {Sidebar} from "./SidebarComponent";
import {IconComponent} from "../IconComponent";

type User = {
    name: string;
};
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

export const Page: React.VFC = () => {
    const [user, setUser] = React.useState<User>();
    const [lisst , setLisst] = useState([]);
    const [moreDropdown ,setMoreDropdown] = useState(false);

    const handl = () => {
        setMoreDropdown(!moreDropdown);
        if(!moreDropdown){
            setLisst(list);
        }else {
            setLisst([]);
        }
    }

    return (
        <div className="app-layout">
            <Sidebar
                logo={'./assets/logo.svg'}
                navList={snavList}
                showMoreList={true}
                moreListTitle={title}
                moreList={lisst}
                showSidebar={true}
                socialList={socialList}
                showMoreListDropdown={moreDropdown}
                showMoreListDropdownHandler={handl}
                />
            {/*<Header*/}
            {/*    user={user}*/}
            {/*    onLogin={() => setUser({ name: 'Jane Doe' })}*/}
            {/*    onLogout={() => setUser(undefined)}*/}
            {/*    onCreateAccount={() => setUser({ name: 'Jane Doe' })}*/}
            {/*/>*/}
            <div className="main-container">

            </div>

        </div>
    );
};
