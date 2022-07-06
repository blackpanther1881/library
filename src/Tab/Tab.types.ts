import React from "react";

export type tabTypes = {
    className:string;
    activeKey:string;
    tabList:[
        {
            eventKey:string,
            title:string
            tabContent:React.ReactNode;
        }
    ];
}