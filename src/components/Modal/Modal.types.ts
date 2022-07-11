export type ModalTypes = {
    show: boolean;
    className?:string;
    headerContent?: string;
    bodyContent?: String;
    handleClose():void;
};