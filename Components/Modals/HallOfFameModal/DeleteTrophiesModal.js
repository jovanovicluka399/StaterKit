import React from "react";
import { Modal, Button } from "react-bootstrap";

import "./style.scss";
import { hostAPI } from "../../../../api/host-api";

const DeleteTrophiesModal = ({ show, handleClose, setShowHallOfFame }) => {
  const deleteTrophies = () => {
    hostAPI
      .deleteTrophies()
      .then((res) => {})
      .then(() => {
        handleClose();
        setShowHallOfFame(false);
      });
  };
  return (
    <Modal
      className="admin-view hall-of-fame"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="md"
    >
      <br />
      <Modal.Body>
        <div className="alert alert-warning">
          Delete all your precious trophies?
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="p-2">
          <Button type="submit" variant="outline-info" className="px-5" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="outline-primary" className="px-5 ml-2" onClick={deleteTrophies}>
            OK
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTrophiesModal;
