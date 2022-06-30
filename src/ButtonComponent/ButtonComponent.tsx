import React from "react";
// import {Button as ReactButton} from "react-bootstrap";
import {ButtonComponentProps} from "./ButtonComponent.types";

export const ButtonComponent = (prop: ButtonComponentProps) => {
    return <button className={`button ${prop.className}`}>{prop.content}</button>;
};