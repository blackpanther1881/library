
export interface CommonProps {
    coinImageUrl:string;
    coinDenom:string
    balance: {
        amount:string;
    }
}

export type InputDropdownTypes = {
    dropDownHandler?(): void;
    token: {
        icon:string
        name:string
        denom:string
    };
    availableBalance?: string;
    className?:string;
    maxBalanceHandler?():void;
    inputValue?:string
    inputChangeHandler?():void;
    validate?:boolean;
    inputValueInDollar?:string;
    readonly?:boolean;
    disable?:boolean;
    dropDownList:Array<CommonProps>;
    searchHandler?():void;
};