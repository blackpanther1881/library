import React, {useState} from "react";
import {Nav, Collapse, Offcanvas} from "react-bootstrap";
import {SidebarComponentProps} from "./SidebarComponent.types";
import {FullScreenComponent} from "./FullScreenSidebar";

export const MobileSidebarComponent = (prop: SidebarComponentProps) => {
    return (
        <Offcanvas show={prop.showSidebar} onHide={prop.sideBarHandler} className="custom-offcanvas">
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <FullScreenComponent {...prop}/>
            </Offcanvas.Body>
        </Offcanvas>
    );
};