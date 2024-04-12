import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Button,
  OverlayTrigger,
  Tooltip,
  Modal,
} from "react-bootstrap";
import Tip from "./Tip";
import Select from "react-select";
import "../../../../components/FontAwesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { hostAPI } from "../../../../api/host-api";
import { GameStoreContext } from "../../../../store/GameStore";
import { observer } from "mobx-react";
import TipModal from "../../Modals/TipModal";
import { authHostAPI } from "../../../../api/authHost-api";

import "./style.scss";
import AdSense from "../../../../components/AdSense/AdSense";

const MarkAnswerModal = observer(({setLoading }) => {
  const gameStore = useContext(GameStoreContext);
  const [showTip, setTip] = useState(true);
  const [exposePlayer, setExposePlayers] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [showTipsModal, setTipsModal] = useState(false);
  const [questionNum, setQuestionNum] = useState(1);
  const [images, setImages] = useState([]);
  const [image, setImage] = useState("");
  const [options, setOptions] = useState([]);
  const [point, setPoint] = useState({});
  const [currentRound, setCurrentRound] = useState([]);
  const [adsenseKey, setAdsenseKey] = useState(1);

  useEffect(() => {
    let imageToSet;
    for (let i = 0; i < images.length; i++) {
      if (images[i].orderNum === questionNum) {
        imageToSet = images[i].url;
      }
    }
    setImage(imageToSet);
    // setLoading(false);
  }, [images, questionNum, setLoading]);

  // change key for adSense when host switch questions
  useEffect(() => {
    setAdsenseKey(questionNum);
  }, [questionNum]);

  // setting point with which answer was marked
  useEffect(() => {
    if (
      gameStore.adjustByQuestion &&
      !gameStore.wagerMode &&
      gameStore.round.length &&
      gameStore.round[questionNum - 1] &&
      gameStore.round[questionNum - 1].markedPoint &&
      options.length
    ) {
      setPoint(options[gameStore.round[questionNum - 1].markedPoint - 1]);
    }
  }, [
    questionNum,
    gameStore.round,
    options,
    gameStore.adjustByQuestion,
    gameStore.wagerMode,
  ]);

  useEffect(() => {
    let optionsToSet = [];
    for (let i = 1; i <= gameStore.maxPointValue; i++) {
      optionsToSet.push({ value: i, label: i });
    }
    setOptions(optionsToSet);
  }, [gameStore.maxPointValue]);

  useEffect(() => {
    if (gameStore.scoringInterval <= gameStore.maxPointValue) {
      setPoint({
        value: gameStore.scoringInterval,
        label: gameStore.scoringInterval,
      });
    } else {
      setPoint({
        value: 1,
        label: 1,
      });
    }
  }, [gameStore.scoringInterval, gameStore.maxPointValue]);

  useEffect(() => {
    if (gameStore.role !== "guest" && gameStore.imageMode) {
      authHostAPI
        .getImages()
        .then((res) => {
          setImages(res.images);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [gameStore.imageMode, gameStore.role]);

  useEffect(() => {
    if (
      gameStore.roundMode === "pre-entered" ||
      gameStore.roundMode === "automatic"
    ) {
      authHostAPI
        .getCurrentRound()
        .then((res) => {
          setCurrentRound(res.currentRound.preEnteredQuestions);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [gameStore.roundMode]);

  const closeTip = () => {
    setTip(false);
  };
  let tip = null;
  if (showTip) {
    tip = <Tip closeTip={closeTip} />;
  }

  const handleNoAnswers = () => {
    setModalContent(
      <div>
        It would appear no players have submitted responses for this question.
        Maybe you want to stop marking? Or maybe you stopped game-play too
        early. <br />
        <br />
        You can always resume game-play by hitting 'Game On' then come back to
        marking. Or just stop now and check out the scoreboard!
      </div>
    );
    setTipsModal(true);
  };

  const handleClose = () => setTipsModal(false);

  const pauseGame = () => {
    hostAPI
      .setMode("pause")
      .then((res) => {
        gameStore.gameMode = res.mode;
      })
      .catch((err) => {
        alert(err);
      });
  };

  const adjustAnswer = (answerId, increase) => {
    authHostAPI
      .adjustScore(answerId, increase)
      .then((res) => {
        gameStore.upgradePlayers(res.players);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const markAnswer = (answerId, mark, point) => {
    hostAPI
      .markAnswer(answerId, mark, point.value)
      .then((res) => {
        gameStore.upgradePlayers(res.players);
        gameStore.updateRound(res.answer, res.markedPoint);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const exposePlayers = () => {
    setExposePlayers(!exposePlayer);
  };

  const nextQuestion = () => {
    if (gameStore.wagerMode && gameStore.round[questionNum - 1]?._id) {
      hostAPI
        .markIncorrectAnswers(gameStore.round[questionNum - 1]._id)
        .then((res) => {
          for (const answer of res.answers) {
            gameStore.updateRound(answer);
            gameStore.upgradePlayers(answer.players);
          }
          setQuestionNum(questionNum + 1);
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      setQuestionNum(questionNum + 1);
    }
  };
  const previousQuestion = () => {
    setQuestionNum(questionNum - 1);
  };
  let showPlayersName;

  const handleStopTooltip = (props) => (
    <Tooltip id="stop-btn" className="tooltip" {...props}>
      <div>
        Disable Inputs.
        <br />
        Click here to stop the game after the round is over,
        <br />
        or pause player-inputs at any time.
      </div>
    </Tooltip>
  );

  const getClassName = (point, marked) => {
    if (!point && marked) {
      return "redBg answer-btn mb-2";
    } else if (!point && !marked) {
      return "yellowBg answer-btn mb-2";
    } else if (point) {
      return "greenBg answer-btn mb-2";
    }
  };

  const getPoints = (id, answer) => {
    if (answer.wagers?.length) {
      for (const wager of answer.wagers) {
        if (wager.player === id) {
          return ` (${wager.bet})`;
        }
      }
    }
    return "";
  };

  function CustomToggle() {
    return (
      <Button
        onClick={() => setShow(true)}
        variant="primary"
        size="lg"
        eventKey="0"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          fontWeight: "600",
          backgroundColor: "#F6F8F9",
          color: "#1B3B6E",
        }}
      >
        <span>Mark Answers</span>
        <span>
          <FontAwesomeIcon icon="expand" className="expand" />
        </span>
      </Button>
    );
  }

  const [show, setShow] = useState(true);

  const closeModal = () => {
    setShow(false);
    pauseGame();
  };

  return (
    <>
      <Modal show={show} fullscreen onHide={() => closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Mark Answers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Container className="marking-section">
              {gameStore.imageMode && gameStore.roundMode === "classic" ? (
                <>
                  {images.length > 0 ? (
                    <>
                      {image ? (
                        <div className="question-image d-flex justify-content-center">
                          <img alt="Added to question" src={image} />
                        </div>
                      ) : null}
                    </>
                  ) : (
                    <div className="d-flex justify-content-center">
                      <p className=" alert alert-warning w-50 text-center">
                        No Images
                      </p>
                    </div>
                  )}
                </>
              ) : null}
              {tip}

              <br />

              <Container className="answers text-center mt-2" fluid>
                <h4>QUESTION #{questionNum}</h4>
                {currentRound.length > 0 &&
                questionNum <= currentRound.length ? (
                  <div className=" text-center">
                    <p className="mb-0">
                      <b>{currentRound[questionNum - 1].questionText}</b>
                    </p>
                    <h5>Answer: {currentRound[questionNum - 1].answerText}</h5>
                  </div>
                ) : null}
                {gameStore.adjustByQuestion && !gameStore.wagerMode ? (
                  <Select
                    className="points-select"
                    value={point}
                    isSearchable
                    onChange={setPoint}
                    options={options}
                  />
                ) : null}
                <hr />
                {gameStore.round[questionNum - 1] &&
                gameStore.round[questionNum - 1].answers.length > 0 ? (
                  gameStore.round[questionNum - 1].answers.map((answer) => (
                    <div key={answer._id} className="answer-btns">
                      <Button
                        onClick={() => markAnswer(answer._id, "point", point)}
                        variant="warning"
                        className={getClassName(answer.point, answer.marked)}
                      >
                        <h4>{answer.text}</h4>
                      </Button>

                      {gameStore.halfPoints && !gameStore.wagerMode ? (
                        <Button
                          onClick={() =>
                            markAnswer(answer._id, "halfPoint", point)
                          }
                          variant="warning"
                          size="sm"
                          className={
                            answer.halfPoint ? "greenBg ml-2" : "yellowBg ml-2"
                          }
                        >
                          1/2
                        </Button>
                      ) : null}

                      {gameStore.adjustByResponse ? (
                        <>
                          <Button
                            onClick={() => adjustAnswer(answer._id, false)}
                            variant="danger"
                            size="sm"
                            className="tiger mr-1 ml-3"
                            style={{ padding: "0.15rem 0.3rem" }}
                          >
                            -{gameStore.scoringInterval}
                          </Button>
                          <Button
                            onClick={() => adjustAnswer(answer._id, true)}
                            variant="success"
                            size="sm"
                            className="tiger"
                            style={{ padding: "0.15rem 0.3rem" }}
                          >
                            +{gameStore.scoringInterval}
                          </Button>
                        </>
                      ) : null}
                      {showPlayersName}
                      {exposePlayer ? (
                        <div className="alert alert-secondary with-dot tiger py-1 mt-1">
                          {answer.players.map((player) => (
                            <span key={player._id} className="player-name">
                              {player.name}
                              {gameStore.wagerMode &&
                                getPoints(player._id, answer)}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))
                ) : (
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon="bed" size="3x" className="bed" />
                    <br />
                    <span>Hmm..nothing here.</span>
                    <Button variant="outline-warning" onClick={handleNoAnswers}>
                      <FontAwesomeIcon icon="question-circle" />
                    </Button>
                    <br />
                    <Button variant="primary" onClick={pauseGame}>
                      Stop Marking
                    </Button>
                  </div>
                )}
              </Container>
              <br />
              {gameStore.round[questionNum - 1] &&
              gameStore.round[questionNum - 1].answers.length > 0 ? (
                <Button
                  onClick={exposePlayers}
                  variant="secondary"
                  className="float-right"
                  title="Expose Team Names"
                >
                  <FontAwesomeIcon icon="bath" className="mr-1" />
                </Button>
              ) : null}

              {questionNum !== 999 ? (
                <Button
                  onClick={nextQuestion}
                  variant="dark"
                  className="arrow right-arrow"
                >
                  <FontAwesomeIcon icon="arrow-right" />
                </Button>
              ) : null}
              {questionNum !== 1 ? (
                <Button
                  onClick={previousQuestion}
                  variant="dark"
                  className="arrow left-arrow"
                >
                  <FontAwesomeIcon icon="arrow-left" />
                </Button>
              ) : null}
            </Container>
          </>
        </Modal.Body>
      </Modal>
      <br />
      <br />

      {/* {!!gameStore.role && gameStore.role !== "pro" && (
        <AdSense key={`adsenseKey_${adsenseKey}`} />
      )} */}
    </>
  );
});

export default MarkAnswerModal;
