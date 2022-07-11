import React from 'react';

export type moreListTypes = {
    name?: string,
    path?: string,
    icon?: React.ReactNode
};

export type socialListTypes = {
    icon?:React.ReactNode,
    url?:string
}

export type navListTypes = {
    name:string,
    path:string,
    icon ? : React.ReactNode
}

export type SidebarTypes = {
    logo:string;
    navList:Array<navListTypes>;
    className?:string;
    showMoreList:boolean;
    showMoreListDropdown?:boolean;
    showMoreListDropdownHandler?():void;
    moreListTitle:{
        title?:string,
        icon ?: React.ReactNode
    }
    moreList?:Array<moreListTypes>;
    balanceContent ?:React.ReactNode
    socialList?:Array<socialListTypes>,
    showSidebar:boolean,
    sideBarHandler?():void
};