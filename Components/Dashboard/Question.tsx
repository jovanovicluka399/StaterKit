import React, { useState } from 'react';
import { Button, Card, Col, Row, Form, Tab, ProgressBar, Nav } from "react-bootstrap";
import Image from "next/image";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import "swiper/css/effect-fade";
// import "swiper/css/effect-flip";
import { useSelector } from "react-redux";
import GameMode from "./GameMode";

// Import Gifs
import congrets from '@assets/images/Gifs/1103-confetti-outline.gif';

const Question = () => {
  const { gameMode } = useSelector((state: any) => ({
    gameMode: state.Dashboard.gameMode,
  }));
  const [activeTab, setactiveTab] = useState<number>(0);

  return (
    <React.Fragment>
      <Card className="mx-auto">
        <Card.Header className="d-flex justify-content-between p-0">
          <GameMode />
        </Card.Header>
        <Card.Body className="form-steps p-3">
          <Col className="w-100">
            {/* <Swiper
              effect={"flip"}
              grabCursor={true}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[EffectFlip, Pagination, Navigation, Autoplay]}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="mySwiper effect-flip-swiper rounded"
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  {" "}
                  <div
                    style={{ height: "300px" }}
                    className="img-fluid bg-gradient-1"
                  >
                    {" "}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    style={{ height: "300px" }}
                    className="img-fluid bg-gradient-2"
                  >
                    {" "}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    style={{ height: "300px" }}
                    className="img-fluid bg-gradient-3"
                  >
                    {" "}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    style={{ height: "300px" }}
                    className="img-fluid bg-gradient-4"
                  >
                    {" "}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div
                    style={{ height: "300px" }}
                    className="img-fluid bg-gradient-5"
                  >
                    {" "}
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="d-flex justify-content-center text-center mt-4">
              <p>
                Inputs are available<i className=" bx bx-help-circle"></i>
              </p>
            </div> */}

            <Form onSubmit={(e: any) => e.preventDefault()}>
              <Tab.Container activeKey={activeTab}>
                <div className="text-center pt-3 pb-4">
                  <h5 className='text-primary'>Question 1/10</h5>
                </div>
                <Tab.Content>
                  <Tab.Pane eventKey="0" id="questionnaire-1" role="tabpanel" aria-labelledby="questionnaire-1-tab">
                    <h5 className="fs-18 text-center">Who is the author of the famous novel "To Kill a Mockingbird"?</h5>
                    <ul className="list-group list-group-flush p-4">
                      <li className="list-group-item form-check">
                        <Form.Check type="checkbox" id="formCheck1" />
                        <Form.Label className="form-check-label" htmlFor="formCheck1">
                          J.D. Salinger
                        </Form.Label>
                      </li>
                      <li className="list-group-item form-check">
                        <Form.Check type="checkbox" id="formCheck2" />
                        <Form.Label className="form-check-label" htmlFor="formCheck2">
                          Mark Twain
                        </Form.Label>
                      </li>
                      <li className="list-group-item form-check">
                        <Form.Check type="checkbox" id="formCheck3" />
                        <Form.Label className="form-check-label" htmlFor="formCheck3">
                          Harper Lee
                        </Form.Label>
                      </li>
                      <li className="list-group-item form-check">
                        <Form.Check type="checkbox" id="formCheck4" />
                        <Form.Label className="form-check-label" htmlFor="formCheck4">
                          F. Scott Fitzgerald
                        </Form.Label>
                      </li>
                    </ul>
                    <div className="d-flex align-items-start gap-3">
                      <Button variant='outline-primary' className="btn-label right ms-auto nexttab nexttab" onClick={() => setactiveTab(1)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Next</Button>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="1" id="questionnaire-2" role="tabpanel" aria-labelledby="questionnaire-2-tab">
                    <h5 className="fs-18 text-center">What is the largest planet in our solar system?</h5>
                    <ul className="list-group list-group-flush p-4">
                      <li className="list-group-item form-check">
                        <Form.Check type="checkbox" id="formCheck1" />
                        <Form.Label className="form-check-label" htmlFor="formCheck1">
                          Mars
                        </Form.Label>
                      </li>
                      <li className="list-group-item form-check">
                        <Form.Check type="checkbox" id="formCheck2" />
                        <Form.Label className="form-check-label" htmlFor="formCheck2">
                          Jupiter
                        </Form.Label>
                      </li>
                      <li className="list-group-item form-check">
                        <Form.Check type="checkbox" id="formCheck3" />
                        <Form.Label className="form-check-label" htmlFor="formCheck3">
                          Venus
                        </Form.Label>
                      </li>
                      <li className="list-group-item form-check">
                        <Form.Check type="checkbox" id="formCheck4" />
                        <Form.Label className="form-check-label" htmlFor="formCheck4">
                          Saturn
                        </Form.Label>
                      </li>
                    </ul>
                    <div className="d-flex align-items-start gap-3">
                        <Button className="btn-link text-decoration-none btn-label previestab" onClick={() => setactiveTab(0)}><i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>Back</Button>
                        <Button variant='outline-primary' className="btn-label right ms-auto nexttab nexttab" onClick={() => setactiveTab(2)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Submit</Button>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="2" id="questionnaire-3" role="tabpanel" aria-labelledby="questionnaire-3-tab">
                    <div>
                      <div className="text-center">
                        <div className="mb-4">
                          <Image src={congrets} alt="" style={{ width: "120px", height: "120px" }} />
                        </div>
                        <h5>They have completed this round.</h5>
                        <p className="text-muted mb-4">Get ready for the next challenge!</p>
                      </div>
                    </div>
                  </Tab.Pane>

                </Tab.Content>
              </Tab.Container>
            </Form>
          </Col>

          <div className="btn-game-submit d-none d-md-block">
            <div
              className="btn-rounded shadow-lg btn btn-icon btn-lg p-2 btn-outline-info btn-game-submit-short"
            >
              <i className="mdi mdi-send-outline fs-22"></i>
            </div>
            <Button variant="outline-info" className="btn-game-submit-long btn-lg rounded-pill fs-16">Submit Response</Button>
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default Question;
