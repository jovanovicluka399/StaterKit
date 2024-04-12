import Layout from "@common/Layout";
import React, { ReactElement, useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";

const AddImage = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Col xl={8} className="m-auto add-image">
          <Row className="margin-top">
            <Col xl={6} md={10}>
              <Card className="card-animate">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="mb-0">
                          With Image mode enabled, you can add pictures to
                          specific questions. These pictures will appear on the
                          players' device as they arrive on that specific
                          question. You can either upload an image from your
                          device, or specify the url of an image hosted
                          elsewhere.
                        </p>
                      </div>
                    </div>
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-warning-subtle rounded fs-3">
                        <i className="bx bx-user-circle text-warning"></i>
                      </span>
                    </div>
                  </div>
                </Card.Body>
                <div className="animation-effect-6 text-warning opacity-25 fs-18">
                  <i className="bi bi-person"></i>
                </div>
                <div className="animation-effect-4 text-warning opacity-25 fs-18">
                  <i className="bi bi-person-fill"></i>
                </div>
                <div className="animation-effect-3 text-warning opacity-25 fs-18">
                  <i className="bi bi-people"></i>
                </div>
              </Card>
            </Col>
            <Col xl={6} md={10}>
              <Card className="card-animate">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div className="flex-grow-1">
                      <p className="text-uppercase fw-medium text-muted text-truncate fs-13">
                        Add Image For:
                      </p>
                      <Form.Group className="mb-3" controlId="selectQuestion">
                        <Form.Label>Select Question;</Form.Label>

                        <Form.Select>
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-success-subtle rounded fs-3">
                        <i className="bx bx-dollar-circle text-success"></i>
                      </span>
                    </div>
                  </div>
                </Card.Body>
                <div className="animation-effect-6 text-success opacity-25 fs-18">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div className="animation-effect-4 text-success opacity-25 fs-18">
                  <i className="bi bi-currency-pound"></i>
                </div>
                <div className="animation-effect-3 text-success opacity-25 fs-18">
                  <i className="bi bi-currency-euro"></i>
                </div>
              </Card>
            </Col>

            <Col xl={6} md={10}>
              <Card className="card-animate">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-info-subtle rounded fs-3">
                        <i className="bx bx-shopping-bag text-info"></i>
                      </span>
                    </div>
                    <div className="text-end flex-grow-1">
                      <p className="text-uppercase fw-medium text-muted text-truncate fs-13">
                        Upload Image or Enter URL
                      </p>
                      <Form.Label htmlFor="image-url">Image URL</Form.Label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          id="image-url"
                          aria-describedby="imageUrl"
                        />
                        <InputGroup.Text id="imageUrl" className="p-0">
                          <Button variant="outline-info">ADD</Button>
                        </InputGroup.Text>
                      </InputGroup>
                    </div>
                  </div>
                </Card.Body>
                <div className="animation-effect-6 text-info opacity-25 left fs-18">
                  <i className="bi bi-handbag"></i>
                </div>
                <div className="animation-effect-4 text-info opacity-25 left fs-18">
                  <i className="bi bi-shop"></i>
                </div>
                <div className="animation-effect-3 text-info opacity-25 left fs-18">
                  <i className="bi bi-bag-check"></i>
                </div>
              </Card>
            </Col>
            <Col xl={6} md={10}>
              <Card className="card-animate">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div className="flex-grow-1">
                      <p className="text-uppercase fw-medium text-muted text-truncate fs-13">
                        upload from device
                      </p>
                      <Form.Group controlId="uploadImage" className="mb-3">
                        <Form.Control type="file" />
                      </Form.Group>
                    </div>
                    <div className="avatar-sm flex-shrink-0">
                      <span className="avatar-title bg-warning-subtle rounded fs-3">
                        <i className="bx bx-user-circle text-warning"></i>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <Button>Upload</Button>
                  </div>
                </Card.Body>
                <div className="animation-effect-6 text-warning opacity-25 fs-18">
                  <i className="bi bi-person"></i>
                </div>
                <div className="animation-effect-4 text-warning opacity-25 fs-18">
                  <i className="bi bi-person-fill"></i>
                </div>
                <div className="animation-effect-3 text-warning opacity-25 fs-18">
                  <i className="bi bi-people"></i>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </div>
    </React.Fragment>
  );
};

AddImage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default AddImage;
