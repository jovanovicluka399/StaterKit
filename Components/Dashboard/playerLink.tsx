import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const PlayerLink = () => {
  return (
    <React.Fragment>
      <Col xl={12}>
        <Card className="bg-info-subtle text-info border-0">
          <Card.Body>
            <Row className="gy-3">
              <div className="d-flex justify-content-between">
                <div className="w-25 btn btn-outline-secondary text-center">
                  Players
                </div>
                <div className="btn-label w-25 btn btn-outline-secondary">
                  <i className="bi bi-people label-icon align-middle fs-16 me-2"></i>{" "}
                  PlayerLink
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default PlayerLink;
