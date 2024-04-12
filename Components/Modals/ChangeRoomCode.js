import React, { useContext, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authHostAPI } from "../../../api/authHost-api";
import { GameStoreContext } from "../../../store/GameStore";

const ChangeRoomCode = ({ show, handleClose }) => {
  const gameStore = useContext(GameStoreContext);
  const [values, setValues] = useState({});
  const [codeUpdatedModal, setCodeUpdatedModal] = useState(false);
  const [codeError, setCodeError] = useState("");

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const changeRoomCode = (e) => {
    e.preventDefault();
    setCodeUpdatedModal(false);
    setCodeError("");
    if (!/^[a-zA-Z0-9_.-]*$/.test(values.roomCode)) {
      setCodeError("Invalid symbols!");
      return;
    }
    if (!values.roomCode) {
      setCodeError("New room code is required!");
      return;
    }
    if (values.roomCode.length < 4 || values.roomCode.length > 10) {
      setCodeError("Room code must be between 4 and 10 characters");
      return;
    }

    authHostAPI
      .changeRoomCode(values.roomCode)
      .then((res) => {
        handleClose();
        gameStore.roomCode = res.roomCode;
      })
      .then(() => {
        setCodeUpdatedModal(true);
      })
      .catch((err) => {
        if (err.response.status === 422) {
          setCodeError("Room code already exists!");
        } else if (err.response.status === 406) {
          setCodeError("Room code prohibited!");
        }
      });
  };

  const closeCodeUpdateModal = () => {
    setCodeUpdatedModal(false);
  };

  return (
    <>
      {gameStore.role === "pro" ? (
        <Modal
          className="admin-view qr-modal"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="md"
        >
          <Modal.Header closeButton>
            <div>Change Room Code</div>
          </Modal.Header>
          {!gameStore.sponsoredByAdmin ? (
            <>
              <Modal.Body className="d-flex flex-column align-items-center">
                <Form className="w-100" onSubmit={(e) => changeRoomCode(e)}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="roomCode"
                      control="input"
                      onChange={handleChange}
                      required
                      placeholder={gameStore.roomCode}
                    />
                  </Form.Group>
                  {codeError && <p className="error">{codeError}</p>}
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <div className="p-2">
                  <Button
                    type="button"
                    variant="primary"
                    onClick={(e) => changeRoomCode(e)}
                  >
                    Change
                  </Button>
                </div>
              </Modal.Footer>
            </>
          ) : (
            <Modal.Body className="d-flex flex-column align-items-center">
              <div className="alert alert-warning mx-3">
                Sorry you can't change room code! Ask your admin to change it!
              </div>
            </Modal.Body>
          )}
        </Modal>
      ) : (
        <Modal
          className="admin-view qr-modal"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="md"
        >
          <Modal.Body className="d-flex flex-column align-items-center">
            <div className="alert alert-warning mx-3">
              Sorry you must have a premium account to change your room code
            </div>
            <Link to="/host/premium">
              <Button variant="outline-info" onClick={handleClose}>
                Go Premium
              </Button>
            </Link>
          </Modal.Body>
          <Modal.Footer>
            <div className="p-2">
              <Button type="submit" variant="outline-primary" className="px-5" onClick={handleClose}>
                OK
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
      {codeUpdatedModal ? (
        <Modal
          className="admin-view qr-modal"
          show={codeUpdatedModal}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="md"
        >
          <Modal.Body className="d-flex flex-column align-items-center">
            <div className="mx-3">Room code Updated!</div>
          </Modal.Body>
          <Modal.Footer>
            <div className="p-2">
              <Button
                type="submit"
                variant="primary"
                onClick={closeCodeUpdateModal}
              >
                OK
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
};

export default ChangeRoomCode;
