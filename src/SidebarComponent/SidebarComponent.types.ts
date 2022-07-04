import React from 'react';
export type SidebarComponentProps = {
    logo:string;
    navList:[
        {
            name:string,
            path:string,
            icon ? : React.ReactNode
        }
    ];
    childComp?: React.ReactNode;
    showMoreList:boolean;
    showMoreListDropdown?:boolean;
    showMoreListDropdownHandler?():void;
    moreListTitle?:{
        title:string,
        icon:React.ReactNode
    }
    moreList?:[
        {
            name:string,
            path:string,
            icon ? : React.ReactNode
        },
        {
            name:string,
            path:string,
            icon ? : React.ReactNode
        }
    ]


};