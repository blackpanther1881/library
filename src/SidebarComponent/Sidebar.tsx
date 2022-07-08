import React, {useState} from "react";
import {Nav, Collapse} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import {SidebarTypes} from "./Sidebar.types";
import {IconComponent} from "../IconComponent";
import {FullScreenComponent} from "./FullScreenSidebar";
import {MobileSidebarComponent} from "./MobileSidebar";

export const Sidebar = (prop: SidebarTypes) => {
    const mobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
             !mobile ?
                 <FullScreenComponent {...prop}/>
                 : <MobileSidebarComponent {...prop} />

        // <aside className="side-bar">
        //     <div className="side-bar-content">
        //         <div className="nav-link-section">
        //             <div className="logo-container">
        //                 <img src={prop.logo} alt="logo" />
        //             </div>
        //             <Nav defaultActiveKey="/" className="flex-column nav-list">
        //                 {  prop.navList.map((navItem, index) => (
        //                     <Nav.Item as="li">
        //                         <NavLink to={navItem.path} className="nav-link">
        //                             {navItem.icon}
        //                             <span className="text">{navItem.name}</span>
        //                         </NavLink>
        //                     </Nav.Item>
        //                 ))
        //                 }
        //                 {
        //                     prop.showMoreList ?
        //                         <Nav.Item as="li">
        //                             <p onClick={prop.showMoreListDropdownHandler}
        //                                aria-controls="more-list"
        //                                aria-expanded={prop.showMoreListDropdown}
        //                                className={`d-flex justify-content-between align-items-center nav-link more-list-header m-0 ${prop.showMoreListDropdown ? "opened" : "closed"}`}>
        //                                 <span className="">
        //                                     <span className="text">{prop.moreListTitle.title}</span>
        //                                 </span>
        //                                 {prop.moreListTitle.icon}
        //                             </p>
        //                             <Collapse in={prop.showMoreListDropdown}>
        //                                 <div id="more-list" className="more-list">
        //                                     {prop.moreList?.map((moreItem, index) => (
        //                                         <a href={moreItem.path} className="list-item" rel="noopener noreferrer" target="_blank">
        //                                             {moreItem.icon}
        //                                             {moreItem.name}
        //                                             <IconComponent
        //                                                 icon="arrow-redirect-white"
        //                                                 viewClass="redirect"
        //                                             />
        //                                         </a>
        //                                     ))
        //                                     }
        //                                 </div>
        //                             </Collapse>
        //                         </Nav.Item>
        //                         : null
        //                 }
        //             </Nav>
        //
        //         </div>
        //         <div className="bottom-section">
        //             <div className="balance-section">
        //                 {prop?.balanceContent}
        //             </div>
        //             <div className="footer-section">
        //                 <div className="social-links">
        //                     <span className="title">About</span>
        //                     <ul className="list-unstyled social-links-list">
        //                         {
        //                             prop.socialList?.map((item, index) => (
        //                                     <a href={item.url}  rel="noopener noreferrer"
        //                                        target="_blank"><IconComponent viewClass="social_icon_imgg"
        //                                                              icon={item.icon} /></a>
        //                             ))
        //                         }
        //                     </ul>
        //                 </div>
        //                 <div className="footer">
        //                     <p>By Persistence</p>
        //                 </div> // <aside className="side-bar">
        //         //     <div className="side-bar-content">
        //         //         <div className="nav-link-section">
        //         //             <div className="logo-container">
        //         //                 <img src={prop.logo} alt="logo" />
        //         //             </div>
        //         //             <Nav defaultActiveKey="/" className="flex-column nav-list">
        //         //                 {  prop.navList.map((navItem, index) => (
        //         //                     <Nav.Item as="li">
        //         //                         <NavLink to={navItem.path} className="nav-link">
        //         //                             {navItem.icon}
        //         //                             <span className="text">{navItem.name}</span>
        //         //                         </NavLink>
        //         //                     </Nav.Item>
        //         //                 ))
        //         //                 }
        //         //                 {
        //         //                     prop.showMoreList ?
        //         //                         <Nav.Item as="li">
        //         //                             <p onClick={prop.showMoreListDropdownHandler}
        //         //                                aria-controls="more-list"
        //         //                                aria-expanded={prop.showMoreListDropdown}
        //         //                                className={`d-flex justify-content-between align-items-center nav-link more-list-header m-0 ${prop.showMoreListDropdown ? "opened" : "closed"}`}>
        //         //                                 <span className="">
        //         //                                     <span className="text">{prop.moreListTitle.title}</span>
        //         //                                 </span>
        //         //                                 {prop.moreListTitle.icon}
        //         //                             </p>
        //         //                             <Collapse in={prop.showMoreListDropdown}>
        //         //                                 <div id="more-list" className="more-list">
        //         //                                     {prop.moreList?.map((moreItem, index) => (
        //         //                                         <a href={moreItem.path} className="list-item" rel="noopener noreferrer" target="_blank">
        //         //                                             {moreItem.icon}
        //         //                                             {moreItem.name}
        //         //                                             <IconComponent
        //         //                                                 icon="arrow-redirect-white"
        //         //                                                 viewClass="redirect"
        //         //                                             />
        //         //                                         </a>
        //         //                                     ))
        //         //                                     }
        //         //                                 </div>
        //         //                             </Collapse>
        //         //                         </Nav.Item>
        //         //                         : null
        //         //                 }
        //         //             </Nav>
        //         //
        //         //         </div>
        //         //         <div className="bottom-section">
        //         //             <div className="balance-section">
        //         //                 {prop?.balanceContent}
        //         //             </div>
        //         //             <div className="footer-section">
        //         //                 <div className="social-links">
        //         //                     <span className="title">About</span>
        //         //                     <ul className="list-unstyled social-links-list">
        //         //                         {
        //         //                             prop.socialList?.map((item, index) => (
        //         //                                     <a href={item.url}  rel="noopener noreferrer"
        //         //                                        target="_blank"><IconComponent viewClass="social_icon_imgg"
        //         //                                                              icon={item.icon} /></a>
        //         //                             ))
        //         //                         }
        //         //                     </ul>
        //         //                 </div>
        //         //                 <div className="footer">
        //         //                     <p>By Persistence</p>
        //         //                 </div>
        //         //             </div>
        //         //         </div>
        //         //     </div>
        //         // </aside>
        //             </div>
        //         </div>
        //     </div>
        // </aside>
    );
};