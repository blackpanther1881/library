import React from "react";
import {Button as ReactButton} from "react-bootstrap";
import {ButtonComponentProps} from "./ButtonComponent.types";

export const ButtonComponent = (prop: ButtonComponentProps) => {
    return <ReactButton>{prop.content}</ReactButton>;
};