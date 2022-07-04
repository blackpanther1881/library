import React, {useState} from "react";
import {Nav, Collapse} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SidebarComponentProps} from "./SidebarComponent.types";

export const SidebarComponent = (prop: SidebarComponentProps) => {
    return (
        <aside className="side-bar">
            <div className="side-bar-content">
                <div className="nav-link-section">
                    <div className="logo-container">
                        <img src={prop.logo} alt="logo" />
                    </div>
                    <Nav defaultActiveKey="/" className="flex-column nav-list">
                        {  prop.navList.map((navItem, index) => (
                            <Nav.Item as="li">
                                <NavLink to={navItem.path} className="nav-link">
                                    {navItem.icon}
                                    <span className="text">{navItem.name}</span>
                                </NavLink>
                            </Nav.Item>
                        ))
                        }
                    </Nav>
                    {
                        prop.showMoreList ?
                            <Nav.Item as="li">
                                <p onClick={prop.showMoreListDropdownHandler}
                                   aria-controls="more-list"
                                   aria-expanded={prop.showMoreListDropdown}
                                   className={`d-flex justify-content-between align-items-center nav-link more-list-header m-0 ${prop.showMoreListDropdown ? "opened" : "closed"}`}>
                                        <span className="">
                                            <span className="text">{prop.moreListTitle?.title}</span>
                                        </span>
                                        {prop.moreListTitle?.icon}
                                </p>
                                <Collapse in={prop.showMoreListDropdown}>
                                    <div id="more-list" className="more-list">
                                        {prop.navList.map((moreItem, index) => (
                                            <div className="list-item">
                                                {moreItem.icon}
                                                {moreItem.name}
                                                {/*<img src={redi} alt={redi} className={"icon"}/>*/}
                                            </div>
                                        ))
                                        }
                                    </div>
                                </Collapse>
                            </Nav.Item>
                            : null
                    }
                </div>
            </div>
        </aside>
    );
};