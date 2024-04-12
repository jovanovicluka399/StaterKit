import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const GoPremiumModal = ({ show, handleClose, ...props }) => {
  return (
    <>
      <Modal
        className="admin-view qr-modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
      >
        <Modal.Body className="d-flex flex-column align-items-center">
          <div className="alert alert-warning mx-3">{props.children}</div>
          <Link to="/host/premium">
            <Button variant="outline-info" onClick={handleClose}>
              Go Premium
            </Button>
          </Link>
        </Modal.Body>
        <Modal.Footer>
          <div className="p-2">
            <Button
              type="submit"
              variant="outline-primary"
              className="px-5"
              onClick={handleClose}
            >
              OK
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GoPremiumModal;
