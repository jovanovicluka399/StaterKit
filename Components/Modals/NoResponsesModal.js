import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GameStoreContext } from "../../../store/GameStore";

const NoResponsesModal = ({ show, handleClose }) => {
  const gameStore = useContext(GameStoreContext);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="md"
      className="admin-view"
    >
      <div className="tips-modal">        
        <Modal.Body>
          <div className="alert alert-success">
            Input boxes are enabled on player's devices
          </div>
          <div>
            {" "}
            It's time to start reading out your questions! As you are hosting
            the game, you will see who has submited an answer as well as the
            percentage of players that have submitted. When you feel like enough
            players have submitted, move on to the next question.{" "}
          </div>
          <div className="alert alert-info mt-3">
            Your Unique Player Link:
            <br />
            <b>HiroRat.com/{gameStore.roomCode}</b>
          </div>
          <div>
            The players can now see an input box to enter their response. They
            will navigate to the next question themselves as you speak. Ask as
            many questions as you want, there is no limit! (Adjustable in
            <Link to="/host/settings" className="settings-link">
              {" "}
              settings
            </Link>
            )
          </div>
          <div className="mt-3">
            Note: You will see who has submitted. But not the responses
            themselves.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="p-2">
            <Button type="submit" variant="outline-primary" className="px-5" onClick={handleClose}>
              OK
            </Button>
          </div>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default NoResponsesModal;
