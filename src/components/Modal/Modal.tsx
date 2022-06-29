import * as React from "react";
import {Modal as ReactModal} from "react-bootstrap";

export type TestComponentProps = {
    showModal: boolean;
    headerContent: string;
    bodyContent: string;
};

export const Modal = (prop: TestComponentProps) => {
    console.log("Raj",prop.showModal, "showModal");
    return (
    <ReactModal show={prop.showModal} className="modal-container claim" centered={true}>
        <ReactModal.Header closeButton>
            <ReactModal.Title>{prop.headerContent}</ReactModal.Title>
        </ReactModal.Header>
        <ReactModal.Body>
            {prop.bodyContent}
        </ReactModal.Body>
    </ReactModal>
    )
}