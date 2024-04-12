import Layout from "@common/Layout";
// import AjaxDatatables from "Components/AjaxDataTables";
import React, { ReactElement, useState } from "react";
import { Button, Card, Col, Form, Nav, Row, Tab, Table } from "react-bootstrap";

const ViewRowData = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Col xl={8} className="m-auto">
          <Card className="margin-top">
            <Tab.Container defaultActiveKey="viewDataByAll">
              <Card.Header>
                <Nav
                  as="ul"
                  variant="pills"
                  className="nav-customs nav-danger"
                  role="tablist"
                >
                  <Nav.Item as="li">
                    <Nav.Link eventKey="viewDataByAll">All Data</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="viewDataByGroup">
                      Group By Response
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Tab.Content className="text-muted">
                  <Tab.Pane eventKey="viewDataByAll">
                    <Col lg={12}>
                      <div className="table-responsive table-card">
                        <Table className="align-middle table-nowrap table-striped-columns mb-0">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Player</th>
                              <th scope="col">Response</th>
                              <th scope="col">Player Scores</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>William Elmore</td>
                              <td>$24.05</td>
                              <td>$24.05</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  </Tab.Pane>
                  <Tab.Pane eventKey="viewDataByGroup">
                    <div className="table-responsive table-card">
                      <Table className="align-middle table-nowrap table-striped-columns mb-0">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Player</th>
                            <th scope="col">Response</th>
                            <th scope="col">Mark</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>William Elmore</td>
                            <td>$24.05</td>
                            <td>$24.05</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Tab.Container>
          </Card>
        </Col>
      </div>
    </React.Fragment>
  );
};

ViewRowData.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default ViewRowData;
