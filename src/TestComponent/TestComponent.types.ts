import { ReactNode } from "react";

export type TestComponentProps = {
    isLoading: boolean;
    message?: string;
    children?: ReactNode;
};