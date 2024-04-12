import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { authHostAPI } from "../../../api/authHost-api";

const ChangePassword = ({ show, handleClose }) => {
  const [values, setValues] = useState({});
  const [wrongPassword, setWrongPassword] = useState(false);
  const [shortPassword, setShortPassword] = useState(false);
  const [availablePass, setAvailablePass] = useState(false);
  const [wrongConfirmPassword, setWrongConfirmPassword] = useState(false);

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const updatePassword = () => {
    setWrongPassword(false);
    setWrongConfirmPassword(false);
    setShortPassword(false);
    setAvailablePass(false);
    if (values.newPassword) {
      if (values.newPassword.length >= 8) {
        if (values.newPassword === values.confirmPassword) {
          authHostAPI
            .updatePass(
              values.password,
              values.newPassword,
              values.confirmPassword
            )
            .then((res) => {
              setValues({});
              handleClose();
            })
            .catch((err) => {
              if (err.response.status === 403) {
                setWrongPassword(true);
              }
            });
        } else {
          setWrongConfirmPassword(true);
        }
      } else {
        setShortPassword(true);
      }
    } else {
      setAvailablePass(true);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="md"
      className="admin-view"
    >
      <Modal.Header closeButton>
        <h2>Change Password</h2>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updatePassword}>
          <Form.Group>
            <Form.Label>Current password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              control="input"
              value={values.password || ""}
              onChange={handleChange}
              required
            />
            {wrongPassword ? <p className="error">Wrong password</p> : null}
          </Form.Group>

          <Form.Group>
            <Form.Label>New password</Form.Label>
            <Form.Control
              name="newPassword"
              onChange={handleChange}
              type="password"
              control="input"
              value={values.newPassword || ""}
              required
            />
            {availablePass ? (
              <p className="error">New password is required</p>
            ) : null}
            {shortPassword ? (
              <p className="error">Password must be 8 or more characters</p>
            ) : null}
          </Form.Group>

          <Form.Group>
            <Form.Label>Confirm new password</Form.Label>
            <Form.Control
              name="confirmPassword"
              onChange={handleChange}
              type="password"
              control="input"
              value={values.confirmPassword || ""}
              required
            />
            {wrongConfirmPassword ? (
              <p className="error">
                Your password and confirmation password do not match
              </p>
            ) : null}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="p-2">
          <Button type="submit" variant="primary" onClick={updatePassword}>
            OK
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ChangePassword;
