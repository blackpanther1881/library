import React from "react";
// import {Button as ReactButton} from "react-bootstrap";
import {ButtonTypes} from "./Button.types";

export const Button = (prop: ButtonTypes) => {
    return <button className={`button ${prop.className}`}>
        {prop.label}
        {prop.icon && prop.icon}
    </button>;
};