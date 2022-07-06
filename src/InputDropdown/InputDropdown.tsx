import React from "react";
import {Dropdown} from "react-bootstrap";
import {InputDropdownTypes} from "./InputDropdown.types";
import {IconComponent} from "../IconComponent";

export const InputDropdown = (prop:InputDropdownTypes) =>{
    return(
        <div className="input-field-container flex-fill">
            <div className="dropdown-input initial-child">
                <Dropdown onSelect={prop.dropDownHandler}>
                    <Dropdown.Toggle id="dropdown-basic">
                        <img src={prop.token.icon} className="logo" alt="cc"/>
                        {prop.token.denom}
                        <IconComponent
                            icon="down-arrow"
                            viewClass="arrow"
                        />
                    </Dropdown.Toggle>
                    <p className="available">
                        <span className="text">Available: </span>
                        <span className="value"> {prop.availableBalance}</span>
                    </p>
                    <Dropdown.Menu>
                        <div className="search-input">
                            <input
                                type="text"
                                onChange={prop.searchHandler}
                                placeholder="search for a token"
                            />
                            <IconComponent
                                icon="search"
                                viewClass="search"
                            />
                        </div>
                        <div className="dropdown-list">
                            {
                                    prop.dropDownList?.map((item, index) => {
                                            if(item.coinDenom !== prop.token.denom) {
                                                return (
                                                    <Dropdown.Item eventKey={item.coinDenom} key={index}>
                                                        <div className="logo">
                                                            <img src={item.coinImageUrl}
                                                                 alt={item.coinImageUrl}/>
                                                            {item.coinDenom}
                                                        </div>
                                                        <div className="balance">
                                                            {item.balance.amount}
                                                        </div>
                                                    </Dropdown.Item>
                                                )
                                            }
                                        })
                            }
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="input-section">
                    <input
                        type="number"
                        placeholder="0.00"
                        value={prop.inputValue}
                        onKeyPress={e => {
                            const key = e.key.toLowerCase();
                            if (key === "e" || key === "-" || key === "+") {
                                e.preventDefault();
                            }
                        }}
                        onChange={prop.inputChangeHandler}
                        readOnly={prop.readonly}
                        disabled={prop.disable}
                    />
                    <p className="dollar-amount">0.00 </p>
                </div>
            </div>
        </div>
    )
}