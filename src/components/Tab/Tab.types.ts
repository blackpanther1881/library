import React from "react";

export type tabListTypes = {
    eventKey:string,
    title:string
    tabContent:React.ReactNode;
}

export type tabTypes = {
    className?:string;
    activeKey:string;
    tabList:Array<tabListTypes>;
}