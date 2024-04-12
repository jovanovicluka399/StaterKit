import React, { ReactElement, useState } from "react";
import Head from "next/head";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import Layout from "@common/Layout";

import ScoreTable from "../Components/Dashboard/scoreTable";
import GameMode from "../Components/Dashboard/GameMode";
import Question from "../Components/Dashboard/Question";

import { useDispatch, useSelector } from "react-redux";
import { setGameState } from "Components/slices/dashboard/reducer";

const Dashboard = () => {
  const { gameState } = useSelector((state: any) => ({
    gameState: state.Dashboard.gameState,
  }));

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="page-content">
        {gameState === "play" ? (
          <Container fluid>
            <Row className="h-100 d-flex align-items-center mt-1">
              <Col xl={6} lg={6}>
                <Question />
                {/* <div className="d-flex justify-content-center">
                  <button
                    className="button bg-danger"
                    onClick={() => dispatch(setGameState("stop"))}
                  >
                    <div className="sign">
                      <i className="bi bi-stop"></i>
                    </div>
                    <div className="text d-flex justify-content-center">
                      Stop
                    </div>
                  </button>
                </div> */}

                <div className="btn-game-play d-none d-md-block">
                  <div
                    className="btn-rounded shadow-lg btn btn-icon btn-lg p-2 btn-outline-danger btn-game-play-short"
                  >
                    <i className="mdi mdi-stop fs-22"></i>
                  </div>
                  <Button variant="outline-danger" onClick={() => dispatch(setGameState("stop"))} className="btn-game-play-long btn-lg rounded-pill fs-16">Stop</Button>
                </div>
              </Col>
              <Col xl={6} lg={6}>
                <ScoreTable />
              </Col>
            </Row>
          </Container>
        ) : (
          <Container>
            <Row>
              <GameMode />
            </Row>
            <Row className="h-100">
              <Col>
                {/* <div className="d-flex justify-content-center mb-5">
                  <Button
                    varient="outline-success"
                    onClick={() => dispatch(setGameState("play"))}
                  >
                    <div className="sign">
                      <i className="bi bi-play"></i>
                    </div>

                    <div className="text d-flex justify-content-center">
                      Play
                    </div>
                  </Button>
                </div> */}
                <div className="btn-game-play d-none d-md-block">
                  <div
                    className="btn-rounded shadow-lg btn btn-icon btn-lg p-2 btn-outline-success btn-game-play-short"
                  >
                    <i className="mdi mdi-play fs-22"></i>
                  </div>
                  <Button variant="outline-success" onClick={() => dispatch(setGameState("play"))} className="btn-game-play-long btn-lg rounded-pill fs-16">Play</Button>
                </div>

                <ScoreTable />
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </React.Fragment>
  );
};

Dashboard.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
