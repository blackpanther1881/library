import React from "react";
import {InputComponentPropsTypes} from "./InputComponentProps.types";

export const InputComponent = (prop: InputComponentPropsTypes) => {
    return (
        <div className={'input-field-container flex-fill '+ prop.className}>
            <div className="logo-input">
                <div className="input-logo-section">
                    <div className="input-logo">
                        <img src={prop.logo} className="logo" alt="cc"/>
                        {prop.inputText}
                    </div>
                    <p className="available">
                        <span className="text">Available: </span>
                        <span className="value">{prop.availableBalance}</span>
                        {/*{walletConnection && */}
                        {prop.maxBalanceHandler ?
                            <span className="max" onClick={prop.maxBalanceHandler}>Max</span>
                            : null
                        }
                        {/*}*/}
                    </p>
                </div>
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
                    <p className="dollar-amount">$ {prop.inputValueInDollar}</p>
                </div>
            </div>
        </div>
    );
};