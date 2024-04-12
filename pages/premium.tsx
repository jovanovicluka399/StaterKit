import Layout from "@common/Layout";
import React, { ReactElement, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Premium = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container className="premium">
          <Row>
            <Col md={4} sm={10}>
              <div className="pricingTable red">
                <div className="pricingTable-header">
                  <i className="fa fa-adjust"></i>
                  <div className="price-value">
                    <h1 className="mt-2 text-dark">$0.00</h1>{" "}
                    <span className="month">per month</span>{" "}
                  </div>
                </div>
                <h3 className="heading mt-3">Basic</h3>
                <div className="pricing-content">
                  <ul>
                    <li> Up to 5 users/teams</li>
                    <li>Fixed Random Room code (ie: AFCY)</li>
                    <li>Supported by Ads (player & admin screen)</li>
                    {/* {gameStore.role === "pro" ? (
                      <li className="mt-4">
                        <Button className="subscriptionRed">
                          Premium Active
                        </Button>
                      </li>
                    ) : ( */}
                    <li className="mt-4">
                      <Button className="subscriptionRed" disabled>
                        Currently Selected
                      </Button>
                    </li>
                    {/* )} */}
                  </ul>
                </div>
              </div>
            </Col>

            <Col md={4} sm={10}>
              <div className="pricingTable green">
                <div className="pricingTable-header">
                  <i className="fa fa-briefcase"></i>
                  <div className="price-value">
                    {" "}
                    <h1 className="mt-2 text-dark">$15.00</h1>{" "}
                    <span className="month">per month</span>{" "}
                  </div>
                </div>
                <h3 className="heading mt-3">Pro</h3>
                <div className="pricing-content">
                  <ul>
                    <li> NO ADS</li>
                    <li>Unlimited Players/Teams!</li>
                    <li> Image Mode!</li>
                    <li> Pre-enter and store questions/answers!</li>
                    <li>
                      Custom Room Code (ie:
                      <b>JEFF</b>)
                    </li>
                    <li>Custom Branding</li>
                    <li>Custom link on players screen</li>
                    <li>More to come..</li>
                    {/* {gameStore.role === "pro" ? (
                      <li>
                        <Button className="subscriptionGreen" disabled>
                          Currently Selected
                        </Button>
                        {status === "CANCELED" && (
                          <Button className="subscriptionGreen" disabled>
                            Subscription Already Canceled
                          </Button>
                        )}
                        {status !== "CANCELED" &&
                          !gameStore.sponsoredByAdmin && (
                            <Button
                              onClick={() => setSHowCancelModal(true)}
                              className="subscriptionGreen"
                            >
                              Cancel Subscription
                            </Button>
                          )}
                      </li>
                    ) : ( */}
                    <li>
                      <Button
                        className="subscriptionGreen"
                        // onClick={handleCheckout}
                      >
                        Get Started
                      </Button>
                    </li>
                    {/* )} */}
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="pricingTable blue">
                <div className="pricingTable-header">
                  <i className="fa fa-diamond"></i>
                  <div className="price-value">
                    {" "}
                    <h1 className="mt-2 text-dark">$45.00+</h1>{" "}
                  </div>
                </div>
                <h3 className="heading mt-3">Corporate</h3>
                <div className="pricing-content">
                  <ul>
                    <li> All features from PRO</li>
                    <li>
                      {" "}
                      Manage <i>Multiple</i> Pro Host Accounts
                    </li>
                    <li>Admin Dashboard</li>
                    <li>Custom branding</li>
                    <li> Share questions across all hosts</li>
                    <li> Share settings across all hosts</li>
                    <li>Customizations</li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        target="_BLANK"
                        href="https://enterprise.HiroRat.com"
                      >
                        <Button className="subscriptionBlue">ENTERPRISE</Button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Premium.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Premium;
