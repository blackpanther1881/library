import React from "react";
import {tabTypes} from "./Tab.types";
import {Tabs, Tab as ReactTab} from "react-bootstrap";

export const Tab = (prop:tabTypes) =>{
    return(
        <div className={'custom-tabs ' +prop.className}>
            <div className="tabs-container">
                <Tabs defaultActiveKey={prop.activeKey} id="uncontrolled-tab-example" className="mb-3">
                    {
                        prop.tabList.map((item, index) => {
                           return(
                               <ReactTab eventKey={item.eventKey} title={item.title}>
                                   {item.tabContent}
                               </ReactTab>
                           )
                        })
                    }
                </Tabs>
            </div>
        </div>
    )
}