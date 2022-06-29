import * as React from "react";
import {Modal as ReactModal} from "react-bootstrap";

export interface ModalProps {
    showModal: boolean;
    headerContent: string;
    bodyContent: string;
}

const Modal = (props: ModalProps) => {
    return (
    <ReactModal show={props.showModal} className="modal-container claim" centered={true}>
        <ReactModal.Header closeButton>
            <ReactModal.Title>{props.headerContent}</ReactModal.Title>
        </ReactModal.Header>
        <ReactModal.Body>
            {props.bodyContent}
        </ReactModal.Body>
    </ReactModal>
    )
}

export default Modal;
