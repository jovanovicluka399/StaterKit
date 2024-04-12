import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LearnMoreModal = ({ show, handleClose }) => {
  return (
    <Modal
      className="admin-view qr-modal d-flex flex-column align-items-center"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="md"
    >

      <Modal.Body className="d-flex flex-column align-items-center">
        <h3>QUICK START</h3>
        <div>
          <b>1)</b> Provide your unique link to the players (or HiroRat.com and code)
          <br />
          <b>2)</b> Click 'Game On'.
          <br />
          <b>3)</b> Start asking your questions.
          <br />
          <b>4)</b> Mark! And watch as the scoreboard updates automatically.  That's it!
          <br />
          <div className="text-center">
          <a className="text-center btn" variant="outline-secondary" href="/how-to-play.html">
            Go to Full Guide
            <FontAwesomeIcon
              icon={["far", "question-circle"]}
              className="ml-1" />
            </a>
            </div>
          <br />
        </div>
        <p className="text-primary">
          Questions or feedback? <a className="text-success" href="/contact-us">Contact Us!</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="p-2">
          <Button type="submit" variant="outline-info" className="px-5" onClick={handleClose}>
            OK
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default LearnMoreModal;
