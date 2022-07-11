import React from "react";
import {Modal as ReactModal} from "react-bootstrap";
import {ModalTypes} from "./Modal.types";

export const Modal = (prop: ModalTypes) => {
    return (
        <ReactModal show={prop.show} className={'modal-container '+prop.className} centered={true} onHide={prop.handleClose}>
            <ReactModal.Header closeButton>
                <ReactModal.Title>{prop.headerContent}</ReactModal.Title>
            </ReactModal.Header>
            <ReactModal.Body>
                {prop.bodyContent}
            </ReactModal.Body>
        </ReactModal>
    );
};