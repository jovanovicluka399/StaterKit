import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GameStoreContext } from "../../../store/GameStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CodeModal = ({ show, handleClose, handleChangeRoomCode }) => {
  const gameStore = useContext(GameStoreContext);
  const viewQR = () => {
    handleClose();
  };
  return (
    <Modal
      className="admin-view qr-modal"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="md"
    >
      <Modal.Header closeButton>
        <div>
          Provide this link or QR code to your players so they can submit their
          answers via their device. Or they can go to HiroRat.com and enter{" "}
          {gameStore.roomCode} as the game code.
        </div>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center">
        <h3>HiroRat.com/{gameStore.roomCode}</h3>
        <Link to="/host/qr-code">
          <Button variant="light" onClick={viewQR}>
            <FontAwesomeIcon icon="qrcode" className="mr-1" /> QR Code
          </Button>
        </Link>
        <br />
        <Button variant="outline-primary" onClick={handleChangeRoomCode}>
          <FontAwesomeIcon icon="pencil-alt" className="mr-1" /> Change room
          code
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <div className="p-2">
          <Button type="submit" variant="primary" onClick={handleClose}>
            OK
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default CodeModal;
