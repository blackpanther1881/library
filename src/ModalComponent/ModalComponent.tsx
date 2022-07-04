import React from "react";
import {Modal as ReactModal} from "react-bootstrap";
import {ModalComponentProps} from "./ModalComponent.types";

export const ModalComponent = (prop: ModalComponentProps) => {
    return (
        <ReactModal show={prop.show} className="modal-container" centered={true} onHide={prop.handleClose}>
            <ReactModal.Header closeButton>
                <ReactModal.Title>{prop.headerContent}</ReactModal.Title>
            </ReactModal.Header>
            <ReactModal.Body>
                {prop.bodyContent}
            </ReactModal.Body>
        </ReactModal>
    );
};