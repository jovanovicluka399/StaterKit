import React, { useState } from "react";
import {
  Button,
  Container
} from "react-bootstrap";
import GameModeModal from "../../Components/Modals/GameModeModal";

const GameMode = () => {
  const [modal_backdrop, setmodal_backdrop] = useState(false);
  function tog_backdrop() {
    const val = !modal_backdrop;
    setmodal_backdrop(val);
  }

  return (
    <React.Fragment>
      <Container className="d-flex justify-content-between align-items-center my-3 px-3">
        <h1 className="card-title mb-0">AUTOMATIC</h1>
        <Button
          onClick={() => tog_backdrop()}
          variant="primary"
          className="bg-gradient"
        >
          Automatic Mode
        </Button>
      </Container>
      <GameModeModal show={modal_backdrop} onHide={() => {
          tog_backdrop();
        }} />
    </React.Fragment>
  );
};

export default GameMode;
