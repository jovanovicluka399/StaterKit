import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { authHostAPI } from "../../../api/authHost-api";
import ReactLoading from "react-loading";

const CancelSubscriptionModal = ({ show, handleClose }) => {
  const [reason, setReason] = useState(String);
  const [submiting, setSubmiting] = useState(false);
  const [noReason, setNoReason] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const cancelSubscription = () => {
    setNoReason(false);
    if (reason.length > 0) {
      setSubmiting(true);
      setDisabled(true);
      authHostAPI
        .cancelSubscription(reason)
        .then((res) => {
          handleClose();
          setSubmiting(false);
          window.location.reload();
        })
        .catch((err) => {
          alert(err);
          setSubmiting(false);
          setDisabled(false);
        });
    } else {
      setNoReason(true);
    }
  };

  return (
    <Modal
      className="admin-view qr-modal d-flex flex-column align-items-center"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="md"
    >
      <Modal.Header closeButton>
        <h3 className="tiger">Cancel Premium Service</h3>
      </Modal.Header>

      <Modal.Body className="d-flex flex-column align-items-center">
        <p>
          Oh no, cancelling already? No problem, lets just make you jump through
          a thousand hoops and convince you not to cancel, and make the cancel
          button hard to find. Just kidding, but we do appreciate feedback of
          any kind.
        </p>
        <Form.Control
          required
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason"
        ></Form.Control>
        {noReason ? (
          <p className="text-danger mt-2">Please leave your comment!</p>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <div className="p-2">
          <Button
            type="submit"
            variant="primary"
            className="cancel-subscription-btn"
            onClick={cancelSubscription}
            disabled={disabled}
          >
            {submiting ? (
              <ReactLoading
                type="spin"
                color="#fbcabc"
                height={"15px"}
                width={"15px"}
              />
            ) : null}
            <span>Cancel Subscription</span>
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default CancelSubscriptionModal;
