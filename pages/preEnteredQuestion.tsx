import Layout from "@common/Layout";
import React, { ReactElement, useState } from "react";
import { Col, Row, Card, Form, Button, InputGroup } from "react-bootstrap";

const PreEnteredQuestion = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Col xl={4} md={10} className="m-auto">
          <div className="d-flex justify-content-between">
            <form action="#">
              <Row>
                <div className="mb-3">
                  <label htmlFor="roundName" className="form-label">
                    Round Name;
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="roundName"
                    placeholder="New Round"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="newQuestion" className="form-label">
                    Question;
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="newQuestion"
                    placeholder="New Question"
                  />
                </div>
                <Col lg={12}>
                  <div className="mb-3 pb-2">
                    <label
                      htmlFor="exampleFormControlTextarea"
                      className="form-label"
                    >
                      Answer
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea"
                      placeholder="Enter your Answer..."
                      rows={3}
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <Form.Label htmlFor="image-url">Image URL</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control id="image-url" aria-describedby="imageUrl" />
                    <InputGroup.Text id="imageUrl" className="p-0">
                      <Button variant="outline-info">ADD</Button>
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col lg={12}>
                  <Form.Group controlId="uploadImage" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
                <Col lg={12} className="d-flex justify-content-center">
                  <Button variant="primary">Create Round</Button>
                </Col>
              </Row>
            </form>
          </div>
        </Col>
      </div>
    </React.Fragment>
  );
};

PreEnteredQuestion.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default PreEnteredQuestion;
