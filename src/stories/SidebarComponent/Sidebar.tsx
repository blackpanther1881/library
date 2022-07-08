import React, {useState} from "react";
import {Nav, Collapse} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import {SidebarTypes} from "./Sidebar.types";
import {IconComponent} from "../../IconComponent";
import {FullScreenComponent} from "./FullScreenSidebar";
import {MobileSidebarComponent} from "./MobileSidebar";

export const Sidebar = (prop: SidebarTypes) => {
    const mobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
             !mobile ?
                 <FullScreenComponent {...prop}/>
                 : <MobileSidebarComponent {...prop} />
    );
};