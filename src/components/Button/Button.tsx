import * as React from "react";
import {Button as ReactButton} from "react-bootstrap";

export interface ButtonProps {
    label: string;
}

export const Button = (props: ButtonProps) => {
    return <ReactButton>{props.label}</ReactButton>;
};

