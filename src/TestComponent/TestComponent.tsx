import React from "react";
import { Spinner } from "react-bootstrap";
import { TestComponentProps } from "./TestComponent.types";
import "./TestComponent.scss";

export const TestComponent = (prop: TestComponentProps) => {
    const Loader = () => {
        return (
            <div style={{ textAlign: "center" }}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                {!!prop.message && <p>{prop.message}</p>}
            </div>
        );
    };

    if (prop.isLoading) {
        return <Loader />;
    } else {
        return <React.Fragment>{prop.children}</React.Fragment>;
    }
};