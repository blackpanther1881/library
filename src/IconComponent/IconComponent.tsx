import React, {Component} from 'react';
// @ts-ignore
import symbol_defs from '../images/icon-symbols.svg';
import './index.css';
import {IconComponentProps} from "./IconComponent.types";

export const IconComponent = (prop: IconComponentProps) => {
    // return (
// export default class IconComponent extends Component {
//     render() {
        return (
            <svg viewBox={prop.viewBox ? prop.viewBox : "0 0 16 16"}
                 className={`icon icon-${prop.viewClass}`}>
                <use xlinkHref={`${symbol_defs}#icon-${prop.icon}`}/>
            </svg>
        );
    // }
}