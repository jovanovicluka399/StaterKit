import Layout from "@common/Layout";
import React, { ReactElement, useState } from "react";

import {
  Card,
  Col,
  Row,
  Tab,
  Nav,
  Form,
  Button,
  Container,
  InputGroup,
  Table,
  ButtonGroup
} from "react-bootstrap";
// import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Card className="mt-4">
            <Card.Body>
              <Tab.Container defaultActiveKey="custom-v-pills-gameSettings">
                <Nav as="ul" variant="tabs" className="nav-justified mb-3 p-4 pb-0" role="tablist">
                  <Nav.Item as="li">
                    <Nav.Link eventKey="custom-v-pills-gameSettings">
                      <i className="ri-settings-3-line align-middle me-1"></i> Game Settings
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="custom-v-pills-hostProfile">
                      <i className="ri-user-2-line me-1 align-middle"></i> Host Profile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="custom-v-pills-proGameOptions">
                      <i className="ri-list-settings-line align-middle me-2"></i>Pro Game Options
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="custom-v-pills-customBranding">
                      <i className="ri-settings-6-line align-middle me-2"></i>Custom Branding
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="custom-v-pills-liveView">
                      <i className="bi-laptop align-middle me-2"></i>Live View
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="custom-v-pills-api">
                      <i className="bi-repeat align-middle me-2"></i>API's
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="custom-v-pills-questions">
                      <i className="bi-question-circle align-middle me-2"></i>Questions
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="custom-v-pills-wagersSchemes">
                      <i className="ri-vip-diamond-line align-middle me-2"></i>Wagers Schemes
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                {/* Tab content */}
                <Tab.Content className="text-muted">
                  {/* Tab content for game settings */}
                  <Tab.Pane
                    eventKey="custom-v-pills-gameSettings"
                    className="p-4"
                  >
                    <Container>
                      <Row>
                        <Col sm={5}>
                          <Form.Group
                            as={Row}
                            className="mb-2 d-flex justify-content-center"
                            controlId="playerLimit"
                          >
                            <Form.Label column sm={6}>
                              Player Limit
                            </Form.Label>
                            <Col sm={6}>
                              <Form.Select>
                                <option value="1" selected>
                                  One
                                </option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="5" selected>
                                  Five
                                </option>
                              </Form.Select>
                            </Col>
                          </Form.Group>

                          <Form.Group
                            as={Row}
                            className="pt-3 pb-2 d-flex justify-content-center"
                          >
                            <Col sm={6}>
                              <Form.Label htmlFor="enableHalfPoint">
                                Enable Half Point
                              </Form.Label>
                            </Col>
                            <Col sm={6}>
                              <Form.Check
                                type="switch"
                                role="switch"
                                id="enableHalfPoint"
                                className="mb-2"
                                defaultChecked
                              />
                            </Col>
                          </Form.Group>

                          <Form.Group
                            as={Row}
                            className="pt-3 pb-2 d-flex justify-content-center"
                          >
                            <Col sm={6}>
                              <Form.Label htmlFor="showAnswerSheet">
                                Show Answer Sheet
                              </Form.Label>
                            </Col>
                            <Col sm={6}>
                              <Form.Check
                                type="switch"
                                role="switch"
                                id="showAnswerSheet"
                                className="mb-2"
                                defaultChecked
                              />
                            </Col>
                          </Form.Group>

                          <Form.Group
                            as={Row}
                            className="pt-3 pb-2 d-flex justify-content-center"
                          >
                            <Col sm={6}>
                              <Form.Label htmlFor="showCorrectAnswerstoPlayer">
                                Show Correct Answers to Player
                              </Form.Label>
                            </Col>
                            <Col sm={6}>
                              <Form.Check
                                type="switch"
                                role="switch"
                                id="showCorrectAnswerstoPlayer"
                                className="mb-2"
                              />
                            </Col>
                          </Form.Group>
                        </Col>
                        <Col sm={2}></Col>
                        <Col sm={5}>
                          <Form.Group
                            as={Row}
                            className="pt-3 pb-2 d-flex justify-content-center"
                          >
                            <Col sm={6}>
                              <Form.Label htmlFor="showPlayerScore">
                                Show Player Score
                              </Form.Label>
                            </Col>
                            <Col sm={6}>
                              <Form.Check
                                type="switch"
                                role="switch"
                                id="showPlayerScore"
                                className="mb-2"
                              />
                            </Col>
                          </Form.Group>

                          <Form.Group
                            as={Row}
                            className="pt-3 pb-2 d-flex justify-content-center"
                          >
                            <Col sm={6}>
                              <Form.Label htmlFor="enableHelperTips">
                                Enable Helper Tips
                              </Form.Label>
                            </Col>
                            <Col sm={6}>
                              <Form.Check
                                type="switch"
                                role="switch"
                                id="enableHelperTips"
                                className="mb-2"
                                defaultChecked
                              />
                            </Col>
                          </Form.Group>

                          <Form.Group
                            as={Row}
                            className="mb-2 d-flex justify-content-center"
                            controlId="questionPerRound"
                          >
                            <Form.Label column sm="6">
                              Question Per Round
                            </Form.Label>
                            <Col sm={6}>
                              <Form.Select>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="5" selected>
                                  Infinit &#x221E;
                                </option>
                              </Form.Select>
                            </Col>
                          </Form.Group>

                          <Form.Group
                            as={Row}
                            className="mb-3 d-flex justify-content-center"
                            controlId="scoringInterval"
                          >
                            <Form.Label column sm="6">
                              Scoring Interval
                            </Form.Label>
                            <Col sm={6}>
                              <Form.Select>
                                <option value="1" selected>
                                  1
                                </option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="5">4</option>
                              </Form.Select>
                            </Col>
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="d-flex mt-4 gap-3 justify-content-center">
                        <Button variant="outline-primary">
                          Save
                        </Button>
                        <Button variant="outline-danger">
                          Cancel
                        </Button>
                      </div>
                    </Container>
                  </Tab.Pane>

                  <Tab.Pane eventKey="custom-v-pills-hostProfile">
                    <Container className="p-4 text-center">
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                            Admin Email
                          </InputGroup.Text>
                          <Form.Control id="adminEmail" type="email" />
                        </InputGroup>

                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                          Current Password
                          </InputGroup.Text>
                          <Form.Control type="password" />
                        </InputGroup>

                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                          New Password
                          </InputGroup.Text>
                          <Form.Control type="password" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                          Confirm New Password
                          </InputGroup.Text>
                          <Form.Control type="password" />
                        </InputGroup>

                        <Button variant="outline-primary">
                          Change Password
                        </Button>
                    </Container>                   
                  </Tab.Pane>

                  <Tab.Pane eventKey="custom-v-pills-proGameOptions" className="p-4">
                    <Container>
                      <div className="text-center">
                        <Button variant="outline-success">
                          Upgrade to Pro
                        </Button>
                      </div>                      

                      <Row className="mt-4">
                        <Col sm={5}>
                          <Form.Group
                            as={Row}
                            className="mb-3 d-flex justify-content-center align-items-center"
                          >
                            <Form.Label column sm="6" htmlFor="adjustScoreByResponse" className="text-left">
                              Adjust Score By Response
                            </Form.Label>
                            <Col sm={6}>
                              <Form.Check
                                type="switch"
                                role="switch"
                                id="adjustScoreByResponse"
                              />
                            </Col>                            
                          </Form.Group>
                          <Form.Group
                            as={Row}
                            className="mb-3 d-flex justify-content-center align-items-center"
                          >
                            <Form.Label column sm="6" htmlFor="showQuestionstoPlayer" className="text-left">
                              Show Questions to Player
                            </Form.Label>
                            <Col sm={6}>
                              <Form.Check
                                type="switch"
                                role="switch"
                                id="showQuestionstoPlayer"
                                className="mb-2"
                              />
                            </Col>                            
                          </Form.Group>
                          <Form.Group
                          className="mb-3 d-flex justify-content-center align-items-center"
                            as={Row}
                          >
                            <Form.Label column sm="6" htmlFor="showAnswerSheet" className="text-left">
                              Show Answer Sheet
                            </Form.Label>
                            <Col sm={6}>
                              <Form.Check
                                type="switch"
                                role="switch"
                                id="showAnswerSheet"
                                className="mb-2"
                                defaultChecked
                              />
                            </Col>                            
                          </Form.Group>
                        </Col>
                        <Col sm={2}></Col>
                        <Col sm={5}>
                          <Form.Group
                          className="mb-3 d-flex justify-content-center align-items-center"
                            as={Row}
                          >
                            <Form.Label column sm="6" htmlFor="displayCorrectAnswer" className="text-left">
                              Display Correct Answer
                            </Form.Label>
                            <Col sm={6}>
                              <Form.Check
                                type="switch"
                                role="switch"
                                id="displayCorrectAnswer"
                                className="mb-2"
                              />
                            </Col>                            
                          </Form.Group>
                          <Form.Group
                          className="mb-3 d-flex justify-content-center align-items-center"
                            as={Row}
                          >
                            <Form.Label column sm="6" htmlFor="adjustScoreByQuestion" className="text-left">
                              Adjust Score By Question
                            </Form.Label>
                            <Col sm="6">
                              <Form.Check
                                type="switch"
                                role="switch"
                                id="adjustScoreByQuestion"
                              />
                            </Col>                            
                          </Form.Group>
                          <InputGroup className="">
                            <InputGroup.Text>
                              Max Point Value
                            </InputGroup.Text>
                            <Form.Control type="number" id="maxPointValue" />
                          </InputGroup>
                        </Col>
                      </Row>

                      <div className="mt-2 mb-4">                        
                        <Form className="gap-3 d-flex justify-content-center">
                          <Form.Label>
                            What to show during 'PAUSE' mode?
                          </Form.Label>
                          <Form.Check
                            type="radio"
                            name="pauseMode"
                            id="scoreTable"
                            label="Score Table"
                          />
                          <Form.Check
                            type="radio"
                            id="gameMessage"
                            name="pauseMode"
                            label="Paused Game Message"
                          />
                        </Form>
                      </div>
                      <div className="d-flex justify-content-center gap-3">
                        <Button variant="outline-primary">
                          Save
                        </Button>
                        <Button variant="outline-danger">
                          Cancel
                        </Button>
                      </div>
                    </Container>
                  </Tab.Pane>

                  <Tab.Pane eventKey="custom-v-pills-customBranding" className="p-4">
                    <Container className="text-center">
                      <Button variant="outline-success">
                        Upgrade to Pro
                      </Button>

                      <div className="m-4 d-flex justify-content-center align-items-center gap-3">
                        <div>Room Code HiroRat.com/PRZM</div>
                        <ButtonGroup aria-label="Room code">
                          <Button variant="soft-info"><i className="ri ri-edit-line align-middle"></i> Change Room Code</Button>
                          <Button variant="soft-secondary"><i className="ri ri-qr-code-line align-middle"></i> View QR Code</Button>
                        </ButtonGroup>
                      </div>
                      <div>
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                            Custom Room Header
                          </InputGroup.Text>
                          <Form.Control id="customRoomHeader" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                            Custom URL
                          </InputGroup.Text>
                          <Form.Control id="customRoomHeaderUrl" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                            Custom URL Title
                          </InputGroup.Text>
                          <Form.Control id="customUrlTitle" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                            Round Message
                          </InputGroup.Text>
                          <Form.Control id="roundCompleteMessage" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                            Zoom URL
                          </InputGroup.Text>
                          <Form.Control id="zoomUrl" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroup.Text>
                            Twitch URL
                          </InputGroup.Text>
                          <Form.Control id="twitchUrl" />
                        </InputGroup>
                      </div>
                      <div className="d-flex justify-content-center gap-3">
                        <Button variant="outline-primary">
                          Save
                        </Button>
                        <Button variant="outline-danger">
                          Cancel
                        </Button>
                      </div>
                    </Container>
                  </Tab.Pane>

                  <Tab.Pane eventKey="custom-v-pills-liveView" className="p-4">
                    <Container className="text-center">
                      <Form.Group
                        className="mb-4 d-flex justify-content-center gap-3"
                      >
                        <Form.Label htmlFor="scoreBoard">
                          Enable the Live Scoreboard Viewer! <br /><em className="text-secondary mt-2">(formally known as Twitch Integration)</em>
                        </Form.Label>
                        <Form.Check
                          type="switch"
                          role="switch"
                          id="scoreBoard"
                        />
                      </Form.Group>
                      <Button variant="outline-primary">
                        Upgrade to Pro
                      </Button>
                    </Container>
                  </Tab.Pane>

                  <Tab.Pane eventKey="custom-v-pills-api" className="p-4">
                    <Container className="text-center">
                      <h5 className="mb-4">
                        Use the following link to access a Row JSON dump of all the players names, response and their scores.
                      </h5>
                      <Form.Group
                        className="mb-2 d-flex justify-content-center gap-3"
                      >
                        <Form.Label htmlFor="adjustScoreByResponse">
                          API Integration
                        </Form.Label>
                        <Form.Check
                          type="switch"
                          role="switch"
                          id="apiIntegration"
                        />
                      </Form.Group>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Game Info:</InputGroup.Text>
                        <Form.Control id="gameInfo" />
                        <InputGroup.Text className="p-0">
                          <Button variant="outline-primary">
                            <i className="ri ri-clipboard-line fs-20"></i>
                          </Button>
                        </InputGroup.Text>
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>Players List:</InputGroup.Text>
                        <Form.Control id="playersList" />
                        <InputGroup.Text className="p-0">
                          <Button variant="outline-primary">
                            <i className="ri ri-clipboard-line fs-20"></i>
                          </Button>
                        </InputGroup.Text>
                      </InputGroup>
                      <Button variant="primary">Generate New URL</Button>
                    </Container>
                  </Tab.Pane>

                  <Tab.Pane eventKey="custom-v-pills-questions" className="p-4">
                    <h5 className="text-center mb-4">Questions</h5>

                    <div className="alert alert-secondary">
                      Mode Currently Selected:{" "}
                      {/* {roundMode && roundMode.toString().toUpperCase()} */}
                    </div>

                    <div className="alert alert-secondary">
                      HiroRat does not require that you enter questions. If
                      you already have your questions written and are ready to
                      go, just head back to the{" "}
                      {/* <Link to="/dashboard">Dashboard</Link>and click{" "} */}
                      <span className="badge badge-success">GAME ON</span> in{" "}
                      Classic Mode .
                    </div>

                    <div className="alert alert-secondary">
                      If you would like to re-create rounds and enter your
                      questions/answers ahead of time, select Pre-Entered mode
                      from the game{" "}
                      {/* <Link to="/dashboard">Dashboard</Link>. With pre-entered */}
                      mode, you can create round titles, and add questions and
                      answers for each round. You can choose to show the
                      questions to the players on their device, or simply use
                      them as your own reference as you are hosting the game.{" "}
                      <br />
                      {/* <Link to="/pre-entered" className="btn btn-primary">
                          Go To Questions Setup
                        </Link> */}
                    </div>

                    <div className="alert alert-secondary">
                      The third option HiroRat offers is Automatic mode.
                      With automatic mode enabled, you will be provided with
                      questions sourced from the OpenTB Trivia Database. There
                      are thousands of questions, and dozens of categories to
                      choose from. To use these questions, choose "Automatic"
                      {/* from the <Link to="/dashboard">Dashboard</Link>. */}
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="custom-v-pills-wagersSchemes" className="p-4">
                    <div className="text-center mb-4">
                      <h5>Wagers Schemes</h5>
                    </div>
                    <Row className="d-flex justify-content-center">
                      <Col xl={8}>
                        <div className="table-responsive mt-4 mt-xl-0">
                          <Table className="table-hover table-striped align-middle table-nowrap mb-2">
                            <thead>
                              <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Invoice</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="fw-medium">01</td>
                                <td>Basic Plan</td>
                                <td>$860</td>
                                <td>Nov 22, 2021</td>
                                <td>
                                  <i className="ri-checkbox-circle-line align-middle text-success"></i>{" "}
                                  Subscribed
                                </td>
                                <td>
                                  <div className="hstack gap-3 flex-wrap">
                                    <a
                                      href="#"
                                      className="link-primary fs-15"
                                    >
                                      <i className="ri-edit-2-line"></i>
                                    </a>
                                    <a href="#" className="link-danger fs-15">
                                      <i className="ri-delete-bin-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="fw-medium">02</td>
                                <td>Premium Plan</td>
                                <td>$1200</td>
                                <td>Nov 10, 2021</td>
                                <td>
                                  <i className="ri-close-circle-line align-middle text-danger"></i>{" "}
                                  Unsubscribed
                                </td>
                                <td>
                                  <div className="hstack gap-3 flex-wrap">
                                    <a
                                      href="#"
                                      className="link-primary fs-15"
                                    >
                                      <i className="ri-edit-2-line"></i>
                                    </a>
                                    <a href="#" className="link-danger fs-15">
                                      <i className="ri-delete-bin-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="fw-medium">03</td>
                                <td>Basic Plan</td>
                                <td>$860</td>
                                <td>Nov 19, 2021</td>
                                <td>
                                  <i className="ri-checkbox-circle-line align-middle text-success"></i>{" "}
                                  Subscribed
                                </td>
                                <td>
                                  <div className="hstack gap-3 flex-wrap">
                                    <a
                                      href="#"
                                      className="link-primary fs-15"
                                    >
                                      <i className="ri-edit-2-line"></i>
                                    </a>
                                    <a href="#" className="link-danger fs-15">
                                      <i className="ri-delete-bin-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="fw-medium">04</td>
                                <td>Corporate Plan</td>
                                <td>$1599</td>
                                <td>Nov 22, 2021</td>
                                <td>
                                  <i className="ri-checkbox-circle-line align-middle text-success"></i>{" "}
                                  Subscribed
                                </td>
                                <td>
                                  <div className="hstack gap-3 flex-wrap">
                                    <a
                                      href="#"
                                      className="link-primary fs-15"
                                    >
                                      <i className="ri-edit-2-line"></i>
                                    </a>
                                    <a href="#" className="link-danger fs-15">
                                      <i className="ri-delete-bin-line"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

Settings.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Settings;
