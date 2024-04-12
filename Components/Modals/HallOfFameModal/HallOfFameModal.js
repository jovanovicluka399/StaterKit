import React, { useState, useEffect } from "react";
import { Modal, Button, Table } from "react-bootstrap";

import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteTrophiesModal from "./DeleteTrophiesModal";
import { hostAPI } from "../../../../api/host-api";

const HallOfFameModal = ({ show, handleClose, setShowHallOfFame }) => {
  const [players, setPlayers] = useState([]);

  const [showDeleteTrophies, setShowDeleteTrophies] = useState(false);

  const handleDeleteTrophies = () => setShowDeleteTrophies(true);

  const handleCloseDeleteTrophies = () => setShowDeleteTrophies(false);

  useEffect(() => {
    hostAPI
      .getTrophies()
      .then((res) => {
        if (res.trophies) {
          res.trophies.forEach((player) => {
            if (player.gold > 0) {
              player.gold = new Array(player.gold).fill(
                <FontAwesomeIcon
                  key={player._id}
                  icon="trophy"
                  className="fa-3x gold"
                />
              );
            }
            if (player.silver > 0) {
              player.silver = new Array(player.silver).fill(
                <FontAwesomeIcon
                  key={player._id}
                  icon="trophy"
                  className="fa-3x silver"
                />
              );
            }
            if (player.bronze > 0) {
              player.bronze = new Array(player.bronze).fill(
                <FontAwesomeIcon
                  key={player._id}
                  icon="trophy"
                  className="fa-3x"
                />
              );
            }
          });
          setPlayers(res.trophies);
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 430) {
          localStorage.removeItem("user");
          window.location.pathname = "/";
        } else {
          alert(err);
        }
      });
  }, []);

  return (
    <>
      <Modal
        className="admin-view qr-modal hall-of-fame"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
      >
        <Modal.Header closeButton>
          <div className="text-center w-100">Hall Of Fame</div>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <Table className="tiger w-100">
            <tbody>
              {players.map((player) => (
                <tr key={player._id}>
                  <td>{player.name}</td>
                  <td className="trophy">
                    {player.gold ? player.gold : null}
                    {player.silver ? player.silver : null}
                    {player.bronze ? player.bronze : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <br />
          <div className="w-100">
            <Button variant="outline-warning" className="w-100" onClick={handleDeleteTrophies}>
              Delete All
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="p-2">
            <Button type="submit" variant="outline-primary" className="px-5" onClick={handleClose}>
              OK
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <DeleteTrophiesModal
        show={showDeleteTrophies}
        handleClose={handleCloseDeleteTrophies}
        setShowHallOfFame={setShowHallOfFame}
      />
    </>
  );
};

export default HallOfFameModal;
