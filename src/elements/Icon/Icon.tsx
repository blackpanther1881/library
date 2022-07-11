import React from 'react';
import symbol_defs from '../../images/icon-symbols.svg';
import './index.scss';
import {IconTypes} from "./Icon.types";

export const Icon = (prop: IconTypes) => {
        return (
            <svg viewBox={prop.viewBox ? prop.viewBox : "0 0 16 16"}
                 className={`icon icon-${prop.viewClass}`}>
                <use xlinkHref={`${symbol_defs}#icon-${prop.icon}`}/>
            </svg>
        );
}