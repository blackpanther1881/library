import { ReactNode } from "react";

export type InputComponentPropsTypes = {
    logo?: string;
    inputText:string;
    availableBalance?: string;
    className?:string;
    maxBalanceHandler?():void;
    inputValue:string
    inputChangeHandler?():void;
    validate:boolean;
    inputValueInDollar:string;
    readonly?:boolean;
    disable?:boolean;
};