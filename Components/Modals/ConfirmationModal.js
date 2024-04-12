import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmationModal = ({
  removePlayer,
  removePlayers,
  confirm,
  submitBtnText,
  cancelBtnText,
  ...props
}) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
      size="md"
      className="admin-view"
    >
      <div className="tips-modal">
      <Modal.Header>
          <button
            onClick={props.handleClose}
            type="button"
            className="bootbox-close-button close"
            style={{position: "absolute", top: "15px", right: "15px"}}
            aria-hidden="true"
          >
            ×
          </button>
        </Modal.Header>
        <Modal.Body className="text-primary">          
          <div>{props.children}</div>
        </Modal.Body>
        <Modal.Footer>
          <div className="p-2">
            <Button variant="outline-info" className="px-5" onClick={props.handleClose}>
              {cancelBtnText || "Cancel"}
            </Button>
            <Button type="submit" variant="outline-primary" className="px-5 ml-2" onClick={confirm}>
              {submitBtnText || "OK"}
            </Button>
          </div>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
