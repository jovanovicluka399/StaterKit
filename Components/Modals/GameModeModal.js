import React, { useState } from "react";
import {
    Alert,
    Button,
    Form,
    Modal,
    ModalFooter,
    Nav,
    Tab,
} from "react-bootstrap";
import Link from "next/link";

const GameModeModal = ({ show, onHide }) => {
    const [disabled, setDisabled] = useState(false);
    return (
        <Modal
            show={show}
            onHide={onHide}
            id="staticBackdrop"
            centered
        >
            <Modal.Header id="staticBackdropLabel">
                <h5 className="modal-title">Game Mode</h5>
                <Button
                    className="btn-close"
                    type="button"
                    onClick={() => onHide()}
                    aria-label="Close"
                >
                </Button>
            </Modal.Header>

            <Modal.Body className="text-center px-4">
                <div>
                    <Tab.Container defaultActiveKey="nav-border-justified-classic">

                        <Nav as="ul" variant="tabs" className="nav-tabs-custom nav-primary nav-justified">
                            <Nav.Item as="li">
                                <Nav.Link eventKey="nav-border-justified-classic">
                                    Classic
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="nav-border-justified-pre-entered">
                                    Pre-Entered
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="nav-border-justified-automatic">
                                    Automatic
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className="text-muted pt-1">
                            <Tab.Pane eventKey="nav-border-justified-classic">
                                <Alert variant="primary">
                                    This is the original <strong>HiroRat</strong> method. Use your made-up
                                    questions the same way you always have: reading off a
                                    piece of paper, cocktail napkin, 1800's scroll, top of
                                    your head etc.. Just use HiroRat to accept the answers,
                                    mark, and update scoreboard.
                                </Alert>
                            </Tab.Pane>
                            <Tab.Pane eventKey="nav-border-justified-pre-entered">
                                <Alert variant="primary" className="alert-modern">
                                    <p className="mb-0">
                                        This option will allow you to create multiple rounds and
                                        pre-enter the questions (and answers) ahead of time. The
                                        scores will maintain intact as you switch between rounds.
                                        You can decide whether the player see's the question on
                                        their device, or keep all the power and just use it as a
                                        reference for yourself.
                                    </p>
                                </Alert>
                            </Tab.Pane>
                            <Tab.Pane eventKey="nav-border-justified-automatic">
                                <Alert variant="primary" className="alert-modern">
                                    <p className="mb-0">
                                        Use our database of thousands of questions across dozens
                                        of categories. Updated weekly.
                                    </p>
                                </Alert>
                                <div className="d-flex justify-content-around gap-3">
                                    <div className="w-50">
                                        <p>Select Catgory</p>
                                        <Form.Select
                                            className="form-select-md w-100"
                                            aria-label=".form-select-md"
                                            placeholder="Select..."
                                        >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                        </Form.Select>
                                    </div>
                                    <div className="w-50">
                                        <p>Select Number of Question</p>
                                        <Form.Select
                                            className="form-select-md w-100"
                                            aria-label=".form-select-md"
                                            placeholder={"Select..."}
                                        >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>

                    <div className="d-flex justify-content-around align-items-center mt-3 gap-3">
                        <div className="form-check form-switch form-switch-primary w-50 mt-2">
                            <Form.Check
                                type="checkbox"
                                role="switch"
                                id="SwitchCheck7"
                                checked={disabled}
                                onChange={(e) => {
                                    setDisabled(e.target.checked);
                                }}
                            />
                            <Form.Label htmlFor="SwitchCheck7">Enable Wagering</Form.Label>
                        </div>
                        <div className="w-50">
                            <Form.Select
                                className="form-select-md w-100"
                                aria-label=".form-select-md"
                            >
                                <option value={1} selected>
                                    1
                                </option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </Form.Select>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <ModalFooter className="p-4 pt-0">
                <div className="hstack m-0 gap-3 justify-content-center">
                    <Button
                        id="modal_schemes_setup"
                        className={!disabled ? "btn-outline-primary disabled" : ""}
                        onClick={() => onHide()}
                    >
                        Go to Schemes Setup
                    </Button>
                    <Link
                        href="#"
                        className="btn btn-outline-success"
                        onClick={() => onHide()}
                    >
                        <i className="ri-play-line me-1 align-middle"></i>
                        Start
                    </Link>
                </div>
            </ModalFooter>
        </Modal>
    );
};

export default GameModeModal;
